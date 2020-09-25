'use strict';

// Глобальные переменные являются свойствами глобального объекта. На веб-страницах глобальным объектом является window, поэтому вы можете устанавливать глобальные переменные и обращаться к ним, используя синтаксис window.variable:

window.foo = "bar";


// Alert является функцией, которая показывает небольшое окно с сообщением. Выполнение функции называют вызовом. Вызвать функцию можно записав скобки после ее имени:
// alert("Good morning Cats!");
// Величины, передаваемые функциям, называются аргументами функций. Функция alert требует один аргумент. alert(window.foo);
// Можно вызвать окно с вопросом и кнопками OK/Cancel при помощи функции confirm.  Она возвращает булевское значение – true, если нажато OK, и false, если нажата Cancel.
// confirm("Well, let's go?");
// Функцию prompt можно использовать, чтобы задать вопрос. Первый аргумент – вопрос, второй – текст, с которого пользователь начинает. 
// prompt("Dude, tell me everything you know about programming", "...");


// var позволяет создавать переменные, добавляемые к глобальному объекту, или такие, область видимости которых ограничена функциями.

var btn = document.getElementById("btn");
var navbarTool = document.querySelector('.navbar-tool');
var navbarToolHeartIcon = navbarTool.querySelector('.fa-heart');
var navbarToolHeartsCountContainer = navbarTool.querySelector('.fa-heart + .text-gray');

console.log('here', navbarTool, navbarToolHeartIcon, navbarToolHeartsCountContainer)


function Toggle(){
    if(btn.classList.contains("far")) {
        btn.classList.remove("far");
        btn.classList.add("fas");
    } else {
        btn.classList.remove("fas");
        btn.classList.add("far");
    }
}

var thing = 'first';
var a = 2;

var x = 30;
console.log("the value of x is", x);
// → the value of x is 30
      
var a = 2;
// Ключевое слово var не обращает внимания на блоки кода.
{
    var a = 10;
}

// Кроме того, обратиться к переменной, объявленной с помощью ключевого слова var можно и в коде, расположенном до команды её объявления.
console.log("the value of cat is ", cat1);
var cat1 = 'Red Cat';
// Это явление известно как поднятие переменных (hoisting).

// Ключевое слово let
let a1   = 10;
console.log("the value of a is ", a1);
{
    let a1 = 3;
    console.log("the value of a inside block is ", a1);
}
console.log("the value of a outside block is ", a1);
 
// console.log("the value of cat is ", cat);
//  ReferenceError: can't access lexical declaration
// `cat' before initialization

let cat = 'Red Cat';
console.log("the value of cat is ", cat);

// not use strict
// {
//     let ga = gb = "ga - local var, gb - global var";
//     console.log(ga);
//     console.log(gb);
// }
// console.log(ga);
// console.log(gb);

// Значение переменной, объявленной с помощью ключевого слова const, нельзя перезаписать после объявления. Это  единственное различие между const и let. 
 const ANYNAME = 'Maybe';
 const CATNAME = 'Red Cat';
// Использование ключевого слова const предотвращает запись в константу нового значения, но не делает объекты, на которые ссылаются подобные константы, immutable. Эта особенность даёт слабую защиту от изменения значений при работе с большинством типов данных.
   const NAME_ARR   = [];
   const NAME = 'Maybe';
   NAME_ARR.push('My name');
   NAME_ARR.push(NAME);
   console.log(NAME_ARR[0],' is ', NAME_ARR[1]);

// Основным оператором присваивания является  =, он присваивает значение правого операнда операнду находящемуся слева. 

// declaring variables
   let av   = 10;
   let bv   = 3;
   let cv   = 15;
   let dv = '5';
   let ev   = 'My name';
   let fv = 'Maybe';

// Арифметические операторы используют в качестве своих операндов числа и в качестве результата возвращают числовую величину. Стандартными арифметическими операторами являются сложение (+), вычитание (-), умножение (*), и деление (/). 

console.log(av * 3); // 30
console.log(av * bv); // 30
console.log(bv * cv); // 45

