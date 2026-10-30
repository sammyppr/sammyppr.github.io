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
Wordpressの復習もしたいので下準備をしてからCUI入門へ入っていきます。

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
### WEB系職種一覧
- 【Webデザイン系】Webデザイナー、UI/UXデザイナー
- 【エンジニア系】Webエンジニア（フロントエンド・バックエンド）、プログラマー
- 【管理系】Webディレクター、Webプロデューサー、Webプランナー
- 【マーケティング・ライティング系】Webマーケター、Webアナリスト、Webライター、Webオペレーター
- 【グラフィック・DTPデザイン系】DTP、グラフィックデザイナー

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
CUIをした後に、Wordpressの復習に取り掛かります。Wordpressはまだまだ利用されているので、おさらいしておきましょう。

(うーん、今日で平気そうなら、11回目やめるかも...)

本当は、Wordpressのテーマを自作しよう、をやりたいのですが、あまり評判良くないので、最終課題をポートフォリオ作成(HTML,CSS,JavaScirptで)を行なっています。

Wordpressを無料で利用できるサーバが少なく、(ほぼwordpress.com一択？？？)実際に稼働できないのも理由となっています。

Github Pagesを利用すれば、実際に稼働します。

<!--

来週から、基本はWordpressに取り掛かります。シラバス上の目標は「Wordpressのテーマの作成」です。
毎年、完成しません(泣き)。ですが、Wordpressを利用して、より高度なサイト構築にはトライしてほしいと思います。

(wordpressじゃなくて、html,css,javascriptで作りたい人いる？？？)
-->

---
### Github Pages
先に設定方法を覚えておきましょう。

