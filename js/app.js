const memoryId1 = document.getElementById('memory-button-1');
const memoryId2 = document.getElementById('memory-button-2');
const storagId1 = document.getElementById('storage-button-1');
const storagId2 = document.getElementById('storage-button-2');
const storagId3 = document.getElementById('storage-button-3');


const delivery1 = document.getElementById('delivery-charge-1');
const delivery2 = document.getElementById('delivery-charge-2');

//Function for updating Total


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

function updateTotal() {
    debugger;
    const bestPrice = document.getElementById('best-price-total');
    const memoryPriceText = document.getElementById('extra-memory-cost');
    const storagePriceText = document.getElementById('extra-storage-cost');
    const deliveryCostText = document.getElementById('total-delivery-charge');
    const totalCostField = document.getElementById('total-cost');
    const bestPriceTotal = parseInt(bestPrice.innerText);
    const memoryPrice = parseInt(memoryPriceText.innerText);
    const storagePrice = parseInt(storagePriceText.innerText);
    const deliveryTotal = parseInt(deliveryCostText.innerText);
    /*  const total = parseInt(memoryPriceText) + parseInt(storagePriceText) + parseInt(deliveryCostText); */
    const total = bestPriceTotal + memoryPrice + storagePrice + deliveryTotal
    totalCostField.innerText = total;
}