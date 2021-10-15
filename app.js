'use strict';

// Objects for the various Stores.
// Define variables.
const seattleStore = document.getElementById('seattleList');
const tokyoStore = document.getElementById('tokyoList');
const dubaiStore = document.getElementById('dubaiList');
const parisStore = document.getElementById('parisList');
const limaStore = document.getElementById('limaList');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Define seattleStore properties and functions.
let seattle = {
  // Properties.
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],

  // Functions.  Put comma after each closing brace of a function, except the final one.
  // Generate random numbers of customers.
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // Generate the number of cookies sold for a given (this) hour.
  getCookieSalesPerHour: function() {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);

    // Send the number of cookies sold for the hour to the array.
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    console.log(this.cookiesSoldEachHourArray);
  },

  // Render the list of cookies sold per hour to the webpage.
  renderTheList: function() {

    let pNode = document.createElement('p'); // <p> node
    pNode.textContent = seattle.name;
    seattleStore.appendChild(pNode);

    let totalCookiesSoldPerDay = 0;

    // Create a loop for each of the 14 hours.
    for(let i = 0; i < 14; i++){

      this.getCookieSalesPerHour();

      // Declare variables.
      let liNode = document.createElement('li'); // <li> node
      // let ulElement = document.getElementById('seattleList'); ** Already at the top of file.

      //liNode.textContent = hours[i] + ': ' + this.cookiesSoldEachHourArray[i] + ' cookies';
      liNode.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;

      // Use for validation purposes.
      console.log(this.cookiesSoldEachHourArray[i]);

      // Add child to existing id "seattleList".
      seattleStore.appendChild(liNode);

      totalCookiesSoldPerDay += this.cookiesSoldEachHourArray[i];

      // For the last iteration only.
      if (i === 13){

        liNode.textContent = 'Total: ' + totalCookiesSoldPerDay + ' cookies';

        seattleStore.appendChild(liNode);
      }
    }

  }
};

// Define tokyoStore properties and functions.
let tokyo = {
  // Properties.
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray: [],

  // Functions.  Put comma after each closing brace of a function, except the final one.
  // Generate random numbers of customers.
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // Generate the number of cookies sold for a given (this) hour.
  getCookieSalesPerHour: function() {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);

    // Send the number of cookies sold for the hour to the array.
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    console.log(this.cookiesSoldEachHourArray);
  },

  // Render the list of cookies sold per hour to the webpage.
  renderTheList: function() {

    let pNode = document.createElement('p'); // <p> node
    pNode.textContent = tokyo.name;
    tokyoStore.appendChild(pNode);

    let totalCookiesSoldPerDay = 0;

    // Create a loop for each of the 14 hours.
    for(let i = 0; i < 14; i++){

      this.getCookieSalesPerHour();

      // Declare variables.
      let liNode = document.createElement('li'); // <li> node

      //liNode.textContent = hours[i] + ': ' + this.cookiesSoldEachHourArray[i] + ' cookies';
      liNode.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;

      // Use for validation purposes.
      console.log(this.cookiesSoldEachHourArray[i]);

      // Add child to existing id "tokyoList".
      tokyoStore.appendChild(liNode);

      totalCookiesSoldPerDay += this.cookiesSoldEachHourArray[i];

      // For the last iteration only.
      if (i === 13){

        liNode.textContent = 'Total: ' + totalCookiesSoldPerDay + ' cookies';

        tokyoStore.appendChild(liNode);
      }
    }

  }
};

