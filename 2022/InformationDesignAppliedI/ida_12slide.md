---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習I 12.Wordpress PHP・CSSカスタマイズ
footer: ""
---

# 情報デザイン応用演習I<!-- omit in toc -->
>  12.Wordpress PHP・CSSカスタマイズ

# 目次<!-- omit in toc -->

1. [初めに](#初めに)
2. [今後について(再掲)](#今後について再掲)
3. [Wordpress PHP,CSSのカスタマイズ](#wordpress-phpcssのカスタマイズ)
   1. [CSSカスタマイズ](#cssカスタマイズ)
   2. [PHPのカスタマイズ](#phpのカスタマイズ)
4. [演習](#演習)



# 初めに

---
### 前回の内容
- Wordpress復習
- Wordpress最近の動向
- Elementor


# 今後について(再掲)

---
### 今後の流れ
今日が11回目ですので残り5回です。

- wordpressでポートフォリオサイトを作る
- 静的化する
- 実際に公開できるように外部サーバに設置する
- (就活で利用する)

を目標にしようと思います。

---
### ポートフォリオサイト
本当にいろいろなスキルを見せようと思うのであれば、Wordpressではなく作成した方が良いと思います。

[イケてるWebデザインで作られたポートフォリオサイト20選まとめ](https://mynavi-creator.jp/knowhow/article/cool-web-design-portfolio-sites)

ですが、今回はWordpressを利用しましょう。

---
### Wordpressの静的化
「Wordpressってば、コンテンツを管理するシステムなのに、それをDBを使わないHTML,CSSにしちゃうってどういうこと？」

と思われるかと思います。

---
### 静的化できないサイト
もちろん、ユーザがログインしたりするようなDBがどうしても必要なサイトでは利用できません。

しかし、ポートフォリオサイトの様に、一度作ったら、ページの更新はするものの、ログインや検索機能が必要ないページの場合、静的化にはメリットがあります。

---
### 静的化のメリット
バックエンドの計算をせずに、静的ファイルをサーバは送出するだけですので、非常に高速なサイトを作成することができます。

また、悪意のある攻撃/マルウェアといった脅威から守りセキュリティを強化させることもできます。

---
### 静的化のデメリット
一度、書き出して、サーバにアップする、という「デプロイ」という作業が必要となります。

---
### なぜこれにトライするの？
- Wordpressで本当に利用できるサイトを作ると有料になるから
- 無料で利用できるgithubに慣れてほしいから

この2つになります。

- Simply Static
- WP2Static

等いくつかプラグインがあり、検証しながらどうやっていくか考えていこうと思います。

---
### 最終課題
wordpressで制作したポートフォリオサイトを静的化し、githubで公開せよ。
gihthubのURLを提出せよ。


# Wordpress PHP,CSSのカスタマイズ

---
### Wordpressのカスタマイズ
基本的にはテーマで大まかな方向性を決定します。
しかし、テーマのカスタマイズメニューで変更できないところは子テーマを利用してカスタマイズするしかありません。

子テーマの役割については
> 親テーマがバージョンアップした時に変更が上書きされないように子テーマに差分の情報を記載する

と説明しました。

では、子テーマはどのような構造になっているのでしょうか？

---
### 子テーマの最低限の構造
- style.css
- functions.php

この二つが子テーマには最低限必要となります。

---
### 子テーマを利用したときの挙動
wordpressは次のような挙動を取ります。
1. 必要なファイルを子テーマの中で探す。
2. あれば、そのファイルを利用する。
3. なければ、親テーマのフォルダ内を探しにいき、利用する。

---
### ということは...
親テーマでカスタマイズしたいファイルがあった場合に、その分をコピーして子テーマフォルダに持ってきて、そのファイルをカスタマイズ、という流れになります。

## CSSカスタマイズ

---
### CSSの基本
CSSはCascading Style Sheetの略でしたね。
後書きしたものが前に定義したものを書き換えて影響を与えます。

子テーマのCSSはどのように実装されているのでしょうか？

---
### HEADタグ内を確認しよう
デベロッパーツールで見てみましょう。

hello-elementor/theme.min.css
が読み込まれた後に
hello-theme-child-master/style.css
が読まれているため、最終的に子テーマのCSSが強いことがわかります。

---
### 結論
子テーマのstyle.cssを利用してカスタマイズしていこう

## PHPのカスタマイズ

---
### PHPとは？
これまで明示的にPHPを触ってはきませんでした。
PHPはプログラミング言語ではありますが、HTMLと非常に親和性の高い言語となっています。

.htmlを.phpに変更すればphpファイルになるレベルで親和性が高いです。

wordpressはphpで作られています。

---
### なぜPHPのカスタマイズをするの？
wordpressでは、ヘッダー部分、コンテンツ部分、フッター部分など部分に切り分けてphpファイルで
管理されています。

HTMLに変更を加えたい時に、この部分を変更することで簡単にカスタマイズ可能になります。

---
### 他にも
もちろん、プログラミング言語ですから、条件によって切り分けしたり、関数を使って機能を変更することもできます。

---
### PHPの基本
先ほど言ったように、PHPファイルの中にはHTMLをそのまま記載することができます。

逆に、PHPのプログラミングを記載したい人は、
```
<?php
?>
```
で括ることで、プログラミングすることが可能となります。

---
### PHPよくわからないけど...
Wordpressに関しては、多くの記事がネット上にあります。それを参考に変更するだけで、より使いやすくカスタマイズができる様になります。

---
### 例えば
Wordpressはデフォルトで、投稿記事に「次へ」「前へ」と投稿へのリンクが貼られますが、カテゴリーに関係なく移動します。

これをカテゴリー内でだけで移動した時にはほんの少しカスタマイズするだけで済みます。

[前の記事・次の記事の出力方法](https://recooord.org/wordpress-prevpost-nextpost/)

あ、trueがtureになってるけど...




# 演習

---
### ポートフォリオサイト
課題の準備をしていきましょう。

1. 掲載する内容を考える
2. メニュー構成を考える
3. テーマを決定する
4. カスタマイズ

Localでは簡単にサイトを増やせますから、新たに追加してもOKです。
(そうすると、前回のを実験に使えます。)

---
### 掲載する内容を考える
どんな作品を持っているでしょうか？これまでの演習の中から使えるものをピックアップしましょう。

掲載できる作品がない...これに該当する人は、インターンシップでもポートフォリオを求めるところが出てきている様です。早急に色々考えましょう。

本演習のCanvasで作ったものは、iframeというタグを使うと埋め込みができると思います。
具体的に知りたい場合には、質問してください。

[HTMLでiframeを使う方法【初心者向け】](https://techacademy.jp/magazine/5839)



---
### 掲載する内容を考える
どんな文章を掲載するか考えましょう。

---
### メニューを考える
固定ページ・投稿ページの仕組みを考えてからメニューについて考えましょう。

---
### ヘッダー・フッター等のカスタマイズ
記事の部分以外のデザインをテーマをベース考えましょう。

テーマの決定が必須です。(子テーマ作成も忘れずに)

そして、外観-カスタマイズでできるところはそこで変更してみましょう。
それで足りないところは、style.cssを変更しましょう。

---
### 固定ページ・投稿のサンプルページの作成
ある程度中身を入れた上で、デザインも整えていきましょう。

---
### フィニッシュ
ページのコンテンツを埋めていきましょう。

---
### それでは作業に取り組んでいきましょう。
今日は、12回目
- 13回目：7/7 静的化について
- 14回目：7/14 githubについて
- 15回目：7/21 講評会

の予定で行こうと思います。
まだ時間はありますが、静的化・githubについての使い方を順に学んでいきます。

githubへの提出が7/21 16:20ってことになりますね。




---
### 終わり