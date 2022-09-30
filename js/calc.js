let a = prompt('калькулятор', 'введите число');
let math = prompt('калькулятор', 'введите + - * /');
let b = prompt('калькулятор', 'введите второе число');
if(a == '0' && math == "*" || a == '0' && math == "/"){
    alert('Нельзя нуль умножать или делить');
}
else if(b == '0' && math == "*" || b == '0' && math == "/"){
    alert('Нельзя умножать или делить на нуль');
}
else{
    let str = a+math+b;
    alert(eval(str));
}


const week =['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
alert(week);
for(let i=0; i<week.length; i++){
    if(week[i] == 'Вторник'){
        alert(week[i]+': занятие в 19:00');
    }
    else if(week[i] == 'Четверг'){
        alert(week[i]+': занятие в 19:00');
    } 
}    
    
let discount = 15
let kol = prompt('количество товара', 'введите количество товара');
price = 100;
kol >= 5 ? (
    lowPrice = price-discount,
    alert(`стоимость за ед товара со скидкой: ${lowPrice} баксов`)): alert(`стоимость за ед. товара: ${price} баксов`);


let A = parseInt(prompt ('Введите первое число'));
let B = parseInt(prompt ('Введите второе число'));
for(var t=0-A; A<B; A++){
   if(A<B){
    t += A;
   }
}
alert(`сумма всех чисел между введенными числами: ${t}`);

let login = prompt ('Введите логин:');
let password = parseInt(prompt ('Введите пароль:'));
if(login == 'admin' && password == 12345){
   alert('Вы успешно авторизовались');
}
else{
   alert('логин либо пароль неверны')
}