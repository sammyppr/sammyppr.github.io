---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン演習I 12. WordPress基礎
footer: ""
---

# 情報デザイン演習I 12. WordPress基礎<!-- omit in toc -->
> Wordpressの導入、及び投稿・固定ページについて学修する。

---
1. [今日の内容](#今日の内容)
   1. [子テーマ](#子テーマ)
   2. [ブラウザのキャッシュ](#ブラウザのキャッシュ)
   3. [子テーマの実践](#子テーマの実践)
2. [最終課題](#最終課題)


# 前回のおさらい<!-- omit in toc -->

---
### 前回のおさらい

- CMS, Wordpressとは
- インターネット基礎知識(サーバ・IPアドレス・ポート)
- Wordpressの基本的な考え方
  - ダッシュボード
  - 権限
  - 設定
  - 投稿・固定ページ
  - メニュー
  - 編集
  - テーマ
  - ウィジェット
  - プラグイン


# 今日の内容

## 子テーマ

---
### テーマ
テーマにはcss,php(説明は次ページ)が含まれており、その二つを使って動的なページを表示しています。

テーマを選択してそのまま利用できるときにはそのままで構わないので
すが、デザインをちょっと変更したい時などがあります。

---
### phpとは？
php(PHP:Hypertext Preprocessor)はプログラミング言語ですが、非常にHTMLと親和性の高いものです。

.htmlを.phpに書き換えるだけでそれは、phpファイルとなります。

phpでは、データベースからデータを呼び出し、それを元にHTMLを生成します。

---
### CSSの修正
大抵のテーマでは
> style.css

というファイルにCSSが定義されています。そのため、ここを触ることでCSSを修正・追加することができます。

---
### みてみよう。
1. この間、テーマを適当に入れたと思うので、Twenty Twenty-Oneに変更しましょう。
2. 外観-テーマファイルエディター(なんか警告出てきますね)
3. style.cssをみてみよう

「ファイルを更新」とあるので、ここを変更すればCSSを修正・追加できそうですね。

でも、これはやってはいけません。

---
### テーマのバージョン
外観-テーマで Twenty Twenty-Oneの詳細を見てみましょう。
Ver1.6とあります。

これは、バージョン管理されていてアップデートされることを意味しています。

---
### テーマのstyle.cssをいじると？
いったんはいい感じになるかもしれませんが、
テーマがバージョンアップされたときに、
全て上書きされ、変更した部分がリセットされることを意味します。

これでは困りますね。

---
### 子テーマ
そこでwordpressでは「子テーマ」という概念を使っています。

子があるということは親があるってことですね。

---
### wordpress構築の実際
テーマを1から作る人もいるにはいますが、
多くの場合には元となるテーマを選択して、それを改変していくことが多いです。
- 親テーマ：元になるテーマ
- 子テーマ：親テーマを改変したテーマ。差分のみ記載される

---
### 子テーマを選ぶと...
wordpressの挙動は以下の通りになります。

1. 必要なファイルを子テーマのフォルダで探しにいく
2. ファイルがあればそれを利用する
3. ファイルがなければ親テーマのフォルダに探しにいき利用する

という順序となります。

---
### Wordpressのファイル構成
[WordPress のフォルダ構成](https://www.webdesignleaves.com/pr/wp/wp_folder_structure.html)

---
### 子テーマの作成
やり方がバージョンアップなどにより変わることが想定されるので、
> wordpress 子テーマの作り方

でググって1年以内の記事で良さげなのを探しましょう。

テーマによって、たまに苦労することもあります。

[WordPressの子テーマとは？作り方を解説](https://www.webdeki.com/column/5501/)

## ブラウザのキャッシュ

---
### ブラウザのキャッシュ
ブラウザには、一度読み込んだファイルを保存しておくキャッシュという仕組みがあります。

これにより、通常のユーザにとっては、何度もファイルを読み込まなくて済むために、表示が高速化されるというメリットがあります。

一方、開発者としては困ったことが起こります。
> ファイルを更新したのに、なぜか新しい情報が反映されない....

---
### キャッシュによるトラブルの回避方法
更新したファイルが解っている場合には、例えばそのcssを直読みして、リロードをかけて新しい情報に変更することを確認しましょう。

それでも直らない場合には、閲覧履歴の消去をして対処しましょう。


## 子テーマの実践

---
### それでは

子テーマを作成していきましょう。
1. MAMP を起動
2. http://localhost:8888/ でサイトの画面
3. http://localhost:8888/wp-admin で管理画面
4. Twenty Twenty が選択されていることを確認しよう。

Twenty Twenty-Oneはちょっと特殊なテーマなので、やめました
[テーマTwenty Twenty-Oneの子テーマの作り方](https://web-children.com/2022/04/13/tt1-child-theme-creation-in-wordpress/)

---
### 子テーマの作成 ファイル
1. /wp-content/themes/の中に新規フォルダを作成し、 my-twentytwenty としましょう。
2. vscodeで開く

---
### style.css

以下のように書きましょう.

```
/*
Theme Name: My TwentyTwenty
Template: twentytwenty
*/
```

---
### functions.php

以下のように書きましょう.

```
<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style')
);
}
?>
```

---
### 確認してみよう
うまくいけば、外観テーマの中に
> My TwentyTwenty
> 
が作成されていることでしょう。有効化してみましょう。

---
### サイトタイトルの色を変えてみよう
- Developer Toolを開く
- サイトタイトル部分を選択
- colorが.site-title a で指定されていることがわかる
- Developer Tool上で、redにしてみる
- CSSで指定してみる

---
### 変えたいのにうまく変わってくれない時
1. キャッシュが悪さをしていないか確認しよう
2. Developer ToolでCSSセレクタがうまく機能しているか確認しよう

---
### 子テーマまとめ
1. テーマはバージョンアップする可能性があるので、カスタマイズする場合には必ず子テーマを作成して、それをカスタマイズする。
2. CSSについては、style.cssに追記していく
3. phpを変更したい場合には、親テーマから該当するファイルをコピーし、変更する。


# 最終課題

---
### 最終課題
Wordpress を使って自由にホームページを作成してみよう。
#### 条件
- 子テーマを作成すること
- 固定ページと投稿ページがあること

---
### 自由に？？？？
自由に、で困る人は、自己紹介ページや趣味のページを目指しましょう。

---
### 考えるべきこと
- 何をコンテンツとして掲載しますか?
- どのように整理しますか?
- 固定ページとして何を設定しますか? (自己紹介?問い合わせ先?)
- メニューはどのような作りにしますか? 
- トップページには何を掲載しますか? 元のテーマのどの辺を変更しますか?

プラグインなども自由に利用して OK です。

---
### 今後の予定 & 締め切り
- 13回目 
- 14回目 
- 15回目 

15回目で講評会できたらいいな...実質2回の制作時間で間に合えば
というわけで、締め切り時間どうしよう...

---
### 提出方法
Wordpressはサーバがないと動かないので、ファイル提出ではみることができません。ですので、QuickTimePlayerで画面収録して、提出とします。(追って、やり方は説明します)

---
### 参考
2020年の先輩のが
- StudentVolume - 2020演習 - 情報デザイン演習I - Wordpress課題

にあるので、みてみてください。


## 終わり<!-- omit in toc -->