// При работе с дробными числами эти операторы работают аналогично их работе в большинстве других языках программирования (обратите внимание, что деление на ноль возвращает бесконечность Infinity). 
   console.log(1/2); /* возвращает 0.5 */
   console.log(1/2 == 1.0/2.0); /* возвращает true */

   // Остаток от деления (%) возвращает целочисленный остаток от деления двух операндов.
   console.log(cv%bv);

// Инкремент (++) - добавляет единицу к операнду. Если используется в качестве префикса (++x), то возвращает значение операнда с добавленной к нему единицей; а в случае применения в качестве окончания (x++) возвращает величину операнда перед добавлением к нему единицы. Если x равно 3, тогда ++x установит значение x равным 4 и вернёт 4, напротив x++ вернёт 3 и потом установит значение x равным 4.
av++;
// Декремент (--) - вычитает единицу из своего операнда. Если x равно 3, тогда --x  установит значение x равным 2 и вернёт 2, x-- вернёт 3 и потом установит значение x равным 2.
bv--;
--bv;
// Унарный минус -  возвращает отрицательное значение своего операнда. Если x равно 3, тогда -x вернёт -3.
// Унарный плюс (+) - пытается конвертировать операнд в число.  +"3" вернёт 3.
// Возведение в степень (**) - возводит основание в показатель степени, как, основание степень  2 ** 3 вернёт 8. 10 ** -1 вернёт 0.1.

cv += av;

var x = 30,
y = 3;

console.log("Присваивание со сложением x += y", x += y);
console.log("Присваивание с вычитанием x-=y x=x-y", x -= y);
console.log("Присваивание с умножением x *= y x = x * y", x *= y);
console.log("Присваивание с делением x /= y x = x / y", x /= y);
console.log("Присваивание по модулю x %= y x = x % y", x %= y);

// numbers

let num1 = 10,
num2 = 500,
num3 = 3.14;

console.log(1/2); /* возвращает 0.5 */
console.log(1/2 == 1.0/2.0); /* возвращает true */

let b   = 3;
let c   = 15;
let d = '5';
let e   = 'My name';
let f = 'Maybe';

    console.log(a + b); // 13
    console.log(a + d); // 105
    console.log(e + ' ' + f);
    console.log(e += ' is the Batman');

// Целые числа можно представлять как десятичные, восьмеричные и шестнадцатеричные литералы. В восьмеричном литерале первой цифрой является нуль (0), за которым следует последовательность восьмеричных цифр (от 0 до 7 ). Если в литерале об­наруживается цифра не из этого диапазона, начальный нуль игнорируется и число интерпретируется как десятичное, например:
   var octaNum = 0o70 ; // 56 в восьмеричном формате
//    var octalNumЗ 0o8; // недопустимое восьмеричное значение - интерпретируется как 8
// Чтобы определить значение с плавающей точкой, необходимо ввести десятичную точку и как минимум одну цифру после нее. Нуль перед десятичной точкой не­ обязателен: var floatNum2=0.1;
// Очень большие и очень малые числа с плавающей точкой можно представлять в экспоненциальном формате (e-notation): var floatNum=3.125е7 // 31250000

// Значения с плавающей точкой представляются с точностью до 17-го десятичного разряда, они гораздо менее точны в арифметических вычислениях, чем целые числа. Например, сложение 0.1 и 0.2 дает в результате 0.30000000000000004 вместо 0.3. 

let аf = 0.1;
let bf = 0.2;

if ( аf + bf == 0.3 ) {
    // не делайте так !
    consile.log( "You got 0.3 . " );
}
// Здесь сумма двух чисел проверяется на равенство 0.3. Этот код правильно сработает, если сложить 0.05 и 0.25 или 0.15 и 0.15, но для чисел 0.1 и 0.2 будет получен чуть больший результат. Никогда не проверяйте, равно ли значение с плавающей точкой конкретному числу. Ошибки округления - это побочный эффект арифметических операций над числами с плавающей точкой формата IEEE-754, а не особенность ECMAScript. 

// Строки используются для хранения текста. Записываются они в кавычках:

// declaring strings

var srt1 = 'this is my string',
    srt2 = 'my second string',
    srt3 = "my name is chris";

