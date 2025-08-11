document.getElementById('cash-btn').addEventListener('click', function () {
    document.getElementById('cash-part').classList.remove('hidden');
    document.getElementById('add-part').classList.add('hidden')
})
document.getElementById('add-btn').addEventListener('click', function () {
    document.getElementById('cash-part').classList.add('hidden');
    document.getElementById('add-part').classList.remove('hidden')
})