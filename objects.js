// 1. Using dot and bracket notation, modify the existing object values to replace the information with your own

var me = {
    'name': 'Jake Overall',
    'age': 29,
    'hair color': 'brown'
};


// 2. Iterate over the object to console.log the property or key names

me.name = 'Eric'
me.age = 32
me['hair color'] = 'black'

console.log('Answer 1 :=>')
console.log(me)

console.log('Answer 2 :=>')
Object.keys(me).map(k=>console.log(k))