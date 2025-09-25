---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習II 3.Canvas入門
footer: ""
---

# 情報デザイン応用演習II 3.Canvas入門<!-- omit in toc -->

# 目次<!-- omit in toc -->

1. [初めに](#初めに)
2. [Canvas入門](#canvas入門)
   1. [HTML5での描画方法](#html5での描画方法)
   2. [HTML5 Canvas](#html5-canvas)
3. [演習](#演習)
   1. [では今日も演習に取り組みましょう。](#では今日も演習に取り組みましょう)



# 初めに

前回の 「ECMAScript入門」やっていない人は、今日の内容全くわからないです。

必ず前回のJavascriptFirstStepやってからこちらに取り掛かりましょう。

# Canvas入門
## Flash<!-- omit in toc -->
Web 上では Flash Plugin
アニメーションやインタラクティブに強い swf ファイルを再生する環境が利用された時代がありました。イケてるホームページといえば、Flash を利用している、と同義語だった時代があります。

YouTube も当初は Flash を利用していました。

が、終わっちゃいました (泣)

---
### iOSによるFlashの否定<!-- omit in toc -->
2007 年に初代 iPhone が発表された時から、インターネット上で広く使 われてきた Flash Plugin の導入をスティーブ・ジョブズは拒みました。
- 電力をたくさん消費すること
- セキュリティ上の問題

この 2 点が一番の問題だったようです。

---
### HTML5 の台頭<!-- omit in toc -->
HTML5 が普及するまでには長い時間がかかりましたが、 
- CPU の速度が上がる
- 各ブラウザが HTML5 の実装を進める
ということから、全世界的に HTML5 が普及してきました。

---
### HTML5の終了...<!-- omit in toc -->
ここ数年で、一応HTML5からHTML Living Standardへと名称変更が行われています。

が、HTML5という名でもまだ呼ばれている変な状況だ、ということは認識しておいてください。

---
### HTML5 の普及->Flash が終焉<!-- omit in toc -->
HTML5 により今日触ってみる Canvas の機能が導入されたことにより、 
- YouTube の HTML 化
- Flash バナーではなく HTML5 バナーに変更
iOS だけではなく、Flash の立場はますます追い込まれていきます。

---
### コミック化されているのでみてみましょう。<!-- omit in toc -->
[A Brief History of Flash](http://www.commitstrip.com/en/2015/07/15/a-brief-history-of-flash/?)

---
### 説明<!-- omit in toc -->
- 2001: Flashは全盛期を迎えていました。
- 2008: HTML5の仕様が検討されていても、Flashの勢いは止まりませんでした。
- 2010: スティーブ・ジョブズに、お前なんかもういらない、と言われます。
- 2012: HTML5が順調に脚光を浴びるようになりました。
- 2015: Firefox(ブラウザの一種) からも、Flash もう無理ーと突きつけられ
- Soon: FlashはIEと共に用無しになってしまう(IEはEdgeに乗っ取られた)

Flash, IE とも一世風靡しているのですが、Web の世界はシビアですね。
2023現在、Flashは跡形もありません。

---
### Flashはどこに行った？<!-- omit in toc -->
FlashはAdobe Animateという名前に変えて現在もリリースされていますが、「Flash」という言葉はもうどこにもありません。

技術って、そういう恐ろしいものだということを知っておきましょう。

## HTML5での描画方法
### Canvas, WebGL
HTML5(簡略化のためにそう呼びます) では描画に関して 2 つの技術を利用できます。 
- Canvas: ブラウザ上にずを描くために策定された仕様
- WebGL: GPUを利用してグラフィカルな表現を可能とする。3Dが 得意だが、2D も OK。

まだ一般的ではないですが、WebGPU という「最新の 3D グラフィックスおよび計算機能」を提供することを目的としたものも開発中です。かなり対応してきましたが、Firefoxがまだ微妙です。Caniuseを見てみましょう。

参考に...WebGLに比べて初期化が少し面倒になっている模様です。

- [WebGPU入門](https://zenn.dev/emadurandal/books/cb6818fd3a1b2e)

## HTML5 Canvas
### HTML5 Canvasとは何か
さっきも軽く説明しましたが
- ブラウザ上に図を描くために策定された仕様
が Canvas となります。

---
### 基本
大まかな流れは
1. HTML に Canvas タグを設置
2. Canvas タグの ID から JavaScript にてアクセスできるようにする
3. JavaScript によってプログラミングにて図形を描いていく
4. アニメーションしたい場合には定期的に関数を呼び出す setInterval を利用する。

# 演習

## では今日も演習に取り組みましょう。
今日の教材は
- Canvas FirstStep

です。

ページは多いし、13個くらいファイル作ってもらうけど、1つづつの差異は少ないから、違いに注目しながら、何をプログラム追加すると、どう変わっていくか、というのを理解しながら進めていこう。

一つうまくいったら、コピーしてそれに追記していこう。