- [Github Pagesの使い方まとめ](https://qiita.com/snow_swallow/items/631bbceabbb953da2646)

流れ
- 公開するWebページを作成
- Githubに新しいリポジトリを作成する
- 作成したリポジトリとローカル環境を連携する
- リポジトリにファイルを追加する
- コミット＆プッシュをする
- Github Pagesの公開設定をする



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
これ、どうなってるんでしょう？ターミナルで

> $ less /etc/hosts

としてみましょう。Winはコマンドプロンプトで
windowsのパスはC:\Windows\System32\drivers\etc\hostsなので
type C:\Windows\System32\drivers\etc\hosts かな

名前解決の仕組みはDNSサーバというのを利用していますが、
DNSサーバにお伺いを立てる前に、/etc/hostsのファイルを見ることになっています。

ですので、ここに強制的に書いてしまえば、ドメイン名をコントロールできることになります。開発環境においてはよくやる手法となります。

---
### スマホからのアクセス
アカウントを作成するとLiveLinkという機能があり、スマホでの動作確認も簡単にできる様です。

今回は使いません。

---
### 開発環境...
MAMPでもLocalでも、どちらにしろ、開発するための環境であり、実際に公開はできません。無料でホスティングしてくれるサービスがある模様です(広告付きだったり、限りなく制限あり。現状お勧めできない)。
実際に、ポートフォリオなどをWebで公開したい人、[vivivit](https://www.vivivit.com/)かなぁ...一応、みてみましょう。

- [無料で活用できるホスティングサービス３選！選び方と注意点も紹介](https://it-trend.jp/hosting/article/140-0006)
- [無料レンタルサーバーおすすめ6選！広告なしプランやWordPress対応も紹介](https://www.value-domain.com/media/free-rentalserver/)
- [14 Best Free WordPress Hosting Providers](https://blog.hubspot.com/website/best-free-wordpress-hosting-providers)

なお、このHPが置いてあるGithubでも静的なホームページの公開は可能です。
Netlifyも有名です。バックエンドのプログラミングが必要な場合は、かつてはherokuがありましたが、以下のような無料サービスがあります。

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

これでもいいですが、

Chrome拡張として**Responsive Viewer**というのも出ています。
こちらの方が気軽かな。

- [Responsive Viewer](https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=ja)

---
### Responsively App/Responsively Viewer
- iPhone
- iPad
- NoteBook

等の異なる解像度のデバイスでの表示を一度に閲覧することができます。便利でしょ。

## CUI入門

---
### 入門シリーズの最後として...(あ、2026年度からReact...)
ターミナルを利用してコンピュータを操作する方法を
- CUI: Character User Interface

と呼びます。
一方、マウスを利用してコンピュータを操作する方法を
- GUI: Graphical User Interface

と呼びます。
一般の人はGUIで十分ですが、CUIは開発者にとって便利なため、最近では Windows でも WSL２(Windows Subsystem for Linux 2) というものが出てきています。(以前は、独自のコマンドプロンプト)

---
### 何で今更？
- コンピュータの内部の動作は基本 CUI
- サーバ系では GUI は便利だけど絶対に必要なものではない(CPUをGUIの描画のために持ってかれる...)
- ワイルドカードと呼ばれる機能は便利

とかですかね...こういう世界があるということをElectronで経験しましたが、それの意味を知っておいてほしいと思います。

---
### まずはターミナルを起動しましょう。
ターミナルを利用して、コンピュータを操作できます。

デスクトップにでも実験用のtestというフォルダを作成しましょう。

Windowsの人、iMacでやってみましょう。(Windowsだとコマンドが変わる)

---
### Windowsの人用メモ
WSL2（Windows Subsystem for Linux 2）とは、Windows上で仮想化技術を使い、そのまま本物のLinux環境を動かすための機能です。

- [WindowsでWSL2を使って「完全なLinux」環境を作ろう！](https://www.kagoya.jp/howto/it-glossary/develop/wsl2_linux/)

Windowsの人でWSL2を使わない人は、多少変わります。
ターミナルの代わりに「コマンドプロンプト」を起動となります。
「cmd」で検索できると思います。
- [【コマンドプロンプト】目的別コマンド一覧｜基本的な使い方](https://techmania.jp/blog/cmd0002/)

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
### パイプ
UNIX系のコマンドはたいてい
- 標準入力
- 標準出力

というものが存在しています。

そして、標準出力を次のコマンドの標準入力に接続するパイプ「|」という機能もあります。

---
### パイプの例
$ ps aux
は、
> 現在システム上で実行中のすべてのプロセス（プログラム）を一覧表示するコマンドです。

ですが、多すぎて困ります。そんな時に
$ ps aux |grep visual

とすると、grepは
> テキストファイルやコマンドの出力結果の中から、指定した文字列や正規表現に一致する行を検索して抽出するプログラム（コマンド）
ですので、visualが入っている行のみ出力することができます。

- [【Linux】今日から使えるgrepコマンド](https://tech-blog.rakus.co.jp/entry/20220912/grep)

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
### その他
ターミナルのクリア
- clear
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
### ファイル名補完・上下矢印
ファイル名は途中まで打って、TABキーを押すと、勝手に入力してくれます。

上下の矢印で前のコマンドを簡単に呼び出せます。

---
### このくらいかな
ちょっと突っ込んだコンピュータの使い方をし始めると、ターミナルを利用することになります。

怖がらずに、「こんなものか」と思う様にしましょう。

一応まとまったページ紹介しておきます。
- [UNIXコマンドの使い方入門！用途別に一覧で種類も紹介](https://www.sejuku.net/blog/2643)
<!--
[これだけは覚えておきたい！基本的なUNIXコマンド20【初心者向け】](https://techacademy.jp/magazine/6406)
-->

---
### 最後にUNIXって何？
OSの1種です。で、
- Windows
- macOS
- Linux

が有名なOSですが、macOSとLinuxはUNIX系のOSとなっています。

- [UNIX系OSの系譜](https://ja.wikipedia.org/wiki/UNIX#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Unix_history-simple.svg)

- [Linuxとは？｜Linuxの成り立ちや、UNIXとの違いをまじえて3分でわかりやすく解説します(2:46)](https://www.youtube.com/watch?v=unkvw8TGC6g)
---
### homebrew
electronの時にhomebrewというものを利用しました。

> homebrew はmacOSやLinuxなどのOS上で、ソフトウェアや開発ツールをまとめて管理するためのパッケージ管理システム（パッケージマネージャー）です。
>
> HomebrewはmacOS（Sequoia 15以降）、Linux、Windows Subsystem for Linux（WSL）をサポートしています。

通常のアプリのインストールは、AppStoreでアプリをダウンロードするか、ダウンロードしてインストールをしていますよね。

その代わりにターミナルからインストールできます。前回はelectronというCUI向けのアプリケーションでした。

---
### homebrew cask
homebrewは開発者向けではありますが、caskという機能でGUIアプリケーションもインストール可能です。

- [Homebrew Cask でインストールできるオススメの無料アプリ一覧](https://qiita.com/normalsalt/items/e9603e6159338966ac81)

そして、homebrewのGUIアプリケーションも公式で発表されました。
- [Homebrew BrewUI](https://github.com/Homebrew/brewui)

アップデートや、新規Macでのインストールを一括でできる、というのが大きなメリットですね。

- [brew bundleでMacのアプリをまとめてインストール・管理](https://qiita.com/vochicong/items/f20afc89a6847cd58f0f)

全員マストというわけではないですが、こういう機能がある、ということは知っておきましょう。

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
2024/9/10には6.6.2、2026/10/30現在7.1.4まで出ています。

大きく変わったところは
> FSE(フルサイト編集)

となります。FSEについて知っておきましょう。

18分ありますが、おさらい含めてみてみましょう。
- [WordPress 6.0でノーコードサイト制作しよう](https://www.youtube.com/watch?v=-ocDLP6Jf8o)

Wordpress7の新機能はこちら
- [【2026年最新】WordPress7.0にアップデート！新機能と使い方をわかりやすく解説(11:04)](https://www.youtube.com/watch?v=lh4xp1J4Tno)

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

--- 
### FSEにするべきか
- [2026年のWordPress制作で知っておきたいFSEと従来のテーマ開発の選び方](https://ebiz-create.co.jp/emagazine/1536/)

こんな意見も
- [WordPressのフルサイト編集を学ぶ必要は無い(5:36)](https://www.youtube.com/watch?v=0War_ZoqkX0)

<!--
- [WordPressでフルサイト編集ができるベストブロックテーマ21選 (2024)](https://www.wpbeginner.com/ja/showcase/best-wordpress-full-site-editing-themes/)
-->

---
### 見せたくないなぁ...
AI機能が公式に...

- [知らなかった｜WordPressの公式AI機能でできること](https://www.youtube.com/watch?v=tdx8MounClc)


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
### 初めてで、よくわからない人
Cocoonというテーマは日本語情報たくさんあります。
自分は最近頼まれると、まずこのテーマで作成できるか確認しています。
動画を見て真似てみましょう。

- [【Cocoon】ブログを30分で「それっぽい」デザインにする手順を紹介【難しい事しません】](https://www.youtube.com/watch?v=4T1d2VkbGM0)

- [Cocoon マニュアル](https://wp-cocoon.com/manual/)

---
### 終わり
