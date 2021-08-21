const memoryId1 = document.getElementById('memory-button-1');
const memoryId2 = document.getElementById('memory-button-2');
const storagId1 = document.getElementById('storage-button-1');
const storagId2 = document.getElementById('storage-button-2');
const storagId3 = document.getElementById('storage-button-3');


const delivery1 = document.getElementById('delivery-charge-1');
const delivery2 = document.getElementById('delivery-charge-2');

memoryId1.addEventListener('click', function () {
    const memoryText = document.getElementById('extra-memory-cost');
    memoryText.innerText = '0';
    updateTotal();
});
memoryId2.addEventListener('click', function () {
    const memoryText = document.getElementById('extra-memory-cost');
    memoryText.innerText = '180';
    updateTotal();
});

storagId1.addEventListener('click', function () {
    const storageText = document.getElementById('extra-storage-cost');
    storageText.innerText = '0';
    updateTotal();
});
storagId2.addEventListener('click', function () {
    const storageText = document.getElementById('extra-storage-cost');
    storageText.innerText = '100';
    updateTotal();
});
storagId3.addEventListener('click', function () {
    const storageText = document.getElementById('extra-storage-cost');
    storageText.innerText = '180';
    updateTotal();
});

delivery1.addEventListener('click', function () {
    const deliveryCharge = document.getElementById('total-delivery-charge');
    deliveryCharge.innerText = '0';
    updateTotal();
});
delivery2.addEventListener('click', function () {
    const deliveryCharge = document.getElementById('total-delivery-charge');
    deliveryCharge.innerText = '20';
    updateTotal();
});


//Function For update The total Price
function updateTotal() {
    debugger;
    const bestPrice = document.getElementById('best-price-total');
    const memoryPriceText = document.getElementById('extra-memory-cost');
    const storagePriceText = document.getElementById('extra-storage-cost');
    const deliveryCostText = document.getElementById('total-delivery-charge');
    const totalCostField = document.getElementById('total-cost');
    const totalAmountText = document.getElementById('total-amount');
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const memoryPrice = parseInt(memoryPriceText.innerText);
    const storagePrice = parseInt(storagePriceText.innerText);
    const deliveryTotal = parseInt(deliveryCostText.innerText);
    /*  const total = parseInt(memoryPriceText) + parseInt(storagePriceText) + parseInt(deliveryCostText); */
    const total = bestPriceTotal + memoryPrice + storagePrice + deliveryTotal
    totalCostField.innerText = total;
    totalAmountText.innerText = total;
}

//Function for discount

/* function discountFunction() {
    document.getElementById('apply-button').addEventListener('click', function () {
        const discountAmountText = document.getElementById('dicount-field');
        const discountAmount = discountAmountText.value;
        if (discountAmount.toLowerCase() == 'stevekaku') {
            const totalAmount = updateTotal() * 0.2;
            const totalCostField = document.getElementById('total-cost');
            const totalAmountText = document.getElementById('total-amount');
            totalCostField.innerText = totalAmount;
            totalAmountText.innerText = totalAmount;
        }
    });
}
 */
