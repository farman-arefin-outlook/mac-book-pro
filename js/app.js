
const memoryButton1 = document.getElementById('memory-button-1');
const memoryButton2 = document.getElementById('memory-button-2');


const storageButton1 = document.getElementById('storage-button-1');
const storageButton2 = document.getElementById('storage-button-2');
const storageButton3 = document.getElementById('storage-button-3');

const deliveryCharge1 = document.getElementById('delivery-charge-1');
const deliveryCharge2 = document.getElementById('delivery-charge-2');

let totalPrice = 1299;
const memoryExtraPrice = 50;
memoryButton1.addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostUpdate = parseInt(extraMemoryCost) + parseInt(memoryExtraPrice);
    extraMemoryCost.innerText = extraMemoryCostUpdate;
});
memoryButton2.addEventListener('click', function () {
    console.log("memory button 2 clicked");
});

storageButton1.addEventListener('click', function () {
    console.log("storage button 1 clicked");
});

storageButton2.addEventListener('click', function () {
    console.log("storage button 2 clicked");
});
storageButton3.addEventListener('click', function () {
    console.log("storage button 3 clicked");
});
deliveryCharge1.addEventListener('click', function () {
    console.log("delivery button 1 clicked");
});
deliveryCharge2.addEventListener('click', function () {
    console.log("delivery button 2 clicked");
});
/* function updateMemoryCost() {
    debugger;
    memoryButton1.addEventListener('click', function () {
        const extraMemoryCost = document.getElementById('extra-memory-cost');
        const extraMemoryCostUpdate = parseInt(extraMemoryCost) + 50;
        extraMemoryCost.innerText = extraMemoryCostUpdate;
        totalPrice = totalPrice + extraMemoryCostUpdate;
    });
}

updateMemoryCost();
 */