// Variables
const form = document.getElementById('form')

// instatiation of Object
const html = new HTMLUI()


// Events listeners
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', function(){
        html.displaYears()
        // console.log( html.displaYears)
    })

    // ======== DOM Loaded End ---------

    form.addEventListener('submit', function(e){
        e.preventDefault()

        const make = document.getElementById('make').value
        const year = document.getElementById('year').value
        const level = document.querySelector('input[name="level"]:checked').value
        console.log(level)

        if(make === '' || year === '' || level === ''){
            console.log('Error')
            document.getElementById('make').style.borderColor ='red'
            html.displayError('!All the fields ard mandatory')
        }else{
            
            // Very important 
            const prevResult = document.querySelector('#result div');
            console.log(prevResult)
            if(prevResult != null){
                prevResult.remove()
            }

            const insurance = new Insurance(make, year, level)
            const price = insurance.calculateQuotation(insurance)

            html.showResults(price, insurance)
        }
    })



}



// Objects
function HTMLUI(){}

// all related to insurance quotation
function Insurance (make, year, level){
    this.make = make;
    this.year = year;
    this.level = level;
}

Insurance.prototype.calculateQuotation = function(insurance) {
    let price;
    console.log(insurance)

    const base = 2000;
    const make = insurance.make;
    /*
       1 - American 15%
       2- Asian 05%
       3-European 35%
    */
    switch(make){
        case '1':
            price = base * 1.15;
            break;
        case '2':
            price = base * 1.05;
            break;
        case '3':
            price = base * 1.35;
            break;
    }
    
    const year = insurance.year;

    const difference = this.getYearDifference(year)
    price = price - ((difference * 3) * price) / 100;

    const level = insurance.level;
    price = this.calculateLevel(price, level)
   
    return price
}

Insurance.prototype.calculateLevel = function(price, level){
    /* 
    Basic, increase by 30%
    Complete increase by 50%
    */
    if(level === 'basic'){
        price = price * 1.30;
    }else{
        price = price * 1.50;
    }

    return price;

}

Insurance.prototype.getYearDifference = function(year){
    return new Date().getFullYear() - year;
}

// display the latest 20 years in the select
HTMLUI.prototype.displaYears = function(){
    const max = new Date().getFullYear(),
        min = max - 20;

        const selectYears = document.getElementById('year')

        for(i = max; i>= min; i--){
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYears.appendChild(option)
            // console.log(i)

        }
}

HTMLUI.prototype.displayError = function(message){
    const div = document.createElement('div');
    div.classList = 'error';

    div.innerHTML =`
        <p>${message}</p>
    `;

    form.insertBefore(div, document.querySelector('.form-group'))

    setTimeout(()=>{
        // document.querySelector('.error').remove();

    },3000)
}

HTMLUI.prototype.showResults = function(price,insurance){
    const result = document.getElementById('result');
    const div = document.createElement('div');
    // logic
    let make = insurance.make;
    switch(make) {
        case '1':
            make = 'American';
            break
        case '2':
            make = 'Asian';
            break
        case '3':
            make = 'European';
            break
    }

    console.log(make)

    div.innerHTML =`
        <p class='header'>Summary</p>
        <p>Year: ${insurance.year}</p>
        <p class= 'level'>Level: ${insurance.level}</p>
        <p class="total">Total: $ ${price}</p>
    `;

    let loading = document.createElement('h3')
        loading.textContent = 'Loading...'
         result.appendChild(loading)
        
        setTimeout(()=>{

            result.appendChild(div)
            loading.remove()
        },3000)



    
}