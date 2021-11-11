import Car from "./car"

const make = document.getElementById("makeInput");
const model = document.getElementById("modelInput");
const year = document.getElementById("yearInput");
const ul = document.getElementById("ul");

const carMake = document.getElementById("car-make");
const carModel = document.getElementById("car-model");
const carYear = document.getElementById("car-year");

class WishList {
    constructor(){
        this.cars = []
        this.nextid = 1;
    }
    add() {
        let car = new Car (this.nextid++, make.value, model.value, year.value)
        this.cars.push(car) 
        let li = document.createElement("li")
        li.textContent = make.value
        li.id = car.id
        li.addEventListener("click", () => car.info());
        ul.appendChild(li);
    } 
    remove(id) {
        this.cars = this.cars.filter((car) => {
            if (car.id == id) {
                return false;
            } else {
                return true;
            }
        })
        carMake.textContent = "";
        carModel.textContent = "";
        carYear.textContent = "";
        let li = document.getElementById(id);
        ul.removeChild(li);
    }
}

export default WishList
