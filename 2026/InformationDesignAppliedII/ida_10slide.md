---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習II 10. React入門
footer: ""
---

# 情報デザイン応用演習II 10. React入門<!-- omit in toc -->

# 目次<!-- omit in toc -->

TODO:



# 初めに

---
### 前回の内容<!-- omit in toc -->
- flexbox
- css grid

についておさらいしました。

---
### 今日やること<!-- omit in toc -->

最近の生成AIの進化によりHTML・CSSを作成してもらうケースも増えています。

何も考えずにプロンプトを入力すると、特殊な書き方でコードを書いていることも増えてきました。

そんなソースコードを見た時にも「あ、このやり方で書いてるのか」とわかるように、今日は「React入門」をやってみようと思います。

ちょっとエンジニアよりなので、ちょい難しいですが、こんなこともできるんだ！の最後の回です。

# Webコンポーネント
- [(参考)WebComponentsとは何だったのか？基礎から再入門する](https://zenn.dev/hedrall/articles/web-components-20211018)

---
### HTML Living Standard
HTMLの現在の正式名称は「HTML Living Standard」といい、進化し続けています。

- [HTML Living Standard(日本語訳)](https://momdo.github.io/html/)

これは、何を意味するかというと、HTMLタグが増えたりするということです。

---
### そうでなくても、そもそも、HTMLタグは拡張できる
2011年にコンセプトが初めて提唱され、2016年〜2020年にかけて主要ブラウザへ標準実装された。

> Webコンポーネント

というものがあります。

- Custom Elements
- Shadow DOM
- HTML Templates

の3つの技術により、
> Web標準技術を利用して再利用可能なUIコンポーネントを作成する技術

となります。

---
### 命名規則
通常のHTMLタグは
- h1, p, div, header

等となりますが、
> カスタムコンポーネントの命名には-を必ず利用する縛りになっており、標準要素と識別されています。

であり、例えば
> <my-title>
の様に利用します。

逆に言えば、タグに「-」が含まれていた場合、カスタムコンポーネントであると認識するといいでしょう。

---
### Custom Elements
独自のHTMLタグを定義する技術です。既存のHTMLタグ(a, pタグなど)を拡張することもできます。カスタム要素の定義にはwindow.customElements.define関数を利用します。

---
### Shadow DOM
hadow DomはコンポーネントをCSS, JS的に**隔離**するための機能です。Shadow Domの生成にはattachShadowを利用します。

![width:20cm](https://user-images.githubusercontent.com/20538481/147379003-aae16f42-5255-45b0-9108-ef636c8b6287.png)

---
### HTML Templates
<template>タグ(コンテンツテンプレート要素)と、<slot> タグの機能を指します。
<template>は再利用可能なタグを定義する機能です。そのままでは画面上に描画されませんが、要素を clone => append することで再利用することが可能です。また、Shadow Domでは <slot> を処理することができ、タグの中に記載したDOMを配置することができます。

---
### 3つを統合して
Webコンポーネントについては、解説のみにします。
もちろん、後でやってみたい人は、やってみてください。

- [web-component-01.html](./webcomponent/web-component-01.html) Custom Elements
- [web-component-02.html](./webcomponent/web-component-02.html) Shadow DOM
- [web-component-03.html](./webcomponent/web-component-03.html) HTML Template
- [web-component-04.html](./webcomponent/web-component-04.html) 3つの技術の組み合わせ

いわゆる普通のHTML,JavaScriptだけでWebコンポーネントが利用できることを確認しましょう。

# SPAフレームワーク
---
### SPAとは
SPA(シングルページアプリケーション)とはWebブラウザに単一のHTMLページだけを読み込み、ユーザーの操作に応じてJavaScriptを使ってページの一部分を動的に書き換えながら表示するWebアプリケーションの仕組みです。

従来のWebサイトのように、ページを移動するたびにサーバーからHTML全体を再読み込みすることがないため、スマートフォンアプリ（ネイティブアプリ）のように滑らかな操作感を実現できます。

---
### SPAフレームワークとは
1枚（単一）のWebページだけでWebアプリケーションを構築・開発するためのJavaScriptフレームワークやライブラリのことです。

最初のページ読み込み以降は、サーバーから必要なデータ（JSON形式など）だけを非同期で取得し、JavaScriptを使って画面の一部だけを動的に書き換えます。これにより、アプリのような滑らかな操作感を実現できます。

---
### 代表的なSPAフレームワーク
- React（Meta製）：UI構築ライブラリ。高い柔軟性と豊富なエコシステム、仮想DOMによる高速な描画が特徴です。
- Vue.js：シンプルで学習コストが低く、小規模から大規模まで段階的に導入しやすい人気フレームワークです。
- Angular（Google製）：TypeScriptを標準採用したフルスタックフレームワーク。大規模な開発に向く頑健さを持っています。

---
### シェア
- [「State of JavaScript 2025」公開。フロントエンドライブラリはReactがシェアを伸ばして1位、ビルドツールはついにwebpackにviteが追いつく](https://www.publickey1.jp/blog/26/state_of_javascript_2025react1webpackvite.html)

> Reactが他を引き離して85％の1位。2位はVue.jsで52％、僅差で3位がAngularで48％、4位がSvelteで27％。以下、Preact、Solid、HTMXなどが並んでいます。


---
### HTMLでよくない？
一方、こういう議論も出てきています。

- [HTMLでよくね？複雑になりすぎたフロントエンド(13:09)](https://www.youtube.com/watch?v=F7dN7lf83NE)


# React入門
---
### Reactとは
SPAフレームワークの一つです。シェアが85%とフロントエンドエンジニアリングでは圧倒的です。

---
### ReactとWebコンポーネントの比較
Webコンポーネントはブラウザ標準のUI部品化技術であり、Reactは宣言的なUI構築と状態管理を行うJavaScriptライブラリです。両者は競合するだけでなく、役割が異なるため組み合わせて使うこともできます。

#### 
使い分けの目安

- **Webコンポーネントが向くケース**: 複数フレームワークや既存サイト間で共通のUI部品（ボタン、モーダルなど）を配布したい場合や、CSSの衝突をShadow DOMで防ぎたい場合。
- **Reactが向くケース**: 状態変化が多いインタラクティブなWebアプリやSPAを構築する場合。

---
### Reactの使い方
#### 1. 開発環境の準備
現在では、Viteなどのビルドツールを使って環境を構築するのが一般的です。
#### 2. 基本的な書き方(JSX)
Reactでは、JavaScriptの中にHTMLのような記述ができる JSX という構文を使います。
- コンポーネント名は大文字から始める（HTMLタグは小文字）。
- クラスの指定には class ではなく className を使う。
- JavaScriptの式を埋め込むときは {}（中括弧）を使う。

---
### 3. Reactコンポーネントの例
```jsx
function MyButton() {
  return (
    <button className="my-button">
      クリックしてね
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>はじめてのReact</h1>
      <MyButton />
    </div>
  );
}

```

---
### 4. データの状態管理（StateとHooks）
画面の見た目を変えたい動的なデータ（状態）を扱うには、useState という「フック（Hooks）」を使います。

- 値を保持し、更新されると自動で画面が再描画（レンダリング）されます。

---
### TypeScript
TypeScriptは、JavaScriptに静的型付け機能などを追加した拡張言語（スーパーセット）で、実行前に型エラーを検出しやすくします。書いたコードは最終的にJavaScriptへ変換（トランスパイル）されてから実行されます。


#### 主な違い

- 型付け：JavaScriptは動的型付けで柔軟に書ける一方、TypeScriptは静的型付けや型推論により誤った型の代入を実行前に防ぎやすいです。
- 実行環境：JavaScriptはブラウザやNode.jsなどで直接動きますが、TypeScriptは原則としてJavaScriptへ変換する工程が必要です。
- 開発効率・保守性：TypeScriptはエディタの補完やリファクタリングが効きやすく、中〜大規模開発やチーム開発で保守性を高めやすいです。



---
### ツールが色々...
フロントエンドのビルドツールがいくつかありますが、今日は今よく使われている
- Vite(ヴィート)

を使ってみましょう。

1. 開発時の最適化
2. ビルドの最適化

が、特徴となっています。

---
### npm
「6.アプリ開発入門」にて
- homebrew
- Node.js

のインストールが終わっていて、**npm**が利用できる状態となっているはずです。

---
### Reactの下準備
- 「IDA_10_React」フォルダを作ろう
- ターミナル-新しいターミナル
- **pwd**でトップにいることを確認しよう
- **npm create vite@latest tic-tac-toe -- --template react**
- Which linter to use? **Oxlint**
- Install with npm and start now? **Yes**

http://localhost:5173/
で、「Get started」が見れれば正解です。
このブラウザ画面を出しっぱなしにしておきましょう。

---
### 三目並べを作ろう
Reactのチュートリアルに
- [チュートリアル：三目並べ](https://ja.react.dev/learn/tutorial-tic-tac-toe)

がありますが、これ、viteでやるとうまくなかなか行きません。
- [ViteでReactの三目並べチュートリアルをする](https://zenn.dev/shuichi/scraps/2ecbdfeb9a41da)

を参考に進めていこうと思います。

---
### Hello World
tic-tac-toe/src/App.jsx
を全部消して、以下にしましょう。
```jsx
import './App.css'

export default function Square() {
  return <p>Hello World</p>;
}
```

cssが既に当たっているので、色などついてますが、「Hello World」と表示されれば正解です。

---
### マス目を表示させよう
```jsx
import './App.css'

export default function Square() {
  return <button className="square">X</button>;
}
```
Xと書かれたボタンが表示されます。

exportというのは、このファイルのメインの関数であることを表しています。
2行目はHTMLのボタンですが、classの代わりにclassNameが利用されています。React特有ですね。

---
### マス目を二つ並べよう
```jsx
import './App.css'

export default function Square() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}
```
ボタンが二つでれば正解です。
HTMLを入れ子でなくて複数返すには、<>と</>で括ってあげる必要があります。

---
### マス目を九つ並べよう
3x3のマス目にしたいので、divで括ります。
```jsx
import './App.css'

export default function Square() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
```

---
### 関数名をBoardに変更しておこう
マス目を表すSquareでなく、Boardですね。
```jsx
import './App.css'

export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
```

---
### Squareコンポーネントを定義しよう
それぞれのボタンに機能を持たせたいので、以下のように追記します。
(ここから、全体ではなく、該当箇所の変更部分を書いています。)

```jsx
function Square() {
  return <button className="square">1</button>
}
```

---
### BoardコンポーネントをSquareを使う方法に変更しよう。
```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```

---
### Squareコンポーネントの値を変更できる様にしよう
```jsx
function Square({value}) {
  return <button className="square">{value}</button>;
}
```
これで、valueという値を使って、ボタンのラベルを変更することができます。
...一回全部消えるかも...文字がなくなったので...

------
### Boardコンポーネントにvalueを使って値を渡そう
```jsx
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}
```

---
### Squareをインタラクティブにしよう
```jsx
function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
```
クリックすると、デベロッパーツールのConsoleに「clicked!」と表示されますね。

---
### 一度、Squareをリセット


---
### 状態を保存できる様にしよう
Square コンポーネントに、クリックされたことを「記憶」して “X” マークを表示してもらうことにします。何かを「記憶」するために、コンポーネントは state というものを使用します。

React は、useState という特別な関数を提供しており、コンポーネントからこれを呼び出すことで「記憶」を行わせることができます。Square の現在の値を state に保存し、Square がクリックされたときにその値を変更しましょう。

ファイルの先頭に追加
```jsx
import { useState } from 'react';
```


---
### Squareを、state対応に
```jsx
function Square({ value }) {
```
を、
```jsx
function Square() {
```
にして、中の1行目に追加
```jsx
const [value, setValue] = useState(null);
```

---
### 状態を持たせるので、Squareをリセット
value書いてあるのに、消えましたね。もう意味ないので、
```jsx
        <Square value="1"/>
```
を全て(9つ)変更
```jsx
        <Square/>
```

---
### クリックして「x」を表示させよう
```jsx
  function handleClick() {
    console.log('clicked!');
  }
```
を
```jsx
  function handleClick() {
    setValue('X');
  }
```

---
### CSS追加
押しずらいのでsrc/App.cssの一番下に以下を追加
```css
.square {
  background: #fff;
  color: black;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}
```

クリックして「X」が付くことを確認足ましょう。

---
### React Components Tools
Chromeを使っていると思いますが、
- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

を追加して、コンポーネントの状態を見れる様にしましょう。

追加すると、デベロッパーツールにComponentsタブが追加されて、Stateが変化する様子を確認することができます。

---
### 構成部品は全て揃った!
ゲームにするには、
> 完全に動作するゲームにするためには、盤面上に交互に “X” と “O” を置けるようにすることと、勝者を決めるための方法が必要です。

ゲームの状態をSquareコンポーネントが各自で持っていますが、Board が 9 つの Square コンポーネントそれぞれの現在の state を、何らかの形で知る必要があります。

>ゲームの state を各 Square ではなく親の Board コンポーネントに保持させることです。Board コンポーネントは、それぞれの Square に、何を表示するのか props を使って伝えることができます。以前にマス目に数字を渡したときと同じですね。

---
### Boardに配列で状態を持たせる。
export default function Board()の一行目に
```jsx
  const [squares, setSquares] = useState(Array(9).fill(null));
```

---
### 配列に応じて表示させよう
Boardのreturnの中を
```jsx
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
```

---
### クリックして変化されるけど、配列に反映されてないので...
一度、Squareをこれに戻しましょう。
```jsx
function Square({value}) {
  return <button className="square">{value}</button>;
}
```

---
### 
Squareをクリックしたときに、onSquareClickを呼び出す様にしましょう。
```jsx
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

---
### 1マス目にonSquareClickを設定しよう
```jsx
        <Square value={squares[0]} onSquareClick={handleClick} />
```

handleClickが定義されていないので、エラー出ます。定義してみましょう。
Boardの関数のなか、returnの前に以下を追加

```jsx
function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
```

---
### 1マス目以外でも動くように改造しよう
```jsx
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
```

Squareコンポーネントを以下の様に変更。9つとも変更しましょう。
```jsx
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
```

これで、Boardに状態を持たせたまま、マス目をクリックできる様になったはずです。

---
### 手番の処理
> さて、この三目並べゲームの重大な欠陥、すなわち “O” がまだ盤面上に出てこないという問題を解決する時間がやってきました。
> 
> まず先手がデフォルトで “X” になるようにしましょう。現在の手番を追跡するために、Board コンポーネントにもう 1 つ state を追加しましょう：

```jsx
  const [xIsNext, setXIsNext] = useState(true);
```

---
### xIsNextが真ならば、「X」, 偽なら「を表示させたいので
```jsx
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
```
これで、X,Oを交互に表示させることができる様になりました。

---
### 既にマス目が入っている場合には、クリックできちゃいけないので...
既に値が設定されてる場合には、何もしない様にするために
```jsx
function handleClick(i) {
  if (squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  //...
}
```
これで空いているマス目にだけ X や O を追加できるようになりました！ 

---
### 勝者の宣言 
> プレーヤが交互に着手できるようになったので、次は勝者が決まった際やこれ以上ゲームを進められなくなった際に、そのように表示することにしましょう。これを実現するために、9 つのマス目の配列を受け取って勝者を判定し 'X'、'O' または null を返す、calculateWinner という名前のヘルパー関数を追加します。
> 
> calculateWinner 関数の中身は React 特有のものではありませんので、あまり気にしないようにしてください。


---
### caluculateWinner関数
```jsx
export default function Board() {
  //...
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

---
### クリックされた時にcalculateWinner(squares)を呼び出す
Board コンポーネントの handleClick 関数で calculateWinner(squares) を呼び出して、いずれかのプレーヤが勝利したかどうか判定します。
```jsx
function handleClick(i) {
  if (squares[i] || calculateWinner(squares)) {
    return;
  }
  const nextSquares = squares.slice();
  //...
}
```

---
### 判定結果の表示
ゲームが終了したことを知らせるために、“Winner: X” または “Winner: O” というテキストを表示しましょう。これを行うため、Board コンポーネントに status の欄を追加します。このステータス欄は、ゲームが終了した場合に勝者を表示し、ゲームが続行中の場合は、次がどちらの手番なのか表示します。

---
### Boardの改造
```jsx
export default function Board() {
  // ...
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        // ...
  )
}
```

---
### 三目並べの完成！！！
>おめでとうございます！ これで、動作する三目並べのゲームができました。そして、あなたが React の基本を学ぶこともできました。本当の勝者はあなたです。ここでのコードは以下のようになっています

---
### 
```jsx
import { useState } from 'react';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

```

---
### チュートリアルでは引き続き
> タイムトラベルの追加 
> 最後の演習として、ゲームを過去の手番に「巻き戻す」ことができるようにしましょう。

が追加されてるけど、やりたい人はやってみましょう。

- [チュートリアル：三目並べ](https://ja.react.dev/learn/tutorial-tic-tac-toe)

初年度だから、時間どうなるかなぁ...

---
### まとめ
今日は、Reactをやってみました。

フロントエンドエンジニアはこんなことをやってるのかー、
ということを理解してくれれば幸いです。

エラーが出ると、めげますが、
一つ一つ作り上げて、最後に動いた時に嬉しいのがプログラミングです。

興味ある人は、この辺も視野に就活していきましょう。

来週からは、ポートフォリオサイトの作成(htmlでもwordpressでも)に入ります。

<!--

---
---
### Vite+tictactoe

- [ViteでReactの三目並べチュートリアルをする](https://zenn.dev/shuichi/scraps/2ecbdfeb9a41da)

- [チュートリアル：三目並べ](https://ja.react.dev/learn/tutorial-tic-tac-toe)

最低限は
```Javascript
import './App.css'

export default function Square() {
  return <button className="square">X</button>;
}
```

---
Sandboxからもらってきて 「color: black;」追加
```CSS
.square {
  background: #fff;
  color: black;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.board-row:after {
  clear: both;
  content: '';
  display: table;
}

.status {
  margin-bottom: 10px;
}
.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 20px;
}

```