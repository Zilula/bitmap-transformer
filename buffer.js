const Buffer = require('buffer').Buffer;
            //buffer.alloc(BUFFER SIZE, FILL)
const buf = Buffer.alloc(11, 'goodMorning');
console.log(buf);
console.log(buf.toString());



const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
console.log(smile.toString());


const thing = Buffer.from('helloWorld');
const newThing = thing.map(ele => ele + 2);

console.log('Something', newThing);
console.log('SOmething to String', newThing.toString());





