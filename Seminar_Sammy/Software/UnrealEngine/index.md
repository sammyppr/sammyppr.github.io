# UnrealEngine

[ゼミ に戻る](../../index.md)

## 概要
UnrealEngineはゲームを作るだけでなく、映像、モーショングラフィックス等様々な用途で活用できます。
起動に時間がかかるのでコンピュータのスペックは高い方がいいです。非力なマシンだとイライラします。

## Unityとどっちがいいの?
- [[Unity vs UnrealEngine5]どっちのゲームエンジンが良いのか徹底比較!!](https://zenn.dev/daichi_gamedev/articles/unity-vs-unrealengine#%E7%B5%90%E8%AB%96){:target="_blank"}
- [【徹底比較】Unity vs Unreal Engine！どう違うの？ゲームエンジンの説明からメリット・デメリットまで解説します！](https://www.geekly.co.jp/column/cat-webgame/1903_051/){:target="_blank"}

## インストールについて
- Epic Games Launcherからインストールとなります。
- 起動時にエラーが出る時は、下記参照

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



## はじめに
2024/3/5に良さそうなチュートリアルが出ました。自動翻訳など使ってやってみましょう。...あ、これゲーム用じゃなかった...
- [Unreal Engine 5 Beginner Tutorial](https://3dnchu.com/archives/ue5-beginner-tutorial-bad-decisions-studio/)

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

## その他有意義なチュートリアル
- [誰でも始められる！知識ゼロから自宅で本格【実写+3DCGミュージックビデオ】の作り方](https://www.youtube.com/watch?v=eSS_mbtQxrI)


## 照明(DMX)
照明一般はこちらへ
- [舞台照明](../../Field/Lighting/index.md)

UnrealEngineでのDMX
- [DMX_01](./dmx_01.md)