// В JavaScript существует три типа кавычек.
// Двойные кавычки: "Привет".
// Одинарные кавычки: 'Привет'.
// Обратные кавычки: `Привет`.

// Для включения специальных символов используется обратный слеш \. 
// ‘Everyone\'s stealing my code Hello world’
"Everyone's stealing my code Hello world";
// Он означает, что символ, идущий за ним, имеет специальное значение – это называется «экранирование символов» (escape character).
// \” можно заключать в двойные кавычки. 
// \n означает перевод строки, 
// \t – табуляцию.
// Если вам нужно включить в строку обратный слеш, его тоже нужно экранировать: \\. 
// Инструкцию “Символ новой строки — это “\n”” нужно будет написать так:
"Символ новой строки – это \"\\n\""

// Оператор слияния (+) позволяет объединить две строки, возвращая при этом третью строку, которая представляет собой объединение двух строк-операндов.

console.log("my " + "string");  // выведется строка  "my string".
// Сокращенный оператор присваивания += также может быть использован для объединения строк. Например,

var  mystring = "alpha"; 
mystring += "bet"; // получается значение "alphabet" и присваивается mystring.

let name = "Cats";
// Вставим переменную
console.log(`Hello, ${name}!`); // Привет, Cats!

// Логический тип (boolean) один из наиболее часто используемых в ECMAScript типов данных и имеет только два литеральных значения: true и false . Они от­личаются от числовых значений: true не равно 1, а false не равно 0. Присвоить логические значения переменным можно следующим образом:
       var found = true;
       var lost = false;
// литералы true и false чувствительны к регистру, так что True и False (и эти же слова с другими сочетаниями прописных и строчных букв) явля­ются допустимыми идентификаторами, но не логическими значениями.

// Булевые значения также могут быть результатом сравнений:
let isGreater = 4 > 1;
console.log( isGreater ); // true (результатом сравнения будет "да")

// Неопределенный тип (undefined) содержит единственное специальное значение undefined. 

var messageUndifined;
console.log("Неопределенный тип (undefined) содержит единственное специальное значение undefined", messageUndifined == undefined);

// Нулевой тип (Null) содержит единственный элемент - специальное значение null. 
// Логически null - это указатель на пустой объект, поэтому оператор typeof возвращает для него строку "object" :

var car=null; // пull
console.log("Нулевой тип (Null) содержит единственный элемент - специальное значение null: ", typeof car); // "object "

console.log("isNaN(NaN)= ", isNaN(NaN));   // true
console.log("isNaN(10)= ", isNaN(10)) ;   // false
console.log("isNaN('10')= ", isNaN("10"));  // false
console.log("isNaN('Ыuе')= ", isNaN("Ыuе")); // true
console.log("isNaN(true)= ", isNaN(true));  // false

// Унарный оператор «плюс» работает так же, как функция Number().
  
console.log("Унарный оператор «плюс» работает так же, как функция Number() ",(+"1.1") + (+"1.1")); // 2.2

// Специальное значение null формирует отдельный тип, который содержит только значение null:  var car=пull; // пull
// В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем». Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
// Логически null - это указатель на пустой объект, поэтому оператор typeof возвращает для него строку "object":  alert(typeof car); // "object "
// При определении переменной, которая позднее будет содержать объект, рекоменду­ется инициализировать ее именно значением null . Это позволяет явно проверять, была ли назначена переменной ссылка на объект, например:
if (car != null) {
    // какие - то действия с car
}

// Неопределенный тип (undefined) содержит единственное специальное значение    undefined. 
    var messageUndifined;
    console.log(messageUndifined == undefined);

// Сравнение с лите­ральным значением undefined показывает, что они равны:
   var messageUndifined = undefined;
   console.log(messageUndifined == undefined);

// Значение undefined является производным от null, так что в ЕСМА-262 они опре­делены как нестрого равные:
( null == undefined ) ; // true
// При сравнении значений null и undefined с помощью оператора == всегда воз­вращается true. Каждый раз, когда нужный объект недоступен, вместо него следует использовать null. 

