---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン演習I 5.CSS実践
footer: ""
---

# 情報デザイン演習I 5.CSS実践<!-- omit in toc -->

---
- [ボックスモデル](#ボックスモデル)
- [3-9 幅と高さを指定しよう](#3-9-幅と高さを指定しよう)
- [3-10 余白を調整しよう](#3-10-余白を調整しよう)
- [3-11 線を引こう](#3-11-線を引こう)
- [3-12 リストを装飾しよう](#3-12-リストを装飾しよう)
- [IDとクラス](#idとクラス)
- [3-13 クラスとIDを使った指定方法](#3-13-クラスとidを使った指定方法)
- [3-15 デフォルトCSSをリセットしよう](#3-15-デフォルトcssをリセットしよう)
- [おまけ animtate.css](#おまけ-animtatecss)




# 前回のおさらい<!-- omit in toc -->
- Chapter 3 Webのデザインを作る！CSSの基本
  - 3-1 CSSとは
  - 3-2 CSSを適用させる方法
  - 3-3 CSSファイルを作ろう
  - 3-4 CSSの基本の書き方を身につけよう
  - 3-5 文字や文章を装飾しよう
  - 3-6 Webフォントを使おう
  - 3-7 色をつけよう

とやリました。

---
## 3-8 背景を彩ろう<!-- omit in toc -->
ざっと紹介するに留めます。

理由は、覚えられないので、何ができるか知っているだけで十分であり、
使いたい時に見返したり、検索すれば十分です。

背景関係のプロパティもどんどん増えている気がします。

<!--
- CSSの基本文法
   - HTMLとCSSの役割分担
   - CSSの表記方法
   - CSSの記載箇所
   - ID/class
   - セレクタ
   - ボックスモデル
   - リセットCSS/ノーマライズCSS
-->
<!--
## CSSでデザインしてみよう
前回、header,main,footerというタグを使ってとりあえずエリアを作成してみました。
もう少し実践的にやってみましょう。

---
### LINEの様なインターフェイスを作ってみよう
HTML,CSSの基本について学びましたが、まだ、実際にどうデザインしていくのかよくわからないと思います。
実際に、HTML,CSSを作成してデザインしてみましょう。

---
### 手順
1. 「ID_05」フォルダを作成
2. [animals.zip](asset/animals.zip)をダウンロードして解凍してID_05の中へ
3. line.htmlを作成
4. 最低限のHTMLを作成
5. PDFの指示に従いHTMLを作成
6. styleタグを使って(外部でなくてもOK)、同じになる様にCSSを作成
7. 知らなそうなHTMLタグ・CSSプロパティはPDFに書いてあります。

[PDF](kadai_05_line_if.pdf)/[やってみた動画](https://www.youtube.com/watch?v=pBoKzm8oLJc)

※ 動画少し古いので、利用してるアプリVSCodeでないです。
※ inputタグ横に飛び出る場合はSIZEの数字を小さくしてください。
※ Footerの上に隙間ができる様であれば、margin値を調整してみよう。
-->

<!--
## 画像の作成

---
### Web用の画像
1度もWeb用の画像を作成してないので、ここでやっておきましょう。

どの様なフォーマットでWeb用画像として書き出すか学んでいきましょう。

---
### やってみよう
200px 200px 72dpiで新規作成し
1. 背景は白、黒文字でHELLOと書いたファイル
2. 背景は透明、黒文字でHELLOと書いたファイル
3. グラデーションを斜めにかけたファイル

の3種類を作ってみましょう。

---
### Web用に書き出し
書き出し方法は6種類あるのですが
[参考:Web用保存は古い!? JPEG画質が改善したPhotoshop CC 2015の新方式の画像保存機能まとめ](https://ics.media/entry/7689/)

今回は「ファイル」- 「書き出し」-「Web用保存(従来)...」を使います。
「ID_05」フォルダに「img」をフォルダを作成して

1. hello.png(PNG-8 128ディザ)
2. hello-transparent.png(PNG-8 128ディザ)
3. gradation.jpg(JPEG 高)

として保存しましょう。

---
### GIF,JPEG,PNGわかるかな？
教科書のP.46-P.50をおさらいしておきましょう。

---
### 結論?
- 背景に馴染む様に透過したいならPNG-32(PNG24+透過)
- 背景透過必要がなく写真ならJPG。目で見て問題がないレベルまで品質を下げる
- ロゴなど256色以下しかない場合はPNG-8(透過)
- 256色以下でアニメーションさせたいならGIFアニメーション

---
### WebP
Photoshop 23.2よりWebPがネイティブサポートされるようになりました。
[Photoshop での WebP ファイルの操作](https://helpx.adobe.com/jp/photoshop/kb/support-webp-image-format.html)

GoogleはWebPを次世代フォーマットと位置付けていて推奨していますが、もう少し様子をみても良い気がしなくもありません。
(来年度にはWebPで統一しましょう、となっている可能性はあります。)
[WebP導入のメリット・デメリットと対応ブラウザ](https://www.tsuyoshikashiwazaki.com/blog/introducing-webp/)

---
### images.html
それではimages.htmlというHTMLファイルを作成して、3つの画像を貼り付けてみましょう。

---
### 答え
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>images</title>
    </head>
    <body>
        <img src="img/hello.png">
        <img src="img/hello-transparent.png">
        <img src="img/gradation.jpg">
    </body>
</html>
```

---
### cssを加えよう
内部スタイルシートで良いです。
styleタグを使って、bodyの背景色を#888888にしてみましょう。

---
### 答え
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>images</title>
        <style>
            body {
                background-color: #888888;
            }
        </style>
    </head>
    <body>
        <img src="img/hello.png">
        <img src="img/hello-transparent.png">
        <img src="img/gradation.jpg">
    </body>
</html>
```

---
### なんか汚くない？？
透明な背景のPNG画像が汚くなったかと思います。

なんででしょうか？もう一度Photoshopに戻って「Web用に保存(従来)...」のウィンドウを見てみましょう。

---
### マット
マットにカーソルを合わせると
> 透明ピクセルと合成させるカラーを定義

と書いてあります。
マットが有効なのはPNG-8,GIFの二つのみです。

---
### 透明と言っても
PNG-8,GIFでは透明か、透明でないか->つまり、0%か100%しか定義できません。
そのため、マット色を設定することによって滑らかに見えるように処理がされます。


PNG-24では%指定することが可能です。

---
### ってことは
背景が
>#888888

なので、マットも
>#888888

にして保存すれば汚くなりません。新たに「hello-transparent-grey.png」として保存してhtmlファイルに追加しましょう。

---
### 色関係について予備知識
- WebではRGBを使い、CMYKは使いません。


## animate.css

---
### animate.cssとは
CSSで簡単にアニメーションを作成できるanimate.cssを使ってみましょう。


---
### どんなことができるかみてみよう
「animate.css」でググって、右の項目をクリックしてみよう。

[animate.css](https://animate.style/)

---
### 使ってみよう。
1. 新たにanimate.htmlを作成
2. h1を含むHTMLを作成しよう
3. Or add it directly to your webpage using a CDNと書いてあるところのリンクタグをコピペしよう。
4. h1を次の様にしてみよう。
> <h1 class="animate__animated animate__bounce">

「animate__bounce」の代わりに、ページの右の項目の右の方にコピーできるボタンがあるので、それを貼り付けるとアニメーションのタイプが変わります。

---
### 答え
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>animate</title>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
    </head>
    <body>
        <h1 class="animate__animated animate__bounce">HELLO WORLD</h1>
    </body>
</html>
```

-->

## ボックスモデル
シラバスでは
> 4. CSSの基本 CSSの基本文法・クラス/ID・継承・ボックスモデルについて学修する。

となっていますが、クラス/ID, ボックスモデルについては触れませんでした。

教科書に入る前に、BOXモデルについて触れます。(クラス/IDは3-13で触れます。)
先に説明してから、教科書の3-9,10,11について説明していきます。(内容は同じこと)

---
### CSSボックスモデルとは？<!-- omit in toc -->

---
#### CSSにおける要素とそのデザインに関する考え方<!-- omit in toc -->
教科書では単語が出てきませんが**ボックスモデル**という考え方は非常に大事です。

CSS では全ての要素にボックス (箱) を想定します。そして、箱の 
- コンテンツの大きさ
- 箱の内側の余白
- 箱の枠線 (境界線)
- 箱の外側の余白

という概念を持ちます。

---
![](img/Boxmodel-detail.png)

---
#### ボックスモデルのプロパティ<!-- omit in toc -->
##### コンテンツの大きさ<!-- omit in toc -->
height,width
##### 箱の内側の余白<!-- omit in toc -->
padding 
##### 箱の枠線(境界線)<!-- omit in toc -->
border 
##### 箱の外側の余白<!-- omit in toc -->
margin 

---
#### ボックスモデルの確認<!-- omit in toc -->
デベロッパーツールを利用するとどの様にボックスモデルが設定されているか確認することができます。
これは、CSS を作成する時には非常に重要となります。

CSSでは
- 文字の色やフォントサイズを指定すること

ももちろん大事ですが
- 要素をどのようにレイアウトするか

が非常に大事だからです。

---
#### 読み方<!-- omit in toc -->
読みづらいので...
- [width](https://www.google.com/search?q=%E7%99%BA%E9%9F%B3+width)
- [height](https://www.google.com/search?q=%E7%99%BA%E9%9F%B3+height) ...なぜかhiteになってますが、発音はあってます。

---
#### box-sizing<!-- omit in toc -->
幅と高さをどう考えるか、という計算方法は以下の二通りあります。
デフォルトではcontent-boxになっていますが、レスポンシブデザインなどを考える時には、圧倒的にborder-boxにした方が楽になります。

- box-sizing: content-box;
paddingとborderの値をwidth,heightに含まない方法
- box-sizing: border-box;
paddingとborderの値をwidth,heightに含む方法

ある、ということだけ覚えておきましょう。

---
#### box-sizingの指定方法<!-- omit in toc -->
```CSS
* {
    box-sizing: border-box
}
```

と記載することで、HTMLの全ての要素に適応させることができます。

----
#### subgrid<!-- omit in toc -->
まだ全然早いですが、2023/9月末にsubgridというプロパティも利用できるようになっています。

忘れると嫌なので、ちょっとここで触れておきます。

- [CSSのsubgridがすべてのブラウザにサポートされたので、カード内の見出しやテキストを簡単に揃えることができます](https://coliss.com/articles/build-websites/operation/css/use-subgrid-give-child-elements-access-to-a-parents-grid.html)


## 3-9 幅と高さを指定しよう

---
### サイズを指定しよう「widthプロパティ」「heightプロパティ」<!-- omit in toc -->
widthが幅で、hightが高さでしたね。

死ぬほど使います。このスペル、読み方は忘れないように。

---
### やってみよう<!-- omit in toc -->
- **ID_ROOT**の中に**ID_05**として今日の作業フォルダを作成しよう
- その中に**c3-09**フォルダを作成しよう
- P.130の右のHTMLを**c3-09-1.html**として作成しよう
- **style.css**を作成してP.130の左のCSSを記述してみよう。

htmlの書き方復習です。style.cssにリンクするやり方はわかるかな？
h1, h2, pはdivタグの中に入れましょう。
わからなかったら、4回目のコードをみましょう。

---
### c3-09-01.html<!-- omit in toc -->
bodyタグの中は以下の様になります。適当な文章を入力するときは「lorem20」とかでしたね。

```html
    <div>
        <h1>猫の1日</h1>
        <h2>ひたすら寝ています。</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat </p>
    </div>
```

---
### 幅をautoと指定すると<!-- omit in toc -->
```CSS
div {
    width: auto;
}
```
の意味です。これは、親要素と同じ大きさを意味し、
```CSS
div {
    width: 100%;
}
```
と同じ意味になります。

style.cssを変えてみよう。

---
### 継承について<!-- omit in toc -->

```css
div {
    width: 500px;
    width: auto;
    width: 100%;
}
```
のように記載すると、**width:100%;**が有効になります。後から書いたものが有効だからです。インスペクタでもみてみましょう。

---
### Webサイト上で使う単位とは？<!-- omit in toc -->
- 絶対単位：他の要素に影響を受けないして方法
  - px 最も一般的な単位
- 相対単位：ブラウザの表示領域や親要素等のサイズを基準にして指定する方法
  - % 親要素を基準とした問いの単位
  - em 親要素のフォントサイズを基準にした単位(印刷業界で用いられていた単位で、大文字の M を基準としたサイズ表記が由来)
  - rem ルート要素(html)のフォントサイズを基準にした単位(root+width)
  - vw ビューポート(Webサイトを閲覧している時の表示領域)の幅を基準とした単位で1/100(viewport width)
  - vh ビューポートの高さを基準とした単位で、1/100(viewport height)

使える単位もまだまだ増えています。
- [【CSS】ビューポート単位が新しく追加されました。](https://qiita.com/degudegu2510/items/eef61a4a170d4ead0e73)

---
### なぜこんなにいっぱい単位があるの？<!-- omit in toc -->
簡単に言えば、楽になるからです。

どれを使うかの正解はありませんが、人によって使い分けをしている人もいます。

- [【px・em・rem・%】CSS単位の使い分けについて考察](https://pengi-n.co.jp/blog/unit/)

とはいえ、最初はpx, %, emあたりから利用していけばいいと思います。

## 3-10 余白を調整しよう

---
### 余白の概念<!-- omit in toc -->
ボックスモデルの説明でも触れましたが、
- margin: 要素の入れ物から他の入れ物までの余白
- padding: 要素の入れ物から中身(コンテンツ)までの余白

の二つがあります。

---
### CSSでの書き方<!-- omit in toc -->
上下左右全てに指定する場合には
```css
div {
    margin: 20px;
    padding: 10px;
}
```
のように記述します。

上下を20px, 左右を10pxにしたい場合には
```css
div {
    margin: 20px 10px;
    padding: 20px 10px;
}
```
のように記述します。(もちろん、marginとpaddingの値は違っていても構いません。単位も混在できます)

---
### CSSでの書き方<!-- omit in toc -->
上下左右全てバラバラに例えば上：10px、右：20px、下：30px,左：40pxにする場合には
```css
div {
    margin: 10px 20px 30px 40px;
    padding: 10px 20px 30px 40px;
}
```
の様に記述します。(もちろん、marginとpaddingの値は違っていても構いません。単位も混在できます)

スペースをはさんで、上から時計回りの順に指定すると覚えれば良いでしょう。

二つの場合には、上、右->上下、左右に読み替えればいいかな。

---
### CSSでの書き方<!-- omit in toc -->
一つ一つ個別に指定する場合には、専用のプロパティがあり
```css
div {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```
と記述できます。

---
### 今は知らなくていいけど<!-- omit in toc -->
「マージン相殺」という言葉があるので、触れておきます。

- [CSSにおけるマージンの相殺を徹底解説](https://coliss.com/articles/build-websites/operation/css/rules-of-margin-collapse.html)

簡単にいうと、上下のmarginに関しては、数字の大きい方が有効ということです。

---
### 余白を使ってグループ化する<!-- omit in toc -->
> [(参考)デザインの4原則](https://designpartner.jp/principle/)

4原則は「近接」「整列」「反復」「対比」ですが、
> 近接：関連する要素をグループ化し、整理することで情報を関連づける

をレイアウトするには余白(margin)が必要となります。

---
### 枠と文字の間に余白を作ろう<!-- omit in toc -->
余白がないと読みづらくなりますが、この場合の余白は(padding)となります。


## 3-11 線を引こう

教科書ではborder-width,border-style,bordercolor

の順で説明してから

- border

を説明していますが、個人的にはborderだけを使うことが多いです。

そして、上下左右の特定の値を変えたい時には
> border-top, border-right, border-bottom, border-left

を利用しています。

---
### borderの例<!-- omit in toc -->
例えば、見出し部分を目立たせたいな、というときに

```css
h2 {
    border-left: 10px solid black;
    border-bottom: 1px solid black;
    padding-left: 10px;
}
```

とか簡単によく使います。


## 3-12 リストを装飾しよう
ざっと教科書に沿って説明します。

```css
ul {
    list-style-type: none;
}
```
くらいしか自分はあまり使いません(メニューでよく使います。)

## IDとクラス
非常に大事な考え方です。しっかり押さえましょう。

HTMLタグでclass,idを指定し、それに対してCSSで装飾をつけることができます。

---
### クラス,IDの違い<!-- omit in toc -->
- どちらもHTMLのタグを分類することができます。
- クラスによって同じHTMLタグを分けて指定することができる様になります。
- IDはページ内で同じID名を使うことができません。
- クラスはページ内で同じクラス名を複数回利用することができます。

---
### クラス名,ID名のルール<!-- omit in toc -->
- 空白を入れない
- 英数字とハイフン「-」、「_」を使う
- 一文字目は必ず英字(小文字が安全)


---
### HTML・CSSでのclass,idの表記方法<!-- omit in toc -->
HTMLでは
```html
<p id="important">段落</p>
<p class="boy">段落</p>
```
の様に記述して指定します。CSSでは

```css
#important {

}
.boy {

}
```
のように、IDは「#」, クラスは「.」を使って記述します。

---
### CSSでのタグとID or クラスの表記方法<!-- omit in toc -->
```
p#id {

}
p.boy{

}
```
のように記述することで、
> pタグで、IDがid, またはクラスがboy

の様に指定することもできます。

---
### クラスとIDの優先順位<!-- omit in toc -->
クラスの指定よりIDの指定が優先されます。

---
### IDによるページ内リンク<!-- omit in toc -->
```html
<a href="#top">トップに戻る</a>
```
のような書き方で、「id="top"」と指定されたところにリンクすることができます。

---
### aタグの擬似クラス<!-- omit in toc -->
ちょっと脱線しますが、aタグでは以下の様にして状態に応じてCSSを設定することもできます。
```css
a {
    /* aタグの装飾 */
}
a:hover {
    /* マウスをオーバーした時 */
}
a:link {
    /* リンク先に未訪問の時 */
}
a:visited {
    /* リンク先が訪問済 */
}

```
下線を消したい時には「text-decoration:none;」をaタグに、色を変えたいときはそれ以外の指定方法を使うことが多いです。

---
### やってみよう<!-- omit in toc -->
男の子と女の子の会話をちょっとステレオタイプ(色を青と赤)に作成してみましょう。
- c3_id_classフォルダをID_05の中に作成
- index.html, style.cssを作成
- index.htmlからstyle.cssへのリンクを作成
- bodyタグの中は
  - h1で見出しを作成、idをtopとしよう。
  - pタグでクラスがboy, girlのものを作成して、ページがスクロールするくらいコピーしよう。(文はlorem10とかでOK)
  - 最後にaタグでtopに戻る様に作成しよう。

---
### やってみよう<!-- omit in toc -->
- h1は
```css
    border-left: 10px solid gray;
    border-bottom: 1px solid gray;
    padding-left: 10px;
    color: #333;
```
- pの幅は30%に。
- boyクラス、girlクラスは文字色はそれぞれblue, redにして、周りを「1px dashed black」で囲もう
- 詰まっているので、pタグのpaddingを5pxにしよう。
- girlクラスは左のマージンを70%に設定しよう。
- aタグは文字色を白、背景を黒、下線を無くして、paddingは10pxにしよう。

---
### おまじない<!-- omit in toc -->
```css
html {
    scroll-behavior: smooth;
}
```
とすると、ページ内リンクをクリックしたときに、アニメーションしながら動きます。

---
### 変なとこないかな...<!-- omit in toc -->
ページの左に余白あるけど、右に余白ないね。

30%と70%で100%だから右と左同じになりそうなのに。

なんでだろう。

Webインスペクタで考えてみよう。

---
### 答え<!-- omit in toc -->
> bodyのmarginが8pxになっているから

これは、ブラウザのデフォルトでそうなっています。

## 3-13 クラスとIDを使った指定方法
教科書を使ってもう一度復習してみましょう。

---
## 3-15 デフォルトCSSをリセットしよう
ブラウザはデフォルトである程度パラメータが決まっているのだけれど、これがブラウザによって異なるため非常に厄介となります。

それなら、設定をリセットするCSSを作ればいいじゃないか、ということで
- リセットCSS
- ノーマライズCSS

と呼ばれる方法が使われています。

---
### どうすればいい？<!-- omit in toc -->
CSSの機能が拡張するため、
> リセットCSS 2023

等と調べるのがおすすめです。

- [2023年、現在の環境に適したリセットCSSのまとめ](https://coliss.com/articles/build-websites/operation/css/css-reset-for-modern-browser.html)

教科書では「ress.css」を推奨してる様ですが、このリストにありません(汗)

- [【2023年版】おすすめのリセットCSS（reset.css）3選【CDNのコピペあり】](https://zenn.dev/yurukei20/articles/ffdbde17cd0853)

こっちにはありました。そんなものです。

## おまけ animtate.css
CSSで簡単にアニメーションさせるライブラリがあります。

- [animate.css](https://animate.style/)

時間があまりそうなら、これを使って遊んでみましょう。

---
### 今日はこんなものかな？<!-- omit in toc -->

2,3章は大体終わって

- 2-13 ブロック要素でグループ分けをしよう
- 3-14 レイアウトを組もう

はセットで、7回目に教える予定です。

- 3-16 よく使うCSSプロパティ一覧

は、参考資料扱いなので、必要な時にみましょう。

---
### 来週の予定<!-- omit in toc -->
来週は、少し教科書離れた内容で
- セマンティックコーディング
- これまでの内容の演習

をやろうと思います。 

お疲れ様


