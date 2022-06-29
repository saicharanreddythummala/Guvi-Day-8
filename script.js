// 1) Solving problems using array functions on rest countries data.

// a. Get all the countries from Asia continent /region using Filter function.
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  data.filter((ele) => {
    if (ele["region"] == "Asia") {
      console.log(ele.name["official"]);
    }
  });
};

// b. Get all the countries with a population of less than 2 lakhs using Filter function:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  data.filter((ele) => {
    if (ele["population"] < 200000) {
      console.log(ele.name["official"]);
    }
  });
};

// c. Print the following details name, capital, flag using forEach function:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  data.forEach((element) => {
    console.log(
      `Country name: ${element["name"].official} \n capital: ${element["capital"]} \n flag: ${element["flag"]}`
    );
  });
};

// d. Print the total population of countries using reduce function:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  const population = data.map((ele) => ele.population);
  const sum = population.reduce((total, number) => total + number);
  console.log(sum);
};

// e. Print the country which uses US Dollars as currency:
var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  const countires = data.filter((ele) => {
    if (ele["currencies"][0].code == "USD") {
      return ele;
    }
  });
  console.log(countires);
};
