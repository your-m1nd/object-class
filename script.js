//Задание 1

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
		this.rate = rate;
		this.days = days;
    }
    getSalary(days, rate) {
        return this.rate * this.days;
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Задание 2 
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

//создаем классы
class Transport {
    constructor (type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo() {
        return {
        type: this.type,
        brand: this.brand,
        price: this.price,
        }
    }

    getType() {
      return this.type
    }

    getPrice() {
      return this.price
    }

    getBrand() {
      return this.brand
    }

    getImg() {
      return this.image
    }
}

//делаем наследование
class Car extends Transport {
constructor (type, price, brand, image, doors) {
super (type, price, brand, image),
this.doors = doors;
    }

    getDoorsCount() {
      return this.doors;
    }
}

class Bike extends Transport {
    constructor (type, price, brand, image, maxSpeed) {
    super (type, price, brand, image);
    this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
      return this.maxSpeed;
    }
}

//массивы машин и мотоциклов

let carsArray = data
.filter(({type}) => type === 'car')
.map(({type, price, brand, image, doors}) => new Car(type, price, brand, image, doors));
console.log(carsArray);

let bikesArray = data
.filter(({type}) => type === 'bike')
.map(({type, price, brand, image, maxSpeed}) => new Bike(type, price, brand, image, maxSpeed));
console.log(bikesArray);

//для машин
let carInfo = document.getElementById('cars');
let liCollection1 = document.createElement('li'); 

//отображаем машины на странице

function makeCars (car) {
  carInfo.appendChild(liCollection1);

  let carTitle = document.createElement('h2');
  carTitle.innerText = car.getInfo().brand;
  carInfo.appendChild(carTitle);

  let carImage = document.createElement('img');
  carImage.setAttribute('src', car.getImg());
  carInfo.appendChild(carImage);

  let carDoors = document.createElement('p');
  carDoors.innerText = `Количество дверей: ${car.getDoorsCount()}`;
  carInfo.appendChild(carDoors);

  let carPrice = document.createElement('p');
  carPrice.innerText = `Стоимость: ${car.getPrice()} руб.`;
  carInfo.appendChild(carPrice);
}

//для мотоциклов

let bikeInfo = document.getElementById('bikes');
let liCollection2 = document.createElement('li');

//отображаем мотоциклы на странице

function makeBikes (bike) {

  bikeInfo.appendChild(liCollection2);

  let bikeTitle = document.createElement('h2');
  bikeTitle.innerText = bike.getInfo().brand;
  bikeInfo.appendChild(bikeTitle);

  let bikeImage = document.createElement('img');
  bikeImage.setAttribute('src', bike.getImg());
  bikeInfo.appendChild(bikeImage);

  let bikeSpeed = document.createElement('p');
  bikeSpeed.innerText = `Максимальная скорость: ${bike.getMaxSpeed()} км/ч`;
  bikeInfo.appendChild(bikeSpeed);

  let bikePrice = document.createElement('p');
  bikePrice.innerText = `Стоимость: ${bike.getPrice()} руб.`;
  bikeInfo.appendChild(bikePrice);
}

carsArray.forEach((car) => makeCars (car));

bikesArray.forEach((bike) => makeBikes (bike));