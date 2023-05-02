//!INHERİTANCE (MİRAS ALMA) KAVRAMI


//this

//!Inheritance ile hayatımıza giren kelimeler.
//super : Üst sınıfı gösterir.
//super()


class Person {

    constructor(firstName , lastName , salary){
        this.firstName  = firstName;
        this.lastName=lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName , this.lastName,this.salary)
    }
  
}


class Student extends Person{
    
    constructor(firstName , lastName, salary){
        super(firstName,lastName,salary);
    }

    writeInfo(){
        super.writeInfo();
    }
    
}

class Engineer extends Person{
    constructor(firstName , lastName,salary){
        super(firstName,lastName,salary);
    }
    writeInfo(){
        super.writeInfo();
    }
}




const student1 = new Student("Enes","Bayram",10000);
const engineer1 = new Engineer("Aysun","Meral", 14000);

student1.writeInfo();
engineer1.writeInfo();
