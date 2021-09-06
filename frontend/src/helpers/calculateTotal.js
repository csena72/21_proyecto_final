import {formatNumber} from './formatNumer'

export const calculateTotal = (cartState) => {
    const totals = cartState.map((product) => {
        return product.item.precio * product.quantity;
      });
  
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return formatNumber(totals.reduce(reducer));
}