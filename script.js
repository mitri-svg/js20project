let a = document.querySelector('.result');

a.onclick = function () {
    let netice = mesafe.value / suret.value;
    document.getElementById('netice').innerHTML = `Eger siz ${haradan.value}-den ${haraya.value}-ya ${mesafe.value} km mesafeni ${suret.value} km/saat suretinde gedersinizde onda siz ${netice.toFixed(1)} saat yolu gedersiniz`;
}