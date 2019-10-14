function addCarElement(carPrice, carName, carYear, carLitre, carKm, carImage) {
    let card = document.createElement("div");
    let imgpart = document.createElement("div");
    let cardbody = document.createElement("div");
    let img = document.createElement("img");
    let icon = document.createElement("i");
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
    span.innerText = "SALON"
    img.src = carImage;
    card.className = "card"
    imgpart.className = "img-part"
    cardbody.className = "card-body"
    icon.className = "far fa-heart"
    price.className = "price"
    model.className = "card-title"
    year.className = "year"
    litre.className = "litre"
    km.className = "km"
    span.className = "badge badge-primary"
    img.className = "card-img-top"
    characteristics.className = "aa"
    document.getElementsByClassName("container")[0].appendChild(card);
    card.appendChild(imgpart);
    card.appendChild(cardbody);
    imgpart.appendChild(img);
    imgpart.appendChild(icon);
    imgpart.appendChild(span);
    imgpart.appendChild(price);
    price.appendChild(priceText);
    cardbody.appendChild(model)
    cardbody.appendChild(characteristics);
    characteristics.appendChild(year);
    characteristics.appendChild(litre);
    characteristics.appendChild(km);
    return card;
}


let cars = {

    Car1: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car2: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car3: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car4: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car5: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car6: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car7: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car8: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car9: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car10: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car11: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
    Car12: {
        City: "Baku",
        Name: "Lamborghini",
        Model: "Urus",
        Year: "2017",
        Color: "Green",
        Type: "Sedan",
        HorsePower: "272",
        FuelType: "Benzin",
        Gear: "Arxa",
        Box: "Avtomat",
        IsNew: "Yes",
        Price: "120000$",
        Km: "20000 km",
        Litre: "6.8 L",
        Carimg: "/img/urus.jpg",
    },
}

 for (let f in cars) {
    let abc=addCarElement(cars[f].Price, cars[f].Name, cars[f].Year, cars[f].Litre, cars[f].Km, cars[f].Carimg);
    abc.addEventListener('click',function () {
        localStorage.clear();
        let z = JSON.stringify(cars[f]);
        localStorage.setItem('cardclicked', z);
        document.location = 'card.html';
})
 }

