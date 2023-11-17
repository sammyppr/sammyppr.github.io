# TouchDesigner 使い方

[TOP に戻る](../../index.md)

---

## 目次
- [TouchDesigner 使い方](#touchdesigner-使い方)
  - [目次](#目次)
  - [履歴](#履歴)
  - [TouchDesignerとは？](#touchdesignerとは)
  - [詳しい初心者向けページ](#詳しい初心者向けページ)
  - [基本用語](#基本用語)
  - [インストール方法](#インストール方法)
  - [画面・オペレータの基本操作方法](#画面オペレータの基本操作方法)
    - [画面](#画面)
    - [置き方](#置き方)
    - [オペレータの見え方](#オペレータの見え方)
    - [オペレータのフラグ](#オペレータのフラグ)
  - [ノードの接続方法](#ノードの接続方法)
  - [Null CHOP](#null-chop)
  - [外部モニタへの接続](#外部モニタへの接続)
  - [UI](#ui)
  - [外部デバイス](#外部デバイス)
  - [おすすめ勉強法](#おすすめ勉強法)
  - [おすすめYouTube](#おすすめyoutube)
    - [TDSW](#tdsw)

## 履歴
- 2023/11/18 初稿

## TouchDesignerとは？
- [TouchDesigner](https://derivative.ca/showcase)

ノードベースのビジュアルプログラミング環境。
各種デバイスを接続でき、信号処理し、プロジェクションマッピングやライブ演出等のリアルタイム演出、メディアアートまで幅広く使われている。映像も音楽も扱える

個人利用であれば解像度は1280x1280に制限されるが利用可能。

## 詳しい初心者向けページ
作らなくてよかったか？よくまとまってる
- [TouchDesigner基礎](https://lecture.nakayasu.com/touchdesigner)


## 基本用語
- [ノード] オペレータ機能を持つ
- [ネットワーク] ノードで作られるプログラム
- [オペレータ] パラメータがあり、様々な出力を持つ。ジェネレータは入力がない。
- [Operator Families] オペレータは分類されいている。色も決まっている
  - [COMP] Components 様々なコンポーネント(下記のOerator Families)以外
  - [TOP] Texture Oerator 平面イメージを扱う
  - [CHOP] Channel Operator 信号(数値)を扱う
  - [SOP] Surface Oerator 3Dを扱う
  - [DAT] Data Oerator データ(テキスト・XML等)を扱う
  - [MAT] Material Oerator マテリアルを扱う

- [インスタンシング] オブジェクトのコピーを大量に扱うことができる

## インストール方法
- [TouchDesignerをインストール/起動する](https://note.com/toyoshimorioka/n/n9d38ec8d803d)

## 画面・オペレータの基本操作方法
### 画面
- 左クリック+ドラッグで移動
- 2本指でスワイプで拡大縮小
- 右クリック(二本指)+ドラッグで複数選択

### 置き方
- tab
- 左ダブルクリック

OCreateDialogウィンドウから、自分で探すか検索で探す

### オペレータの見え方
右下の「+」を押すとオペレータの見え方を変更できる
- 回転 左クリック+ドラッグ
- パン 右クリック+ドラッグ
- ワイヤフレーム表示 W
- カメラ位置を戻す H

### オペレータのフラグ
- [Viewer] リアルタイム表示とテキスト表示の切り替え
- [Clone Immune] コピペ方法にパラメータを引き継ぐ[クローン](https://qiita.com/kodai100/items/05b360a89a91516f21e6)という機能があるがそれを独立させる
- [Cooking] [cook](https://qiita.com/kodai100/items/be672ea8978e443867b0)を止める
- [Bypass] 処理を飛ばす。プログラムでいうコメントアウト
- [Lock] cookされずデータもアップデートされなくなる


## ノードの接続方法
基本同じファミリーのオペレータ同士しか接続できない。
パラメータに接続することができる。
変換には
- TOP to CHOP
- CHOP to TOP
- CHOP to DAT
- CHOP to SOP
- DAT to CHOP
- DAT to SOP
- SOP to CHOP
- SOP to DAT
- Object CHOP

を利用する。

## Null CHOP
データの変更をしないCHOPではあるが、CHOPネットワークの最後に追加する。参照に便利。

## 外部モニタへの接続
- [TouchDesigner | 外部モニタ出力方法](https://note.com/katsuyatsukui/n/ned50f13b6ec7)

## UI
- [GUIを作る](https://note.com/toyoshimorioka/n/nd43466a617da)

## 外部デバイス
様々な外部デバイスを簡単に使えそうなので利用してみよう
- マイク
- MIDIコントローラー
- [LeapMotion]
- [TouchOSC](https://hexler.net/touchosc)(有料)
- [Free TouchOSC Alternatives](https://alternativeto.net/software/touchosc/?license=free)

## おすすめ勉強法
後述するTDSWにかなり充実してる。
が、順番に覚えるより、基本操作を覚えたら、短めの作品を真似してみて、流れを身に付けてから様々な基本を学んでも良い気がする。短いものでも驚くようなことが体験できる。例えば

- https://www.youtube.com/watch?v=L7uG8oRlBT8

## おすすめYouTube
### [TDSW](https://www.youtube.com/channel/UCKwb_ZPHs-DEzK9TdVl3_Ew)

- [オペレータ紹介](https://www.youtube.com/watch?v=u0fTf-LT9pg&list=PLH6Y6o7cLK9iJvL0sHLbch6ct_Kdg1aju)
- [TDSW YouTube Academy](https://www.youtube.com/watch?v=1gxN1-dUfyw&list=PLH6Y6o7cLK9hj0KpPr-5iWVUZcrioBMY8)
- [TouchDesigner Cotents Creation Tutorials
](https://www.youtube.com/watch?v=e1a9ME3VZ-M&list=PLH6Y6o7cLK9hKBP7q3pgrvBuVCJRn71wi)