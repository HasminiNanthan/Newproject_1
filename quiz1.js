let message = "benr"                 //str
//console.log(message, typeof message)

message=123                         //number
//console.log(message, typeof message)

//let str = "1"
//let num = 1

//let total = parseInt(str) + num          //interger number
//console.log(total, typeof total)

let str = "1.23"
let num = 1

let total = parseFloat(str) + num        //decimal number
console.log(total, typeof total)

let data=["benr",3533,true]     //array

console.log(data[0])          
console.log(data[1])
console.log(data[2])
console.log(data[3])                  //undefined in array

let user ={                                  //object
    name: "Hasmini", 
    age: 21,
    faculty: "FKEKK"
}
// console.log(user.name)
// console.log(user.age)
// console.log(user.faculty)

let messages =[
    {name:"user1",date:"1/4/2023",msg:"good video",like:1000},
    {name:"user2",date:"2/4/2023",msg:" verygood video",like:3000},
]
console.log(messages[1].msg)         //>>very good video