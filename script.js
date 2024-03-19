let a = document.querySelector('.result');

a.onclick = function () {
    let netice = mesafe.value / suret.value;
    document.getElementById('netice').innerHTML = `Eger siz ${haradan.value}-den ${haraya.value}-ya ${mesafe.value} km mesafeni ${suret.value} km/saat suretinde gedersinizde onda siz ${netice.toFixed(1)} saat yolu gedersiniz`;
}

let b = document.querySelector('.dollar');
b.onclick = function () {
    let netice =  `${manat.value} AZN = ${manat.value / 1.7} $`;
    document.getElementById('result2').innerHTML = netice;
}


let c = document.querySelector('.euro');
c.onclick = function () {
    let netice =  `${manat.value} AZN = ${manat.value / 1.85} euro`;
    document.getElementById('result2').innerHTML = netice;
}


let d = document.querySelector('.lira');
d.onclick = function () {
    let netice =  `${manat.value} AZN = ${manat.value / 0.053} lira`;
    document.getElementById('result2').innerHTML = netice;
}


let e = document.querySelector('.rubl');
e.onclick = function () {
    let netice =  `${manat.value} AZN = ${manat.value / 0.018} rubl`;
    document.getElementById('result2').innerHTML = netice
}