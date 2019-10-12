let car = localStorage['cardclicked'];
let newkey = JSON.parse(car);
let table = document.getElementsByClassName('ch')[0]
table.className = "table"
let massive = ['Şəhər', 'Marka', 'Model', 'Buraxılış ili', 'Ban növü', 'Rəngi', 'Mühərrikin həcmi', 'Mühərrikin gücü', 'Yanacaq növü', 'Yürüş', 'Sürətlər qutusu', 'Ötürücü', 'Yeni', 'Qiymət']
for (let i in newkey) {
    let a = document.createElement("tr");
    let b = document.createElement("td");
    let c = document.createElement("td");
    b.className = "aa"
    table.appendChild(a);
    b.innerText=i;
    c.innerText = newkey[i];
    a.appendChild(b);
    a.appendChild(c);
}
