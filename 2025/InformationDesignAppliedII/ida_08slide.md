---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習II 8. CUI入門
footer: ""
---

# 情報デザイン応用演習II 8. CUI入門<!-- omit in toc -->

# 目次<!-- omit in toc -->

1. [初めに](#初めに)
   1. [何のためにいろいろやってきたの？](#何のためにいろいろやってきたの)
   2. [開発環境構築](#開発環境構築)
   3. [CUI入門](#cui入門)
   4. [Wordpressおさらい](#wordpressおさらい)



# 初めに

- ECMAScript入門
- Canvas入門
- Canvas応用
- ThreeJS入門
- アプリ開発入門
- AI入門

とやってきました。お疲れ様でした。
来週の下準備をしてからCUI入門へ入っていきます。

---
### FaceRecognitionFirstStepの説明<!-- omit in toc -->

軽くおさらいしてみましょう。



## 何のためにいろいろやってきたの？

---
### Web系の職種
Web系の業界(IT系とかアプリ開発とかいろいろ言いますが)ではどんな職種があるのでしょうか？
見て見ましょう...前より増えて分類されてる気が...

- [Web業界に携わる職種12選！職種ごとの年収や必要なスキルも解説](https://www.geekly.co.jp/column/cat-position/2011_037/)

---
### 一般企業では耳にしない特殊な職種があるWEB系
#### 指揮系の職種
- Webディレクター / Webプロデューサー / Webプランナー

#### 作業系の職種
- Webデザイナー / DTP・グラフィックデザイナー / UI/UXデザイナー / Webエンジニア / サーバーエンジニア / Webライター / Webオペレーター / プログラマー

#### 解析系の職種
- Webマーケター

---
### 共通して必要なこと
なんでしょうか？

---
### 答え
新しい技術に敏感であることです。

利用者としてだけではなく、開発者側の知識を持っていないと、指揮も作業も解析もできません。

---
### JavaScriptのコードが理解できなくても
- こんなことできるらしい

ということは理解したのではないでしょうか。

これから就活するにあたって、Web系を目指す人にはこのような視点を持って、何になりたいかを考えてほしいと思います。

---
### なお...
12つに分類してありましたが(2023は7だったのに...)、案件によって一人で複数こなすこともあることは知っておいてください。

## 開発環境構築

---
### Wordpress
来週から、基本はWordpressに取り掛かります。シラバス上の目標は「Wordpressのテーマの作成」です。
毎年、完成しません(泣き)。ですが、Wordpressを利用して、より高度なサイト構築にはトライしてほしいと思います。

(wordpressじゃなくて、html,css,javascriptで作りたい人いる？？？)

---
### MAMP
覚えてる人？

---
### MAMPとは？
Mac, Apache, MySQL, PHPの頭文字で、Wordpressの開発環境に必須でしたね。
- Mac: OS
- Apache: Webサーバ
- MySQL: データベースサーバ
- PHP: 言語

の意味でしたね。この4つがないと、Wordpressは動きませんでしたね？

---
### Wordpressが動作する仕組み
1. WebサーバにWordpressが存在する
2. クライアントがWebサーバにアクセス
3. phpが必要に応じてデータベースサーバにアクセスして必要な情報をクライアントに返す

Webサーバ・データベースサーバ、2つのサーバがどうしても必要ですね。

---
### MAMPでのWordpressインストール作業
1. MAMPのダウンロード・インストール・起動
2. Wordpressのダウンロード・設置
3. Wordpressの初期化
4. MySQLAdminを利用したデータベースの初期化
5. インストール完了

まとまったページを見て見ましょう
[MAMPを使ってローカル環境にWordPressをインストールする方法](https://lucy.ne.jp/bazubu/how-to-insall-wp-in-mamp-23798.html)

---
### Wordpressのインストール、意外とめんどくさい...
というわけで、
> Local by flywheel

という素晴らしい開発環境が出てきました。(数年前からあったけど)
去年使ってるね？？？

---
### Local by flywheelのインストール
1. [Local by flywheel](https://localwp.com/)をダウンロード(DOWNLOAD FOR FREEで問題ないです)
2. 名前とEmailは入力しないとダウンロードできないかな。
3. dmgを開いてアプリケーションフォルダに入れて、Local.appを起動しましょう。
4. 「CREATE A NEW SITE」又は左下の「+」
5. サイトネームを入力(英語がいいかな)
6. サーバ環境はPreferredで問題ないです。
7. Wordpressのユーザ名・パスワードを設定(忘れないで！)
8. 「ADD SITE」で待ってれば終わり。途中でPC/Macの管理者パスワードを聞かれることがあるかも

---
### 自分でWordpressインストールする時と比べると
簡単だね！
ただし、
- Webサーバ
- DBサーバ

が必要、という原理はしっかり抑えておこう。手間をなくしてくれてるだけなので。

また、気楽に新しいサイトを実験してみたり、捨てたりすることができるよ。

---
### Wordpressへのアクセス方法
- ADMIN(管理画面)
- VIEW SITE(サイトの閲覧)

のどちらかでアクセスできます。

---
### ADMINでアクセス
1. Settings - General - Site Language を日本語に
2. 日本なのでTimezoneをUTC+9に
3. Save Settingsをクリックで完了。

---
### ドメイン
****.localというドメイン名でアクセスしてますね。
これ、どうなってるんでしょう？

> $ less /etc/hosts

としてみましょう。

名前解決の仕組みはDNSサーバというのを利用していますが、
DNSサーバにお伺いを立てる前に、/etc/hostsのファイルを見ることになっています。

ですので、ここに強制的に書いてしまえば、ドメイン名をコントロールできることになります。開発環境においてはよくやる手法となります。

---
### スマホからのアクセス
アカウントを作成するとLiveLinkという機能があり、スマホでの動作確認も簡単にできる様です。

今回は使いません。

---
### 開発環境...
MAMPでもLocalでも、どちらにしろ、開発するための環境であり、実際に公開はできません。無料でホスティングしてくれるサービスがある模様です(広告付きだったりするけど...)。
実際に、ポートフォリオなどをWebで公開したい人、vivivitでも問題ありませんが、Wordpressで使うなら、こういうサービスがあることを知っておきましょう。

- [無料で活用できるホスティングサービス３選！選び方と注意点も紹介](https://it-trend.jp/hosting/article/140-0006)
- [無料レンタルサーバーおすすめ6選！広告なしプランやWordPress対応も紹介](無料レンタルサーバーおすすめ6選！広告なしプランやWordPress対応も紹介)
- [14 Best Free WordPress Hosting Providers](https://blog.hubspot.com/website/best-free-wordpress-hosting-providers)

なお、このHPが置いてあるGithubでも静的なホームページの公開は可能です。
バックエンドのプログラミングが必要な場合でも、Netlifyを含め、以下のような無料サービスがあります。

- [Herokuの代替サービス30選、使ってみた参考記事リンク付き](https://qiita.com/rana_kualu/items/f7fc4916b7dc9797839e)

---
### Studio by wordpress.com
Localの対抗馬のStudioも紹介しておきます。

> Studio by WordPress.comは、WordPressの開発元であるAutomatticが提供する、ローカル開発環境を簡単に構築できる無料のツールです。

- [Studio by WordPress.comの使い方・設定方法【ローカル環境が爆速構築】](https://shogo-log.com/studio-by-wordpress-com/)

デモサイト共有機能はちょっといいな

---
### 複数端末での表示確認(Chrome)
Chromeでレスポンシブデザインを確認するときには
- デベロッパーツール(Option+Command+I)
- 矢印の右のToggleDeviceToolbar(Command+Shift+M)

でもできますが、便利なアプリを一つ紹介しておきます。

---
### 開発者向けブラウザ
[Blisk](https://blisk.io/)という開発者向けのブラウザがあります。

ですが、残念なことに10分試用はできるのですが、基本有料ソフトになります。

というわけで、探していたら、ありました！
[Responsively App](https://responsively.app/)

これも入れておきましょう。

Chrome拡張として**Responsive Viewer**というのも出ています。
どちらにするかは気分ですかね。

- [Responsive Viewer](https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=ja)

---
### Responsively App
- iPhone
- iPad
- NoteBook

等の異なる解像度のデバイスでの表示を一度に閲覧することができます。便利でしょ。

## CUI入門

---
### 入門シリーズの最後として...
ターミナルを利用してコンピュータを操作する方法を
- CUI: Character User Interface

と呼びます。
一方、マウスを利用してコンピュータを操作する方法を
- GUI: Graphical User Interface

と呼びます。
一般の人はGUIで十分ですが、CUIは開発者にとって便利なため、最近では Windows でも WSL(Windows Subsystem for Linux) というものが出てきています。(以前は、独自のコマンドプロンプト)

---
### 何で今更？
- コンピュータの内部の動作は基本 CUI
- サーバ系では GUI は便利だけど絶対に必要なものではない
- ワイルドカードと呼ばれる機能は便利

とかですかね...こういう世界があるということをElectronで経験しましたが、それの意味を知っておいてほしいと思います。

---
### まずはターミナルを起動しましょう。
ターミナルを利用して、コンピュータを操作できます。

デスクトップにでも実験用のtestというフォルダを作成しましょう。


---
### Finderでやっていること
まずは、CUIの基本として
- pwd 自分がどこにいるかを見る
- ls ディレクトリの情報を見る
- cd 別のディレクトリに移動
- less テキストファイルの中身を閲覧

---
### Finderでやっていること
次はディスクの情報を書き換える (削除など) をやってみましょう。
- touch 新規作成/修正時刻を修正 
- cp コピー
- mv 移動
- rm 削除
- mkdir ディレクトリの作成
- rm -r ディレクトリの削除
気をつけて実行しましょう。

---
### ファイルの作成
vi とか emacs とかいったテキストエディタを利用しても良いですが 
- echo 表示する
- 「>」 リダイレクト

を組み合わせることができます。
  
> echo hello > hello.txt

とすることで、中身が hello である hello.txt を作成することができます。 less で見てみましょう。

---
### ファイルのグループ権限
ファイルには、誰が利用して良いか?という設定が可能です。
- everyone
- group
- owner

のそれぞれに 
- x 実行権
- w 書き込み権
- r 読み込み権

の設定をすることができます。書き込み権を持つ人は削除する権利も持っています。

---
### 権限の確認
> ls -al

として確認することができます。alはオプションです。

> man ls

とするとオプションの中身を知ることができます。

---
### グループの変更・権限の変更
紹介にとどめますが、
- chmod 権限の変更
- chgrp グループの変更

---
###
ターミナルの終了
- exit

---
### ワイルドカード
- 「*」 複数のなんかの文字
- 「!」 1文字の何かの文字

を表します。
> ls *.txt

とすると、拡張子がtxtのものだけが表示されます。

---
### ファイル名補完
ファイル名は途中まで打って、TABキーを押すと、勝手に入力してくれます。

---
### このくらいかな
ちょっと突っ込んだコンピュータの使い方をし始めると、ターミナルを利用することになります。

怖がらずに、「こんなものか」と思う様にしましょう。

一応まとまったページ紹介しておきます。
[これだけは覚えておきたい！基本的なUNIXコマンド20【初心者向け】](https://techacademy.jp/magazine/6406)

---
### 最後にUNIXって何？
OSの1種です。で、
- Windows
- macOS
- Linux

が有名なOSですが、macOSとLinuxはUNIX系のOSとなっています。

[UNIX系OSの系譜](https://ja.wikipedia.org/wiki/UNIX#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Unix_history-simple.svg)

## Wordpressおさらい

---
### 覚えてますか？
- Wordpressって何？
- 投稿・固定ページって何？
- テーマって何？
- 子テーマって何？


---
### Wordpressの進化
Wordpressが2022/5/24に6.0をリリースしました。
2024/9/10には6.6.2まで出ています。

大きく変わったところは
> FSE(フルサイト編集)

となります。FSEについて知っておきましょう。

18分ありますが、おさらい含めてみてみましょう。
- [WordPress 6.0でノーコードサイト制作しよう](https://www.youtube.com/watch?v=-ocDLP6Jf8o)

---
### FSEとは？
サイトの
- トップページ
- ヘッダー
- フッター
- サイドバー

全てを含めた全てをブロックで組み立てられるようになりました。
Gutenbergでは記事部分のみだったのが拡張された、ということになります。

---
### FSEで気をつけること
実際にFSEが現場で使われているのかちょっとまだよくわかりません。

> ブロックエディタでいろいろカスタマイズできる = 簡単にデザインの一貫性が壊れる

ということを意味します。ここだけ注意しましょう。

なお、FSE対応テーマでないと有効にはなりません。公式ではTwentyTwentyTwo以降が対応しています。

対応テーマは以下にまとまっています。
- [【2025年】WordPressフルサイト編集でおすすめのブロックテーマ5選！](https://wpmake.jp/contents/theme/fullsite-editing-theme/)
- [WordPress Full Site Editing](https://fullsiteediting.com/themes/)

<!--
- [WordPressでフルサイト編集ができるベストブロックテーマ21選 (2024)](https://www.wpbeginner.com/ja/showcase/best-wordpress-full-site-editing-themes/)
-->

---
### 残り時間
Wordpressをおさらいしていきます。
- テーマを決める
- 子テーマを設定
- サイト構成の決定
- カテゴリの設定
- 固定ページの作成
- メニューの作成
- 必要に応じてプラグインインストール・設定

<!--
- 必要に応じてElementorをインストール
   [Elementorの使い方：インストールから・ページの作成までご紹介！](https://www.youtube.com/watch?v=6uoyAzctyPE)
にたものとして、SiteOriginがあります。
-->


---
### 終わり
