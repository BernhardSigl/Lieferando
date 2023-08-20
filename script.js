//
// templates
//
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}
//
// burger menu
//
function closeBurgerMenu() {
    document.getElementById('burgerMenuId').classList.add('burgerMenu');
    document.getElementById('offClickBurgerMenu').classList.add('offClickBurgerMenu');
}

function showBurgerMenu() {
    document.getElementById('burgerMenuId').classList.remove('burgerMenu');
    document.getElementById('offClickBurgerMenu').classList.remove('offClickBurgerMenu');
}

//
// show more text
//
function showMoreText() {
    let dots = document.getElementById("dotsId");
    let showMoreText = document.getElementById("showMoreTextId");
    let showMoreTextLink = document.getElementById("showMoreTextLinkId");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        showMoreTextLink.innerHTML = "Weiterlesen";
        showMoreText.style.display = "none";
    } else {
        dots.style.display = "none";
        showMoreTextLink.innerHTML = "Weniger anzeigen";
        showMoreText.style.display = "inline";
    }
}

//
// json
//
let mealNamesBasket = [];
let mealPricesBasket = [];
let mealAmountsBasket = [];
let sum = 0;
let sumArray = [];

let meals = [
    {
        'title': 'Beliebt ❤️',
        'showTitle': false,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Pizza Margherita',
        'mealDescription': 'Pizza nur mit Käse.',
        'price': 4.90,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Shisha Watermelon Chill',
        'mealDescription': 'Sehr guter Wassermelonengeschmack.',
        'price': 12.50,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Schwedisches Köttbular mit Reis',
        'mealDescription': 'Wer schwedisches Essen mag ist hier zuhause.',
        'price': 8.90,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': './img/food-3676796_1280.jpg',
        'showImage': false,
    },
    //--------------------------------------------------------------------
    {
        'title': 'Fleisch',
        'showTitle': false,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': './img/food-3676796_1280.jpg',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': '200gr Rind mit Kartoffeln',
        'mealDescription': 'Sehr gut zubereitet.',
        'price': 29.90,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Hackfleischsuppe',
        'mealDescription': 'Resteverwertung von Spaghetti Bolognese. Sehr lecker!',
        'price': 1.00,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Hühnchen mit Reis',
        'mealDescription': 'Leckeres Hühnchen. Perfekt für nach dem Training.',
        'price': 8.90,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': './img/shisha-5220430_1280.jpg',
        'showImage': false,
    },
    //--------------------------------------------------------------------
    {
        'title': 'Shisha',
        'showTitle': false,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Shisha Apfel-Minze',
        'mealDescription': 'Name sagt alles.',
        'price': 14.90,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Shisha Blueberry',
        'mealDescription': 'Blaubeere ist gesund!',
        'price': 19.90,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Shisha Watermelon Chill',
        'mealDescription': 'Sehr guter Wassermelonengeschmack.',
        'price': 12.50,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Shisha Zitrone',
        'mealDescription': 'Etwas bitter. Empfehlung vom Chefkoch!',
        'price': 16.50,
        'border': false,
        'image': '',
        'showImage': true,
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': './img/mussels-8156358_1280.jpg',
        'showImage': false
    },
    //--------------------------------------------------------------------
    {
        'title': 'Muscheln',
        'showTitle': false,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': '',
        'showImage': true
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Spaghetti mit Muscheln',
        'mealDescription': 'Ausgezeichneter Mix.',
        'price': 19.90,
        'border': false,
        'image': '',
        'showImage': true
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Muscheln mit Gemüse',
        'mealDescription': 'Nur zum mitnehmen!',
        'price': 29.90,
        'border': false,
        'image': '',
        'showImage': true
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': './img/bayvarian.png',
        'showImage': false
    },
    //--------------------------------------------------------------------
    {
        'title': 'Bayerisch',
        'showTitle': false,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': '',
        'showImage': true
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Leberkassemmel',
        'mealDescription': 'Sehr gut zubereitet.',
        'price': 9.90,
        'border': false,
        'image': '',
        'showImage': true
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Weißwurstfrühstück',
        'mealDescription': 'Zwei Weißwurst mit Breze.',
        'price': 15.90,
        'border': false,
        'image': '',
        'showImage': true
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': 'Wurstsalat',
        'mealDescription': 'Salat mit Wurst.',
        'price': 19.90,
        'border': false,
        'image': '',
        'showImage': true
    },
    {
        'title': '',
        'showTitle': true,
        'mealName': '',
        'mealDescription': '',
        'price': '',
        'border': true,
        'image': '',
        'showImage': true
    },
]

