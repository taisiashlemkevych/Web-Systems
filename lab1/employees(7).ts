interface Payable {
    pay(): void;
}

abstract class Employee {
    constructor(
        protected name: string,
        protected age: number,
        protected salary: number
    ) {}

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void {
        console.log(`${this.name} receives a salary of ${this.salary} грн.`);
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`${this.name} receives a salary of ${this.salary} грн.`);
    }
}

const employees: Employee[] = [
    new Developer("Taisiia", 20, 30000),
    new Developer("Anna", 25, 35000),
    new Manager("John", 35, 50000),
    new Manager("Kate", 40, 60000)
];

let totalAnnualBonus: number = 0;

for (const employee of employees) {
    totalAnnualBonus += employee.getAnnualBonus();

    if (employee instanceof Developer || employee instanceof Manager) {
        employee.pay();
    }
}

console.log(`Total annual bonuses: ${totalAnnualBonus} грн`);