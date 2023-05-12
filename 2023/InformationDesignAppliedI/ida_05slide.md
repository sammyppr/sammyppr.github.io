---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習I ５.WebGL入門
footer: ""
---

# 情報デザイン応用演習I ５.WebGL入門<!-- omit in toc -->

# 目次<!-- omit in toc -->

1. [初めに](#初めに)
2. [WebGL入門](#webgl入門)
   1. [WebGLとは?](#webglとは)
   2. [OpenGL](#opengl)
   3. [GPU](#gpu)
   4. [GPU vs CPU](#gpu-vs-cpu)
   5. [WebGLの後継技術](#webglの後継技術)
   6. [three.js](#threejs)
3. [やってみよう](#やってみよう)
   1. [一般的な3Dの作り方](#一般的な3dの作り方)
   2. [それでは作業しましょう。](#それでは作業しましょう)



# 初めに

「ECMAScript入門」「Canvas入門」「Canvas応用」やってから取り掛かりましょう。

## これまでで理解してほしいこと<!-- omit in toc -->
- 関数
- オブジェクト指向(Class)

あたりがなんとなく理解できて、正しく指示をすると文句を言わずに実行してくれるのがプログラミング

と理解してくれていたら嬉しいです。

## CanvasSecondStepの説明<!-- omit in toc -->

軽くおさらいしてみましょう。

# WebGL入門

## WebGLとは?
Web ブラウザで 3 次元グラフィックス (3DCG) を高速に表示するため の仕様の一つ。

Web ページ上に記述されたスクリプトから OpenGL を利用して高速な 3D 描画を実現する技術で、OS やコンピュータのビデオ機能 (ビデオ カードや CPU 内蔵ビデオ) が OpenGL に対応している必要がある。

WebGL は JavaScript の拡張として提供され、HTML の Canvas タグで 定義されたページ上の領域に動的に 3 次元グラフィックスを描画することができる。

ブラウザが本来持つ JavaScript の機能と組み合わせて、3DCG を利用し たコンテンツを作成することができる。


## OpenGL

CPU だけでなく、GPU(Graphic Processing Unit) というものがコンピュータには備わっており、それを利用することによって、3D 処理を高速に行う仕組み

## GPU
リアルタイム画像処理に特化した演算装置あるいはプロセッサである。
CPU が複雑な命令をこなすのに対し、GPU は定型的な命令を同時に計算処理することに優れている。

## GPU vs CPU
動作イメージを確認しておきましょう。

[Mythbusters Demo GPU versus CPU](https://www.youtube.com/watch?v=-P28LKWTzrI)

## WebGLの後継技術
WebGL の後継として WebGL2・WebXR・WebGPU等が策定されているようです。

それぞれ
caniuse.com
で、現状を見てみましょう。

---
### WebGL2のサンプル
[サンプルで理解するWebGL 2.0 - WebGL 2.0の利点とは](https://ics.media/entry/16060/)

---
### WebXR
ブラウザにて VR 対応する技術です。WebGL と組み合わせて利用します。

---
### WebGPU
WebGL の次世代のウェブブラウザ用 3D グラフィックス API です。
WebGL が OpenGL を元に開発されているのですが、OpenGL が別の技術に置き換えられる様になってきているため、(Mac なら Metal) それに合わせて、策定されている様です。
まだ、実験段階であり、普通では閲覧することができません。
この様に技術がどんどん進んでいく、ということを理解してくれれば良いです。

## three.js
WebGL を直接利用するには、OpenGL の言語の理解が必要となります。 しかし、これは手軽に扱うことが難しいとされています。
そのため、WebGL を簡単利用するために three.js というライブラリが 存在します。
今日は、この three.js を使って、3D 表現を体感してみましょう。

---
### 最初に衝撃を受けた three.js の表現
three.js で周期表を表現したものが有名です。これをみた時には本当に衝撃を受けました。

[periodic table](https://threejs.org/examples/css3d_periodictable.html)

---
### 他にどんな表現ができるかみてみましょう。

[three.js](https://threejs.org/)

# やってみよう
## 一般的な3Dの作り方
3Dの制作過程では大体
1. シーン(空間)を作成
2. オブジェクト(物体)を作成
3. ライティングを作成
4. カメラを作成

となります。
空間にモノがあるだけでは見えないからです。

## それでは作業しましょう。
1. 今日のフォルダ「IDA_05」を作成
2. ThreeJsFirstStepをやって行きましょう。

