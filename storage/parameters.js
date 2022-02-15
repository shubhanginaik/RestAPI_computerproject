'use strict';


const toArrayInsert = computer =>[
    +computer.id, computer.name, computer.type, computer.processor, +computer.amount
];

// returns for example: [100,'abc','laptop','x1z',23]
const toArrayUpdate = computer =>[
     computer.name, computer.type, computer.processor, +computer.amount,+computer.id
];

module.exports={toArrayInsert,toArrayUpdate}