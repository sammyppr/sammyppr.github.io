---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習II 11. ポートフォリオ作成 I
footer: ""
---

# 情報デザイン応用演習II 11. ポートフォリオ作成 I<!-- omit in toc -->

# 目次<!-- omit in toc -->

- [初めに](#初めに)
- [Github準備](#github準備)
- [ポートフォリオサイト](#ポートフォリオサイト)
- [HP制作 ワークフロー](#hp制作-ワークフロー)
    - [AI Tool紹介](#ai-tool紹介)
    - [Antigravity](#antigravity)
    - [ワークフロー](#ワークフロー)
    - [環境](#環境)
    - [ガントチャート](#ガントチャート)
    - [やってみよう](#やってみよう)




# 初めに

---
### 前回の内容<!-- omit in toc -->
フロントエンド開発で利用するReactについてやってみました。

難易度高かったかもしれませんが、
- こんな感じで開発してるんだ
- Webコンポーネントで、カスタムのHTMLタグ作れるんだ、ということを理解してくれればと思います。

---
### 今後の予定<!-- omit in toc -->
> ポートフォリオ作成

を最終課題として、それに対して今回入れて5回課題に取り組んでいこうと思います。

企画から公開までを全てこなす課題となります。
(Wordpressの場合は、画面録画)

# Github準備
---
### 初回にGithubを設定したけど
しっかり、うまく利用していたでしょうか？
- ステージに上げる
- コミット
- 同期

とすることで、Github上に常に最新版が掲載される状態となりましたね。

---
### .gitignore
気をつけるべきは、node_modulesなど、後で復活できるものはソースコードに入れないように
> .gitignore

というファイルを作成し、その中に以下の様に指定する必要があります。

```
# ディレクトリを指定する場合
node_modules/

# ファイルのパターン一致でコンパイルなどで生成したファイルを指定する場合
*.com
*.class
*.dll
*.exe
*.o
*.so
```

---
### ポートフォリオサイト用のリポジトリの作成
これまでは、演習の中身だったので、ポートフォリオサイト用に新しく、リポジトリを作成しましょう。

1. github.comにアクセス
2. ログイン
3. 上部の「+」から「New Repository」を選択
4. Repository nameに「portfolio」
5. Add READMEをON
6. Create repository

---
### VSCでクローン
1. portfolioリポジトリを選択した状態で
2. CodeからCloneのURLをコピー
3. VSCで新しいウィンドウを開く
4. Gitリポジトリのクローン
5. ローカルで保存する場所を選択

テスト用のindex.htmlを作成しておきましょう。

---
### Githubで公開
1. githubでportfolioリポジトリを選択した状態で
2. Settings
3. Pages
4. Branchで「main」を選択してSave

これで、少しするとリポジトリが公開されます。
公開されると、次のように表示がされます。

> Your site is live at https://sammyppr.github.io/portfolio

同期後、だいたい5分くらいで更新されますが、更新が終わったかどうかはActionsタブで確認できます。

---
### まずは、リポジトリがうまく設定されているか確認しよう。
1. テストで作成したindex.htmlがうまくURLで表示されるか確認
2. index.htmlを改変
3. ステージに上げて、コミット、同期
4. 更新が反映されていることを確認


# ポートフォリオサイト

---
### 前提条件<!-- omit in toc -->
実力差が激しいので、
1) 静的ページで作成する
- Github Pagesとして公開すること
- レスポンシブ対応であること

2) Wordpressを利用する
- FSE対応テーマでなければ小テーマを利用すること

3) ポートフォリオ作成ツールを利用する

のどれでも良いことにします。(本当は3は避けて欲しいけど...)

---
### AIについて<!-- omit in toc -->
AIを利用しながらの制作はこれから、必須でしょう。

もちろん、自力で作成してくれても構いませんが、AIの利用も可とします。

# HP制作 ワークフロー
---
### AI Tool紹介
- [Magic Todo](https://goblin.tools/)

を利用して、ポートフォリオサイトに必要なステップを洗い出してみましょう。

---
### Antigravity
メディア表現VIでもやるつもりですが、
自律型AIエージェントを主体とする開発プラットフォームである「[Google Antigravity](https://antigravity.google/?hl=ja)」を紹介しておきます。

- [Google AntigravityでNanobananaの画像付きWebサイトを作ってみた](https://youtu.be/wpW8-GvDfKY?si=5rb7xXiUvmI7PFO3&t=154)
- [Google Antigravityでブラウザのセットアップ手順](https://ai-souko.jp/archives/243)
- [【完全ガイド】Google Antigravityの使い方！初期設定から実際の動作まで徹底解説](https://www.youtube.com/watch?v=Yt_6cbzUWAA)


参考
- [【圧巻】Gemini 3 Proでプロ顔負けのWebサイトが作れるようになりました...](https://www.youtube.com/watch?v=hxVaOKXVtsQ)



---
### ワークフロー
通常以下のような流れとなります。
1. ヒアリング
2. 企画立案・サイト設計
3. コンテンツ制作
4. Webサイトデザイン
5. コーディング
6. 校正・品質チェック
7. 確認・チューニング
8. サイト公開

---
### 環境
通常では
1. 開発・テスト環境
2. ステージング環境
3. プロダクション(本番)環境

と使い分けます。

1. 個人のPC
2. 関係者がアクセスできるサーバ
3. 不特定多数がアクセスできるサーバ

ですが、今回2番目は使いません。
2のところで、テストなどを行います。

---
### ヒアリング<!-- omit in toc -->
クライアントがいる場合、要望などを聞きます。
また、この場合、現状サイトや競合サイトの分析も行います。

今回は、ポートフォリオサイトとしてどんなものがあるか、分析調査してみましょう。

---
### 企画立案・サイト設計<!-- omit in toc -->
分析調査を踏まえたうえで、ユーザに効果的な
- Webサイトの企画
- サイトマップ

を制作します。

---
### コンテンツ制作<!-- omit in toc -->
コンテンツに必要な
- コピー
- 文章
- 画像

などを制作します。

今回は、ポートフォリオサイトのため、これまでに制作し、掲載したいコンテンツをWebで掲載できるように準備しましょう。

例えば、psd, ai, movファイルでは掲載できません。PDF,PNG,mp4形式に変換しましょう。

---
### IFRAME<!-- omit in toc -->
HTMLではIFRAMEというタグがあります。

Webページ内に別のWebページや画像、動画などのコンテンツを読み込んで表示することができます。

ってことは、前半にやったJavaScriptの作品もこれで公開できるはずです。

- [iframeとは？基本的な仕組みと使い方・使用例を解説](https://digital-marketing.jp/creative/what-is-an-iframe/)

---
### Webサイトデザイン<!-- omit in toc -->
情報を整理し、ユーザビリティを考慮したWebページをデザインします。

<!--
一から制作するのは大変ですので、XDのテンプレートを利用してもOKです。レスポンシブ対応なことにも留意しましょう。

- [Free XD responsive portfolio template](https://www.xdguru.com/free-xd-responsive-portfolio-template/)

こんなの使うと作りやすいかもです。自分でも探してみましょう。「XD ポートフォリオ テンプレート」等
-->

一から制作するのは大変ですのでFigmaのテンプレートを利用してもOKです。レスポンシブ対応には注意しましょう。

- [ポートフォリオのテンプレート](https://www.figma.com/ja-jp/community/portfolio-templates?resource_type=files&editor_type=figma)


- トップページ
- 各作品ページ
- 自己紹介ページ

があれば、最低限足りると思います。

後述する**モバイルファースト**も意識しましょう。

---
### コーディング<!-- omit in toc -->
最近では**モバイルファースト**でレスポンシブ対応することが多いようです。(Googleさんの意向も大きいようですが)

- [モバイルファーストデザインとはスマホ版から作ればOK？手順やCSS解説つき](https://pecopla.net/web-column/mobile-first-design)

```
@media screen and (width <= 768px){
  /*タブレット用として画面幅を768pxまでに設定*/
}
@media screen and (width <= 1024px){
  /*PC用として画面幅を1024pxまでに設定*/
}
```
で追記していきましょう。最悪、モバイルとPC版でOKとします。

- [参考：レスポンシブ対応のレイアウトを実装する最新テクニックを解説、モバイルファーストとデスクトップファーストの現状](https://coliss.com/articles/build-websites/operation/work/mobile-first-and-desktop-first.html)

---
### コーディングの方法<!-- omit in toc -->
- 全体的な構造(ヘッダー・フッター・サイドバー・コンテンツ)等を実装する
- 各エリアを個別に実装する。
- レスポンシブ化する。

---
### ハンバーガーメニュー<!-- omit in toc -->
レスポンシブ対応時にほとんどは、レイアウト変更で対応できるかと思いますが、それで対応できないのがハンバーガーメニューとなります。

この辺参考にしてみましょう。

<!--
- [【コピペで簡単】ハンバーガーメニューをCSSだけで作る方法](https://rui-log.com/css-hamburger-menu/)
-->
- [【脱・JavaScript】CSSだけで作る！リッチに動くハンバーガーメニュー完全ガイド](https://qiita.com/mukai3/items/f465c2bff43a4ce63299)

---
### 校正・品質チェック<!-- omit in toc -->
様々な環境で表示エラーや動作の不具合がないかチェックしましょう。

- ResponsivelyApp
- Chrome拡張 [ResponsiveViewer](https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=ja)

もうまく使っていきましょう。

---
### 確認・チューニング<!-- omit in toc -->
クライアントにチェックをうけ、直していきます。

今回は、なくてもいいですかね。


---
### 就活で利用する場合<!-- omit in toc -->
ソースを見れば、採用担当者はHTMLやJavaScriptの技術がどのくらいするか判断できることを意味します。

```
<!--
   HTMLのコメントアウト
-->
// JavaScriptの1行のコメントアウト
/*
   JavaScriptの複数行のコメントアウト
*/
```
等も気にすると、評価する人にアピールもできますね。

---
### ワークフロー(再掲)<!-- omit in toc -->
1. ヒアリング
2. 企画立案・サイト設計
3. コンテンツ制作
4. Webサイトデザイン
5. コーディング
6. 校正・品質チェック
7. 確認・チューニング
8. サイト公開

---
### ガントチャート
> ガントチャートとは、プロジェクト管理や生産管理などあらゆる管理工程に使う表です。

残り5回ありますが、ステップがいくつもあるので、いつくらいまでにどう終えるかスケジュールを立ててみましょう。

NotionのTimelineという便利な機能があるのでそれを使ってみましょう。
- [Notionでガントチャートを瞬殺で作る。【プロジェクト管理】](https://www.tagtec.net/notion-timeline/)



---
### やってみよう
それでは、まず1-4あたりをやっていきましょう。

今日を入れて、残り5回となります。

トラブったらどんどん質問してください。