// Для определения типа переменной служит оператор typeof, который возвращает:
// undefined, если значение не определено;
typeof undefined // "undefined"
// boolean , если значение имеет логический тип;
typeof true // "boolean"
// string, если значение является строкой;
typeof "foo" // "string"
// number, если значение является числом;
typeof 0 // "number"
// object, если значение является объектом или значе­нием null;

// Синтаксис функции: typeof(x).

    var at1 =  true && true;     // t && t возвращает true
    var a2 =  true && false;    // t && f возвращает false
    var a3 = false && true;     // f && t возвращает false
    var a4 = false && (3 == 4); // f && f возвращает false
    var a5 = "Cat" && "Dog";    // t && t возвращает Dog
    var a6 = false && "Cat";    // f && t возвращает false
    var a7 = "Cat" && false;    // t && f возвращает false
    var o1 =  true || true;     // t || t возвращает true
    var o2 = false || true;     // f || t возвращает true
    var o3 =  true || false;    // t || f возвращает true
    var o4 = false || (3 == 4); // f || f возвращает false
    var o5 = "Cat" || "Dog";    // t || t возвращает Cat
    var o6 = false || "Cat";    // f || t возвращает Cat
    var o7 = "Cat" || false;    // t || f возвращает Cat

    var n1 = !true;  // !t возвращает false
    var n2 = !false; // !f возвращает true
    var n3 = !"Cat"; // !t возвращает false
// Так как логические выражения вычисляются слева направо, они проверяются на возможность вычисления "короткого замыкания" с использованием следующих правил:

    false && anything // "короткое замыкание" с результатом false.
    true || anything // "короткое замыкание" с результатом true.

// Правила логики гарантируют, что данные вычисления всегда корректны. Обратите внимание, что часть "anything" представленных выше выражений не вычисляется, таким образом удается избежать любых побочных эффектов вычисления данной части.

// Равно (==): Возвращает true, если операнды равны.  3 == '3'
// Не равно (!=): Возвращает true, если операнды не равны.  var1 != 4 var2 != "3"
// Строго равно (===): Возвращает true, если операнды равны и имеют одинаковый тип. 
// Строго не равно(!==): Возвращает true, если операнды не равны и/или имеют разный тип.     var1 !== "3" 3 !== '3'
// Больше (>): Возвращает true, если операнд слева больше операнда справа.
// Больше или равно (>=): Возвращает true, если операнд слева больше или равен операнду справа.     var2 >= var1 var1 >= 3
// Меньше (<): Возвращает true, если операнд слева меньше операнда справа.
// Меньше или равно (<=): Возвращает true, если операнд слева меньше или равен операнду справа. 

// Оператор группировки ( ) контролирует порядок выполнения в выражениях.
//    var a = 1;
//    var b = 2;
//    var c = 3;
   console.log(a + b * c);     // 7 обычный порядок
   console.log(a + (b * c));   // 7
   // теперь поменяем порядок сложение до умножения
   console.log((a + b) * c);   // 9
   // что эквивалентно следующему
   console.log(a * c + b * c); // 9

// Условное выполнение записывается при помощи ключевого слова if. В простом случае нам нужно, чтобы некий код был выполнен, только если выполняется некое условие. Например, вычислить квадрат числа, если было введено число.

// var theNumber = prompt("Введите число ", "");
// if (!isNaN(theNumber)){
//     console.log("Квадрат числа =" +  theNumber * theNumber);
// }

// Ключевое слово if выполняет или пропускает выражение, в зависимости от значения булевого выражения. 

// Ключевое слово else используется вместе с if для двух вариантов выполнения.

// var theNumber = Number(prompt("Выбери число", ""));
//    if (!isNaN(theNumber)){
//        alert("Квадрат числа = " + theNumber * theNumber);
//    }
//    else{
//        alert("Это не похоже на число");
//    }


// Можно использовать несколько пар if/else
// var x = prompt("Enter x:");
// var y = prompt("Enter y:");
// var operator = prompt("Enter operator:");
// if (operator == '+') {
//     alert("x + y =" + (x + y));
// } else if (operator == '-') {
//     alert("x - y =" + (x - y));
// } else if (operator == '*') {
//     alert("x * y =" + (x * y));
// } else {
//     alert("Непонятная операция!");
// }

