interface Animal {
    name: string;
    age: number;
    color?: string;
    move(): void;
}

class Cat implements Animal {
    name: string;
    age: number;
    color?: string;

    constructor(name: string, age: number, color?: string) {
        this.name = name;
        this.age = age;

        if (color !== undefined) {
            this.color = color;
        }
    }

    move(): void {
        console.log(`${this.name} walks.`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    color?: string;

    constructor(name: string, age: number, color?: string) {
        this.name = name;
        this.age = age;

        if (color !== undefined) {
            this.color = color;
        }
    }

    move(): void {
        console.log(`${this.name} flies.`);
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    color?: string;

    constructor(name: string, age: number, color?: string) {
        this.name = name;
        this.age = age;

        if (color !== undefined) {
            this.color = color;
        }
    }

    move(): void {
        console.log(`${this.name} swims.`);
    }
}

const cat = new Cat("Milo", 3, "black");
const bird = new Bird("Rio", 2, "yellow");
const fish = new Fish("Nemo", 1);

cat.move();
bird.move();
fish.move();
