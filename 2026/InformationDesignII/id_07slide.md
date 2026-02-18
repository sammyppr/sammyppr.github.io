---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン演習I 7.Webレイアウト基本
footer: ""
---

# 情報デザイン演習I 7.Webレイアウト基本<!-- omit in toc -->
> float, Flexbox, CSS Gridによるレイアウトについて学修する。

---
- [今日の内容](#今日の内容)
  - [float](#float)
  - [Flexbox](#flexbox)
  - [CSS Grid](#css-grid)
- [まとめ](#まとめ)




# 前回のおさらい<!-- omit in toc -->
- Webレイアウトの基礎
   - 文書をHTMLで構造化する
   - HTMLアウトラインを確認する
   - セマンティックコーディングをしていこう
   - header/main/footer/aside/navタグ
   - article/sectionタグ

---
### 残っていること<!-- omit in toc -->
基本的な話はほぼ終わりに近づいています。本格的なレイアウトを組むための
- Flexbox
- CSS Grid

についてやってみましょう。(floatもおさらいします)


# 今日の内容

---
### FlexboxとCSS Grid<!-- omit in toc -->
前回、floatについて触れましたが、これからはレイアウトにfloatは使いません。

画面をレイアウトするときに利用するのが、
- Flexbox
- CSS Grid

になります。Flexboxが先に一般的になり、CSS Gridがその後にできた技術となります。現在は、どっちを使うか、で議論が起きている気がしますが、

一般的には

- Flexbox: 1方向に並べる時(折り返しあり)
- CSS Grid: 2次元にレイアウトする時

と言われています。

## float

---
### floatの難しいところ<!-- omit in toc -->
これまで2段組などレイアウトしていくときにはfloatを多用していました。

ただし、難しいところは、
> clear: both

としないと、レイアウトが簡単に崩れてしまうところです。

また、内容量によって、要素の高さが不揃いになるところも面倒くさい理由でした。


---
### 今日のPDF資料について<!-- omit in toc -->
レイアウトの実験が目的なので
- 内部スタイルシートを利用している(styleタグで、CSSを実装)
- header, main, footer等のセマンティックコーディングはしていないことに注意してください。


---
### やってみよう<!-- omit in toc -->
...と思ったけど、これは興味ある人だけ最後に試してみてください。

「ID_07」フォルダを作成してから、

> float/FlexBox/CSS Grid入門

の「floatはレイアウトを組むのには厄介！」をやって見ましょう。

---
### floatのデメリット<!-- omit in toc -->
- clear: bothしないと、変な回り込みを起こす
- 要素の高さがバラバラ

## Flexbox

---
### Flexboxとは？<!-- omit in toc -->
正式名称はFlexible Box Layout Moduleといいます。

今までよりも自由に、そして簡単に横並びのレイアウトを作ることができます。
フレキシブル（柔軟性のある）レイアウトができます。

---
### Flexboxの長所<!-- omit in toc -->
あくまでも基本は要素を横に並べるためのものですが、
- 要素の高さを自動で揃えてくれる
- 要素が多くなり、横並びできなくなると自動で折り返してくれる
- 余白の調整が簡単
- 並び順を自由に変えられる(逆とか)

---
### Flexboxの使い方<!-- omit in toc -->
要素が並ぶ箱に
> display: flex;
を追加するだけです。

---
### やってみよう<!-- omit in toc -->
「Flexboxは横並びに便利」をやって見ましょう。

## CSS Grid

---
### CSS Grid<!-- omit in toc -->
CSS Grid Layoutが正式名称となります。

Flexboxが1次元だったのに対し、CSS Grid Layoutでは2次元レイアウトを作成することが可能になります。

<!--
---
### CSS Gridはどのブラウザで使える？
caniuse.comで調べて見ましょう。

IEだけ微妙ですね。ところがです。
Microsoft社におけるIEのサポート終了が、2022/6/16になりました。

これで、全てのWeb関係者が頭を悩ます一つの要因が世の中から消えることとなります。
-->
<!--
---
### とはいえ...
こんな記事が...
https://www.itmedia.co.jp/news/articles/2205/23/news066.html

企業や自治体は早急な対応が求められます。
-->

---
### これからのWebデザイン<!-- omit in toc -->
間違いなく
- Flexbox
- CSS Grid Layout

によるレイアウトに移行していきます。それではCSS Grid Layoutに入っていきましょう。

---
### 2次元レイアウト<!-- omit in toc -->
それでは2次元レイアウトとはなんでしょうか？

今の所多くのデバイスは液晶ディプレイにWebを表示していますから、2次元ですね。

ということは、サイトデザインをこの方法でレイアウトすることが可能となります。

---
### 具体的には<!-- omit in toc -->
マス目を用意しグリッドを作成し好きな順番に配置したりすることで様々なレイアウトが可能になります。

---
### 用語<!-- omit in toc -->
#### HTML要素<!-- omit in toc -->
- コンテナ グリッド全体を囲む要素
- アイテム コンテナの子要素

### 概念<!-- omit in toc -->
- ライン グリッドを分ける垂直および水平線のこと。上下左右の端にも存在する
- トラック グリッドの行と列
- セル ラインで囲まれる最小単位
- エリア 一つ又は複数のセルが結合してできるセルの集まり

---
### やってみよう<!-- omit in toc -->
「CSS Grid Layoutは簡単！」をやって見ましょう。

---
### subgrid<!-- omit in toc -->
カード型のレイアウトを組む時には、CSS Gridでも内容量によってずれが生じることがありました。

今回はやりませんが、subgridという機能が追加されたため、揃えることが簡単にできるようになっています。

- [CSSのサブグリッド（subgrid）の基礎知識と使い方、たった一行のCSSで複数カードの水平グリッドを簡単に揃えられる！](https://coliss.com/articles/build-websites/operation/css/about-css-subgrid.html)

# まとめ

---
### チートシート<!-- omit in toc -->
- [Flexboxチートシート](https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet#flexbox14)
- [CSS Grid Layoutチートシート](https://qiita.com/7dt/items/577ba8eada3380c93dbb)

---
### どう使い分ける？<!-- omit in toc -->

#### float<!-- omit in toc -->
純粋に画像などの回り込みに利用する

#### Flexbox<!-- omit in toc -->
1方向に並べるときに利用する(改行あり)

#### CSS Grid<!-- omit in toc -->
サイト全体をレイアウトする

---
### 詳しい記事<!-- omit in toc -->
- [FlexboxとCSS Gridの違いと使い分け｜よくあるレイアウトで理解する](https://webliker.info/css/flexbox-grid/)

詳しくみていきましょう。


Flexbox/CSS Gridの使い分けに関しては多少議論があるようです。

- [実例で学ぶFlexboxとCSS Gridの使い分け](https://www.tak-dcxi.com/article/learning-by-example-flex-vs-grid-usage/)







---
### 教科書で復習しよう<!-- omit in toc -->
- 3-16「レイアウトを組もう」P.154~P.159
- 3-17「CSSグリッドでタイル型に並べよう」P.160-P.166

です。

これで、3章まで終わりました。

レイアウトの基本で漏れていることが
- 4-10 レスポンシブに対応させよう(P.206~214)

となります。仕組みだけ伝えて詳しくは次回にしようと思います。


---
### 追記:<!-- omit in toc -->
教科書ではmin-width, max-widthを使っていますが、これより「range-syntax」の方が直感的で分かりやすいです。

- [ついにSafariも。 media queryの範囲指定をより直感的に書ける記法が全ブラウザ対応へ](https://zenn.dev/moneyforward/articles/css-range-syntax)

---
### サンプル html<!-- omit in toc -->
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Query</title>
    <style>
        div {height: 50vh;}
        @media screen and (width<800px) {
            div {background-color: green;}
        }
        @media screen and (800px <= width <= 1000px) {
            div {background-color: red;}
        }
        @media screen and (1000px < width) {
            div {background-color: blue;}
        }
    </style>
</head>
<body>
    <div>
        <p>Hello</p>
    </div>
</body>
</html>
```

---
### 追記2:<!-- omit in toc -->
これも最近追加されましたが、CSSネストという方法が利用できるようになっています。

- [CSSネストの7つの書き方をマスター！Sassとの違いもサクッと解説](https://frontendclip.com/css-nesting/)


---
### レスポンシブ対応するには？<!-- omit in toc -->
メディアクエリを利用して、gridのエリアを変更するだけですね！！！

これで余計なclear: both;など考えなくて良くなります。




<!--

## CSS フレームワークについて理解する

---
### CSSフレームワークとは？(P.196〜)
- Bootstrap とは?
- 「レスポンシブ Web デザイン」を構築していく作業も必要ない
- CSS のスタイルを適用するのにクラス名を追加する

---
### Bootstrapグリッドレイアウト(P.199〜)
- グリッドレイアウトの仕組み

---
### Bootstrapのグリッドレイアウトを理解する(P.202〜)
- 設定済みのブレークポイントとクラス名

---
### P.203〜
1. 07-02.html を作成
2. 最小限の HTML を入力
3. 次スライドを見て、Bootstrap を利用するコードを head タグ内に貼り付け
4. body タグの中に P.203 のコードを入力
5. container クラスの中に P.204 のコードを追記
6. container クラスの中に P.205 のコードを追記
7. container クラスの中に P.206 のコードを追記
8. ブラウザの幅を変更してどのように変更するか確認

---
### Bootstrapの使い方
- https://getbootstrap.com/ にアクセス
- 「Include via CDN」の「CSS only」をhead タグ内に貼り付け
ダウンロードして利用してもいいのですが、CDN という仕組みをつけるとインターネット上に置いてあるソースを利用できます。

---
### P.208
実習課題 No.16をやってみましょう。
なお、現在のバージョンは5.0ですね。

1ページ前の方法でhead内を準備しましょう。


## ワイヤーフレームを描く

---
### ワイヤーフレームを描く(P.210〜)
線だけで描くラフな図のことをワイヤーフレームと言います。
まずはやり方を学びましょう。

- 作業を始める前に確認しておくこと
- 2種類のワイヤーフレーム
- CSS ボックスモデルでの幅の値を算出する

---
### ワイヤーフレーム作成用のツール
紙を使っても良いですが、1 年生の時に XD 使いましたね!
いろいろなツールがあるので (しかも色々進化中..)、 
少し無料のツールを紹介しておきます。 
[ワイヤーフレームツールおすすめ11選を徹底比較！](https://notepm.jp/blog/6384)

今は、Figmaがかなり利用されているようです。

---
### P.218〜
実習課題No.17をやってもいいのですが、とりあえずみてみましょう。



## プロトタイプの作成 (1) ページの構造化

---
### ここから作成していきます。(P.220〜)
Sample-18.htmlコピーして作業しましょう。
- 基本マークアップ
- セクショニング・コンテンツで構造化
- ページデザインのためのコンテナーボックス
実習課題No.18はこの節でやったことの復習になります。

最初に P.243 の完成を確認した方が良いでしょう。


## プロトタイプの作成 (2) ページの視覚表現「固定幅レイアウト」

---
### P.231〜
- ページ全体とヘッダーおよびフッターのデザイン
- 記事本文の回り込みを表現する
- 記事本文の回り込みを解除する

実習課題 No.19 はこの節でやったことの復習です。


## プロトタイプの作成 (3)[コンテンツの「幅」の調整

---
### P.239〜
- メインコンテンツとサブコンテンツを 2 段組みにする

P.243まで辿り着きましょう。

---
### P.244-275
一読はしておきましょう。

ただし、ここはちょっと古い内容なので、こういう時代もあったかもくらいで良いです。

-->

## 終わり<!-- omit in toc -->

ID_07を圧縮したzipファイルをNASに提出してください。

<!--
来週は教科書と離れて、
- FlexBox
- CSS Grid

についてやっていきます。
-->

