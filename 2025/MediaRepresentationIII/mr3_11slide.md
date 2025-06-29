---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: メディア表現III 11.カラーコレクション
footer: ""
---

# メディア表現III 11. カラーコレクション<!-- omit in toc -->

# 目次<!-- omit in toc -->

- [ホワイトバランス](#ホワイトバランス)
- [カラーコレクションとカラーグレーディング](#カラーコレクションとカラーグレーディング)
  - [Premiereの「カラー」ワークスペース](#premiereのカラーワークスペース)
  - [RGBデータ・YUVデータ](#rgbデータyuvデータ)
  - [Lumetriスコープ](#lumetriスコープ)
    - [ベクトルスコープ](#ベクトルスコープ)
    - [ヒストグラム](#ヒストグラム)
    - [パレード・波形](#パレード波形)
  - [Lumetriカラー](#lumetriカラー)
  - [基本補正](#基本補正)
  - [まとめ](#まとめ)




# 前回のおさらい<!-- omit in toc -->
- 4つの編集ポイントツール(リップル・ローリング・スリップ・スライド)
- トランジション
- Jカット・Lカット

について学びました。いろいろな映像がどのように編集されているか気にして見るようになりましょう。

# 今日のテーマ
今日から2回、色について学びます。

# ホワイトバランス
撮影時のことなので詳しく説明しませんが、ホワイトバランスとは撮影環境での光の色の影響を補正して、白を白く写すための機能となります.

人間の眼は「白いものは白いはずだ」と勝手に補正をかけているのですが、カメラはそのままの状況を撮影してしまうため、光によっては白色が黄色く写ったり、青く写ったりしてしまうことがあります。

撮影時には必ずホワイトバランスを取って撮影するようにしましょう。

## ホワイトバランスの取り方<!-- omit in toc -->
簡単に撮るには
- 白い紙などの白くて平らなものをカメラで写して色温度をカメラで設定する。

となります。ただ、白い紙にもいろいろあるので、 厳密にはあいません。

## Color Checker<!-- omit in toc -->
X-riteという会社では生産終了になってますが、calibriteから[Color Checker Passport Video](https://calibrite.com/jp/product/colorchecker-passport-video/?noredirect=ja-JP)が再度販売されました。
これを撮影しておくことによって、編集時により正確な色補正が可能となります。

大学に私物・コース所有の2つあります。

![Xrite Color Checker Passport Video](https://www.xrite.com/-/media/global-product-images/c/colorchecker-passport-video/colorchecker-passport-video_05.jpg)

<!--
## DataColor SpyderCHECKR24
現在日本で入手できるものは
**DataColor SpyderCHECKR24**
となります。

- http://datacolor.jp/datacolor/camerasolutions/spydercheckr24.html
- https://www.amazon.co.jp/Datacolor-SpyderCHECKR-%E3%82%AB%E3%83%A9%E3%83%BC%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9%E3%83%84%E3%83%BC%E3%83%AB-SCK200-%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC%E4%BF%9D%E8%A8%BC%E4%BB%98%E3%80%91/dp/B06XFSXZ88
-->

## 参考<!-- omit in toc -->
- [【WB】プロが教える正しいホワイトバランスの取り方【白】](https://www.youtube.com/watch?v=pWoUZIvsVWI&t=463s)
- [このチャートで完璧な色と肌のトーンを手に入れよう！](https://www.youtube.com/watch?v=i8DuPM-CtCk)
- [The ColorChecker Video Workflow with Premiere Pro](https://www.youtube.com/watch?v=eVcTsW1NXgA)
- [X Rite Color Checker Video - DaVinci Resolve Workflow](https://www.youtube.com/watch?v=2W2sRPqZRCs)


# カラーコレクションとカラーグレーディング
映像の全体的な色を変えることできる色補正には2種類の考え方があり、
- カラーコレクション(Color Correction)
- カラーグレーディング(Color Grading)

に分けることができます。

## カラーコレクション<!-- omit in toc -->
撮影時に正しくカメラの設定をしても、色合いや明るさが変だったりすることがあります。これを補正するのがカラーコレクション(カラコレ)になります。

## カラーグレーディング<!-- omit in toc -->
一方、カラーコレクションが終わった後によりアーティスティックな表現をするために色を積極的にいじることをカラーグレーディングと呼びます。

## RAW・LOG撮影<!-- omit in toc -->
撮影時に後でカラーコレクション・カラーグレーディングをすることを前提に撮影することがあります。

- RAW(イメージセンサーの生の情報)
- Log(高いダイナミックレンジで白飛びや黒つぶれをなくせる)

RAWはデータ量が大きいが、その分後からできることは増えます。明暗と色調を整えるならLOGで十分。

- [【カメラ基礎知識】RawとLogの違いと使い分けを徹底解説！](https://www.youtube.com/watch?v=jMr4hWibUv0)

2コマ演習では3年生から利用するようです。

## Premiereの「カラー」ワークスペース
Premiereでは「カラー」ワークスペースが設定されています。色を操作するときには、ここを使うと良いでしょう。

- Lumetriカラー
- Lumetriスコープ

この二つを使えるようになりましょう。

## RGBデータ・YUVデータ
コンピュータの世界では光の三原色である
- 赤(Red)・緑(Green)・青(Blue)

の組み合わせで表すRGBデータが用いられますが、動画の世界では
- 輝度信号(Y)、輝度信号と青色成分の差(U)、輝度信号と赤色成分の差(V)

の組み合わせで表すYUVデータもが用いられています。

Lumetriスコープでも、RGB/YUVの表示が選べます。

[参考：RGBデータとYUVデータについて](http://www.eizo.co.jp/products/tech/files/2010/WP10-009.pdf)

## やってみよう<!-- omit in toc -->
- 「mr3_03」フォルダを作成して
- サンプルメディアから一つ選択して、プロジェクトを作成
- 「カラー」ワークスペースに変更
- 左上の「Lumetriスコープ」で右クリックして、「プリセット」- 「すべてのスコープRGB」

## Lumetriスコープ
映像を見て色を変更しようとすると、どうしても主観的になってしまい、正しく調整することができません。
そのため、メーターを見ながら、客観的に判断する必要が出てきます。

- ベクトルスコープHLS
- ベクトルスコープYUV
- ヒストグラム
- パレード(RGB)
- 波形(RGB)

全部を使う必要はありませんが、いろいろな見方ができることを確認しましょう。
[参考:vol.20 カラー補正におけるLumetriスコープの役割を知る - Adobe Premiere Pro / 藤原ななえ by OFFICE 7e](https://www.youtube.com/watch?v=AwnsqCu-kvk)

---
### 注意...<!-- omit in toc -->
自分のバージョンだと、たまにLumetriスコープが正しく反応していない時があります。そんな時は
- 時間を変えてみる
- 一度違うパネルを開いてからLumetriスコープに戻す

などしてみましょう。

---
### ベクトルスコープ
映像内の色相と輝度を測定したモニターです。
- 色相：色の種類
- 彩度：色の濃さ

円が色相を示し、中心からの距離が遠いほど彩度が高くなります。

色かぶりを確認できます。

---
### ヒストグラム
ヒストグラムはシャドウ、ミッドトーンおよびハイライトを正確に評価し、画像全体の階調スケールを調整するために役立ちます。各色の強さレベルでのピクセル密度の統計分析が表示されます。

---
### パレード・波形
縦軸が輝度を表し、横軸は画面と対応しています。
波形は、すべてのデータを一つにまとめて表示していますが、パレードは、3つの要素を分けて表示しています。

---
### 放送するデータの場合<!-- omit in toc -->
輝度レベルをビデオレンジ(8bitの場合16-235)に合わせなければなりません。0-15, 236-255はそれぞれスーパーブラック・スーパーホワイトと呼ばれ、再生環境によってはきちんと表現できません。

---
### やってみよう<!-- omit in toc -->
- プロジェクトパネルで右クリック
- 「新規項目」- 「カラーバー＆トーン」
- できたクリップをシーケンスに追加

メーターがどのような表示になるか見てみよう。

## Lumetriカラー
色を操作するパネルで
- 基本補正
- クリエイティブ
- カーブ
- カラーホイールとカラーマッチ
- HSLセカンダリ
- ビネット

となっています。

---
### 基本的な使い方<!-- omit in toc -->
1. 「基本補正」で技術的な修正を行い
2. 「クリエイティブ」で積極的に色を調整
3. 「カーブ」でさらに調整し
4. 「カラーホイールとカラーマッチ」でさらにカラー調整し
5. 「HSLセカンダリ」で一部の色を調整し
6. 「ビネット」で必要であればビネット効果を付与します。

1の部分がカラーコレクションであり、2以降がカラーグレーディングとなります。

## 基本補正

---
### LUT設定<!-- omit in toc -->
RAW/LOG撮影をしている場合には、LUTと呼ばれるファイルを当てることで色情報を引き出すことができます。

撮影したデータは、そのままだと、非常にはっきりしない色になっていますが、撮影時にLUTを設定して、ある程度の色確認をすることが可能になっている機種もあります。RAW/LOG撮影をする場合には、ワークフローを確認しましょう。

なお、iPhone15Proの人はLog撮影できるようになっています。
- [iPhone 15 Pro／Pro Maxでついに可能となった「Log撮影」とは何なのか？](https://gigazine.net/news/20231012-iphone-15-pro-apple-log/)
---
### 自動<!-- omit in toc -->
インテリジェントなカラー補正をクリップに適用する Adobe Sensei ML のテクノロジーにより、これで大体補正されますが、うまくいかないときには手で設定していくことになります。

- 自動をクリック
- 強度でどのくらい変更するか設定

---
### カラー<!-- omit in toc -->
- 白い色が白に見えない場合には、ホワイトバランスのスポイトをクリックしてから、白い場所をクリックしましょう。

色がおかしい時は、
- 色温度
- 色被り補正
- 彩度

を使って補正しましょう。

---
### ライト<!-- omit in toc -->
「露光量」「コントラスト」「ハイライト」「シャドウ」「白レベル」「黒レベル」

#### やってみよう
これ、わかりそうで、わかりにくいんです。ですので、HPからグレースケールチャートをダウンロードして、触って、メーター見ながらどう変化するかを確認してみてください。

エフェクトコントロールのモーションのスケールを33にしてください。(サイズを合わせるため)

---
### やってみよう<!-- omit in toc -->
[肌色の修正](https://helpx.adobe.com/jp/premiere-pro/how-to/correct-skin-tones.html)

からサンプルファイルをダウンロードして、色補正をやってみよう

---
### やってみよう<!-- omit in toc -->
1. 新規調整レイヤーを作成し、V3に二つのクリップにまたがるように置き、選択
2. 基本補正のホワイトバランスのスポイトで黒人のシャツの襟あたりをクリック
3. J.mp4を選択して、エフェクトコントロール・不透明度から四角をクリック
4. 額に合わせて、ベクトルスコープYUVが左上のラインと重なっていることを確認。
5. Emily.mp3でも同じことをしてスキントーンが正しいことを確認しよう。
6. 二つの不透明度のfxを外してマスクを外す
7. 彩度をいじると、外側に広がっていくことを確認しよう
8. ライトをいじっても、ベクトルスコープYUVの方向の分布は変わらないことに注意。輝度にしか影響しないことを確認しよう。

---
### スキントーン<!-- omit in toc -->
肌色は映像を作成する上で非常に重要なものです。

ベクトルスコープYUVをよく見ると、中心から左斜め上に線が書いてあります。

これはスキントーンと言って、不思議なことに黒人であろうと白人であろうと、肌色がこの線にのっていれば、正しく補正されていることになります。

---
### おまけ
シーケンス設定に「リニアカラーで合成」という項目があり、二つのレイヤーの合成のされ方が変わるようです。

デフォルトではチェックが入っていますが、チェックオフにするのも試してみていいでしょう。

- [リニアカラーで合成 #PremierePro](https://www.youtube.com/watch?v=-eXh29M3ZsE)

## まとめ
撮影時に正しく撮影することが基本ですが、カラーコレクションを行うことによって、色補正ができます。

映像編集においては必須の知識となりますので、よく理解して作品作りに役立てて下さい。