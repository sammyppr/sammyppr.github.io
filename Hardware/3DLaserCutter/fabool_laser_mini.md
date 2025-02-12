# 3D Laser Cutter：FABOOL Laser Mini 3.5W

[TOP に戻る](../../index.md)

## はじめに
竹中先生購入のFABOOL Laser Mini 3.5Wの利用法について調査確認した結果をまとめたものである(20240221 with 須永)

## 仕様
 [製品仕様比較](https://www.smartdiys.com/support/qa-product/fabool/specification-3/)

- 厚さ40mmまで
- カット可能な厚さは3.5Wだと4mmまで

| 製品名                               | FABOOL Laser Mini                                                         | 
| ------------------------------------ | ------------------------------------------------------------------------- | 
| レーザー方式                         | 10600nm CO2レーザー 30W                                                   | 
| レーザースポット径                   | 約0.2mm                                                                   | 
| レーザー寿命                         | 5000時間～10000時間                                                       | 
| 加工エリア                           | 300×230mm 600×420mm 1000×1000mm 1500×1500mm                               | 
| 加工対応厚さ                         | 40mm（高さ調整プレートの使用で+50mmごとの調整が可能）                     | 
| カット可能な厚さ（素材によって変動） | 1.6W：2mm　3.5W：4mm                                                      | 
| 軸駆動                               | XY軸駆動：ステッピングモーター駆動、Z軸駆動：手動(つまみネジによる固定)   | 
| タイミングベルトの最小ステップ巾     | 約0.186mm                                                                 | 
| 電源                                 | 家庭用電源 AC100V（アース付きコンセントの使用を推奨）                     | 
| 消費電力                             | 約30W                                                                     | 
| サイズ（横×縦×高）                   | 540×485×140mm(加工エリア30×23cmの場合)                                    | 
| 重さ                                 | 約3kg                                                                     | 
| 安全装置                             | レーザーカッターを持ち上げ床面から離すと自動でレーザー照射を停止する機構  | 
| 使用時温度                           | 20～30度                                                                  | 
| 連続使用時間                         | 30分以下（インターバル約10分）                                            | 
| 推奨保管環境                         | 温度：5～40度　湿度：25～50%                                              | 
| 付属品                               | USBケーブル、ACアダプター、保護メガネ、六角レンチ、スパナ、高さ調整用治具 | 
| その他                               | お客様に組み立てていただくキット型での販売                                | 

## マニュアル
- [FABOOL Laser Mini 30 - 60](https://www.smartdiys.com/manual/fabool-laser-mini-300-230-before-starting/)

特に**11.動作チェック**は必ず読みましょう。

## ソフトウェアについて
### FABOOL Software lite
- [FABOOL Software](https://www.smartdiys.com/manual/fabool-software-overview/)

1. 起動はGoogle ChromeもしくはFireFoxから、[http://127.0.0.1:4444/](http://127.0.0.1:4444/) にアクセス
2. プロジェクトファイル作成
3. 原点・範囲など動作チェック
4. SVGファイル取り込み(複数可能)
5. パラメータ設定
6. 再生->印刷開始

### SmartDIYs Creator(未確認)
- [SmartDIYs Creator](https://www.smartdiys.com/smartdiys-creator/)

## 注意すること
材料の材質・厚みによって
- 移動速度
- レーザー強度
- 繰り返し回数

のパラメータを探る必要がある模様。
- [参考：FABOOL Laser Mini 3.5W （カットパラメータ模索編）（カットパラメータ調整用SVGデータ公開あり）](https://kitto-yakudatsu.com/archives/580)

SVGでは色によってパラメータを変更することが可能。つまり、
- 切断
- 模様入れ

の両方を1ファイルで行うことが可能であるし、そもそもSVGを複数ファイル扱うことも可能。