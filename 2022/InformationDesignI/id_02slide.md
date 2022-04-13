---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン演習I 2.HTML基本
footer: ""
---

# 情報デザイン演習I 2.HTML基本<!-- omit in toc -->

# 目次<!-- omit in toc -->

1. [初めに](#初めに)
2. [HTMLの歴史](#htmlの歴史)
3. [HTMLの基礎](#htmlの基礎)
   1. [課題](#課題)



# 初めに

---

- 506に部屋変更しました。
- テキスト持ってない人どのくらいいる？(今日もまだ持っていない人いる想定だけど)

## HPの置き場所(再掲)<!-- omit in toc -->

今年、ちょっとやり方を変えてみます。
これまで

http://nas1-mc.thu.ac.jp/joomla/

にデータを置いていましたが、これは学外から閲覧できませんでした。
そのため

https://sammyppr.github.io/

に置きます。これは学外からも閲覧可能です。予習復習にはもちろん、あれなんだっけー？みたいな時に利用してください。

# HTMLの歴史

## HTMLとは<!-- omit in toc -->
- HTML: HyperText Markup Language

## HyperText?<!-- omit in toc -->
今では皆さん当たり前に
- 検索して
- リンクを踏んで

情報に到達すると思いますが、この「リンク」の歴史、そんなに古くないんです。

## HyperCard<!-- omit in toc -->
ハイパーテキストを実現した最初の商用ソフトウェアで、1987年にできました。クリックすることで、別のページに飛べるというものでした。

![HyperCard](https://www.x68uec.org/files/other/press/2002/lecture/hcard/home_l.gif)



## HTMLの誕生<!-- omit in toc -->
HTMLはスイス・ジュネーブにある欧州原子核研究機構（通称：CERN）においてイギリスの計算機科学者であるティム・バーナーズ・リー氏を中心に1989年に開発されました。

CERNには膨大な数の論文が存在していたため、それを探す手間をなくすために論文をHTMLで記載し、リンクで検索しやすくする、という方法が取られました。

## ポイント<!-- omit in toc -->
> - HTMLは文章構造を担う言語である
> - HTMLはもともと非公開の中、ある研究機関で使われていた
> - WWWの生みの親ティム・バーナーズ・リーはHTMLも開発していた
> - 最新のHTML5では動的な動きが可能になる
> - HTMLがもたらした最大の功績はリンクによるページ移動である

[引用:世界中の情報整理を後押ししたHTMLの進歩](https://ec-orange.jp/ec-media/?p=12988)

## HyperText Markup Language<!-- omit in toc -->
で、結局のところ文書に対して
- ここは見出し
- ここは段落
- ここは箇条書き
- ここはリンク

意味づけすることでHTML文書は記載されます。

## 現在のバージョン<!-- omit in toc -->
HTML5が利用されています。

...ちょっとややこしいのですが、「HTML5は廃止された標準仕様。」？？？

正しくは「HTML Living standard」が現在のバージョンとなります(2019から)。

書籍などではHTML5という記載方法で本がまだ売られています。厳密に言えば「HTML5」「HTML Living standard」は別物ですが、かなり似ています。ですので、極めない限りはそんなに差は感じないでしょう。

[参考：どうしてHTML5が廃止されたのか](https://future-architect.github.io/articles/20210621a/)

## 今後どうなるの？<!-- omit in toc -->
HTML 6が登場することはありません。


> HTML Living Standardはバージョンの概念を持たず、内容が日々改訂されていき、改訂されたその時点からその内容が標準となるため、これまでW3Cの勧告にあわせて仕様を確認してきた以上に、今後はHTML Living Standardの仕様を随時チェックしていく必要がありそうです。

[引用：HTML標準規格はHTML Living Standard！HTML5は2021年1月に廃止](https://info-con.co.jp/staff/whatwg/)

## HTML Living Standard<!-- omit in toc -->
[英語のサイト](https://html.spec.whatwg.org/multipage/)
[日本語版](https://momdo.github.io/html/)

全ての仕様がここに書かれていますが、多く使うものは限られています。
多すぎて無理ーー、と思わないようにしましょう。


# HTMLの基礎

## 最低限のHTML<!-- omit in toc -->
```
<!DOCTYPE html>
<html>
<head>
   <!-- 宣言部分 -->
</head>
<body>
   <!-- 本文部分 -->
</body>
</html>
```

兎にも角にも、この最低限のHTMLは必ず覚えましょう。

## HTMLタグ(再掲)<!-- omit in toc -->
- <xxxx>を開始タグ
- </xxxx>を終了タグ

と呼びます。

全てのタグが開始タグ・終了タグから成り立っているわけではなく、終了タグを書かないものもあります。

## 行頭のスペース(再掲)<!-- omit in toc -->

インデントと呼びます。
これにより、タグの始まりと終わりの関係が分かりやすくなります。

TABキーで入力できます。


## それぞれの意味(再掲)<!-- omit in toc -->

- <!DOCTYPE html>: HTML5で書かれていることを指します
- html: この中に必ずheadとbodyが入ります
- title: ウィンドウのタイトルに表示される文字です。本文ではないため、head内に書きます。
- body: この中に本文が書かれます。

## やってみよう<!-- omit in toc -->
「ID_root」までは前回の再掲です。

- 書類フォルダ等に、「ID_root」というフォルダを作成
- VSCode(Visual Studio Codeのことを以下こう呼びます)起動
- 「フォルダーを開く」で、「ID_root」を指定
- 新規フォルダを作成して「ID_02」
- 新規ファイルを作成して、「test.html」とファイルを作成

起動は「Command+スペース」でvsc,またはcodeでできるかと思います。
「.html」とすることで、VSCodeは「あ、HTMLファイルを作りたいんだ」と認識して、便利な機能を提供してくれます。

## やってみよう<!-- omit in toc -->
先に手本を見せるので、同じようにやってみよう。

```
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>HTMLの基礎</title>
</head>
<body>
   <h1>見出し1</h1>
   <h2>見出し2</h2>
   <h3>見出し3</h3>
   <h4>見出し4</h4>
   <h5>見出し5</h5>
   <h6>見出し6</h6>
   <p>段落</p>
</body>
</html>
```
- h1: heading1...
- p: paragraph

## Live Server<!-- omit in toc -->
実際にブラウザで閲覧するには、右下のGo Liveをクリックだったね。

Live Serverをインストールしているので、再読み込みをしなくても、ソースを保存するとアップデートされるよ。(調子良ければ、保存しなくても)

保存しないと、データ失われるので気をつけましょう。

## metaタグ<!-- omit in toc -->

> metaタグとは、Webページの記述に用いるHTMLで定義された要素（タグ）の一つで、そのページについての様々な情報（メタ情報）を記述するためのもの。 ページ先頭のヘッダ領域（headタグで囲まれた部分）に記載され、主に他の要素で定義されていない種類の情報を記述するのに用いられる。

[引用: metaタグ（メタタグ）とは - IT用語辞典 e-Words](https://e-words.jp/w/meta%E3%82%BF%E3%82%B0.html)

## charset<!-- omit in toc -->
テキストファイルには、「文字コード」と呼ばれるデータの保存方法がいくつかあります。有名なところでは

- Shift-JIS
- EUC
- UTF-8

がありますが、UTF-8が一般的になりつつあります。

```
   <meta charset="UTF-8">
```
は、「この文書をUTF-8という文字コードで記述しているよ」という意味になり、おまじないだと思ってOKです。


## この後、追加する場所について<!-- omit in toc -->
この後は、</body>の前に追加していこう。


## リストを作成してみよう<!-- omit in toc -->

```
   <ul>
      <li>リスト1</li>
      <li>リスト2</li>
      <li>リスト3</li>
      <li>リスト4</li>
   </ul>
   <ol>
      <li>リスト1</li>
      <li>リスト2</li>
      <li>リスト3</li>
      <li>リスト4</li>
   </ol>
```
- ul: unordered list(順序なしリスト)
- ol: ordered list(順序ありリスト)
- li: list item(リストアイテム)

## 説明リスト<!-- omit in toc -->
```
   <dl>
      <dt>用語1</dt>
      <dd>説明文1</dd>
      <dt>用語2</dt>
      <dd>説明文2</dd>
   </dl>
```
- dl: description list(説明リスト)
- dt: description term(説明する言葉)
- dd: definition / description(定義分もしくは説明文)

※古くはdefinition listだったのが気づいたら変わってた...

## 画像貼ってみよう<!-- omit in toc -->
```
   <img src="">
```
- まずこのように書いて
- 適当にweb上の画像を選んで
- 右クリックで「画像アドレスをコピー」
- 下のようにsrc=""の中に貼り付け
```
   <img src="https://www.toho.co.jp/movie/lineup_images/hello-world-poster04.jpg">
```

## リンクを使ってみよう<!-- omit in toc -->
```
   <a href="https://www.google.co.jp/">Google</a>
```
- a: anchor(錨(いかり))
- href: Hypertext Reference
```
   <a href="https://www.google.co.jp/" target="_blank">Google</a>
```
とすると、別ウィンドウが開く


## 画像にリンクを貼ってみよう<!-- omit in toc -->
```
   <a href="https://hello-world-movie.com/" target="_blank">
      <img src="https://www.toho.co.jp/movie/lineup_images/hello-world-poster04.jpg">
   </a>
```

## あ...<!-- omit in toc -->
別にこの映画が好きなわけでもなんでもなく、プログラマーはとりあえずなんか作る時にまずは「Hello World」って表示することになっていて、その画像探したら、こんなになりました。

## 改行<!-- omit in toc -->
段落でなく改行をしたい時には
```
   <br>
```
を使いましょう。

## 水平線<!-- omit in toc -->
区切りたい時には
```
   <hr>
```
を使いましょう。


## コメントアウト<!-- omit in toc -->
HTMLを書いていると、人がわかりやすいようにコメントを残したくなることがあります。
```
<!-- ここにコメントを書く -->
```
スペース忘れずに

## もっとあるの？<!-- omit in toc -->
あります。が、覚えなくていいです。

必要な時にググれば良いだけですから。

## チートシート<!-- omit in toc -->
忘れやすいことをまとめた「チートシート」というものがあります。わかりやすく言えば、カンニングペーパーです。

これは、
- HTML
- CSS

だけでなく,
- Illustrator
- Photoshop

等、さまざまなバージョンが配布されています。知っておくと良いでしょう。


## 課題

今日学んだタグをなるべく全て使って、なんでもいいのでHTML文書を作成してみましょう。

ググって学んでないタグ使っても構いません。

「なんでもいい」が困る人は、うちの大学のキャンパス・学部・学科・コースなどを書いてみましょう。