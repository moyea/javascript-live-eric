// 1. What is the length of the contacts array?

var contacts = [];


// 2. Add the following people to the contacts array.

var jake = {
    name: 'Jake Overall',
    email: 'jake.overall@boisecodeworks.com',
    title: 'founder'
};

var matt = {
    name: 'Matt Overall',
    email: 'matt.overall@boisecodeworks.com',
    title: 'founder'
};

var tony = {
    name: 'Mark Ohnsman',
    email: 'mark@boisecodeworks.com',
    title: 'instructor'
};

var andrew = {
    name: 'Darryl Kilzer',
    email: 'darryl@boisecodeworks.com',
    title: 'instructor'
};

var tom = {
    name: 'Tom Day',
    email: 'tom@boisecodeworks.com',
    title: 'instructor'
};


// 3. Woops after adding all of those people to the same contacts list you realized you need a list just the instructors.
// create a new variable named instructors and populate it using the contacts array.

//Answer 1:
console.log('Answer 1 :=>', contacts.length)

// Answer 2:
contacts = [].concat(jake, matt, tony, andrew, tom);
console.log('Answer 2 :=>', contacts)

// Answer 3:
var instructors = contacts.filter(person => person.title === 'instructor');

console.log('Answer 3 :=>', instructors)