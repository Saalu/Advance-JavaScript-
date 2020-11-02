class Client{

    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }


    membership(){
        let name;
        if(this.balance >=1000){
            name = 'Status: Gold';
        }else if(this.balance >= 500){
            name = 'Status: Silver';
        }else if(this.balance >= 300){
            name = 'Status: Bronze';
        }else{
            name = 'Status: Normal';
        }
        return name;
    }

    clientInfo(){
        return `Name: ${this.name}, Balance: ${this.balance}`
    }

    // static method doesn't require instantiation
    static welcome(){
        return 'Welcome to your Bank'
    }
    
}

// Inherit the constructor - properties of the class(Client)
class Business extends Client{
    constructor(name, balance,phone, category){
        // access Client constructor properties
        super(name, balance)
        this.phone = phone;
        this.category = category;
    }

    clientInfo(){
        return `Name: ${this.name}, Balance: ${this.balance}, 
        Phone: ${this.phone}, Category: ${this.category}`

    }
}

const business  = new Business('Madarasah', '300000', 2335550485848, 'Education')

console.log(business);
console.log(business.clientInfo());
console.log(business.membership())

console.log("=====Busisness End=====")
// Instantiation
const person = new Client('Freddy', 800);

console.log(person);
console.log(Client.welcome())
console.log(person.clientInfo())
console.log(person.membership())