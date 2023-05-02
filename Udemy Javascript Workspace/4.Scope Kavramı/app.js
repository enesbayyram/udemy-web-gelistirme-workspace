// Var - Let - Const 


/*
    ------------- SCOPE (KAPSAM) -------------

    -> Global Scope : heryerden erişebilirsin.
    -> Function Scope
    -> Block Scope
*/

// var degiskenIsmi = 10;

// console.log(degiskenIsmi);

 // global scope 
//sen buna her yerden erişebilirsin.

// var a = 5;

// if(true){
    
// }
// function method1(){
//     console.log(a);
// }


// method1();

// var b= 12; //global scope 

// function method1(){
//     var sayi= 10;
//     console.log(b);
//     console.log(sayi);
// }



// method1();


function method1(){
    var a=5; // function scope
    if(true){
       var b=10; // block scope
    }
    while(true){

    }
    for(let i =0 ; i<=10; i++){

    }

    
}

// console.log(a);

method1();


