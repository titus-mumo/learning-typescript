//tuples
let user: [number, string] = [1, 'Titus'];

//enums
//PascalCase -> for enums

enum Size {Small = 1, Medium, Large}

let MySize: Size = Size.Large;

console.log(MySize)

//functions -> no unused locals, no unused parameters, no implicit returns

function CalculateTax(income: number, taxYear = 2022): number{
    if (taxYear && taxYear < 2022)
        return income * 1.2;
    return income * 1.3
}

CalculateTax(10_000, 2022)
