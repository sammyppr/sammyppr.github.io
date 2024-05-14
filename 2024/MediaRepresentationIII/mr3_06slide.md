---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: メディア表現III 6. プラグイン・モーショングラフィックステンプレート
footer: ""
---

# メディア表現III<!-- omit in toc -->
> 6. プラグイン・モーショングラフィックステンプレート

# 目次<!-- omit in toc -->
1. [AfterEffects イージング・グラフエディター](#aftereffects-イージンググラフエディター)
2. [プラグイン・モーショングラフィックステンプレート](#プラグインモーショングラフィックステンプレート)
   1. [Premiere Composer/Animation Composer](#premiere-composeranimation-composer)
   2. [モーショングラフィックステンプレート](#モーショングラフィックステンプレート)

# 前回のおさらい<!-- omit in toc -->

- キーフレーム
- プリセット
- 基本エフェクト・標準エフェクト
- エフェクト利用例

<!--
Premiereでしかやってないから、Afterでグラフエディタやってもいいかな。
Premiere Composer,Animation Composerとかmixkitだけだと時間があまりそう。

https://flashbackj.com/after-effects-premiere-pro-free-plugins
-->

# イージング・グラフエディター

---
### キーフレームの間の計算方法
PremiereやAfterEffectsでは、
> キーフレームを設定することで、間は自動的に計算する

ことができますが、この間はどのように計算されているのでしょうか。

---
### リニア・ベジエ
特別な設定をしなければ線形的に(グラフにすると直線であり、速度一定)で移動します。これを**リニア**と呼びます。

一方、設定をすることで様々な表情をつけることができます。

思い浮かべてみましょう。Illustratorでパスを2点打っても、直線や曲線を表現することができます。

---
### 時間補完法・空間補完法
Illustratorでは静止画ですが、Premiere,AfterEffectsでは時間軸を扱えます。そのため
- 時間補完法：時間軸をどのように計算するか
- 空間補完法：位置情報等をどのように計算するか

の二つの方法があります。

違いを見てみましょう。
- [【キー・空間補間法】思うように動かない時に設定を確認してみよう！](https://chokaidokuae.com/kiso_11/)

---
### Premiereの場合
- エフェクトコントロールのパラメータの左三角を開くと速度変化を修正することができます。
- エフェクトコントロールのパラメータを選択し、動きのパスを修正することができます。

(例示)

---
### AfterEffectsの場合
AfterEffectsにてはグラフエディタについてより詳細に扱うことが可能となります。

- [参考:【After Effects】キーフレーム補完法と速度グラフ【初心者】](https://www.youtube.com/watch?v=75Xcty3XB3E)

---
### やってみよう
[スクリーンキャスト](https://www.youtube.com/watch?v=8J-pdPuWUDM)、HPにあります。
1. AfterEffectsで新規コンポジションを作成(HDTV1080 29.97)
2. 新規平面で適当に背景追加
3. シェイプレイヤー追加
4. 多角形追加(3角形に)。塗りを追加。角を丸くする
5. 位置を0f(400,800) 10f(400,500) 20f(400,800) 30f(550,300) 40f(700,800) 50f(850,200) 60f(1000,800) 70f(1150,100) 80f(1300,800)
6. 全てのキーフレームを選択して、右クリックで「キーフレーム補間法」。時間補間法・空間補間法とも「リニア」であることを確認。

多角形ツールからも多角形を作成できるのですが、アンカーポイントなどが中心にこないため、この方法の方が確実です。

---
### やってみよう
7. 30,50,70fのキーフレームをShiftで選択
8. 右クリックで「キーフレーム補間法」。空間補間法を「連続ベジエ」にして、カーブを描くことを確認
9. 10,30,50,70fのキーフレームをShiftで選択。
10. 右クリックで「キーフレーム補助」「イージーイーズ」。跳ねるように動くことを確認
11. 回転で20f(0) 40f(120) 60f(360) 80f(720)

ベジエと連続ベジエの違いは、ハンドルがつながっているか、つながっていないか、の差となります。

---
### グラフエディターを見てみよう
1. グラフエディターを開く
2. 位置を選択
3. 「グラフの種類とオプションを選択」から「値グラフを編集」「速度グラフを編集」にしてグラフを確認

X,Y軸それぞれを別に編集したい場合には「次元に分割」をする必要がありますが、意味がわかるまでは複雑になるのでやらない方がいいかな。
「値グラフを編集」「速度グラフを編集」それぞれメリット・デメリットありますので、使いやすい方を使いましょう。

[参考：第7章 番外編：​速度グラフと値グラフの理解を深めよう！](https://www.youtube.com/watch?v=c9mWVP1c7wE)

# プラグイン・モーショングラフィックステンプレート

---
### 機能を増やす
PremiereProもAfterEffectsも機能を拡張することができます。
- プラグイン
- スクリプト(Javascriptでプログラミング)
- エクステンション

また、AfterEffectsで作ったアニメーションをPremiereProで利用しやすくする
- モーショングラフィックステンプレート

というものもあります。

---
### プロにとっては必須
作業を効率的に行うためには、こういう機能拡張は必須と言えます。
- 有料
- 無料

含めいろいろあります。

---
### フラッシュバックジャパン
数十年にわたってプラグインを取り扱っているフラッシュバックジャパンという会社があります。
見てみましょう。

[フラッシュバックジャパン](https://flashbackj.com/)

1. プラグイン-無償プラグイン
2. プラットフォーム-PremierePro, AfterEffectsにチェック

(なお、アカデミック版のみ無償のものもあります)

## Premiere Composer/Animation Composer
- [Premiere Composer](https://flashbackj.com/product/premiere-composer-starter-pack)
- [Animation Composer](https://flashbackj.com/product/animation-composer)

...あーーーん、Flashbackでの取り扱いが終了になってる...
海外からアプリ開発会社から直接行くしかないか...

---
### インストールしてみよう


1. https://misterhorse.com/ にいく
2. Animation ComposerのところのLearn more & downloadをクリック
3. Download for Macをクリック
4. DMGファイルをダブルクリックして、Mister Horse Product ManagerをAppフォルダへ
5. 起動
6. Create new accountでアカウント作成
7. メールで確認
8.  Mister Horse Product Manager を起動して、二つをインストール(Starter Packは自動でインストールされます)
   - Animation Composer3
   - Premiere Composer

---
### Premiere Composerを使ってみよう
1. 新規プロジェクト作成
2. 新規シーケンス(AVCHD 1080p30)
3. ウィンドウ-エクステンション-Premiere Composer

Text Boxes/Text Presets/Transitions/Social Media/Shape Elements/Soundsを適当に試してみましょう。
使い方の詳細は割愛します。

[初心者も簡単に使える！瞬殺プラグイン Premiere Composer ](https://www.youtube.com/watch?v=Of-5UgZxBwU)


---
### User library
Add folderというところに
「You can add your own Motion Graphics Templates(MOGRTs). audio files, videos and images.」と書いてありますね。

「あなたのモーショングラフィックステンプレート、オーディオファイル、映像、画像を追加出来ます。」という意味で、これも便利ですね。

モーショングラフィックステンプレートについては後述します。

---
### Animation Composer3を使ってみよう
1. 新規プロジェクト作成
2. 新規コンポジション(HDTV1080 29.97)
3. ウィンドウ-Animation Composer 3

コンポジションに何か追加してみましょう。使い方の詳細は割愛します。
[【2022年 最新版】『Animation Composer 3』の機能と使い方を徹底解説!!](https://www.youtube.com/watch?v=lC8OGvbQHMM)


## モーショングラフィックステンプレート

---
### モーショングラフィックステンプレートとは？
Premiere ProにAfter Effectsの機能を付加し、Premiere Proでカスタマイズ出来るようにしたテンプレートファイルで「.mogrt」という拡張子になります。

自分で作成したテンプレートを再利用または共有するために書き出すこともできます。

---
### ？？？
他人の作成したテンプレートも共有できそうですよね。

そうなんです。もちろん自分で作っても良いですが、素晴らしいテンプレートを利用することで効率的に映像編集が可能となります。

簡単に映像のクオリティが上がりますが、「あ、あのテンプレ使ってる」と思われる可能性はあるので注意しましょう。

[【Premiere Pro】モーショングラフィックステンプレート39選](https://goworkship.com/magazine/adobepremierpro-motiongraphic-templates/)

---
### mixkit
PremierePro/AfterEffects用にテンプレートを配布していて、比較的見やすく整理しているmixkitというサイトを紹介します。

ライセンスには一応目を通しましょう。

[mixkit](https://mixkit.co/)
[Mixkit License](https://mixkit.co/license/)

---
### MOGRTの普通の使い方
1. ワークスペースを「キャプションとグラフィック」に
2. エッセンシャルグラフィックスパネルの右下の「+」を押す
3. mogrtファイルを選択

これで管理すると、エッセンシャルグラフィックスのマイテンプレートがずーっと下に長くなってしまいます。

---
### Premiere Composerで管理
1. 書類フォルダに「VideoLibrary」フォルダを作成
2. その中に「mixkit」フォルダを作成
3. その中に「LowerThird」フォルダを作成
4. mixkitの「template」-「Premiere Pro」-「Lower-Thirds」
5. 「Bold Lower-third」をクリック
6. 「Download Free Tempolate」をクリック
7. zipファイルを解凍してLowerThirdフォルダに移動
8. Premiere ComposerでUserLibraryにて「Add Folder」をクリックして「VideoLibrary」を選択
9. シーケンス(AVCHD 1080p30)に追加すると、サイズが4K用みたいなので、エフェクトコントロールのスケールで50%に
10. Premiere ComposerのEditで文字を変えてみましょう。

---
### 注意
なお、mixkitのLowerThirdの中には、mogrtでないものもたまにあります。
Fontのインストールが必要なものもあります。状況に応じて対応していきましょう。

---
### 無償なものはたくさんあります。
[【After Effects】初心者に絶対入れてほしい！おすすめ無料プラグイン/スクリプト/エクステンションまとめ2021年版](https://www.kotsuxkotsu.work/after-effects-essential-free-plugin-script-extension/)

必要に応じて、道具を整備していきましょう。

# まとめ<!-- omit in TOC -->
今日は楽に映像クオリティを上げる方法を今日は学習しました。
どんどんクオリティの高い映像を作りましょう。


