'use strict';

(function(){
    let method='GET';
    let urifield;
    let jsonarea;
    let messagearea;
    document.addEventListener('DOMContentLoaded',init);

    function init(){
        urifield = document.getElementById('urifield');
        jsonarea = document.getElementById('jsonarea');
        messagearea = document.getElementById('messagearea');

        document.getElementById('submit')
        .addEventListener('click',send());

        document.getElementById('methods')
        .addEventListener('change',choose());

        clearSelections();
        urifield.value='http://localhost:4000/api/';
    }

    function clearSelections(){
        messagearea.textContent='';
        method='GET';
        document.getElementById('get').checked=true;
    
    }

    function choose(e){
        messagearea.textContent='';
        method=e.target.value;
    }

    function showMessage(data){
        messagearea.textContent= JSON.stringify(data,null,4);

    }

   async function send(){
    let options ={
        method:method,
        mode:'cors',
        headers:{'Content-Type':'application/json'}
    };

    if(method === 'PUT' || method === 'POST'){
        options.body=jsonarea.value;
    }

    try{
        const data = await fetch(urifield.value,options);
        const result = await data.json();
        showMessage(result);

    }
    catch(err){
        showMessage({message:err.message,type:'error'});
    }
    }
    

})();