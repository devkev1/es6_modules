const carMake = document.getElementById("car-make");
const carModel = document.getElementById("car-model");
const carYear = document.getElementById("car-year");
const removeBtn = document.getElementsByClassName("removeBtn")[0];

class Car {
    constructor(id, make, model, year) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
    } 
    info() {
        carMake.textContent = this.make;
        carModel.textContent = this.model;
        carYear.textContent = this.year;
        removeBtn.id = this.id;
    }
}

export default Car

