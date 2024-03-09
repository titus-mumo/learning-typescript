"use strict";
var _a;
let employee = {
    id: 1,
    name: 'Titus',
    retire: (date) => {
        console.log(date);
    }
};
function KgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
KgToLbs(10);
KgToLbs('10kgs');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quatity = 100;
function greet(name) {
    if (name)
        return name.toUpperCase();
    return 'Hola!';
}
console.log(greet(null));
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=objects.js.map