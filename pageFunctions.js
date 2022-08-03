function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}
function hideCardInf() {
    document.getElementById('card-info-box').style.display = 'none';
}
function showCardInf() {
    document.getElementById('card-info-box').style.display = 'block';
}

function hideHome() {
    document.getElementById('home-address').style.display = 'none';
}
function showHome() {
    document.getElementById('home-address').style.display = 'block';
}

function hideOffice() {
    document.getElementById('office-address').style.display = 'none';
}
function showOffice() {
    document.getElementById('office-address').style.display = 'block';
}
function clearForm() {
    document.getElementById('office-address').style.display = 'none';
    document.getElementById('card-info-box').style.display = 'none';
    document.getElementById('home-address').style.display = 'none';
    document.getElementById('courierOffice').checked = false;
    document.getElementById('byCourier').checked = false;
    document.getElementById('byCard').checked = false;
    document.getElementById('courierOfficeP').checked = false;
    document.getElementById('count').value = '1';
    document.getElementById('name').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('courierOffice').value = '';
    document.getElementById('byCourier').value = '';
    document.getElementById('chName').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.getElementById('code').value = '';

}