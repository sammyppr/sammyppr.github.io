---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習I 9. 最近のCSSレイアウト事情
footer: ""
---

# 情報デザイン応用演習I 9. 最近のCSSレイアウト事情<!-- omit in toc -->

# 目次<!-- omit in toc -->

1. [初めに](#初めに)
   1. [float](#float)
   2. [Flexbox](#flexbox)
   3. [CSS Grid](#css-grid)
2. [まとめ](#まとめ)



# 初めに

---
### 前回の内容
前回、
- Wordpressの開発環境構築
- CUI入門

を行いました。
今日は一回CSSをおさらいして、触れるようであれば、wordpressをもう少し触ってみましょう。

---
### CSS覚えてますか？
1年ぶりなので、忘れている人も多いと思いますので、おさらいしたいと思います。
また、
- flexbox
- css grid

これの利用が確定になっていますので、もう一度やってみましょう。

---
### id, class
HTMLでid, classを設定し、それについてCSSで指定をしましたよね。

```
<div id="myid"></div>
<div class="myclass"></div>
```
等とHTMLで指定した後CSSで

```
#myid {
}
.myclass {
}
```
で記述しましたよね。

---
### id, classの違い
- id: 1ページに1回のみ指定
- class: 1ページに複数回指定可能

でしたね。


---
### 最近のCSSレイアウト事情
色々進化が早くて困る...
全部最新を使わなければいけないわけではありませんが、
最新の方がより効率的に開発できるのでいくつか紹介していきます。

---
### メディアクエリ
その前にメディアクエリ覚えているでしょうか？

```
@media (min-width: 1480px){
   
}
```
等としてウィンドウサイズによってCSSの切り替えができましたね。

---
### range指定
```
@media (600px <= width < 800px) {
}
```
今後は、range指定と呼ばれる、より直感的な記述法が使えるようになりました。
ただ、まだ普及途中なので、どちらでも使えるように(読めるように)しておきましょう。


---
### コンテナクエリ
2023/2/14にFirefoxが対応してから**コンテナクエリ**という新しい考え方が利用できるようになりました。

```
@container (min-width: 300px){

}
```
とすることで、ウィンドウサイズではなく、コンテナ要素のサイズによってレスポンシブ設定することができるようになりました。

---
### コンテナクエリ
ちょっと確認してみましょう。

- [CSS コンテナクエリ（@container）の基礎知識と便利な使い方を解説](https://coliss.com/articles/build-websites/operation/css/about-css-container-queries.html)

まだ2年弱ですが、確実にこのコンテナクエリも必須な知識となると思います。

---
### CSS 関数
CSSでの定義に関数を使うことも可能になってきています。
そろそろ当たり前の時代に入りつつあります。少しみてみましょう。

- [全部使ったことある？便利なCSS関数12選！！](https://ginneko-atelier.com/blogs/entry462/)

- [最近リリースされたCSSの新機能と新しい関数のまとめ](https://coliss.com/articles/build-websites/operation/css/new-values-and-functions-in-css.html)

---
### Flexbox, CSS Grid
FlexboxとCSS Gridも思い出しておきましょう。
- [FlexboxとCSS Gridの違いと使い分け｜よくあるレイアウトで理解する](https://webliker.info/css/flexbox-grid/)

---
### subgrid
CSS Gridでかなり表現力が上がったのですが、入れ子表現ができない、という問題がありました。
これを解決するためのsubgridという機能も徐々に使われてきています

- [CSSのSubgridが全ブラウザ対応。Gridの入れ子の基本から応用までを完全理解する](https://zenn.dev/tonkotsuboy_com/articles/css-subgrid-all-browsers)


---
### モダンCSS
これもチェックしておきましょう。
- [2023年モダンCSSの最新トレンド](https://speakerdeck.com/tonkotsuboy_com/2023nian-modancssnozui-xin-torendo)
- [2024年、CSSの最新トレンドにおける現状のまとめ、よく使用する新機能やプロパティや疑似クラス、人気のフレームワークや検証環境など](https://coliss.com/articles/build-websites/operation/css/state-of-css-2024.html)


---
### 見慣れないタグ...自分で定義できるHTMLタグがある
HTMLタグは元々ある程度定義されていますが、独自に定義のできる

- Web Components

というのも利用ができるようになっています。カスタム要素、カスタムタグ等とも呼ばれます。

これは、JavaScriptで独自のタグを定義することで利用可能となります。
ソースを読んでて、よくわからない、というときにはこれを怪しんでみましょう(JavaScriptの方も見ないといけないですが)

- [【2024年版】Web Components詳細入門ガイド](https://kinsta.com/jp/blog/web-components/)

---
### というわけで
おさらいしてみましょう。

ここから、完全に昨年のおさらいとなりますが、floatはやらなくていいです。


---
### やってみよう
今日の作業フォルダを作成してから、

> float/FlexBox/CSS Grid入門

の「floatはレイアウトを組むのには厄介！」をやって見ましょう。

---
### floatのデメリット
- clear: bothしないと、変な回り込みを起こす
- 要素の高さがバラバラ

## Flexbox

---
### Flexboxとは？
正式名称はFlexible Box Layout Moduleといいます。

今までよりも自由に、そして簡単に横並びのレイアウトを作ることができます。
フレキシブル（柔軟性のある）レイアウトができます。

---
### Flexboxの長所
あくまでも基本は要素を横に並べるためのものですが、
- 要素の高さを自動で揃えてくれる
- 要素が多くなり、横並びできなくなると自動で折り返してくれる
- 余白の調整が簡単
- 並び順を自由に変えられる(逆とか)

---
### Flexboxの使い方
要素が並ぶ箱に
> display: flex
を追加するだけです。

---
### やってみよう
「Flexboxは横並びに便利」をやって見ましょう。

## CSS Grid

---
### CSS Grid
CSS Grid Layoutが正式名称となります。

Flexboxが1次元だったのに対し、CSS Grid Layoutでは2次元レイアウトを作成することが可能になります。


---
### これからのWebデザイン
間違いなく
- Flexbox
- CSS Grid Layout

によるレイアウトに移行していきます。それではCSS Grid Layoutに入っていきましょう。

---
### 2次元レイアウト
それでは2次元レイアウトとはなんでしょうか？

今の所多くのデバイスは液晶ディプレイにWebを表示していますから、2次元ですね。

ということは、サイトデザインをこの方法でレイアウトすることが可能となります。

---
### 具体的には
マス目を用意しグリッドを作成し好きな順番に配置したりすることで様々なレイアウトが可能になります。

---
### 用語
#### HTML要素
- コンテナ グリッド全体を囲む要素
- アイテム コンテナの子要素

### 概念
- ライン グリッドを分ける垂直および水平線のこと。上下左右の端にも存在する
- トラック グリッドの行と列
- セル ラインで囲まれる最小単位
- エリア 一つ又は複数のセルが結合してできるセルの集まり

---
### やってみよう
「CSS Grid Layoutは簡単！」をやって見ましょう。

# まとめ

---
### チートシート
- [Flexboxチートシート](https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet#flexbox14)
- [CSS Grid Layoutチートシート](https://qiita.com/7dt/items/577ba8eada3380c93dbb)

---
### どう使い分ける？
float/Flexbox/CSS Grid
と3種類ありますが、以下の様にすると良いでしょう。
#### float
純粋に画像などの回り込みに利用する

#### Flexbox
同様の要素を複数並べるときに利用する

#### CSS Grid
サイト全体をレイアウトする

---
### レスポンシブするには？
メディアクエリを利用して、gridのエリアを変更するだけですね！！！

これで余計なclear: both;など考えなくて良くなります。



# wordpress

---
### おさらい
- テーマを決める
- ⼦テーマを設定
- サイト構成の決定
- カテゴリの設定
- 固定ページの作成
- メニューの作成
- 必要に応じてプラグインインストール・設定

---
### 忘れちゃってる人もいると思うので、
わりと素晴らしいと思われるページを見つけました。
まずは、これからやっていきましょう。

- [Lightning G3 クイックスタート](https://lightning.vektor-inc.co.jp/setting/quick-start/)

### Ligntning G3をカスタマイズしてみよう
- [WordPressでホームページを自作する手順！無料テーマですぐに作れる](https://www.xserver.ne.jp/bizhp/homepage-creation-by-wordpress/)
