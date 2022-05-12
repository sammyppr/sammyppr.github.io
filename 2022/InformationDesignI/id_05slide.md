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
1. [CSSでデザインしてみよう](#cssでデザインしてみよう)
2. [画像の作成](#画像の作成)
3. [animate.css](#animatecss)


# 前回のおさらい<!-- omit in toc -->
- CSSの基本文法
   - HTMLとCSSの役割分担
   - CSSの表記方法
   - CSSの記載箇所
   - ID/class
   - セレクタ
   - ボックスモデル
   - リセットCSS/ノーマライズCSS

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



## 画像の作成

---
### Web用の画像
1度もWeb用の画像を作成してないので、ここでやっておきましょう。

どの様なフォーマットでWeb用画像として書き出すか学んでいきます。

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


## 終わり<!-- omit in toc -->

ID_05を圧縮したzipファイルをmanabaに提出してください。


