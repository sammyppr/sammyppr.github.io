---
marp: true
theme: default
size: 4:3
paginate: true
headingDivider: 2
header: コンピュータ演習 18.Excel 教科書以外のこと
footer: ""
---

<!--
YouTube 
2020
https://www.youtube.com/playlist?list=PL_g66qvNMUfSeBQvg6IsVBnvMzEvG3hPu
2021
https://www.youtube.com/playlist?list=PL_g66qvNMUfTi41G75an3JwffeJMeVcV3
-->

# コンピュータ演習 <!-- omit in toc --> 

    18.Excel 教科書以外のこと

# 目次<!-- omit in toc -->
- [はじめに](#はじめに)
- [今日の内容](#今日の内容)
    - [扱うトピック](#扱うトピック)
    - [条件つき書式](#条件つき書式)
    - [並べ替え](#並べ替え)
    - [並び替えのリセット](#並び替えのリセット)
    - [ソートのアルゴリズム](#ソートのアルゴリズム)
    - [フィルター](#フィルター)
    - [期末テストについて](#期末テストについて)
    - [ルールは単純](#ルールは単純)
- [タイピングの基本(再掲)](#タイピングの基本再掲)

# 初めに<!-- omit in toc -->

---
1. 席自由とします。
2. モニタの電源を入れて下さい。資料がみれます。

## HPの資料<!-- omit in toc -->

https://sammyppr.github.io/

に置きます。これは学外からも閲覧可能です。予習復習にはもちろん、あれなんだっけー？みたいな時に利用してください。


# はじめに

---
### 前回のおさらい<!-- omit in toc -->
教科書のExcelのパート全て終了しました。
このコースでは実験など行わないため、あまりExcelに大学生活で触れることは多くありませんが、社会に出ると確実に使うようになるツールです。

3,4年でSAすると、復習もできてお得ですよ。(宣伝)

---
### manabaレポート提出について<!-- omit in toc -->
履修者結構いるはずなんですが、回数を重ねるごとにどんどん提出率が悪くなっています。

しっかり毎回提出していきましょう。

---
### 情報倫理テスト<!-- omit in toc -->
得点取れていない人、取れるまでやらせます。

-10以下だった人、再テスト対象です。

Excel終わって、AIに入ったあたりでやります。ので、来週かな

---
### 教科書で利用するファイルのダウンロード(再掲)<!-- omit in toc -->
http://noa-prolab.co.jp/download/

にいって、「パソコン教育」-「Office基礎と情報モラル Office365・Office2019対応」からダウンロードしましょう。

動画あります。
[ダウンロード](https://www.youtube.com/watch?v=4OK8d9HC_ww)

---
### フォルダの保存場所(再掲)<!-- omit in toc -->
このファイルは、教科書終わるまで利用します。わかりやすい場所に保存しておきましょう。

- 書類フォルダに
- 「コンピュータ演習」フォルダを作成
- その中に解凍したフォルダを保存

が良いと思います。

# 今日の内容
シラバスでは
> 【第18回】 Section3 Excel/STEP2 表を作成しましょう/Lesson3 計算しましょう

どんどん先に行きます。

---
### 扱うトピック
- 条件つき書式
- 並べ替え
- フィルター

は知っておくと便利ですので、使えるようになりましょう。

また、期末のテストの内容について告知します。

---
### 条件つき書式
セルの値によって色やマーク等によって数字ではなくイメージとして把握しやすくすることができます。

最初から設定されている書式を使うには、「条件付き書式」から選択するだけですが、自分で基準を決める場合には、「新しい仕分ルール」を利用します。

映像をみてみましょう。今日の提出課題はこれ！

[条件付き書式]
https://www.youtube.com/watch?v=AIUuF5lLaDw

---
### 並べ替え
表については、データの大きさの順によって並び替えることができます。

資料の販売実績16を使って
1. 順位に基いてデータを並び替えせよ。
2. 目標数に基いてデータを並び替えせよ。

グラフの並びも変わることを確認して下さい。（HPにリンクあります。提出はしません）

---
### 並び替えのリセット

並び替えには基本的に「リセット」という考えはありません。
そこで、元に戻したい場合には以下のどちらかの方法を取る必要があります。
- 「元に戻る」を利用する
- 連番をふっておき、それでソートし直す

---
### ソートのアルゴリズム
アルゴリズム問題をとくための手順並べ替えにはいくつか代表的なアルゴリズムがありますが、単純なバブルソートというやり方について説明しようと思います。

[バブルソート（Bubble Sort）：解説](https://www.youtube.com/watch?v=TEe0bzycD7c)

---
### フィルター
EXCELにはデータを絞り込む「フィルター」という機能があります。

1. フィルターをかけたいエリアを見出し行も含めて選択します。
2. 見出し行の▼から条件を設定します。

複数の条件をつけることもできます。フィルターにはリセットという考え方があります。映像を見てみよう。
https://www.youtube.com/watch?v=ZTzQ8DGGpZU

---
### 期末テストについて
このコンピュータ演習の期末テストとして、29回目にExcelのテスト、パスできなかった人は、30回目に再試験を行おうと思っています。

(最終回はパスしなかった人だけでOK)今日はそれの解説を行います。

---
### ルールは単純

Excelの指定された資料を白紙の状態から作成しろ、というものです。

- ネットは検索してもよい
- どのくらいの時間で解けるかが問われます。(成績直結)

[コンピュータ演習 Excelテスト攻略](https://www.youtube.com/watch?v=d5YuKClpnB4)

10分切れれば優秀です。

- タイピング速度
- Excel理解度

双方が問われます。




# タイピングの基本(再掲)

---
### タイピングの重要性(追加)<!-- omit in toc -->
就活の内定決まった学生が

> 4月までに寿司打で平均キータイプ数5.6以上出せるようになってね

と言われたそうです。
4年になってあたふたしないように、今からスキルを上げていきましょう。

- [寿司打](http://typingx0.net/sushida/)

---
### e-typing<!-- omit in toc -->
- e-typingのアカウント作成がおわっていない人は作成しましょう。
- 200を目指しましょう。
- ホームポジションを確実に覚えましょう。
- e-typingの基礎練習をしっかりやって、場所を覚えよう
- ひらがな・単語に慣れていこう

[e-typing](https://www.e-typing.ne.jp/)
[レベルはどうなってるの？](https://www.e-typing.ne.jp/help/015.asp)

---
### タッチタイピングの基本<!-- omit in toc -->
- ホームポジションを忠実に守る
- ホームポジションから動いたら、必ずホームポジションに戻る
- 下を見ない

e-typingでは
> どの指を使ってどのキーを押すか

を示してくれます。正しい指を使いましょう。そして、必ずホームポジションに戻りましょう。

---
### ホームポジション<!-- omit in toc -->
F,Jにポッチがついているのわかりますか？
ここに人差し指がきます。

(まれにD,Kにポッチがついているキーボードもあります)

---
### 攻略法<!-- omit in toc -->
- キーの位置を覚える
  - 練習メニューの基礎練習を使って
    - 中段左手・中段右手・中段全部
    - 上段左手・上段右手・上段全部
    - 下段左手・下段右手・下段全部
    - 全部のキーを制覇
  - 基本練習を使って
    - 50音に慣れる
    - 単語に慣れる
  - 応用演習を使って
    - 色々な文章に慣れる

---
### 最初はイライラするけど<!-- omit in toc -->

キーボードの位置を覚えるのに役立つツールは「タオル」です。

強制的にキーボードを見えなくします。その状態で、基礎練習をすれば必ず場所を覚えることができます。

---
### 焦らないで！<!-- omit in toc -->
コンピュータ演習の授業時間内だけではなかなか覚えられませんが、1日10〜15分はやって欲しいです。

もっと時間をかけてくれれば(1〜2時間)、1週間で学ぶことも可能です。
- 集中してまずは場所を覚えることに専念
- 場所を覚えてから徐々にスピードアップ

が一番良いと思います。

---
### やってみよう<!-- omit in toc -->
基礎練習を（可能であればタオルを手にかけて)やってみましょう。

最後、トップページから腕試しレベルチェックを行なってmanabaのアンケートから提出して下さい。


# 終わり<!-- omit in toc -->
