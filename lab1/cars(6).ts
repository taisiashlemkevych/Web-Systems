abstract class Car {
    protected brand: string;
    private year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    protected getYear(): number {
        return this.year;
    }

    abstract describe(): void;
}

class BMW extends Car {
    public model: string;
    private engine: string;

    constructor(model: string, year: number, engine: string) {
        super("BMW", year);
        this.model = model;
        this.engine = engine;
    }

    describe(): void {
        console.log(
            `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Engine: ${this.engine}`
        );
    }
}

class Toyota extends Car {
    public model: string;
    private fuelType: string;

    constructor(model: string, year: number, fuelType: string) {
        super("Toyota", year);
        this.model = model;
        this.fuelType = fuelType;
    }

    describe(): void {
        console.log(
            `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Fuel: ${this.fuelType}`
        );
    }
}

class Audi extends Car {
    public model: string;
    private transmission: string;

    constructor(model: string, year: number, transmission: string) {
        super("Audi", year);
        this.model = model;
        this.transmission = transmission;
    }

    describe(): void {
        console.log(
            `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.getYear()}, Transmission: ${this.transmission}`
        );
    }
}

const bmw1 = new BMW("3 Series", 2022, "Petrol");
const bmw2 = new BMW("X5", 2023, "Diesel");

const toyota1 = new Toyota("Camry", 2021, "Petrol");
const toyota2 = new Toyota("Prius", 2022, "Hybrid");

const audi1 = new Audi("A4", 2020, "Automatic");
const audi2 = new Audi("Q7", 2023, "Automatic");

bmw1.describe();
bmw2.describe();

toyota1.describe();
toyota2.describe();

audi1.describe();
audi2.describe();