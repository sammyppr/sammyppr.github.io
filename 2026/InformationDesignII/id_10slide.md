---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン演習I 10. プロトタイプの作成実践
footer: ""
---

# 情報デザイン演習I 10. プロトタイプの作成実践<!-- omit in toc -->
HTMLを利用したプロトタイプを作成する。

---
- [今日の内容](#今日の内容)
  - [扱うデザインについて](#扱うデザインについて)




# 前回までのおさらい<!-- omit in toc -->
CHAPTER4,5,6,7をやって、
- index.html
- news.html
- menu.html
- contact.html
を作成してみました。

1. デザインからHTMLを作成し
2. CSSを用いてデザインしていく

という流れを理解できたでしょうか。

まだの人は引き続き、やってみましょう。

---

# 今日の内容
> XDを利用したプロトタイプを作成する。

となっていますが、微妙に変えます。

デザインからHTML,CSSを作成してみましょう。

## Webデザインの歴史
かつて、Webが普及し始めた1990年代には
- illustrator
- Photoshop

というデザインツールしかありませんでした。
これは、Web向けではなく、汎用デザインツールでした。

## Adobe Fireworks(元々Macromedia)
Web向けに画像編集ツール1998年「Fireworks」がMacromediaからリリースされます。
すぐに、AdobeがImageReadyをリリースしましたが、

2005年にAdobeがMacromediaを買収、ImageReadyは役目を終え、2013年開発終了となります。

## Webデザイン専用ツール不在の時代
PhotoshopがWeb向け機能をかなり強化してきたため、
引き続き、Fireworksを続けるか、Photoshopに乗り換えるか、の選択肢となります。

## プロトタイピングツールの登場
UI/UXという言葉も生まれてきた頃に
そのデザインをするために「プロトタイピングツール」
が開発されます。

2010年に[Sketch](https://www.sketch.com/)がリリースされます。
それを受け、2016年にAdobeが「XD」をリリースします。Figmaも同年リリースされます。

## Adobe XD vs Figma
いくつか記事を紹介しましょう
- [2018 Adobe XDを導入した時のお話](https://www.internetacademy.jp/it/design/web-design/uiux-design-tool-adobexd.html)
- [2020 Figma（フィグマ）とは？初心者でも分かるWebデザインツールの使い方](https://ferret-plus.com/13195)

このように、どちらがアプリとして優れているかが競い合う結果となりました。

と思っていたら...

## Adobe によるFigmaの買収?
2022年9月にAdobeがFigma買収とのニュースが流れてきました。

- [Figma買収から見えてきた⁠⁠、Adobeが向かう目的地](https://gihyo.jp/design/serial/01/website-pickup/0175)

これは、しかし、2023年12月に決裂します。
> 規制当局である欧州委員会と英国競争・市場庁から必要な承認を受ける明確な道筋がないと判断したため、合併契約の終了に合意しました。

- [アドビとFigma、合併契約の終了に両社間で合意](https://www.adobe.com/jp/news-room/news/202312/20231219_adobe-and-figma-agree-to-terminate-merger-agreement.html)

2024年2月にはAdobeはXDの開発終了を正式に発表したため、XDユーザは衝撃を受けました。
(XDを使っていた本コースも...)

## 当分はfigma一人勝ちに...
- [WebデザインにFigmaを使わなくてはいけない理由](https://bluetraff.com/webdesign-figma/)

- [Adobeの次なる戦略の考察とクリエイターの時代の変化に負けない作業環境の構築を考える](https://www.mdn.co.jp/web/helpful_tips/7005)

ツールはこのように、色々変わっていくことを知っておきましょう。




# 今日の課題
## もともとXD用に使われていたデザインを利用して、HTML,CSSを作成しよう
既にXDでデザインされたものを利用します。
いまさら、XDをインストールしてくれ、ともこれらの経緯から言いづらいので、

- [Convertify](https://www.figma.com/community/plugin/849159306117999028)

で、.xd->.figに変換しました。
.figファイルから、Figmaで画像素材を切り出しましょう。

デザインからしっかり頭で考えて
- HTML
- CSS

を作成していく工程を理解しましょう。

HPへ