// Define dubaiStore properties and functions.
let dubai = {
  // Properties.
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray: [],

  // Functions.  Put comma after each closing brace of a function, except the final one.
  // Generate random numbers of customers.
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // Generate the number of cookies sold for a given (this) hour.
  getCookieSalesPerHour: function() {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);

    // Send the number of cookies sold for the hour to the array.
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    console.log(this.cookiesSoldEachHourArray);
  },

  // Render the list of cookies sold per hour to the webpage.
  renderTheList: function() {

    let pNode = document.createElement('p'); // <p> node
    pNode.textContent = dubai.name;
    dubaiStore.appendChild(pNode);

    let totalCookiesSoldPerDay = 0;

    // Create a loop for each of the 14 hours.
    for(let i = 0; i < 14; i++){

      this.getCookieSalesPerHour();

      // Declare variables.
      let liNode = document.createElement('li'); // <li> node

      //liNode.textContent = hours[i] + ': ' + this.cookiesSoldEachHourArray[i] + ' cookies';
      liNode.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;

      // Use for validation purposes.
      console.log(this.cookiesSoldEachHourArray[i]);

      // Add child to existing id "dubaiList".
      dubaiStore.appendChild(liNode);

      totalCookiesSoldPerDay += this.cookiesSoldEachHourArray[i];

      // For the last iteration only.
      if (i === 13){

        liNode.textContent = 'Total: ' + totalCookiesSoldPerDay + ' cookies';

        dubaiStore.appendChild(liNode);
      }
    }

  }
};

// Define parisStore properties and functions.
let paris = {
  // Properties.
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHourArray: [],

  // Functions.  Put comma after each closing brace of a function, except the final one.
  // Generate random numbers of customers.
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // Generate the number of cookies sold for a given (this) hour.
  getCookieSalesPerHour: function() {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);

    // Send the number of cookies sold for the hour to the array.
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    console.log(this.cookiesSoldEachHourArray);
  },

  // Render the list of cookies sold per hour to the webpage.
  renderTheList: function() {

    let pNode = document.createElement('p'); // <p> node
    pNode.textContent = paris.name;
    parisStore.appendChild(pNode);

    let totalCookiesSoldPerDay = 0;

    // Create a loop for each of the 14 hours.
    for(let i = 0; i < 14; i++){

      this.getCookieSalesPerHour();

      // Declare variables.
      let liNode = document.createElement('li'); // <li> node

      //liNode.textContent = hours[i] + ': ' + this.cookiesSoldEachHourArray[i] + ' cookies';
      liNode.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;

      // Use for validation purposes.
      console.log(this.cookiesSoldEachHourArray[i]);

      // Add child to existing id "parisList".
      parisStore.appendChild(liNode);

      totalCookiesSoldPerDay += this.cookiesSoldEachHourArray[i];

      // For the last iteration only.
      if (i === 13){

        liNode.textContent = 'Total: ' + totalCookiesSoldPerDay + ' cookies';

        parisStore.appendChild(liNode);
      }
    }

  }
};

// Define limaStore properties and functions.
let lima = {
  // Properties.
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHourArray: [],

  // Functions.  Put comma after each closing brace of a function, except the final one.
  // Generate random numbers of customers.
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // Generate the number of cookies sold for a given (this) hour.
  getCookieSalesPerHour: function() {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);

    // Send the number of cookies sold for the hour to the array.
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    console.log(this.cookiesSoldEachHourArray);
  },

  // Render the list of cookies sold per hour to the webpage.
  renderTheList: function() {

    let pNode = document.createElement('p'); // <p> node
    pNode.textContent = lima.name;
    limaStore.appendChild(pNode);

    let totalCookiesSoldPerDay = 0;

    // Create a loop for each of the 14 hours.
    for(let i = 0; i < 14; i++){

      this.getCookieSalesPerHour();

      // Declare variables.
      let liNode = document.createElement('li'); // <li> node

      //liNode.textContent = hours[i] + ': ' + this.cookiesSoldEachHourArray[i] + ' cookies';
      liNode.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;

      // Use for validation purposes.
      console.log(this.cookiesSoldEachHourArray[i]);

      // Add child to existing id "limaList".
      limaStore.appendChild(liNode);

      totalCookiesSoldPerDay += this.cookiesSoldEachHourArray[i];

      // For the last iteration only.
      if (i === 13){
        liNode.textContent = 'Total: ' + totalCookiesSoldPerDay + ' cookies';

        limaStore.appendChild(liNode);
      }
    }

  }
};

seattle.renderTheList();
tokyo.renderTheList();
dubai.renderTheList();
paris.renderTheList();
lima.renderTheList();
