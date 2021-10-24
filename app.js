'use strict';

const storeTableBody = document.querySelector('tbody');
const storeTableHeaders = document.querySelector('thead');
const storeTableFooters = document.querySelector('tfoot');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeArray = [];
let newLocationData = document.getElementById('newLocationData');

// Generate the table headers.
function Headers(){

  let tr = document.createElement('tr');

  let tdEmtpy = document.createElement('td');
  tr.appendChild(tdEmtpy);

  for (let i = 0; i < 14; i++){

    let tdHeaderHours = document.createElement('td');
    tdHeaderHours.textContent = hours[i];
    tr.appendChild(tdHeaderHours);
    if(storeTableHeaders !== null){
      storeTableHeaders.appendChild(tr);
    }
  }

  let tdLocationTotal = document.createElement('td');
  tdLocationTotal.textContent = 'Location Total';
  tr.appendChild(tdLocationTotal);

}

Headers();


function Store(name, min, max, avg, address, hoursOpen, contactInfo){
  // Properties.
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldEachHourArray = [];
  this.address = address;
  this.hoursOpen = hoursOpen;
  this.contactInfo = contactInfo;

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
  this.renderStoreData = function() {

    const salesDataTable = document.getElementById('salesData');

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    if(storeTableBody !== null){
      storeTableBody.appendChild(tr);
    }

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
        if(storeTableHeaders !== null){
          storeTableHeaders.appendChild(tr);
        }
      }
    }
  },

  // Start of new function called renderLocations.
  this.renderLocations = function() {

    // 1. Loop through store array.
    // While looping, create a row. (done)
    // After row creation, create table data item. (done)
    // Assign content to table data items for each property (address, manager, phone) we want to display in the page. (done)
    // Appened table data to row. (done)
    // Append row to table. (done)

    console.log('Function running');

    const locationsTable = document.getElementById('locations');

    let location = document.createElement('tr');
    let address = document.createElement('td');
    let hoursOpen = document.createElement('td');
    let contactInfo = document.createElement('td');

    address.textContent = this.address;
    hoursOpen.textContent = this.hoursOpen;
    contactInfo.textContent = this.contactInfo;

    location.appendChild(address);
    location.appendChild(hoursOpen);
    location.appendChild(contactInfo);

    if(locationsTable !== null){
      locationsTable.appendChild(location);
    }
  },

  storeArray.push(this);

  // Call the functions.
  this.getCookieSalesPerHour();
  this.renderStoreData();
  this.renderLocations();
}

// Setup each store.
let seattle = new Store('Seattle', 23, 65, 6.3, '123 Pike St. Seattle, WA  98121', '6am - 7pm', 'James Smith 206-123-4567');
let tokyo = new Store('Tokyo', 3, 24, 1.2, '1-4-1, Nihmbashimuromachi, Chuo-ku, Tokyo, Japan', '6am - 7pm', 'Mikki Kobayashi 03-3211-4111');
let dubai = new Store('Dubai', 11, 38, 3.7, '1 PVV Level 1, Mercato Mall, Jumeriah Beach Road, Dubai', '6am - 7pm', 'Mohammed Khalifa +971 4 230752');
let paris = new Store('Paris', 20, 38, 2.3, '278 Avenue Daumesnil, Paris, France', '6am - 7pm', 'Stephan Jaques');
let lima = new Store('Lima', 2, 16, 4.6, 'San Borja Sur 541, San Borja 15036, Peru', '6am - 7pm', 'Miguel Torres +51 936 895 422');

console.log(storeArray);

function handleSubmit(event){
  event.preventDefault();

  let newStoreCity = event.target.locationCity.value;
  let customerMin = parseInt(event.target.minCustomers.value);
  let customerMax = parseInt(event.target.maxCustomers.value);
  let boughtAvg = parseInt(event.target.avgBought.value);

  let newStore = new Store(newStoreCity, customerMin, customerMax, boughtAvg);

  // Clear hourly totals.
  document.getElementById('rowTotal').remove();

  // Re-render hourly totals.
  Footers();

  // Clear form values.
  document.getElementById('locationCity').value = '';
  document.getElementById('minCustomers').value = '';
  document.getElementById('maxCustomers').value = '';
  document.getElementById('avgBought').value = '';
}

// Generate the hourly totals for all stores and place at bottom of table.
function Footers(){

  let tr = document.createElement('tr');

  tr.id = "rowTotal";

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

  if(storeTableFooters !== null){
    storeTableFooters.appendChild(tr);
  }
}

Footers();

newLocationData.addEventListener('submit', handleSubmit);
