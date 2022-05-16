# DMX超初級編

Unreal Engineで照明を置き、動かしてみる。

## 参考
- [DMXテンプレートの概要](https://docs.unrealengine.com/5.0/ja/dmx-template-in-unreal-engine/)
- [How to simulate DMX using Level Sequencer unreal engine lights pyro laser fireworks strobe water](https://www.youtube.com/watch?v=iDUID0-okdE)

## やってみよう
### 準備
1. Unreal Engine起動(5.0.0対応)
2. テンプレートは「映画・テレビ・ライブイベント」のblank
3. 編集-プラグインから次をEnableに。再起動必要
   1. DMX Engine
   2. DMX Fixtures
   3. DMX Protocol
4. コンテンツドロワーの右上の設定から、次にチェック
   1. エンジンのコンテンツを表示
   2. プラグインコンテンツを表示
5. 追加-DMX-DMXライブラリ
6. All-エンジン-Plugins-DMX Fixtures コンテンツ-LightFixturesのBP_MovingHeadを右クリックして、子ブループリントクラスを作成
7. 作成した子クラスをAll-コンテンツに移動
8. 暗くしたいので、Sky Sphereを削除
9. 子クラスをステージに配置

### DMXの設定
1. DMXライブラリを開く。フィクスチャパッチに「入力ポート出力ポートからアクセスできません」のエラーを確認
2. ライブラリ設定-DMXのプロジェクト設定を開く
3. Input Ports / Output Ports それぞれ+を押して、ポートを作成
4. フィクスチャパッチでエラーが消えたことを確認
5. フィクスチャタイプで新しいフィクスチャタイプ
6. 左下
   1. DMX Cateogry: Moving Head
   2. Name: Moving Head
7. モードを追加して、Mode Nameをstandardに
8. [DMX テンプレートの概要](https://docs.unrealengine.com/5.0/ja/dmx-template-in-unreal-engine/)のBP_MovingHeadに8つの属性があることを確認
9. 関数を追加して、8つの属性を割り当て、名前も変更しておく(ColorWheel属性はないのでColor)
10. フィクスチャパッチ-フィクスチャを追加で、MovingHead
11. BP_MovingHead_ChildのDMX-Fexture Patch Refで
    1.  DMXLibrary: NewDMXLibrary
    2.  フィクスチャ: MovingHead

### アニメーションの設定
1. コンテンツドロワーで追加-アニメーション-レベルシーケンス
2. +トラック-DMXライブラリトラック-NewDMXLibrary
3. +パッチ-MovingHead
4. 0フレームにキーフレームを作成
5. ゲームモードに入る(ゲームモードでないとDMX効かない)
6. レベルシーケンサの値を変更(Shutter:1, Dimmer:1で光る)
7. 適当にキーフレーム・数値変更をし、コントロールできることを確認しよう

### 注意
レベルシーケンサの値は、DMXのデータである0-255ではなく、0-1にデフォルトでなっている。以下のようにすれば、回避可能
https://twitter.com/tmykskkd/status/1524091736133611520?s=20&t=ZUa6w2pXPa2IXP5tA9eeow

### そのほかのBP
元から次のフィクスチャ(DMX データからのコマンドを受け取りと実行を担う機器)が用意されているので、全部動かしてみよう。
- BP_MovingHead
- BP_MovingMirror
- BP_StaticHead
- BP_StaticStrobe
- BP_StaticMatrix
- BP_WashLED
- BP_MovingMatrix
- BP_LaserModule
- BP_PyroModule
- BP_WaterSource
- BP_FireWorksLauncher

### この後
- ステージを組んで
- レベルシーケンサにオーディオトラックを追加し、
- 明かりの調整を行い
- カメラショットトラックで撮影

で、最低限のことは行える。

外部のアプリとの連動が必要ならそれについて調査する必要がある。