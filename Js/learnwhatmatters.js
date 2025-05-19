//Pre-requisites in js:-

//1.Variables:-

//1.Var:- It is a functional scoped variable , it can be re-assigned and redeclared,it can be hoisted and intialized as 'undefined' and it is not recomended in modern JS.

//For example:-

function testHoisting() {
  console.log(x); //undefined
  var x = 10;
}
testHoisting();

// 2.let
// Scope: Block-scoped (only works within { })

// Hoisting: Gets hoisted but not initialized (Accessing before declaration causes ReferenceError)

// Re-declaration: Not allowed in the same scope

// Use Case: Use when variable needs to change later

//TDZ happens situation with let or const variables
//The TDZ is a situation or a time when let or const variable is hoisted and when it is actually declared in the code ,during this time, if you try to access the variable,Js throws a ReferenceError.
//This is known as TSD (Temporal Deadzone)
{
  //   console.log(a); //Cannot access 'a' before initialization

  let a = 10;

  console.log(a); //10
}

let a = 100; //100

console.log(a);

//3.const
// Scope: Block-scoped

// Hoisting: Same as let (temporal dead zone applies)

// Re-declaration: Not allowed

// Re-assignment: Not allowed

// Use Case: Use when value should not change (e.g., constants, config objects)

//⚠️ Note: const means you can't reassign the variable, but you can still mutate objects or arrays.

const money = "Rs1200";

// money = 'Rs1500'; // It cannot be reassigned.

console.log(money);

const obj = {
  name: "Yash",
};

console.log(obj); //Yash
//It can mutate the objects or arrays:-

obj.name = "Dandnaik";

console.log(obj); //{ name: 'Dandnaik' }
