# 3D Laser Cutter：FABOOL Laser Mini 3.5W

[TOP に戻る](../../index.md)

## はじめに
竹中先生購入のFABOOL Laser Mini 3.5Wの利用法について調査確認した結果をまとめたものである(20240221 with 須永)

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