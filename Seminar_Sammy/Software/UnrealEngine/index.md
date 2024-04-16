# UnrealEngine

[ゼミ に戻る](../../index.md)

## 概要
UnrealEngineはゲームを作るだけでなく、映像、モーショングラフィックス等様々な用途で活用できます。
起動に時間がかかるのでコンピュータのスペックは高い方がいいです。非力なマシンだとイライラします。

---
## Unityとどっちがいいの?
- [[Unity vs UnrealEngine5]どっちのゲームエンジンが良いのか徹底比較!!](https://zenn.dev/daichi_gamedev/articles/unity-vs-unrealengine#%E7%B5%90%E8%AB%96){:target="_blank"}
- [【徹底比較】Unity vs Unreal Engine！どう違うの？ゲームエンジンの説明からメリット・デメリットまで解説します！](https://www.geekly.co.jp/column/cat-webgame/1903_051/){:target="_blank"}

---
## インストールについて
- Epic Games Launcherからインストールとなります。
- 起動時にエラーが出る時は、下記参照

---
### xcode関連のエラーが出る
AppStoreからXcodeをインストールした上で、ターミナルで
```
sudo xcode-select -r
```
としないと起動しない。パスワード入力時、カーソルなど動かないので注意。その後
```
sudo xcodebuild -license
```
で「return」をした後「agree」とする必要あり。

---
## UnrealEngineが重い...
Unreal Engineはどの環境でもさくさく動くアプリではなく、環境を選びます。
しかし、設定によって軽量にすることはある程度は可能なので、試してみましょう。
- [UE4 エディター動作を極限まで軽くしてみる](https://unrealengine.hatenablog.com/entry/2014/10/24/212222){:target="_blank"}
- [【UE4】作業を快適に行うための個人的設定](https://kazupon.org/ue4-editor-my-opt-settings/){:target="_blank"}



---
## チュートリアル
### 猫でも分かるUnreal Engineの学び方 - 超初心者向け編 2023 v1.0
最初にまずは読んで良さそうなスライドです。
- [猫でも分かるUnreal Engineの学び方 - 超初心者向け編 2023 v1.0](https://www.docswell.com/s/EpicGamesJapan/KW1WNR-HowToLearnUE5_2023#p24)

### UE5の基礎知識(全20話)
2024/3/5に良さそうなチュートリアルが出ました。自動翻訳など使ってやってみましょう。
...あ、これゲーム専用じゃなかった...
- [Unreal Engine 5 Beginner Tutorial](https://3dnchu.com/archives/ue5-beginner-tutorial-bad-decisions-studio/)

> 本日より、Unreal Engine 5 をマスターするために必要な基礎知識をすべて学べる全20話のシリーズをアップロードする予定です。
> 映画、ゲーム、イベント用ビジュアル、モーショングラフィックス、商品撮影など、アンリアルを使用する目的は問いません。このチュートリアルが終了する頃には、どのような用途にも対応できるようになります。

```
Part 00 – はじめに
Part 01 – テンプレートのインストールと使用
Part 02 – プロのようにインターフェイスを操作する
Part 03 – モデリング・ツールの基本
Part 04 – モデリング・ツール応用
Part 05 – ライティング
Part 06 – マテリアルとテクスチャ入門
Part 07 – マテリアルとテクスチャ基礎
Part 08 – マテリアルとテクスチャ応用
Part 09 – シーンの装飾
Part 10 – ポストプロセスボリューム
Part 11 – HDRI
Part 12 – アセットのインポート
Part 13 – キャラクターアニメーションのインポート
Part 14 – キャラクターのクローン
Part 15 – デカールでディテールを加える
Part 16 – カメラ、リグ・レール、クレーン
Part 17 – アニメーションとシーケンサーの基本
Part 18 – アニメーションとシーケンサーの応用
Part 19 – レンダリング設定とコンソールコマンド
```

### TPSゲームのチュートリアル
他のでもいいんだけど、一通りゲームを作成する一連が学べるかも
- [【ゼロからはじめる】ゲーム開発集中講座 / Unreal Engine5チュートリアル【完全版】](https://www.youtube.com/watch?v=pXP8ETzYlf0)

### その他有意義なチュートリアル
- [誰でも始められる！知識ゼロから自宅で本格【実写+3DCGミュージックビデオ】の作り方](https://www.youtube.com/watch?v=eSS_mbtQxrI)

### UE5リンク集
- [UE5 お役立ちリンク＆チュートリアル集](https://historia.co.jp/archives/29628/)

## 照明(DMX)
照明一般はこちらへ
- [舞台照明](../../Field/Lighting/index.md)

UnrealEngineでのDMX
- [DMX_01](./dmx_01.md)
