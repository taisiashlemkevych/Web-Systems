function calculateIceCreamPrice(): void {
    const size: string = prompt("Оберіть розмір: small або large") ?? "";

    let price: number;

    if (size === "small") {
        price = 10;
    } else if (size === "large") {
        price = 25;
    } else {
        console.log("Невірно вибраний розмір.");
        return;
    }

    const toppingsInput: string = prompt(
        "Оберіть начинку: chocolate, caramel, berries (можна декілька через кому)"
    ) ?? "";

    const toppings: string[] = toppingsInput
        .split(",")
        .map((topping: string) => topping.trim().toLowerCase());

    for (const topping of toppings) {
        if (topping === "chocolate") {
            price += 5;
        } else if (topping === "caramel") {
            price += 6;
        } else if (topping === "berries") {
            price += 10;
        } else {
            console.log(`Невідома начинка: ${topping}`);
            return;
        }
    }

    const marshmallow: string = prompt(
        "Додати маршмелоу? yes/no"
    ) ?? "no";

    if (marshmallow.toLowerCase() === "yes") {
        price += 5;
    }

    console.log(`Вартість морозива: ${price} грн`);
}

calculateIceCreamPrice();