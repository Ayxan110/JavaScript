function addCarElement(carPrice, carName, carYear, carLitre, carKm, carImage) {
    let card = document.createElement("div");
    let imgpart = document.createElement("div");
    let cardbody = document.createElement("div");
    let img = document.createElement("img");
    //let icon = document.createElement("i");
    let span = document.createElement("span");
    let price = document.createElement("div");
    let priceText = document.createElement("p");
    priceText.innerText = carPrice;
    let model = document.createElement("h5");
    model.innerText = carName;
    let characteristics = document.createElement("ul");
    let year = document.createElement("li");
    let litre = document.createElement("li");
    let km = document.createElement("li");
    year.innerText = carYear;
    litre.innerText = carLitre;
    km.innerText = carKm;
    //span.innerText = "SALON"
    img.src = carImage;
    card.className = "card"
    imgpart.className = "img-part"
    cardbody.className = "card-body"
    //icon.className = "far fa-heart"
    price.className = "price"
    model.className = "card-title"
    year.className = "year"
    litre.className = "litre"
    km.className = "km"
    //span.className = "badge badge-primary"
    img.className = "card-img-top"
    characteristics.className = "aa"
    document.getElementsByClassName("container")[0].appendChild(card);
    card.appendChild(imgpart);
    card.appendChild(cardbody);
    imgpart.appendChild(img);
    //imgpart.appendChild(icon);
    //imgpart.appendChild(span);
    imgpart.appendChild(price);
    price.appendChild(priceText);
    cardbody.appendChild(model)
    cardbody.appendChild(characteristics);
    characteristics.appendChild(year);
    characteristics.appendChild(litre);
    characteristics.appendChild(km);
}


let cars = [

    Car1 = {
        name: "Lamborghini Urus",
        price: "120000$",
        year: "2017",
        km: "20000 km",
        litre: "6.8 L",
        carimg: "lamborghini-urus-8_1.jpg"
    },
    Car2 = {
        name: "Mercedes AMG",
        price: "32000$",
        year: "2010",
        km: "20000 km",
        litre: "4.8 L",
        carimg: "2018-mercedes-amg-gt-c-gt-s-120-1559582335.jpg"
    },
    Car3 = {
        name: "Cadillac",
        price: "110000$",
        year: "2019",
        km: "10000 km",
        litre: "7.8 L",
        carimg: "1d9b9a8e898f49f3ada242f552b4fbec.jpg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
    Car4 = {
        name: "Mercedes",
        price: "68000$",
        year: "2014",
        km: "20000 km",
        litre: "5.6 L",
        carimg: "image.MQ6.8.20190722182858.jpeg"
    },
]

for (let f in cars) {
    addCarElement(cars[f].price, cars[f].name, cars[f].year, cars[f].litre, cars[f].km, cars[f].carimg);
    if (f>=11 && f % 11 == 0) {
        console.log("AWW YEAHH");
    }
}







{/* <ul class="pagination">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
</ul> */}