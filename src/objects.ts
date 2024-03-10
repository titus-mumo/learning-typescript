//type aliase

type Employee = {
    readonly id: number, 
    name:string,
    retire: (date: Date) => void 

}

let employee : Employee = {
    id: 1, 
    name:'Titus',
    retire: (date:Date) => {
        console.log(date);
    }
};


//Advanced Types -> Type aliases, unions and intersections, type narrowing,
//nullable types, the unknown types, the never type

//DRY -> Don't Repeat Yourself

//union type

function KgToLbs(weight: number | string): number {

    //narrowing
    if(typeof weight === 'number'){
        return weight * 2.2
    }else{
        return parseInt(weight) * 2.2
    }
}

KgToLbs(10)
KgToLbs('10kgs')

//intersections
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//literal types
//Literal (exact, specific)
type Quantity = 50 | 100;
let quatity: Quantity =  100

//Nullable types
function greet(name: string | null){
    if(name)
        return name.toUpperCase()
    return 'Hola!'
}

console.log(greet(null))

//Optional Chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0? null : {birthday: new Date()};
}


//optional property access operator
let customer = getCustomer(1)
console.log(customer?.birthday?.getFullYear())

//Optional element access operator
//customers?.[0]

//Optional call
let log: any = null;
log?.('a');

function getValue(myVal: number): boolean{
    if(myVal> 5)
        return true
    return false
}

const getHello = (s:string):string => {
    return s
}
