class Person{
    constructor(name,age,occupation){
        this.name=name;
        this.age=age; 
        this.occupation=occupation;
    }

    getName(){
        console.log(this.name);
    }

    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }
}

const person1 = new Person("Justin Nabunturan",21,"Macho Dancer");

person1.getName();
person1.displayInfo();