// Функция Number() преобразует значения по следующим правилам.
// Логические значения true и false преобразуются в 1 и 0 соответственно.
// Числа возвращаются без изменений.
// Значение null преобразуется в 0.
// Значение undefined преобразуется в NaN.
// Если строка содержит только цифры с начальным знаком или либо без знака, она всегда преобразуется в десятичное число (начальные нули игнорируются).
// Если строка содержит значение с плавающей точкой, она преобразуется в число с плавающей точкой (начальные нули также игнорируются).
// Если строка содержит шестнадцатеричное значение, она преобразуется в целое число.
// Если строка пуста (не содержит знаков), она преобразуется в 0.
// В остальных случаях строка преоб­разуется в NaN.

// Унарный оператор «плюс» работает так же, как функция Number().
(+"1.1") + (+"1.1") // 2.2

// var x = Number(prompt("Enter x:"));
// var y = Number(prompt("Enter y:"));
// var operator = prompt("Enter operator:");
//    if (operator == '+') {
//        alert("x + y =" + (x + y));
//    } else if (operator == '-') {
//        alert("x - y =" + (x - y));
//    } else if (operator == '*') {
//        alert("x - y =" + (x * y));
//    } else {
//        alert("Непонятная операция!");
//    }

// Специальное числовое значение NaN (Not a Number), указывает, что операция, которая должна была возвратить число, не сделала этого (но и не сгене­рировала ошибку). Например, в большинстве других языков деление на 0 приводит к критической ошибке, но в ECMAScript вместо этого возвращается значение NaN, что позволяет продолжить работу.
// Значение NaN имеет два уникальных свойства. Во-первых, любая операция с NaN (на­пример, NaN/10) всегда возвращает NaN, что может быть проблемой, если вычисление выполняется в несколько этапов. Во-вторых, NaN не равно никакому значению, в том числе и другому NaN. // Например, следующее выражение возвращает false:
// alert(NaN==NaN) ; //false

// функция isNaN() принимает один аргумент любого типа и определяет, является ли он «не числом». При передаче значения в isNaN() предпринимается попытка преобразовать его в число. Некоторые нечисловые значения, например строка "10" или логическое значение, без проблем преобразуются в числа, а для аргументов, которые не могут быть преобразованы в числа, эта функция возвращает true:

console.log( isNaN(NaN));   // true
console.log( isNaN(10)) ;   // false
console.log( isNaN("10"));  // false
console.log( isNaN("Ыuе")); // true
console.log( isNaN(true));  // false


// var x = Number(prompt("Enter x:"));
// var y = Number(prompt("Enter y:"));
// if (!(isNaN(x) || isNaN(y))) {
//    var operator = prompt("Enter operator:");
//    if (operator == '+') {
//        alert("x + y =" + (x + y));
//    } else if (operator == '-') {
//        alert("x - y =" + (x - y));
//    } else if (operator == '*') {
//        alert("x * y =" + (x * y));
//    } else {
//        alert("Непонятная операция!");
//    }
// } else {alert("Это не похоже на число");}


// switch (prompt("Enter operator:")) {
//    case "+":
//        alert("x + y ="+(x+y)); break;
//    case "-":
//        alert("x - y ="+(x-y)); break;
//    case "*":
//        alert("x * y ="+(x*y));
//    case "/":
//        alert("x / y ="+(x/y)); break;
//    default:   
//        alert("Непонятная операция!"); break;
// }

console.log(typeof({})); 
console.log(typeof(null));


function square(number) {
    return number * number;
}


function sum(number1 , number2) {
    return number1 + number2;
}
sum(1, 2);

// typeof(функции)

// Технически функции считаются объектами, а не отдельным типом дан­ных. 
// Однако функции имеют некоторые специальные свойства, вследствие чего оператор typeof отличает их от других объектов.

console.log(typeof(function(){})); 

