"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    let total = discount ? price - (price * discount) / 100 : price;
    if (isInstallment) {
        const _months = Math.floor(months ?? 0);
        total = _months > 0 ? total / _months : total;
    }
    console.log(total > 0 ? total : 0);
    return total > 0 ? total : 0;
};
totalPrice({ price: 100_000, discount: 25, isInstallment: true, months: 12 });
totalPrice({ price: 100_000, discount: 0, isInstallment: false, months: 0.2 });
totalPrice({ price: 100_000, discount: 0, isInstallment: true, months: 0.2 });
totalPrice({ price: 100_000, discount: 0, isInstallment: true, months: 12 });
totalPrice({ price: 100_000, months: 12 });
totalPrice({ price: 100_000 });
totalPrice({ price: 100_000, discount: 100_000_000, isInstallment: true, months: 12 });
totalPrice({ price: 100_000, discount: 99, isInstallment: true, months: 1 });
//# sourceMappingURL=app.js.map