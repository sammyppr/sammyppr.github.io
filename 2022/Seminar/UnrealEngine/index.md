# UnrealEngine

## Unityとどっちがいいの?
- [[Unity vs UnrealEngine5]どっちのゲームエンジンが良いのか徹底比較!!](https://zenn.dev/daichi_gamedev/articles/unity-vs-unrealengine#%E7%B5%90%E8%AB%96){:target="_blank"}
- [【徹底比較】Unity vs Unreal Engine！どう違うの？ゲームエンジンの説明からメリット・デメリットまで解説します！](https://www.geekly.co.jp/column/cat-webgame/1903_051/){:target="_blank"}

どちらもそこそこPCスペックを要求するため、オープンソースの[Godot](https://godotengine.org/)も用途によっては考えても良い。

## インタラクティブ3D
- [インタラクティブ 3D の新しいキャリアに関するクリエイターのためのフィールド ガイド](https://cdn2.unrealengine.com/epic-ue-creatorsguide-optimized-ja-641f2f6efe3b.pdf){:target="_blank"}

---
## Macで利用するときの注意
AppStoreからXcodeをインストールした上で、ターミナルで
```
sudo xcode-select -r
```
としないと起動しない。パスワード入力時、カーソルなど動かないので注意。その後
```
sudo xcodebuild -license
```
で「return」をした後「agree」とする必要あり。

## 照明(DMX)
DMXはいらゆるライブ照明（ムービングライト）などの機器を制御するための通信プロトコル。
ライブイベント業界では、スタンダードな規格で、かなり昔から使われている。

- [DMXとUE4上で動かしてみた。](https://zenn.dev/taito_otani/scraps/fa798dbdd5c3e7#comment-1c0847187c3856){:target="_blank"}
- [DMX プリビジュアライゼーション サンプル](https://www.unrealengine.com/marketplace/ja/product/dmx-previs-sample){:target="_blank"}
- [Modular Concert Stage](https://www.unrealengine.com/marketplace/ja/product/modular-concert-stage){:target="_blank"}

## 参考サイト
- [UnrealEngine5の教科書](https://zenn.dev/daichi_gamedev/books/unreal-engine-5)
- [UE5 (Unreal Engine 5) で始めるゲーム開発！[入門編]
](https://zenn.dev/daichi_gamedev/books/unreal-engine-tutorial){:target="_blank"}