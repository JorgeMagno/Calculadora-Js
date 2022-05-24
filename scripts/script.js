let display = document.querySelector('#display');

function showDisplay(value) {
    if (value == '.' && display.value == "") {
        display.value = '0'
    }
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function result() {
    let y = eval(display.value).toFixed(2);
    display.value = y;
    if (display.value == "undefined") {
        display.value = '';
    }
}