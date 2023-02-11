document.querySelector('.form__button').addEventListener('click', myRes);

function myRes() {
    let s1, s2, s3, s4;
    let a = parseInt(document.querySelector('.num-a').value);
    // console.log (a);
    let b = parseInt(document.querySelector('.num-b').value);
    // console.log (b);
    let c = parseInt(document.querySelector('.num-c').value);
    // console.log (c);

    s1 = a + 12 + b;
    s2 = Math.sqrt((a + b) / (2 * a)).toFixed(2);
    s3 = Math.cbrt((a + b) * c).toFixed(2);
    s4 = Math.sin(a / (-b)).toFixed(2);

    document.querySelector('.out').innerHTML = `
        1) S_1 = ${s1}<br> 
        2) S_2 = ${s2}<br> 
        3) S_3 = ${s3}<br> 
        4) S_4 = ${s4}<br> 
    `;
}

// ===================================================

document.querySelector('.form__button2').addEventListener('click', myRes2);

function myRes2() {
    let a = parseInt(document.querySelector('.zad2-a').value);
    // console.log (a);
    let b = parseInt(document.querySelector('.zad2-b').value);
    // console.log (b);
    let sum = a + b;
    let dob = a * b;
    let dil = (a / b).toFixed(2);
    document.querySelector('.out2').innerHTML = `
    <table>
    <tr>
        <th>Сума</th>
        <th>Добуток</th>
        <th>Частка</th>
    </tr>
    <tr>
        <td>${sum}</td>
        <td>${dob}</td>
        <td>${dil}</td>
    </tr>
    </table>
    `;
}


// ===================================================

document.querySelector('.form__button3').addEventListener('click', myRes3);

function myRes3() {
    let myYear = parseInt(document.querySelector('.year-01').value);

    let today = new Date();
    let year = today.getFullYear();

    let numYear = year - myYear;

    document.querySelector('.out3').innerHTML = `
       1) Кількість років = ${numYear}<br>
       
    `;
}

// ===================================================

document.querySelector('.form__button4').addEventListener('click', myRes4);

function myRes4() {
    let cost = parseInt(document.querySelector('.cost').value);
    // console.log (myYear);
    let quantity = parseInt(document.querySelector('.quant').value);
    // console.log (thisYear);


    let allCost = cost * quantity;
    let pdv = allCost * 0.05;
    document.querySelector('.out4').innerHTML = `
       1) Загальна вартість товару = ${allCost}<br>
       2) Вартість ПДВ = ${pdv}<br>
    `;
}

// ===================================================

document.querySelector('.form__button5').addEventListener('click', myRes5);

function myRes5() {
    let centimeter = parseInt(document.querySelector('.centimeter').value);

    let metr = centimeter / 100;
    let kilometr = centimeter / 1000;

    document.querySelector('.out5').innerHTML = `
       1) Дані сантиметри у метрах = ${metr} м<br>
       2) Дані сантиметри у кілометрахметрах = ${kilometr} км
    `;
}

// ===================================================

document.querySelector('.form__button6').addEventListener('click', myRes6);

function myRes6() {
    let sec = parseInt(document.querySelector('.sec').value);

    // let min = Math.floor(sec / 60);
    let hour = Math.floor(sec / 3600);
    // console.log(hour);

    let ostatok = sec % 3600;
    // console.log(ostatok);

    let min = Math.floor(ostatok / 60);
    // console.log(min);

    document.querySelector('.out6').innerHTML = `
       1) Пройшло ${hour} годин(-и) ${min} хвилин(-и)
    `;
}



// ===================================================

document.querySelector('.form__button7').addEventListener('click', myRes7);

function myRes7() {
    let cost01 = parseInt(document.querySelector('.cost-01').value);
    let quant01 = parseInt(document.querySelector('.quant-01').value);

    let cost02 = parseInt(document.querySelector('.cost-02').value);
    let quant02 = parseInt(document.querySelector('.quant-02').value);

    let cost03 = parseInt(document.querySelector('.cost-03').value);
    let quant03 = parseInt(document.querySelector('.quant-03').value);


    let allCost01 = cost01 * quant01;
    let allCost02 = cost02 * quant02;
    let allCost03 = cost03 * quant03;

    let allCost = allCost01 + allCost02 + allCost03;

    document.querySelector('.out7').innerHTML = `

    <table>
    <tr>
        <th>Назва товару</th>
        <th>Вартість товару, грн</th>
        <th>Кількість товару, шт</th>
        <th>Сума товару, грн</th>
    </tr>
    <tr>
        <td>Товар 01</td>
        <td>${cost01}</td>
        <td>${quant01}</td>
        <td>${allCost01}</td>
    </tr>
    <tr>
        <td>Товар 02</td>
        <td>${cost02}</td>
        <td>${quant02}</td>
        <td>${allCost02}</td>
    </tr>
    <tr>
        <td>Товар 03</td>
        <td>${cost03}</td>
        <td>${quant03}</td>
        <td>${allCost03}</td>
    </tr>
    <tr>
        <td colspan="4">Загальна вартість товару: ${allCost} грн</td>
    </tr>
</table>
   `;
}


// ===================================================

document.querySelector('.form__button8').addEventListener('click', myRes8);

function myRes8() {

    let minOne = 1, maxOne = 12;
    let rand01 = minOne + Math.floor(Math.random() * (maxOne - minOne + 1));
    // console.log(rand01);

    let minTwo = 0, maxTwo = 6;
    let rand02 = minTwo + Math.floor(Math.random() * (maxTwo - minTwo + 1));
    // console.log(rand02);

    let sumMinMax = rand01 + rand02;

    document.querySelector('.out8').innerHTML = `
    1) Сума випадкових чисел від 1 до 12 і від 0 до 6 = ${sumMinMax};
 `;
}