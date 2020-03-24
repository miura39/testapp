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