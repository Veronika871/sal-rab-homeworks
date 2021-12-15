

    // Задание №2.1. Рассчитать доставку

    let productsSum;
    let freeShippingMinSum;
    let shippingSum;
    let shippingPrice;
    
if (productsSum === 0 && productsSum >= freeShippingMinSum) {
console.log(shippingSum === 0);

}
else {
    console.log(shippingSum == shippingPrice);
}

    // Конец решения задания №2.1.


    return shippingSum;


function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задание №2.2. Рассчитать скидку

    let discountPrice;
    let discountMinSum = 700; 
    let discountPart = 0.1;


    if (productsSum >= discountMinSum) {
        console.log (discountSum == discountPart * productsSum);
    }
    else {
        console.log (discountSum == 0);
    }


    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине
    
    
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    
    let totalSum = productsSum;
    productsSum - discountSum;
    productsSum + shippingSum;
    let freeShipping = shippingSum == 0;


    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
