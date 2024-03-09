"use strict";
let user = [1, 'Titus'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let MySize = Size.Large;
console.log(MySize);
function CalculateTax(income, taxYear = 2022) {
    if (taxYear && taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
CalculateTax(10000, 2022);
//# sourceMappingURL=tupple.js.map