# メディア表現V 書き出し方

[メディア表現V TOPに戻る](./index.md)

---
## 概要
blenderの作業後には、静止画、または動画で書き出す必要があります。
設定方法によってレンダリング時間は大幅に変わるため注意しましょう。

なお、viewportの右上で「Rendered」を選んでいても、最終書き出しは設定によって見え方が変わることに注意しましょう

以下に記載している以外の書き出し方でも目的があればもちろん構いません(OpenEXR等)

## Render Engine EEVEE ? Cycles ?
- EEVEEはリアルタイムでの動作を目的としているため非常高速です
- Cyclesはより綺麗にレンダリングすることを目的としているため、時間がかかります。
- CyclesはCPUよりGPUの方が圧倒的に高速です。
- Cyclesの設定でSampling - Render - Max Samplesはデフォルトで4096になっていますが、16,32にしても場合によっては問題ありませんし、高速になります。

## 動画書き出し時の注意
設定を間違えるとレンダリングに非常に時間がかかります。
テストとして1フレームをRender - Render Imageによって静止画で書き出し、
> 1フレームのレンダリング時間 $\times$ フレーム数

を計算し、どのくらい時間がかかるか目安を見積りましょう。
長時間がかかる場合には設定を見直しましょう。

## 書き出し方法
Scene - Outputで出力先をしっかり設定しておきましょう。

### 静止画
- Media TypeをImage
- File FormatをPNG(圧縮なし) JPEG(圧縮あり)のどちらかを選びましょう。
- Render - Render Image

### 動画
出力する開始・終了フレームの設定(Scene - Frame Range)を忘れずに

### 他のアプリで利用する目的の動画
静止画の設定でPNGとし、
- Render - Render Image

とすると、連番形式のPNGが書き出されます。

### 閲覧用で利用する目的の動画
- Media TypeをVideo
- Encoding - ContainerをMPEG-4, Video - Video CodecをH.264
- Render - Render Animation



