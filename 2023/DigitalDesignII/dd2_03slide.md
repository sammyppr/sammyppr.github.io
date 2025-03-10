---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: デジタルデザイン基礎演習 第2ターム 3. シェイプアニメーション入門
footer: ""
---

# デジタルデザイン基礎演習第2ターム <!-- omit in toc -->
> 3. シェイプアニメーション入門

# 目次<!-- omit in toc -->

- [初めに](#初めに)
  - [前回の提出終わってない人](#前回の提出終わってない人)
- [macOSについて](#macosについて)
  - [フォルダ名・ファイル名](#フォルダ名ファイル名)
  - [アプリケーションフォルダ](#アプリケーションフォルダ)
- [タイピングについて](#タイピングについて)
- [シェイプアニメーション](#シェイプアニメーション)
    - [シェイプレイヤー](#シェイプレイヤー)
    - [入れ子(ネスト)](#入れ子ネスト)
- [自由課題説明](#自由課題説明)
- [それでは演習に...](#それでは演習に)


## クラス間違えてない？<!-- omit in toc -->
ホワイトボード見て、クラス間違えていないか確認しましょう。

<!--## 作品ノート
前期、作品ノートは活用したでしょうか？

manabaに作品ノートというコースがあります。

ここに、完成した課題を随時掲載していくと、3,4年生の時に、「あれ、1,2年で何やったっけ？」というのをすぐに思い出せるようになります。

ためていきましょう。
-->

## 前回のおさらい - キーフレーム<!-- omit in toc -->
前回一番覚えてほしかったことは、
- キーフレームでA,Bというタイミングで値を指定すると、自動的にその間を補完してくれる

という基礎概念でした。

これは、時間軸を扱うアプリケーションでは全てにおいて有効な考えとなります。

慣れましょう。

## 前回のおさらい - その他<!-- omit in toc -->
- 2Dアニメーションではスピードを変えることで、遠近感を調整が可能なこと
- パペットピンツールで変形は自由自在！

## 前回の提出終わってない人
提出してくださいね。<!-- omit in toc -->

## 前回休んでいる人は<!-- omit in toc -->
まだ、前回の終わっていない、という人は前回のを終わらせて
- 素材の準備
- 素材の読み込み
- 素材の配置
- キーフレーム
- 書き出し

についてしっかり把握してから今日の課題に取り組みましょう。

## 作業フォルダとデータについて<!-- omit in toc -->
> 作業フォルダを作ってそこに素材を入れて下さい

と説明しました。aepファイルも間違いなくそこに入れましょう。

なお、自動保存等、勝手にAfterEffectsがファイルを作成します。
そこは基本触らないようにしてください。


## 今日の内容に入る前に<!-- omit in toc -->
ちょっと見ていて、Macの操作がおぼつかない人が見受けられます。

Macについておさらいしていきましょう。

# macOSについて
Winの人も多少フォロー入れながらコンピュータの基本についておさらいしましょう。

## OSとは<!-- omit in toc -->
コンピュータを操作する上で基本となるソフトウェアです。
- 画面操作
- ファイル操作

などを担当します。

## OSのバージョンについて<!-- omit in toc -->
> アップルメニュー(左上) - このMacについて

として、macOSのところを見てみましょう。現在最新バージョンは**Ventura 14.0**(2023/9/27現在)です。
昨日まで**Ventura 13.6**(2023/9/26現在)です。

大きなバージョンアップでは機能が追加されます。
小さなバージョンアップでは、バグが解消されます。

小さなバージョンアップはまめに対応しましょう。大きなバージョンアップはバグが増える可能性があるため、様子を見てからにしましょう。(ネットでバグ情報などを調べましょう)

- [macOS Sonoma 14 配信開始日は2023年09月27日 水曜日 (日本時間)](https://applekyo.com/news/macos14/)



## OSのバージョンアップ<!-- omit in toc -->
システム環境設定で
> 一般 - ソフトウェアアップデート

にてバージョンアップできます。

## Winのバージョンアップ<!-- omit in toc -->
定期的に大型アップデートがあります。
パソコンの空き容量がないとうまくいかなかったりするので、空けてから作業しましょう。

## ノートパソコンの終了について<!-- omit in toc -->
- スリープ
- システム終了

の二つがありますが、スリープで基本的には十分です。
- 調子が悪くなってきた時
- 月1回くらい

システム終了しましょう。

## フォルダとファイル<!-- omit in toc -->
コンピュータでは
- フォルダ：整理するための器・箱のようなもの。ディレクトリという
- ファイル：実際のデータ

のようにデータを整理します。

日頃からうまく整理することを心がけましょう。

## フォルダ名・ファイル名
- 「aaa.docx」等の**ピリオド+英数字**は拡張子と呼ばれ、ファイルの種類を判別するものになります。フォルダ名に拡張子はつけるとトラブルの元です。
- 英数字と「-」「_」を基本的にファイル名で利用しましょう。全角ではなく半角です。
- スペースは使わない方がいいです。
- 日本語もたまにバグの原因となります。なるべく避けましょう。

## iCloud Drive<!-- omit in toc -->
MacではiCloud Driveにて同期をすることで
- 自動バックアップ
- 複数機器で同期

というメリットがあるのですが、
> "デスクトップ"フォルダと書類フォルダ

を同期してしまうと、iCloudの無料ストレージは5GBですから、あっという間にiCloudの容量を使ってしまい、
- 容量が足りません
- 容量を追加してください

と、お金を支払うよう促されます。Appleにお布施をしたくない人は解除をお勧めしますが、解除すると自分のMacから一回データが消えてしまいます。

## iCloud Drive フォルダの同期解除方法<!-- omit in toc -->
同期解除しても、iCloud上にはあるはずなので、そこからバックアップでも良いのですが、
1. NASにバックアップ
2. 同期を解除
3. NASから必要なデータをコピー

が安心です。たくさん聞かれそうなので、別ページにまとめました。

- [Macいろいろ](https://sammyppr.github.io/Mac/)

## FileVault<!-- omit in toc -->
データを暗号化して保存してセキュリティ保護を強化するための**FileVault**という機能がついています。

が、学生の間はそこまで重要なデータを持っていないため、オフにしておいて良いと思います。

壊れた時の復旧等が難しくなるためです。
オフにする場合にも、バックアップ取っておくことをお勧めします。

- [MacでFileVault暗号化をオフにする](https://support.apple.com/ja-jp/guide/mac-help/mchlp2560/mac)

## ホームディレクトリ<!-- omit in toc -->
> ドライブ名 - ユーザ - ユーザ名

のことを**ホームディレクトリ**といいます。

基本的にはデータの保存場所はこの中になります。

- アプリケーション：　ここは意識しなくて良いです。
- ダウンロード：　ブラウザでダウンロードするとここに入ります。
- デスクトップ：　デスクトップにあるファイルの実態はここです。
- パブリック：　あまり意識しなくて良いです。
- ピクチャ：　「写真」のデータがここに主に入ります。
- ミュージック：　「ミュージック」「GarageBand」等のデータが主に入ります。
- ムービー：　「iMovie」のデータが主に入ります。
- 書類：　**ここを整理して使いましょう。**

## 書類フォルダの中の例<!-- omit in toc -->
- 2022
- 2023
  - 前期
  - 後期
    - デジタルデザイン基礎演習II
      - 小林ターム
        - 01
        - 02
        - 03
        - 04
        - 05

このようにルールを決めておくと、どこに何があるかはっきりわかります。

## アプリケーションフォルダ
- AppStoreからインストールしたものや、インストーラ(.pkg)を開いてインストールした場合、自動的にここに入ります。
- ダウンロードフォルダにアプリケーションがダウンロードされる場合があります(VSCode等)。その場合には、アプリケーションフォルダに移動しましょう。


## デスクトップやダウンロードフォルダ<!-- omit in toc -->
- デスクトップは一時的におくのは良いですが、基本書類フォルダの中に移動しましょう。
- デスクトップにファイルがたくさんあると処理に負荷がかかります。
- ダウンロードフォルダにダウンロードしたものも整理しましょう。

## Finderのサイドバーや、Dock<!-- omit in toc -->
フォルダやファイルの実体は一箇所ですが、簡単にアクセスできるように
- Finderのサイドバー
- Dock
- デスクトップ

にショートカット・エイリアス(実体ではなく指し示すもの)を置くことができます。

## Finderのモード切り替え<!-- omit in toc -->
基本はカラム表示がお勧めです。

- アイコン表示：　あまり使わない
- リスト表示：　日付やファイル容量を見たい時
- カラム表示：
- ギャラリー表示：写真の閲覧用

QuickLookといって、Finderでファイルを選択した後にスペースキーを押すと、拡大して表示する機能もあります。

## Finderのタグ<!-- omit in toc -->
ファイルを右クリックすると色をつけることができます。
- 重要なものがすぐにわかるように
- 写真や動画の選別

にて利用可能です。

## ゴミ箱<!-- omit in toc -->
- 基本的にファイルをゴミ箱に入れても、消去はされていません
- 「ゴミ箱を空に」のタイミングで消去されます。
- ネットワーク上のファイルはゴミ箱に入れるタイミングで消去されることもあります。

SDカード等も、ゴミ箱に入れただけでは消えませんので、ゴミ箱を空にして利用できる容量を増やしましょう。

## アプリケーションについて<!-- omit in toc -->
利用していないのにアプリケーションが開きっぱなしだとメモリを利用してしまうので、意図的に終了するようにしましょう。

CPU/メモリの利用状況は
- アプリケーション - ユーティリティ - アクティビティモニタ

で確認することができます。


## 強制終了<!-- omit in toc -->
たまにアプリケーションがバグってカーソルが虹色になってクルクル回ることがあります。

すごい勢いで計算していることもありますが、あまりに長い時には以下の方法で強制終了しましょう。
- アップルメニューから
  1. アップルメニュー - 強制終了
  2. アプリケーションを選んで「強制終了」
- Dockから
  1. アプリケーションを右クリック
  2. 強制終了(通常は終了ですが表記が変わります)


## MacOSまとめ<!-- omit in toc -->
あらゆる作業に取って、OSは鉛筆のようなものです。

そこの使い方がたどたどしいと、全ての操作に影響が出ます。

Macにどんどん慣れていきましょう。

- 「Mac 使い方」
- 「Mac 初心者」
- 「Mac 便利な機能」

などで色々出てきます。


<!-- Mac ここまで -->
# タイピングについて
「情報リテラシー・DS概論」にてタイピングについても触れているはずですが、補足として説明しておきます。

## ブラインドタッチ<!-- omit in toc -->
[e-typing](https://www.e-typing.ne.jp/)の腕試しで200程度ある人は困りませんが、そうでない人はしっかりブラインドタッチを修得しましょう。
ブラインドタッチとは
> キーボードのキーを見ずに、指先の感覚だけを頼りにしてキーを正確に打つタイピング技法

です。そのためには、
1. ホームポジションに必ず戻る
2. キーの位置を覚える
3. 組み合わせる「ひらがな」や「単語」を練習してスピードアップ

が必要となります。


## ホームポジション<!-- omit in toc -->
キーボードに突起物のある「F」「J」に左右それぞれの人差し指を置きます。
中指・薬指・小指は一つずつ隣に置きましょう。

何かをタイピングして、一呼吸置いた時には突起物を頼りに必ずホームポジションに戻りましょう。

## キーの位置を覚える<!-- omit in toc -->
e-typingの腕試しはやっているようですが、アカウントを登録していない人が多いようです。
- ますは、e-typingのアカウントを作成しましょう。
- 練習メニューの基礎練習を開きます。
- 練習1,2,3,4をしましょう。
- 中段・上段・下段の順でキーボードの位置を覚えていきましょう。

## [重要]下を見ちゃダメ！！！<!-- omit in toc -->
e-typingでは、
> どの指でどのキーを抑えるか

を図で紹介してくれます。キーボードは身ちゃいけません。

といっても、見ちゃうものです。

ここで、秘密兵器！
> 両手の上にタオルを乗せてキーボードを見えなくしよう

です。こうすることで、自分に対する甘えがなくなり、結果、場所を覚える効率が上がります。

## ここまでくれば<!-- omit in toc -->
あとは素直に
- 基本練習
- 応用練習

と進めていきましょう。
スピードを上げようとしても、上手くなりません。
しっかり、キーボードの位置を覚えた上で練習に取り組みましょう。

<!-- タイピングここまで -->


## 今日の内容<!-- omit in toc -->
- シェイプアニメーション

です。シェイプアニメーションでは、実は前回もやっていたのですが、入れ子という概念についても学びます。

# シェイプアニメーション

---
### 今日作る動画<!-- omit in toc -->

見てみましょう。

https://www.youtube.com/watch?v=smW_GG4QiXg

---
### AfterEffectsのレイヤー<!-- omit in toc -->

AfterEffectsのレイヤーには、インポート(読み込み)したフッテージアイテムを操作するレイヤー、平面レイヤー以外にもいくつかのレイヤーがあります。

---
### シェイプレイヤー

Illustratorが得意とする
- パス
- 線
- 塗り

で構成されるベクターデータを扱うレイヤーとなります。

---
### シェイプレイヤーでできること<!-- omit in toc -->

1. シェイプのパスを作成
2. シェイプの線や面に色をつける
3. パスに効果をつける

シェイプレイヤーを使っただけでも、かなりのことができます。今日はまずこれを試しましょう。

---
### 入れ子(ネスト)

入れ子(ネスト)とは
> あるものの中に、それと同じ形や種類の（一回り小さい）ものが入っている状態や構造のこと。

と定義されます。

---
### 映像においてのネスト<!-- omit in toc -->

映像においてもネストはよく使います。
時間軸を持った箱を
- コンポジション(AfterEffects)
- シーケンス(PremierePro)

と呼びますが、今回は
> コンポジションの中にコンポジションを入れる

ということで表現の幅を増やしてみましょう。

---
### ざっと解説<!-- omit in toc -->

11分の動画ですので、飛ばしながら説明します。

- [AfterEffectsで入れ子を積極的に使ってみよう](https://www.youtube.com/watch?v=WsQz4nXeZUc)

---
### おまけ<!-- omit in toc -->

Adobe製品にはAnimateという製品があります。これも、ベクターアニメーションを扱うのに優れた製品ですが、本コースでは明示的には扱いません。

インタラクティブなメディアを作成することもできます。

興味ある人は聞きに来てください。





# 自由課題説明

---
### AfterEffectsの使い方<!-- omit in toc -->
基本操作は伝えたつもりです。

より詳細には二年次の**メディア表現III**にて扱います。

---
### AfterEffectsその他の機能<!-- omit in toc -->

2回AfterEffectsについて説明してきました。

「エフェクト」を各レイヤーに追加することができますが、これに関しては数が多すぎるので、紹介にとどめます。

- [エフェクトリスト](https://helpx.adobe.com/jp/after-effects/using/effect-list.html)
- [AfterEffectsを即戦力で使えるエフェクト厳選紹介！](https://www.youtube.com/watch?v=yd8W0MkZx_Y)

最終的には、エフェクトをどう組み合わせて使うかが問われてきます。

---
### 自由課題<!-- omit in toc -->

> AfterEffectsを利用して、モーショングラフィックスを作成しよう

という課題となります。アイディアを考えておきましょう。

なお、「モーショングラフィックスと言っても...」という人は、ロゴアニメーションを作ってください。

---
### 過去の作品<!-- omit in toc -->

StudentVolume の中に**モーショングラフィックス過去作品**としておいてありますので参考にしてみてください。


# それでは演習に...
演習に入っていきましょう。

HPに戻ります。
