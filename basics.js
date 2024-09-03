console.log("Hello World")
console.log("Sum of Two Numbers")
let a = 5
var b = 9
c = a + b
console.log(c)
b = 4
{
    let a = 10
    console.log(a)
}

let fruits = ['apple', 'orange', 'mango']
console.log(fruits)
console.log(fruits[1])
fruits.push('banana')
console.log(fruits)
fruits.pop()
console.log(fruits)

let people = [
    {
        name: 'Alice',
        age: 28,
        place:{
            city: 'Wonderland',
            country:'Fairyland'
        }
    },
    {
        name: 'Bob',
        age: 24,
        place: {
            city: 'Manhattan',
            country: 'Britain'
        }
    },
    {
        name: 'Candice',
        age: 26,
        place: {
            city: 'Zimbawae',
            country: 'Africa'
        }
    }
]
console.log(people[0])
console.log(people[1].name)
people[0].age = 35
console.log(people[0])
people[0].place.city = 'Bombay'
console.log(people[0])