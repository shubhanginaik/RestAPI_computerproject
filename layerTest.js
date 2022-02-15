'use strict';

const Datastorage = require('./storage/dataStorageLayer');

const storage=new Datastorage();

storage.getAll().then(console.log).catch(console.log);

// storage.get(1).then(console.log).catch(console.log);
// storage.get(2).then(console.log).catch(console.log);
// storage.get(10).then(console.log).catch(console.log);
// storage.get().then(console.log).catch(console.log);

const newComp={
    id:100,
    name:"Beast IX",
    type:"server",
    processor:"selenium",
    amount:10
}

storage.insert(newComp).then(console.log).catch(console.log);

//storage.remove(100).then(console.log).catch(console.log);
//storage.getAll().then(console.log).catch(console.log);
//storage.update(100,newComp).then(console.log).catch(console.log)
