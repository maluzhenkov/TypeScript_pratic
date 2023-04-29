interface IPriceData {
  price: number;
  discount?: number;
  isInstallment?: boolean;
  months?: number;
}

type TTotalPriceFn = (data: IPriceData) => number;

const totalPrice: TTotalPriceFn = ({ price, discount, isInstallment, months }) => {
  let total = discount ? price - (price * discount) / 100 : price;

  if (isInstallment) {
    const _months = Math.floor(months ?? 0);

    total = _months > 0 ? total / _months : total;
  }

  return total > 0 ? total : 0;
};

totalPrice({ price: 100_000, discount: 25, isInstallment: true, months: 12 }); // 6250
totalPrice({ price: 100_000, discount: 0, isInstallment: false, months: 0.2 }); //100_000
totalPrice({ price: 100_000, discount: 0, isInstallment: true, months: 0.2 }); //100_000
totalPrice({ price: 100_000, discount: 0, isInstallment: true, months: 12 }); //8333.3
totalPrice({ price: 100_000, months: 12 }); //100_000
totalPrice({ price: 100_000 }); //100_000
totalPrice({ price: 100_000, discount: 100_000_000, isInstallment: true, months: 12 }); //0
totalPrice({ price: 100_000, discount: 99, isInstallment: true, months: 1 }); //1_000
