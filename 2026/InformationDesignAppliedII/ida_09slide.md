---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習II 9. HTML/CSS復習
footer: ""
---

# 情報デザイン応用演習II 9. HTML/CSS復習<!-- omit in toc -->

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
今日は一回CSSをおさらいして、時間が余れば、wordpressをもう少し触ってみましょう。

---
### CSS覚えてますか？
1年ぶりなので、忘れている人も多いと思いますので、おさらいしたいと思います。(今年初めての人もいるので、HTML含め少し丁寧にやります。ボックスモデルも必須ですね)

また、
- flexbox
- css grid

これの利用が確定になっていますので、もう一度やってみましょう。

---
### HTML 基本タグ
- [【初心者向け】HTMLのタグ一覧と書き方をわかりやすく解説](https://webst8.com/code/html-major-basic-tag/)
- [初心者向けHTML入門：書き方の基本とタグの使い方](https://saruwakakun.com/html-css/basic/html)

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
### ボックスモデル
Webのレイアウトに関する基本事項です。

- [ボックスモデル](https://zenn.dev/ojk/books/intro-to-html-css/viewer/css-boxmodel)

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

これ、HPを参考に実験しておきましょう。

---
### CSSのネスト(入れ子)
CSSを効率的に記述するために、SASS,SCSSという書き方がありました。
- [SassとSASSとSCSSの違いについて](https://popinsight.jp/blog/?p=91909)

ただし、これらは昔はCSSに変換して利用する必要がありました。

ですが、2023年あたりからネストして記述することがCSSでも可能になっています。

- [CSSネストの基本とメリット・デメリット](https://markleaps.com/2024/12/20/css-nesting/)



---
### CSS 変数(CSSカスタムプロパティ)
CSSがプログラミングの要素を取り入れてきています。

CSSでも変数が設定できるようになっています。

- [CSSで変数（カスタムプロパティ）を使ってみよう](https://www.webcreatorbox.com/blog/css-variables)


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
- [CSSの最新トレンド Ver.2025](https://speakerdeck.com/tonkotsuboy_com/cssnozui-xin-torendo-ver-dot-2025?slide=53)
- [【2025年保存版】モダンCSSに移行すべき6つの古い書き方](https://www.ryoma.online/css-migration-2025/)
- [2026年版：今すぐ使いこなしたいモダンCSS機能 13選](https://zenn.dev/tcool/articles/4eaf9529aca917)

---
### 見慣れないタグ...自分で定義できるHTMLタグがある
HTMLタグは元々ある程度定義されていますが、独自に定義のできる

- Web Components

というのも利用ができるようになっています。カスタム要素、カスタムタグ等とも呼ばれます。

これは、JavaScriptで独自のタグを定義することで利用可能となります。
ソースを読んでて、よくわからない、というときにはこれを怪しんでみましょう(JavaScriptの方も見ないといけないですが)

- [【2026年版】Web Components詳細入門ガイド](https://kinsta.com/jp/blog/web-components/)

詳しくはReact入門にてやってみようと思います。

---
### というわけで
flexbox/CSSGridおさらいしてみましょう。

ここから、完全に昨年のおさらいとなりますが、floatはやらなくていいです。


---
### やってみよう
今日の作業フォルダを作成してから、

> float/FlexBox/CSS Grid入門

の「floatはレイアウトを組むのには厄介！」はさらっとみて、それからFlexBox/CSS Gridに進みましょう。

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

---
### Flexbox,CSS Gridどう使うのが正解？

ここに関しては、考え方が揺れている気がします。
デベロッパーツールから、どの部分でFlexboxが使われ、どの部分でCSS Gridが使われているかをみてみましょう。
「flex」「grid」というバッジから見つけることができます。



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

<!--
これで余計なclear: both;など考えなくて良くなります。
-->



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
### 前回はCocoonを利用しましたが...
テーマの選び方が問題だという話はしました。
そして、前回はCocoonを利用し、

- [【Cocoon】ブログを30分で「それっぽい」デザインにする手順を紹介【難しい事しません】](https://www.youtube.com/watch?v=4T1d2VkbGM0)

を試してもらいました。

Cocoonかなり良いと思います。

ただ、問題は、やっぱり、
> デモサイト素晴らしいのに、同じ感じにならない...設定面倒

ということかと思います。

---
### もっと楽な方法
[VK FullSite Installer](https://vk-fullsite-installer.com/)を利用することで、デモサイトと同じ状態を簡単に作ることができます。Wordpressの設定・コンテンツの設定までをある程度やってしまい、あとは画像や文章の変更をする方法となります。これを試してみましょう。

---
### やってみよう
1. Localでの新規サイト作成
2. Setting-Generalで日本語・UTC+9は必須
3. [HPからプラグインをダウンロード](https://vk-fullsite-installer.com/)
4. LocalでPHPを8.3.23にアップデート(そうしないと使えない)
5. 次のHPから動画通りにすると、デモサイトがすぐに立ち上がります。
6. 設定では、ライセンス無料として、テーマは全部選択してみましょう。
7. 「Lightning 無料版 ビジネス」は試し済みです。

- [WordPressでホームページを自作する手順！無料テーマですぐに作れる](https://www.xserver.ne.jp/bizhp/homepage-creation-by-wordpress/)