function render() {
    let foodMenuContent = document.getElementById('foodMenuContentId');
    // foodMenu.innerHTML = '';

    for (let i = 0; i < meals.length; i++) {
        let meal = meals[i];
        foodMenuContent.innerHTML += generateListContent(meal, i);
    }
}

// addToArray(hide('basketId')"
function generateListContent(meal, i) {
    let borderFoodMenuStyle = 'padding: 16px; border: 1px solid #DBD9D7; border-radius: 10px; margin-bottom: 16px;';
    let menuImageStyle = 'width: 960px; height: 152px; object-fit: cover; margin: 0 0 20px; border-radius: 10px;';
    let menuTitleStyle = 'width: calc(960px - 34px); text-align: start; margin-bottom: 16px;';

    if (meal['border'] == true) {
        borderFoodMenuStyle = 'display:none';
        mealNameStyle = 'display:none';
        mealDescriptionStyle = 'display:none';
        priceStyle = 'display:none';
    }

    if (meal['showImage'] == true) {
        menuImageStyle = 'display:none';
    }

    if (meal['showTitle'] == true) {
        menuTitleStyle = 'display:none';
    }

    return /* html */ `
    <h2 style="${menuTitleStyle}" class="menuTitleResponsive">
        <b>${meal['title']}</b>
    </h2>

    <div class="foodSelection" style="${borderFoodMenuStyle}"
    onclick="addToBasket(${i})">

    <div class="plus">
        <img src="./img/plus-solid.png">
    </div>

    <h3 class="${mealNameStyle}">
        <b>${meal['mealName']}</b>
    </h3>
    <h5 class="${mealDescriptionStyle}">
    ${meal['mealDescription']}
    </h5>

    <h3 class="priceStyle">
    <b>${Number(meal['price']).toFixed(2)}€</b>
    </h3>

    </div>

    <img style="${menuImageStyle}" src="${meal['image']}" id="mealId${[i]}"class="menuImageResponsive">
    `
}

function addToBasket(i) {
    show('basketFilledId');
    let index = mealNamesBasket.indexOf(meals[i].mealName);
    if (index == -1) {
        mealNamesBasket.push(meals[i].mealName);
        mealPricesBasket.push(meals[i].price);
        mealAmountsBasket.push(1);
    } else {
        mealAmountsBasket[index]++;
        // Diese Zeile braucht man nicht mehr, weil man in der renderBasket() nochmal rechnet
        // mealPricesBasket[index] = meals[i].price * mealAmountsBasket[index];
    }
    renderBasket();
}

// Bevor addToBasket kommt, erstmal leeren Warenkorb anzeigen
function emptyBasket() {
    document.getElementById('basketId').innerHTML = /* html */ `
    <div id="deleteEmptyBasketId">
        <img src="./img/bag-shopping-solid.png">
        <h2>Fülle deinen Warenkorb</h2>
        <h4 class="basketDescription">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen</h4>
        `
}

function renderBasket() {
    if (mealNamesBasket == 0) {
        emptyBasket();
        hide('basketTotalId');
        if (document.getElementById("sumFooterId") != null) {
            document.getElementById("sumFooterId").innerHTML = "";
        }
    } else {
        hide('basketId');
        show('basketTotalId');
        document.getElementById('basketFilledId').innerHTML = '';
        sumArray = [];
        for (let j = 0; j < mealPricesBasket.length; j++) {

            sum = (mealPricesBasket[j] * mealAmountsBasket[j]);
            sumArray.push(sum);

            document.getElementById('basketFilledId').innerHTML += /* html */`
            <div class="calculateArea">
                <div>
                    <h4>${mealAmountsBasket[j]}
                    <b>${mealNamesBasket[j]}</b></h4>
                </div>
                <div>
                    <h4>${(sum).toFixed(2)}€</h4>
                </div>
            </div>

            <div class="addAndDeleteButtonArea">
                <div class="addAndDeleteButtonBackground" onclick="decreaseMealAmountButton(${j})">
                    <img src="./img/minus.png">
                </div>
                <div class="addAndDeleteButtonBackground" onclick="increaseMealAmountButton(${j})">
                    <img src="./img/plus-solid.png">
                </div>
            </div>
`
        }
        sumArrayTotalOutput();
        save();
    }
}

