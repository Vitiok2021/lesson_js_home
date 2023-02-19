"use strict";

document.querySelector(".form__button").addEventListener("click", myRes);

let winChildName = "";

function myRes() {
  let firstChildName = document.querySelector(".first-name").value;
  let secondChildName = document.querySelector(".second-name").value;

  let firstChildCandy = parseInt(
    document.querySelector(".first-child-candy").value
  );
  let secondChildCandy = parseInt(
    document.querySelector(".second-child-candy").value
  );

  if (firstChildCandy > secondChildCandy) winChildName = firstChildName;
  else {
    if (secondChildCandy > firstChildCandy) winChildName = secondChildName;
    else winChildName = "У дітей порівну цукерок";
  }

  document.querySelector(".out").innerHTML = winChildName;
}

// =========================================================================
document.querySelector(".form__button-2").addEventListener("click", myRes2);

function myRes2() {
  let priceGoods = parseFloat(document.querySelector(".price-goods").value);
  let countMoney = parseFloat(document.querySelector(".count-money").value);
  let remainder = "";

  if (countMoney >= priceGoods) {
    console.log(countMoney - priceGoods);
    if (countMoney - priceGoods >= 4)
      remainder = "Купіть ще лоторею. //Підкажіть як виправити, коли 7,4-3,5=4";
    else remainder = "Дякуємо за покупку";
  } else remainder = "У Вас недостатньо коштів";
  document.querySelector(".out-2").innerHTML = remainder;
}

// =========================================================================

document.querySelector(".form__button-3").addEventListener("click", myRes3);

function myRes3() {
  const random = Math.floor(Math.random() * 5) + 1;

  let myNumOne = parseInt(prompt("Введіть число від 1 до 5"));

  if (myNumOne === random) alert("Вітаємо! Ви вгадали");
  else {
    myNumOne = parseInt(
      prompt(
        "Нажаль, Ви не вгадали! Спробуйте ще! Введіть друге число від 1 до 5"
      )
    );
    if (myNumOne === random) alert("Вітаємо! Ви вгадали");
    else alert("Нажаль спроби скінчилися");
  }
}

// =========================================================================
document.querySelector(".form__button-4").addEventListener("click", myRes4);

function myRes4() {
  const child = 6,
    student = 17,
    worker = 23,
    retired = 65;
  const myYear = parseInt(document.querySelector(".year").value);
  let userStatus;
  if (myYear < child) userStatus = "Ви ще у садочку";
  else if (myYear < student) userStatus = "Ви у школі";
  else if (myYear < worker) userStatus = "Ви студент";
  else if (myYear < retired) userStatus = "Ви працівник";
  else userStatus = "Ви пенсіонер";

  document.querySelector(".out-4").innerHTML = userStatus;
}
// =========================================================================
document.querySelector(".form__button-5").addEventListener("click", myRes5);

function myRes5() {
  const userCategory = document.querySelector(".category").value;
  let result;
  switch (userCategory) {
    case "A":
      result = "Ви маєте право керування мотоциклом";
      break;
    case "B":
      result = "Ви маєте право керування легковим автомобілем";
      break;
    case "C":
      result = "Ви маєте право керування вантажним автомобілем";
      break;
    default:
      result = "Ви ввели некоректне значення";
      break;
  }
  document.querySelector(".out-5").innerHTML = result;
}
// =========================================================================
document.querySelector(".form__button-6").addEventListener("click", myRes6);

function myRes6() {
  const dayNum = parseInt(document.querySelector(".day").value);
  let result;
  switch (dayNum) {
    case 1:
      result = "Понеділок";
      break;
    case 2:
      result = "Вівторок";
      break;
    case 3:
      result = "Середа";
      break;
    case 4:
      result = "Четвер";
      break;
    case 5:
      result = "П'ятниця";
      break;
    case 6:
      result = "Субота";
      break;
    case 7:
      result = "Неділя";
      break;
    default:
      result = "Ви ввели некоректне значення";
      break;
  }
  document.querySelector(".out-6").innerHTML = result;
}
// =========================================================================
document.querySelector(".form__button-7").addEventListener("click", myRes7);

function myRes7() {
  let mounthNum = parseInt(document.querySelector(".mounth").value);
  let result;
  switch (mounthNum) {
    case 12:
    case 1:
    case 2:
      result = "Даний місяць зимовий";
      break;
    case 3:
    case 4:
    case 5:
      result = "Даний місяць весняний";
      break;
    case 6:
    case 7:
    case 8:
      result = "Даний місяць літній";
      break;
    case 9:
    case 10:
    case 11:
      result = "Даний місяць осінній";
      break;
    default:
      result = "Ви ввели некоректне значення";
      break;
  }
  document.querySelector(".out-7").innerHTML = result;
}
// =========================================================================