// Любой доступ и изменения DOM происходит через объект document.
console.log("Document Element: " + document.documentElement);
// В случае корректной HTML-страницы, это будет <html>.
console.log("Body Element: " + document.body);
// Доступ к свойствам осуществляется по имени свойства (по ключу).
console.log(document.body); // BODY
console.log(document.title); // title
// Объекты являются ассоциативными массивами, так как каждое свойство ассоциировано с именем, через которое можно получить доступ к нему. 
// Доступ к любому имени свойства, которое содержит невалидный JavaScript идентификатор (имя свойства содержит пробел, тире или начинается с цифры), может быть получен с использованием квадратных скобок. 
console.log(document['title']); // title
// Некоторые свойства DOM-элементов можно читать и устанавливать, другие - только читать. 
console.log(document.domain); // localhost
console.log(document.URL); // http://localhost:1234/
console.log(document.title); // Shopping cart
console.log(document.doctype); // <!DOCTYPE html>
console.log(document.head); // head
// Атрибут элемента tagName содержит имя тага в верхнем регистре, только для чтения.

console.log(document.body.tagName); // BODY

console.log(document.all); // HTMLAllCollection { 0: html, 1: head, 2: meta, 3: meta, 4: title, 5: link, 
document.all[27].textContent = "Hello DOM!";
console.log(document.images[0].src);  // 01.jpg

// Все дочерние элементы, включая текстовые находятся в массиве childNodes:

// Все дочерние элементы, включая текстовые находятся в массиве childNodes.
console.log('Все дочерние элементы ', document.body.childNodes);

// Свойство HTMLElement.style возвращает объект CSSStyleDeclaration который описывает атрибут стиля элемента.  Свойство style имеет тот же приоритет в каскаде CSS как и прямая декларация стиля через атрибут style, полезен для настройки стиля отдельного элемента.
// Лучше использовать свойство style чем использовать elt.setAttribute('style', '...'), так как использование свойства style не будет перезаписывать другие CSS свойства которые могут быть специфицированы в атрибуте style.

   document.body.style.backgroundColor = 'red'; // Можно поменять цвет BODY
   document.body.style.color = 'white'; // Можно поменять цвет текста
   // Можно вернуть обратно:
   document.body.style.backgroundColor = '';
   document.body.style.color = '';

//    Свойство cssText позволяет задать несколько CSS стилей одной строкой. При этом все содержимое атрибута style перезаписывается.

   // Пример задания элементу нескольких стилей:
   var elem = document.getElementById('elem');
   elem.style.cssText = 'color: red; font-size: 20px;';
   document.body.style.cssText = "color: #072a38; font: 300 18px/1.6 'Source Sans Pro',sans-serif; margin: 0; padding: 5em 0 2em; text-align: center;";
   // Чтобы предыдущие стили не перезаписывались, можно сделать так:
   var elem = document.getElementById('elem');
   elem.style.cssText += 'color: red; font-size: 20px;';
   

var hello = document.getElementById('hell');
hello.textContent = "Hello ID Element!";
hello.innerText = "Hello Inner Text!";
hello.innerHTML = "Hello Inner HTML!";
hello.style.backgroundColor = 'solid 3px indigo';

// Свойство textContent используется для получения и установки текста узла.
document.getElementById('h1').textContent = 'Hello Text Content!';


// Метод getElementsByClassName находит массив объектов определенного класса.
var navItems = document.getElementsByClassName('navbar__item');
navItems[2].textContent = 'Hello Item 2';
navItems[2].style.fontWeight = 800;
navItems[2].style.backgroundColor = 'yellow';

for (let i = 0; i<navItems.length; i++) {
 navItems[i].style.backgroundColor = "#f0"+(10*i)+"0f";
}

// node.getElementsByTagName(tagname) - Находит все дочерние по отношению к node элементы с тегом, указанным в tagname и возвращает их в виде массива объектов.

// getElementsByTagName
document.body.getElementsByTagName('h1')[0].innerHTML="Hello world";

// Свойство textContent используется для получения и установки текста узла.
document.getElementsByTagName('h1')[0].textContent = 'Hello Text Content!';


// Метод querySelectorAll объекта document, и элементов-узлов, принимает строку селектора и возвращает массивоподобный объект, содержащий все найденные элементы.
var odd = document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}