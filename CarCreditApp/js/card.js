let car = localStorage['cardclicked'];
let newkey = JSON.parse(car);

let page = document.getElementById('page');

page.innerText=newkey.price;