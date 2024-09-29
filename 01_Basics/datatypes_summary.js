//  Primitive types - value types
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

// always gives unique value even if assingned with same parameters
const id = Symbol('123')
const anotherId = Symbol('123')
//* console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Non primitive - reference types
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

// types of primitive and non primitive data types
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object 