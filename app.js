'use strict';

const storeTableBody = document.querySelector('tbody');
const storeTableHeaders = document.querySelector('thead');
const storeTableFooters = document.querySelector('tfoot');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeArray = [];

// Generate the table headers.
function Headers(){

  let tr = document.createElement('tr');

  let tdEmtpy = document.createElement('td');
  tr.appendChild(tdEmtpy);

  for (let i = 0; i < 14; i++){

    let tdHeaderHours = document.createElement('td');
    tdHeaderHours.textContent = hours[i];
    tr.appendChild(tdHeaderHours);
    storeTableHeaders.appendChild(tr);

  }

  let tdLocationTotal = document.createElement('td');
  tdLocationTotal.textContent = 'Location Total';
  tr.appendChild(tdLocationTotal);

}

Headers();

function Store(name, min, max, avg){
  // Properties.
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldEachHourArray = [];

  // Generate random numbers of customers.
  this.getRandomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // Generate the number of cookies sold for a given (this) hour.
  this.getCookieSalesPerHour = function() {
    for(let i = 0; i < hours.length; i++){
      let customersThisHour = this.getRandomCustomers();
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);

      // Send the number of cookies sold for the hour to the array.
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
      // console.log(this.cookiesSoldEachHourArray);
    }
  },

  // Render the list of cookies sold per hour to the webpage.
  this.renderTheList = function() {

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    storeTableBody.appendChild(tr);

    let totalCookiesSoldPerDay = 0;

    // Create a loop for each of the 14 hours.
    for(let i = 0; i < 14; i++){

      let tdCookies = document.createElement('td');
      tdCookies.textContent = this.cookiesSoldEachHourArray[i];
      tr.appendChild(tdCookies);

      totalCookiesSoldPerDay += this.cookiesSoldEachHourArray[i];

      // For the last iteration only.
      if (i === 13){

        let tdCookiesTotal = document.createElement('td');
        tdCookiesTotal.textContent = totalCookiesSoldPerDay;
        tr.appendChild(tdCookiesTotal);
        storeTableHeaders.appendChild(tr);
      }
    }
  };

  storeArray.push(this);

  // Call the functions.
  this.getCookieSalesPerHour();
  this.renderTheList();

}

// Setup each store.
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

console.log(storeArray);

// Generate the hourly totals for all stores and place at bottom of table.
function Footers(){

  let tr = document.createElement('tr');

  let tdEmpty = document.createElement('td');
  tr.appendChild(tdEmpty);

  let hourlyTotal = 0;
  let grandTotal = 0;

  for(let i = 0; i < hours.length; i++){
    hourlyTotal = 0;
    for(let j = 0; j < storeArray.length; j++){
      hourlyTotal += storeArray[j].cookiesSoldEachHourArray[i];
    }

    grandTotal += hourlyTotal;

    let tdHourlyTotal = document.createElement('td');
    tdHourlyTotal.textContent = hourlyTotal;
    tr.appendChild(tdHourlyTotal);
  }

  let tdGrandTotal = document.createElement('td');
  tdGrandTotal.textContent = grandTotal;
  tr.appendChild(tdGrandTotal);

  storeTableFooters.appendChild(tr);
}

Footers();