function sumArrayTotalOutput() {
    let sumArrayTotal = sumArray.reduce(function (a, b) {
        return a + b;
    });

    document.getElementById('basketTotalId').innerHTML = /* html */ `
        <div class="insideTotalAreaPosition">
            <h4>Zwischensumme:</h4>
        <div>
            <h4>${sumArrayTotal.toFixed(2)}€</h4>
        </div>
    </div >
    <div class="insideTotalAreaPosition">
            <h4>Lieferkosten:</h4>
        <div>
            <h4>2,00€</h4>
        </div>
    </div>
    <div class="insideTotalAreaPosition"><b>
            <h4>Gesamt:</h4>
        <div>
            <h4>${(sumArrayTotal + 2).toFixed(2)}€</b></h4>
        </div>
    </div >
    `
    let test = document.getElementById('sumFooterId').innerHTML = /* html */ `
        ${(sumArrayTotal + 2).toFixed(2)}€
    `
    console.log(test);
}

function increaseMealAmountButton(indexBasket) {
    mealAmountsBasket[indexBasket]++;
    save();
    renderBasket();
}

function decreaseMealAmountButton(indexBasket) {
    mealAmountsBasket[indexBasket]--;
    if (mealAmountsBasket[indexBasket] >= 1) {
        save();
        renderBasket();
    } else {
        mealNamesBasket.splice(indexBasket, 1);
        mealPricesBasket.splice(indexBasket, 1);
        mealAmountsBasket.splice(indexBasket, 1);
        sumArray.splice(indexBasket, 1);
        renderBasket();
        save();
    }

    if (mealNamesBasket == 0) {
        emptyBasket();
        hide('basketFilledId');
        show('basketId');
    }
}

function openBasketonMobile() {
    let openBasketonMobile = document.getElementById("openBasketonMobileId");
    openBasketonMobile.classList.add("basketAreaDisplayNone");

    let closeBasketonMobile = document.getElementById("closeBasketonMobileId");
    closeBasketonMobile.classList.add("closeBasketMenuNone");

    let deleteFooterButton = document.getElementById("deleteFooterButtonId");
    deleteFooterButton.classList.add("deleteFooterButtonNone");
}

function closeBasketonMobile() {
    let openBasketonMobile = document.getElementById("openBasketonMobileId");
    openBasketonMobile.classList.remove("basketAreaDisplayNone");

    let closeBasketonMobile = document.getElementById("closeBasketonMobileId");
    closeBasketonMobile.classList.remove("closeBasketMenuNone");

    let deleteFooterButton = document.getElementById("deleteFooterButtonId");
    deleteFooterButton.classList.remove("deleteFooterButtonNone");
}

function save() {
    let mealNamesBasketAsText = JSON.stringify(mealNamesBasket);
    let mealPricesBasketAsText = JSON.stringify(mealPricesBasket);
    let mealAmountsBasketAsText = JSON.stringify(mealAmountsBasket);
    let sumArrayAsText = JSON.stringify(sumArray);
    localStorage.setItem('mealNamesBasket', mealNamesBasketAsText);
    localStorage.setItem('mealPricesBasket', mealPricesBasketAsText);
    localStorage.setItem('mealAmountsBasket', mealAmountsBasketAsText);
    localStorage.setItem('sumArray', sumArrayAsText);
}
function load() {
    let mealNamesBasketAsText = localStorage.getItem('mealNamesBasket');
    let mealPricesBasketAsText = localStorage.getItem('mealPricesBasket');
    let mealAmountsBasketAsText = localStorage.getItem('mealAmountsBasket');
    let sumArrayAsText = localStorage.getItem('sumArray');
    if (mealNamesBasketAsText && mealPricesBasket && mealAmountsBasket && sumArray) {
        mealNamesBasket = JSON.parse(mealNamesBasketAsText);
        mealPricesBasket = JSON.parse(mealPricesBasketAsText);
        mealAmountsBasket = JSON.parse(mealAmountsBasketAsText);
        sumArray = JSON.parse(sumArrayAsText);
    }
}


function hide(id) {
    document.getElementById(id).classList.add('d-none');
}
function show(id) {
    document.getElementById(id).classList.remove('d-none');
}