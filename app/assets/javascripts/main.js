// 「ボタン」をJavaScript上で扱えるようにする
// DOMとはDocument Object Model(ドキュメントオブジェクトモデル)の略

// 【例】id名で取得したい時
// document.getElementById("id名");

// classを指定して取得する際はこちらを利用します。ここで気をつけたいのは、getElementsと複数形になっていること
// 【例】class名で取得したい時
// document.getElementsByClassName("クラス名");

// セレクタ名とは、CSSでスタイルを適用するために指定している要素です。セレクタ名を指定してDOMを取得する場合、querySelectorメソッドを使用
// 【例】セレクタ名を取得したい時
// document.querySelector("セレクタ名");

// JavaScriptはイベント駆動という概念に基づいて設計されています。

// (ノードオブジェクト).addEventListener("イベント名", 関数);

//------ここからスタート------
// ボタンをクリックしたら、コンソールに「Hello world」と表示される

// let btn = document.querySelector("button");
// // ボタンをノードオブジェクトとして取得し、変数btnに代入する

// function printHello() {
//   console.log("Hello world");
// }
// // printHello関数を定義

// btn.addEventListener("click", printHello);

// ボタンのノードオブジェクトであるbtnに対して、
// clickイベントとprintHello関数を紐付ける仕組みであるイベントリスナを追加する
// ↑↑↑↑↑↑↑↑↑↑↑↑上記のままでは実行されない。---------
// htmlにはmain.jsがbuttonより先に記述されているためnullになる。
// プログラムは上から読みこまれるため

// ↓↓↓↓↓↓↓↓↓↓↓↓下記の記述が必要になる--------
// ページの読み込みをするwindow.onloadを使おう
// ページの読み込みは、以下2つの記述方法があります。
// window.onload = function() { 処理 };
// window.addEventListener('load', function() { 処理 });

// ページの読み込みを先に追えるように記述する
function printHelloWithButton() {
  let btn = document.querySelector("button");

  function printHello() {
    console.log("Hello world");
  }
  // 関数内で定義された関数は、関数の中でしか呼び出せない性質があるだけで、
  // 通常の関数同様に呼び出せる

  btn.addEventListener("click", printHello);
}
// 一連の処理をまとめた関数を作る

window.addEventListener("load", printHelloWithButton);