var name = '名前';
window.alert(name + 'こんにちは');
console.log("こんばんわ");

let num = 60;

if (num % 15 == 0) {
  console.log(num + 'は3と5の倍数です');
} else if (num % 3 == 0) {
  console.log(num + 'は3の倍数です');
} else if (num % 5 == 0) {
  console.log(num + 'は5の倍数です');
} else {
  console.log(num + 'は3の倍数でも、5の倍数でもありません');
}

let list = ['test','test2','test3']
list.push('追加が出来ます');
// 配列の要素を削除する(Rubyの場合はpopメソッドの引数に数字を渡すことで「何個分要素を取り除くか」という数を指定できますが、JavaScriptのpopメソッドではそれができません。)
list.pop();
// 先頭の要素を取り除くためにshiftメソッドが利用できます。(こちらもpopメソッド同様、Rubyでは取り除く要素数を指定できますが、JavaScriptではできません。)
list.shift();
console.log(list);
console.log(list[2]);
// オブジェクト
let obj = { name: 'yamada', age: 25, address: 'tokyo' };
console.log(obj);
// 繰り返し処理
num = 1;
for (let i = 0; i < 10; i += 1) {
  console.log(num + '回目の出力')
  num +=  1
}

// -------関数の定義方法
// function 関数名(引数) {
//    処理の内容
// }
// -------------------
function sayHello(){
  console.log('hello');
}
function sayName(name){
  console.log(name);
}
// helloとyamadaが出力される
let myName = 'yamada';
sayHello();
sayName(myName);

// JavaScriptにおいてはreturnで戻り値を明示する必要がある
function calc(num1,num2){
  return num1*num2;
}

let num1 = 3;
let num2 = 4;
console.log(calc(num1,num2));

// 無名関数を定義する方法
// 関数宣言
function hello(){
  console.log('hello');
}

// 関数式（無名関数）
let hello = function(){
    console.log('hello');
}