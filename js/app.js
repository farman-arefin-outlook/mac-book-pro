
const memoryButton1 = document.getElementById('memory-button-1');
const memoryButton2 = document.getElementById('memory-button-2');


const storageButton1 = document.getElementById('storage-button-1');
const storageButton2 = document.getElementById('storage-button-2');
const storageButton3 = document.getElementById('storage-button-3');

const deliveryCharge1 = document.getElementById('delivery-charge-1');
const deliveryCharge2 = document.getElementById('delivery-charge-2');

let totalPrice = 1299;

function updateMemoryCost() {
    debugger;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    memoryButton1.addEventListener('click', function () {
        const extraMemoryCostUpdate = parseInt(extraMemoryCost) + 50;
        extraMemoryCost.innerText = extraMemoryCostUpdate;
        totalPrice = totalPrice + extraMemoryCostUpdate;
    });
}

updateMemoryCost();
