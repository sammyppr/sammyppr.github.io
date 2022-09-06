# Adobe Photoshop 使い方

[TOP に戻る](../../index.md)

---

## 目次

- [Adobe Photoshop 使い方](#adobe-photoshop-使い方)
  - [目次](#目次)
  - [スライド](#スライド)
  - [Photoshop基本](#photoshop基本)
    - [基礎知識](#基礎知識)
      - [色について](#色について)
        - [カラーモード](#カラーモード)
        - [アルファ](#アルファ)
      - [解像度](#解像度)
      - [レイヤー](#レイヤー)
      - [描画モード](#描画モード)
        - [破壊編集・非破壊編集](#破壊編集非破壊編集)
        - [レイヤーマスク](#レイヤーマスク)
        - [調整レイヤー](#調整レイヤー)
    - [基本的な編集の方針](#基本的な編集の方針)
    - [参考動画](#参考動画)
      - [(参考)画像の修正・加工](#参考画像の修正加工)
      - [(参考)フィルターギャラリー(3:30あたりから)](#参考フィルターギャラリー330あたりから)
      - [(参考)Web用に出力](#参考web用に出力)
      - [レイヤーを使い倒そう](#レイヤーを使い倒そう)
    - [Adobe Sensei](#adobe-sensei)


---
---
## スライド
講義っぽく確認したい人はスライドを確認しましょう。
そうでない人は、飛ばしてOK

- [スライド](./AdobePhotoshop_slide.pdf){:target="_blank"}


---
## Photoshop基本
ビットマップ画像(ラスター画像・ピクセル画像)を編集するアプリです。

---

### 基礎知識
#### 色について
##### カラーモード
- RGB: ディスプレイ用(Red, Green ,Blue)
- CMYK: 印刷用(Cyan, Magenda, Yellow, KeyPlate)

[参考：Adobe Color CC](https://color.adobe.com/ja/){:target="_blank"}

##### アルファ
透明度を表し、0-100%, 0-1の小数を使って表現します。
RGBとあわせてRGBAと呼ぶことがあります。

#### 解像度
印刷の場合、1インチあたり何ピクセル使うか、と言うのを指定する解像度があります。単位はdpiまたはppiです。

印刷では350dpi以上であれば綺麗に印刷されることが保証されます。

- ディスプレイ用・動画用ではあまり関係ないですが、72dpiにしておけば問題ないです。

#### レイヤー
透明なシートを重ねるように合成することができます。このシートのことをレイヤーと呼び、前後関係があります。

#### 描画モード
合成方法を変えることができます。覚える必要はないですが、「スクリーン」は使えるモードです。

##### 破壊編集・非破壊編集
直接画像を操作すると、取り消しやヒストリーで戻ることができますが、そこまで戻らないと作業を復活させられません。
これは破壊的編集をおこなっているからです。非破壊編集である以下の**レイヤースタイル・レイヤーマスク・調整レイヤー**を使うことにより後から調整することが可能となります。

##### レイヤーマスク
レイヤーのうち、どの部分を有効にするか、というレイヤーマスクという機能があります。

##### 調整レイヤー
色の修正においては調整レイヤーを使うことを強くお勧めします。
- イメージ - 色調補正
- レイヤー - 新規調整レイヤー 

ほぼ同じ項目が並んでいますが、前者は破壊編集で、後者は非破壊編集です。基本、後者を利用しましょう。

---
### 基本的な編集の方針
  1. 操作したい部分を選択
  2. 選択部分に効果をつける

この繰り返しとなります。選択の仕方を色々覚えると、便利に利用できます。

---
### 参考動画
#### (参考)画像の修正・加工
[![](https://img.youtube.com/vi/BQm5IScf_nA/0.jpg)](https://www.youtube.com/watch?v=BQm5IScf_nA){:target="_blank"}

#### (参考)フィルターギャラリー(3:30あたりから)
[![](https://img.youtube.com/vi/Ryr8RxNGizw/0.jpg)](https://www.youtube.com/watch?v=Ryr8RxNGizw){:target="_blank"}

#### (参考)Web用に出力
[![](https://img.youtube.com/vi/SaBsZTTZSQM/0.jpg)](https://www.youtube.com/watch?v=SaBsZTTZSQM){:target="_blank"}

#### レイヤーを使い倒そう
[![](https://img.youtube.com/vi/NUzHjXtVIUk/0.jpg)](https://www.youtube.com/watch?v=NUzHjXtVIUk){:target="_blank"}


### Adobe Sensei
AIの機能でここまで便利になっています。
余力のある人は何ができるか確認してみましょう。
- [複雑な髪の⽑も⼀瞬で切り抜く](https://helpx.adobe.com/jp/photoshop/how-to/jp-auto-select.html)
- [「コンテンツに応じた塗りつぶし」で写真から不要物をすばやく消去](https://helpx.adobe.com/jp/photoshop/how-to/arima-content-aware-fill.html)
- [「被写体を選択」を使って補正対象にすばやく選択範囲を作成](https://helpx.adobe.com/jp/photoshop/how-to/kakita-select-subject.html)
- [写真の空を置き換え](https://helpx.adobe.com/jp/photoshop/using/replace-sky.html)


