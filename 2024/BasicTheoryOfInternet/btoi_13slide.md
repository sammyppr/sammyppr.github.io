---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 3
header: "インターネット基礎理論 13 検索エンジン
"
math: true
---

# インターネット基礎理論 13<br>検索エンジン

## はじめに
### 資料置き場
![bg right width:10cm](img/01_qr.png)
https://sammyppr.github.io

に授業資料を置いていきます。復習に使ってください。

欠席した場合などはスライドを確認して追いつくようにしましょう。

> スライドあるなら授業受けなくていいや

なんてことは思わないようにお願いします。

### 期末レポート課題1
課題1 以下についてそれぞれ400字以上で説明せよ。

- コンピュータの仕組みについて以下のキーワードを用いて説明せよ
ハードウェア・ソフトウェア・プロセッサ・メモリ・I/O・OS・アプリケーション

- インターネットの仕組みについて以下のキーワードを用いて説明せよ
TCP/IP・IPアドレス・ドメインネーム・DNS・URL・ポート・パケット・サーバ・クライアント・プロトコル

- ホームページの仕組みについて以下のキーワードを用いて説明せよ
ブラウザ・HTML・CSS・JavaScript・フロントエンド・バックエンド・データベース

### 期末レポート課題2
今後あなたはインターネットをどのように活用していくかを800字以上で説明せよ。

### 期末レポート課題
#### 締切・提出先
manabaに7月末までに提出せよ。

#### 注意
- インターネットの基礎を理解した上での説明が前提であるため、インターネット上の文章のコピペは不可とする。引用する場合には出典元を明確に示せ。
- manabaでファイルをアップロードした後、「提出」ボタンをクリックしないと提出扱いとならないため注意すること

#### ポイント
課題1はインターネットの基礎技術についてしっかり理解しているかを聞いています。
課題2は「あなたは」と入っているので、あなたの意見を聞いています。



## 今日の講義内容
今日は、第13回目検索エンジンについて説明します。
少し広げて簡単なデジタルマーケティングにも触れていきましょう。

## 情報発信するということ

企業等において、情報を発信するときには気をつけていることがあります。

1. **正しい情報をわかりやすく伝えられているか**
   コンテンツとしての情報やその見せ方について
2. **どのくらいの人に見てもらえているか**
   みて欲しいユーザーへの到達度

この２つのポイントをおさえなければ、ホームページ等を作っても誰にも見られず、意味がありません。

### コンテンツの見せ方

- コンテンツの情報が正しい
- 論理的に整理されている
- 見やすい

等の観点はコンテンツを作る上で非常に大事です。

間違えだらけなものや、見づらいホームページから情報を欲しいという人はいないですよね？

### ユーザーへの到達度

それに加えて、何人の人が見に来ているか、ということが重要になってきます。
これについても、いくつかの指標があります。

## アクセスログ評価

サーバーではアクセスした足跡を記録していますので

- **ユニーク数**: 訪問してくれた人の数
- **ページビュー(PV)**: ページを見た回数
- **1人あたりのページビュー**: ページビュー/ユニーク数。1人がたくさんのページを見てくれるということは、コンテンツの充実していて、使いやすく、信頼度が高いことを意味します。

という数字を拾うことは非常に簡単です。

これは、他の広告メディアでは難しいことですね。

### ユニーク数を高めるには？

ホームページに人を誘導するにはいくつかの方法があります。

- TV、新聞、雑誌など既存のメディアでURLを告知する
- インターネット上でバナー広告を打つ
- 検索されやすくする

今世の中の企業は、これ以外に何か手がないものかと頭をすごくひねっています。

今、日々進化している分野です。そして、「Webマーケティング」という言葉がさらに進化し「デジタルマーケティング」という用語が生まれています。

### どう情報を探している？

さて、質問

ユーザの立場で、あなたが何かの情報が欲しい時、どのようにそのページを探しますか？

## 検索エンジン

もちろん検索サービスを利用しますよね。

- Google
- Yahoo!

が代表的なものになっています。

