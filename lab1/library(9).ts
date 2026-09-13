interface LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public pages: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Magazine implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class DVD implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public duration: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(
            (item: LibraryItem) => item.name === name
        );
    }

    showAvailableItems(): void {
        console.log("Available items:");

        for (const item of this.items) {
            if (!item.isBorrowed) {
                console.log(`${item.name} — ${item.author}`);
            }
        }
    }
}

const library = new Library();

const book = new Book("Harry Potter", "J.K. Rowling", 350);
const magazine = new Magazine("National Geographic", "Various Authors", 125);
const dvd = new DVD("The Lion King", "Roger Allers", 88);

library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

library.showAvailableItems();

console.log("\nBorrowing Harry Potter...");
book.borrow();

console.log("\nAvailable items after borrowing:");
library.showAvailableItems();

const foundItem = library.findItemByName("National Geographic");

if (foundItem) {
    console.log(`\nFound item: ${foundItem.name}`);
}