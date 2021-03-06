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
1. [今日の内容](#今日の内容)
   1. [レスポンシブ Web デザインの仕組みを理解する](#レスポンシブ-web-デザインの仕組みを理解する)
   2. [CSS フレームワークについて理解する](#css-フレームワークについて理解する)
   3. [ワイヤーフレームを描く](#ワイヤーフレームを描く)
   4. [プロトタイプの作成 (1) ページの構造化](#プロトタイプの作成-1-ページの構造化)
   5. [プロトタイプの作成 (2) ページの視覚表現「固定幅レイアウト」](#プロトタイプの作成-2-ページの視覚表現固定幅レイアウト)
   6. [プロトタイプの作成 (3)[コンテンツの「幅」の調整](#プロトタイプの作成-3コンテンツの幅の調整)


# 前回のおさらい<!-- omit in toc -->
- Webレイアウトの基礎
   - 文書をHTMLで構造化する
   - HTMLアウトラインを確認する
   - セマンティックコーディングをしていこう
   - ページ全体のレイアウトとナビゲーションを配置する
   - Webのライアウトの基本「フロート処理」
   - ページのマージンとパディングを調整する

---
### Webレイアウトの難しいところ
教科書に添って、Webレイアウトでの重要な内容についてやってみました。
印刷と違って、
> 見た目ではなく、コードそのものに意味づけを持たせる必要がある

ことが難しいところかと思います。慣れていきましょう。


# 今日の内容

---
### 内容ちょっと変えます。
float, Flexbox, CSS Gridによるレイアウトについて学習する。となっていますが、
来週に持ち越し、教科書通り今日も進めていきましょう。

1. レスポンシブ Web デザインの仕組みを理解する
2. CSS フレームワークについて理解する
3. ワイヤーフレームを描く
4. プロトタイプの作成 (1) ページの構造化
5. プロトタイプの作成 (2) ページの視覚表現「固定幅レイアウト」
6. プロトタイプの作成 (3)[コンテンツの「幅」の調整
7. プロトタイプの作成 (4) ブレークポイントの設定
8. レスポンシブ Web デザインの応用と検証

## レスポンシブ Web デザインの仕組みを理解する

---
### レスポンシブWebデザインとは？(P.186〜)
- レスポンシブ Web デザインは一人の開発者が提唱
- 固定レイアウトから可変幅レイアウトに変換する
- 見出しや本文のフォントサイズを算出する
- 配置した画像を可変幅に変換する
- メディアクエリでブレークポイントを設定していく

---
### P.193
1. 今日の作業フォルダ「ID_07」を作る
2. 07-01.htmlを作成
3. サンプルのHTMLを入力
4. styleタグ内にCSSを入力
5. ブラウザの画面はばを変更して、大きさが変更することを確認

---
### P.194
実習課題No.15をやってみよう
Sample-15.htmlを元に追加してみましょう。


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


## 終わり<!-- omit in toc -->

ID_07を圧縮したzipファイルをmanabaに提出してください。

来週は教科書と離れて、
- FlexBox
- CSS Grid

についてやっていきます。


