interface IPriceData {
    price: number;
    discount?: number;
    isInstallment?: boolean;
    months?: number;
}
type TTotalPriceFn = (data: IPriceData) => number;
declare const totalPrice: TTotalPriceFn;
