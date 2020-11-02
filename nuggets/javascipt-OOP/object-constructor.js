
function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

Client.prototype.membership = function(){
    let name;
    if(this.balance >= 1000){
        name = `Status: Gold`
    }else if(this.balance >= 500){
        name = `Status: Platinum`

    }else{
        name = `Status: Normal`

    }
    return name
}

Client.prototype.deposit = function(amount){
    return this.balance += amount;
}
Client.prototype.withdraw = function(amount){
    return this.balance -= amount;

}

Client.prototype.getBalance = function(){
    return 'Your current balance is ' + this.balance;
}

Client.prototype.clientInfo = function(){
    return `Name: ${this.name} , Balance: ${this.balance}`;
}


person = new Client('Saalu', 1000);

console.log(person);
console.log(person.clientInfo())
console.log(person.membership())
//next
console.log('=====After Withdrawal====');
person.withdraw(300)
// console.log(person.getBalance())
console.log(person.clientInfo())
console.log(person.membership())



console.log('=====After Deposit====');
person.deposit(200)
// console.log(person.getBalance())
console.log(person.clientInfo())
console.log(person.membership())

//==================End Client ===========

// ============Business Constructor==========
// Inheriting properties of other constructor(Client)
function Business(name, balance, phone, category){
    Client.call(this, name, balance);
    this.phone = phone;
    this.category = category;
}

Business.prototype = Object.create(Client.prototype);
Business.prototype.constructor = Business;

Client.prototype.businesstInfo = function(){
    return `Name: ${this.name} , Balance: ${this.balance}, Phone: ${this.phone}, Category: ${this.category}`;
}

const business = new Business('DTech', 3000, 23350504674, 'Education');

business.withdraw(2000);
console.log(business.businesstInfo());
console.log(business.membership())