2010年にYahoo!はGoogleの検索エンジンを導入することを決めましたので、事実上Googleがある意味独占しています。

- [【2024年1月】検索エンジンシェア率のランキングと推移（日本・世界）](https://ohdo.at21.jp/web/search-engine-share/)
- [検索エンジンの歴史を3分で解説！](https://digimake.co.jp/media/seo/history/)

### Yahoo!とGoogleどう違うの？

Yahoo!はGoogleを利用していますが、独自の処理をしています。
そのため、多少結果が異なります。

- 表示されるコンテンツが違う(Google, Yahoo!独自のサービスが検索結果に出てくる)
- パーソナライズド検索(過去の検索結果に影響を受ける)で結果が違う
- 広告が違う(Google AdWords,Yahooプロモーション広告に出稿された広告)

### Copilot(旧Bing AI)
検索エンジンの世界にもAIが進出しています。

AIによって、世の中がひっくり返る可能性は検索エンジンの世界にもあります。
> Copilotが使用しているGPT-4にはウェブブラウジング機能があり、回答に最新の情報を含むことができるようになっています。出力された情報のソースページが表示されますので、詳しく知りたい部分を自分で確認することが可能です。

## SEO

### 検索結果の順位

自分のページが上の方に掲載されてくれればよいのですが、
10ページ目等に出てしまうと、多くの人の目に触れないですよね。

### SEO

そこで

**SEO(検索エンジン最適化 Search Engine Optimization)**

という言葉がでてきます。

### 検索エンジンの仕組み

- 「クローラー」「スパイダー」と呼ばれるロボット（プログラム）がWeb上のページを収集します。
- 収集してきた情報を独自のアルゴリズムでデータベースに格納します。
- 検索に応じて、適宜検索結果を表示します。

もう少し細かくいろいろなことが行われているのですが、日々変化しています。

### 順位の上に表示されるには？

順位はGoogleが決めているわけですから、その仕組みがわかれば上位に掲載されるかもしれません。

ということで、GoogleとSEO対策会社のイタチごっこが行われてきました。

不毛な時代を超えて最近ではまともになりつつあります。Googleの中の人が頑張っているということを感謝しましょう。

### Googleのアルゴリズム流出
2024/05/29にGoogleのサーチアルゴリズムが漏洩したことが明らかになりました。

ちょっと専門用語も多いですが、見てみましょう。

- [【緊急】Google、情報漏洩。SEOアルゴリズム判明！？](https://www.youtube.com/watch?v=6qUf0RdF-8A)
- [【緊急・続報！】Google、情報漏洩。SEOアルゴリズムや新事実が判明！？](https://www.youtube.com/watch?v=wMw0dlVqmfo)

今後もアルゴリズムは日々アップデートは続くでしょう。

### SEO：内部施策

コンテンツを検索エンジンに正確に伝えるためにサイト内を最適化することです。

ポイントだけあげていきます

- 表示速度を上げる
- サイト構造がわかりやすい
- コンテンツが良い(オリジナル・新しい)
- htmlを正しく記述している
- ロボットがわかりやすいようにh1, title, metaタグ等を適切に表記している
- SSLの適用

良い内容の記事をわかりやすい構造で正しく書こう、ということになります。

### SEO：外部施策

他のサイトからいかにリンクを集めるか、という方法です。
ウェブサイトの権威性や信頼性を高める目的があります。

- 価値の高いコンテンツを作る
- SNS等からのリンクや「いいね」を集める

### SEO：簡単なまとめ

利用者に有益なコンテンツであれば、そうGoogleが判断すれば、順位は自然と上がっていきます。

姑息な手法はとらずに、「有益なコンテンツ」を発信することを心がけましょう。

## コンバージョン実績

### アクセスログ評価からコンバージョン実績へ

さて、ユニーク数やページビュー等のアクセス履歴からわかる評価にて、どのくらい人が訪れているか、はわかります。

しかし、それだけでは現在の企業は満足していないです。

さて、今の企業は何を欲しているでしょうか？

### コンバージョン実績

人がホームページに来るだけにとどまらず

企業の思惑通りの結果にユーザーが到達し、利益を生むアクションを起こしているか？

ということが重要になってきています。

### つまり？

つまり、企業は

- 商品を購入
- 資料請求

等のユーザーにして欲しいところまで行動しているかどうかを重要視しているわけです。

営利活動目的ですから、当然といえば当然です。

### Web上の広告

Web上に様々な広告がありますが、最近ではだいたい、そこをクリックした人は、その広告専用の

- ランディングページ

というところに飛ばされます。

そこから、実際に期待にそった行動をとったかを広告ごとに測っています。

(広告ブロックしていると表示されないので、シークレットでYahooを表示)

### Web上の広告2

そうすると、どこに広告を打てばより有効か、ということがわかります。

これまでテレビ広告・雑誌広告等についてはその効果をはっきりと測定することはできませんでしたが、インターネットではそのようなことまで明確に評価できるため、これまでより、よりシビアに広告宣伝費をどこに使うかを検討することが可能になってきました。

### 媒体資料
Yahooの媒体資料を見てみましょう。

- [Yahoo! JAPAN 媒体資料・ガイドライン](https://www.lycbiz.com/jp/download/yahoo/)



## その他の評価

また、デザインの改良のためにも、様々な指標をとります。

例えば、ページの中でヘッダー・サイドバー・コンテンツのどこに導線を配置すればより効果的か、等を測定するのです。

で、その効果が低い位置でのバナー掲出はやめるなど、デザインにも指標は影響を与えます。


## Webマーケティング

これまで途中から話していたことは、いかに、モノを売るか、ということに直結しています。

インターネットが始まる前、モノをいかに売るか、ということを考えるやり方を「マーケティング」と読んでいましたが、Webに特化して「Webマーケティング」という言葉がでてきています。

これも、日々進化している分野といえるでしょう。

### X(Twitter), Facebookによる変化

Blog,X(Twitter)やFacebookでは様々な人が様々なことに対して発言をしています。

このような発言を利用し、製品やサービスに関する「口コミ」を意図的に広め、低コストで効率的に商品の告知や顧客の獲得を行うマーケティング手法があり、このことを先ほどもいいましたが、

**バイラルマーケティング**

とよびます。

バイラルマーケティングは成功すれば、低コストで効率よく告知することができますが、口コミの広まり具合を企業側が直接制御することは難しいため、失敗例もたくさんあります。

## デジタルマーケティング

最近では「Webマーケティング」に対して「デジタルマーケティング」という言葉が使われるようになってきています。

Webマーケティングが2005年頃から使われ始めたのに対し、2009年頃から利用され始めます。

- [Google Trend](https://trends.google.co.jp/trends/explore?date=all&geo=JP&q=web%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0,%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0&hl=ja)

### Webマーケティングとデジタルマーケティングの違い

Webマーケティングが

> **企業のWebサイトを軸に考える**

のに対し

> **デジタルマーケティングはWebマーケティングより広い概念**

といえるようです。

### 具体的には？

- Webサイト、Eメール、スマートフォンアプリ、SNS等の活用
- 他チャネル連携(デジタルのポイントカードやデジタルサイネージ)
- 顧客データベース等のデータの分析活用

## まとめ

### 企業の考え方に対して

このように、企業は様々なことを考えて、人を誘導しようとしています。

もちろん、これは有効なやり方ではあります。

しかし、真に重要なことは
> 多くの人が幸せになるために、
> それぞれがどういう情報発信ができるか

ということかもしれません。

有効な情報があれば、人は自然とそこに集まるものです。

### Googleが掲げる10の事実

- [Google が掲げる 10 の事実](https://about.google/philosophy/?hl=ja)


### 小レポート
ネット上の広告からモノを購入したときのことを思い出し、なぜ購入したか述べよ。
購入した経験がない場合は、広告に興味を持たない理由を述べよ。

> あ！出席やばい人、manabaのレポートは後からでも提出可能な設定になっているため、出せるレポートは出しておきましょう。