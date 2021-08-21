let totalPrice = 1299;
const memoryButton1 = document.getElementById('memory-button-1');
const memoryButton2 = document.getElementById('memory-button-2');

const storageButton1 = document.getElementById('storage-button-1');
const storageButton2 = document.getElementById('storage-button-2');
const storageButton3 = document.getElementById('storage-button-3');

const deliveryCharge1 = document.getElementById('delivery-charge-1');
const deliveryCharge2 = document.getElementById('delivery-charge-2');


memoryButton1.addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostUpdate = parseInt(extraMemoryCost.innerText) + 50;
    extraMemoryCost.innerText = extraMemoryCostUpdate;
    /*  const totalPrice = document.getElementById('total-cost');
     const totalPriceAmount = parseInt(totalPrice) + extraMemoryCostUpdate;
     totalPrice.innerText = totalPriceAmount; */
    totalPrice = totalPrice + 50;
    /* const totalPriceText = document.getElementById('total-cost');
    const totalPriceAmount = parseInt(totalPrice) + totalPrice;
    totalPriceText.innerText = totalPriceAmount; */
});


memoryButton2.addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostUpdate = parseInt(extraMemoryCost) + 100;
    extraMemoryCost.innerText = extraMemoryCost;
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
function updateMemory(memoryNo) {
    const memoryTotal = document.getElementById('extra-memory-cost');
    memoryButton1.addEventListener('click', function (event) {
        if (storageNo == 1) {
            const memoryTotalAmount = parseInt(memoryTotal);
            memoryTotal.innerText = memoryTotalAmount + 50;
        }
        else if (memoryNo == 2) {
            const memoryTotalAmount = parseInt(memoryTotal);
            memoryTotal.innerText = memoryTotalAmount + 100;
        }
    })
}