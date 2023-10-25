---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン演習I 8.Webレイアウト応用
footer: ""
---

# 情報デザイン演習I 8.Webレイアウト応用<!-- omit in toc -->
レスポンシブデザイン・CSSフレームワークについて学修する。

---
- [今日の内容](#今日の内容)
  - [CSSフレームワーク](#cssフレームワーク)
  - [Chapter4〜](#chapter4)
  - [5章をやってみよう](#5章をやってみよう)
  - [まとめ](#まとめ)


# 前回のおさらい<!-- omit in toc -->
- Webレイアウトの基礎
   - Flexbox
   - CSS Grid
   - レスポンシブデザイン

を行いました。


# 今日の内容

---
### シラバスについて<!-- omit in toc -->
> レスポンシブデザイン・CSSフレームワークについて学修する。

となっていますが、レスポンシブデザインの仕組みについては紹介したので、簡単にCSSフレームワークを説明してから実際のホームページの制作にうつっていきたいと思います。

## CSSフレームワーク
Flexbox, CSS Gridによって重要度が下がってる気がしますが、説明していきます。

---
### CSSフレームワークとは？<!-- omit in toc -->
> CSSがあらかじめ定義してあれば、HTMLにクラス指定をするだけでデザインができる

ということになりますね。

一番有名なのは「Bootstrap」と呼ばれる旧Twitter社が開発したものになります。

- [【2023年最新！】おすすめのCSSフレームワーク40選！効率的にデザイン作成をしよう！](https://mid-works.com/columns/language/others/1114801){:target="_blank"}

---
### CSSフレームワークの使い方<!-- omit in toc -->
基本は、利用したいCSSフレームワークの使い方をよく確認しましょう。

ダウンロードして利用しても良いのですが、よく使われるものはCDNと呼ばれる場所に置いてあるので、そこへのリンクを貼れば良いです。

> CDN（Contents Delivery Network）とは、数多くのキャッシュサーバーなどで構成されたプラットフォームを用いることにより、Webサイト上のコンテンツを迅速にエンドユーザーに届けるための仕組みです

詳しく知らなくても使えます。「CDN」という用語は覚えておきましょう。

---
### CSSフレームワークの使い方 Bootstrapの場合<!-- omit in toc -->
- [Bootstrap](https://getbootstrap.jp/)

を見ると、「CDN経由でインクルードする」というものがあります。

- linkの行をコピーしてheadタグの中に
- scriptの行をコピーしてbodyの一番最後に

それぞれペーストすれば利用できます。

---
### Bootstrap サンプル<!-- omit in toc -->
- [サンプル](https://getbootstrap.jp/docs/5.3/examples/)

下の方に既にデザインされたコンポーネント(機能を持つ塊)がたくさんあります。

- [Cheatsheet](https://getbootstrap.jp/docs/5.3/examples/cheatsheet/)

パーツのデザインが列挙されています。どのクラスを使えば良いかはDocumentationをクリックして確認しましょう。
 Buttonsの例をみてみましょう。

---
### Bootstrapのデメリット<!-- omit in toc -->
Bootstrapを利用するとお手軽にそれなりのデザインを実装することができますが、デメリットとして
- カスタマイズには専門知識が必要
- デザインが複雑な Web サイト開発には不向き

ということがあります。レスポンシブ対応も楽にできるので頻繁に利用されてきましたが、ちょっと人気がなくなってきました。
「Google トレンド」で確認してみましょう。

2022の10月にはこんな記事を出している人もいます。

- [Bootstrapはガチでいらない](https://itokoba.com/archives/3525)

偏るので、こちらも

- [実際の現場ではBootstrapを使うのでしょうか？](https://programming-dojo.com/%E5%AE%9F%E9%9A%9B%E3%81%AE%E7%8F%BE%E5%A0%B4%E3%81%A7%E3%81%AFbootstrap%E3%82%92%E4%BD%BF%E3%81%86%E3%81%AE%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%81%8B/)

---
### というわけで...<!-- omit in toc -->
CSSフレームワークについてはしっかりは本演習では扱わないことにします。

自分の頭を使ってCSSでデザインできれば問題ないわけですから。

CSSが難しい場合には「Generator」を使って必要なところをコピペでいいと思います。

- [コピペで作れる！おすすめのCSSジェネレーター・ツールまとめ](https://webdesign-trends.net/entry/13790)

## Chapter4〜
教科書に沿って、サイトを作ってみましょう。

---
### 教科書の構成<!-- omit in toc -->
4章かけて、1つのホームページを作成する構成になっています。

- Chapter 4: フルスクリーンのWebサイトを制作する index.html
- Chapter 5: 2カラムのWebサイトを制作する news.html
- Chapter 6: タイル型のWebサイトを制作する menu.html
- Chapter 7: 外部メディアを利用するcontact.html

今日1日じゃ無理だろうなぁ...2回に分けることになるだろうなぁ...

Wordpressの部分を少し短くするかもしれません。

---
### 準備<!-- omit in toc -->
1. P.12に
- [DOWNLOAD SAMPLE DATA](https://www.sbcr.jp/support/15065)

があります。

> HTML-CSS-Webdesign-5.zip

をダウンロードしましょう。

2. 2回連続で行いますので、ID_ROOTの中に「WCBCafe」フォルダを作成しましょう。
3. cssフォルダを作成して中にstyle.cssを作成しましょう。
4. zipファイルを解凍して、imagesフォルダを「WCBCafe」にコピーしましょう。

---
### フルスクリーンとは/制作の流れの確認<!-- omit in toc -->
P.174-177

## 4章をやってみよう<!-- omit in toc -->
4-3(p.178)からやってみましょう。

- タイピング練習ではありません。
- 少し打ったら、保存してLiveServer使ってどこが変わったか確認しましょう。
- なぜそう入力するのかをよく考えましょう。

4-7はやってみたい人だけでも構いません。

---
### P.179<!-- omit in toc -->
#### ress.min.css<!-- omit in toc -->
「ress.css CDN」でググると
- [【2023年版】おすすめのリセットCSS（reset.css）3選【CDNのコピペあり】](https://zenn.dev/yurukei20/articles/ffdbde17cd0853)

が出てきて、コピーできます。

#### Philosopher<!-- omit in toc -->
- [Google Fonts](https://fonts.google.com/)

でPhilosopherを探すと出てくるので、4書体とも選択すると、教科書と異なりますが、CSSが出てきてコピーできます。

---
### P.181<!-- omit in toc -->
#### font-family<!-- omit in toc -->
font-familyのところ面倒ですね。
ゴシック体を指定したいだけですからググりましょう。「CSS ゴシック体」でググると
- [【2023年版】font-familyの正しい指定方法・タイプ別おすすめフォント設定例](https://willcloud.jp/knowhow/font-family/)

が出てきます。4.1からいただいてきましょう。

---
### 2カラムのレイアウトとは/2カラムページの制作の流れ<!-- omit in toc -->
P.198-202

---
### レスポンシブに対応させよう<!-- omit in toc -->
P.216-217

## 5章をやってみよう
5-3(p.203)からやってみましょう。

- タイピング練習ではありません。
- 少し打ったら、保存してLiveServer使ってどこが変わったか確認しましょう。
- なぜそう入力するのかをよく考えましょう。

5-9はやってみたい人だけでも構いません。

## まとめ
味気ないのと違って、いい感じにデザインできると嬉しいですね。

なぜそうなっているのかわからないところはしっかり復習しておきましょう。

来週は、6,7章に入っていき、完成を目指します。
