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
});
memoryId2.addEventListener('click', function () {
    const memoryText = document.getElementById('extra-memory-cost');
    memoryText.innerText = '180';
});

storagId1.addEventListener('click', function () {
    const storageText = document.getElementById('extra-storage-cost');
    storageText.innerText = '0';
});
storagId2.addEventListener('click', function () {
    const storageText = document.getElementById('extra-storage-cost');
    storageText.innerText = '100';
});
storagId3.addEventListener('click', function () {
    const storageText = document.getElementById('extra-storage-cost');
    storageText.innerText = '180';
});

delivery1.addEventListener('click', function () {
    const deliveryCharge = document.getElementById('total-delivery-charge');
    deliveryCharge.innerText = '0';
});
delivery2.addEventListener('click', function () {
    const deliveryCharge = document.getElementById('total-delivery-charge');
    deliveryCharge.innerText = '20';
});