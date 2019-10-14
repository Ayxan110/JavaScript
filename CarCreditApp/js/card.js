let car = localStorage['cardclicked'];
let newkey = JSON.parse(car);
let table = document.getElementsByClassName('ch')[0]
table.className = 'table'
for (let i in newkey) {
    let a = document.createElement('tr');
    let b = document.createElement('td');
    let c = document.createElement('td');
    b.className = 'aa'
    table.appendChild(a);
    b.innerText = i;
    c.innerText = newkey[i];
    a.appendChild(b);
    a.appendChild(c);
}

let tbody = document.getElementsByClassName('months');
let creditprice = parseInt(newkey.Price);
let monthpay = document.getElementsByClassName('creditprice');
let assa = document.getElementById('initialPrice')
let initialPrice = assa.innerText = creditprice*10 /100;
let percentPrice = creditprice-initialPrice;
let img = newkey.Carimg;
document.getElementById('imgpart').appendChild(img);

for (let f in tbody) {
    if(tbody[f].innerText == 6){
        monthpay[0].innerText = (percentPrice + percentPrice*.04)/6;
    }
    else if(tbody[f].innerText == 12){
        monthpay[1].innerText = (percentPrice + percentPrice*.1)/12;
    }
    else if(tbody[f].innerText == 18){
        monthpay[2].innerText = (percentPrice + percentPrice*.14)/18;
    }
}
