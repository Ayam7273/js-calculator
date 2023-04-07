
var val = document.getElementById("displayValue");

function AT_add(v) {
    val.value += v;
}

function exe() {
    val.value = eval(val.value)
}

function cancel() {
    val.value = val.value .substr(0, val.value.length - 1)
}

function cls() {
    val.value = "";
}