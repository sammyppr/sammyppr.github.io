---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: サウンドデザイン演習 7.音響技術IV マスタリング
footer: ""
---

# サウンドデザイン演習 7.音響技術IV マスタリング<!-- omit in toc -->

# 目次<!-- omit in toc -->

1. [前回のおさらい](#前回のおさらい)
2. [音響技術IV マスタリング](#音響技術iv-マスタリング)
   1. [ラウドネスノーマライゼーション](#ラウドネスノーマライゼーション)
   2. [まとめ](#まとめ)
3. [小レポート](#小レポート)


<!-- 


-->
## はじめに

## HPの置き場所(再掲)
https://sammyppr.github.io/

に置きます。これは学外からも閲覧可能です。

# 前回のおさらい
- エフェクト概論
- 音量の制御
- 特定周波数帯のレベル制御
- 増幅・歪みの付加
- 残響・反響音の付加
- 低周波による変調
- ノイズリダクション/レストレーション

主にコンプレッサー・EQについて詳しく説明しました。

# 音響技術IV マスタリング

---
### 初めに
今日も、マスタリングの一般論より、
- PremiereProでそれがどのような形で実装されているか
- どう使うのか

をメインにしたいと思います。


---
### マスタリングとは
音楽やゲーム、パソコン用ソフトなどの様々なデータをCD、DVD、ビデオテープ等の記録媒体（メディア）に収録し、製品として完成させる作業。プレス用のマスター（原盤）を作成する作業。


---
### 楽曲制作の場合
1. 録音
2. ミックス(それぞれの楽器の音量調整、音質調整)
3. マスタリング

の工程があり、ミックスで完成した楽曲もそれで一応完成ですが、他の曲と並べてみると音量、音質ともにバラバラだったりします。またダイナミクスを重視したミックスの場合、音量的には市販のCDレベルにない場合があります。そのための最終的な磨き作業を行うのがマスタリング作業です。(アルバムの場合は通して聞いても違和感ないように音量音質合わせ。)

---
### これまでの音楽のマスタリングの流れ
少しでも曲が大きく聞こえるように音圧を限界まで上げる風潮が2000年代にありました。(CD向け)

2010年代になると、CDからストリーミングに音楽コンテンツが移行。数値上では高い音圧で統一されていたのに、聴感上では均一に聞こえない問題がありました。

そこで後述するラウドネスノーマライゼーションという考え方が出てきて、聴感上の統一感を図るようになります。

---
### サンプル音源
今日何回か、Mixした音(マスタリング前)のものを利用したいと思いますので、

StudentVolume - 2023演習 - サウンドデザイン演習 - 05

から、mp3ファイルをダウンロードしておきましょう。

---
### マスタリングサービス紹介
元々はマスタリングエンジニアという職業の人にお願いしていましたが、
最近では、Web上でこの工程をAIを用いて行うサービスがあります。いくつか紹介しましょう。

サービスによっては、有料なものがあるので注意してください。

- [LANDR](https://www.landr.com/ja/)
- [eMastered](https://emastered.com/ja)
- [BandLab Mastering](https://www.bandlab.com/mastering)
- [音圧爆上げくん](https://bakuage.com/)(無料)
- [LANDRだけじゃない！AIマスタリングサービス7選](https://studio-okina.com/ai-mastering/)

---
### 映像での音のマスタリング
これまで、映像を編集するときに、音のバランスだけを気にしていませんでしたか？

より良い音にすると映像の見え方が変わってきます。
良いサンプルが上がっていたのでみてみましょう。
[動画の音声マスタリング](https://saidera.co.jp/video_mastering.html)


## ラウドネスノーマライゼーション

---
### ラウドネス
2回目に波形と音量は異なることを説明しました。
また、ラウドネスメーター
> 人が周波数帯域によって感じる音量の差を考慮した音圧を示す、今ある全てのメーターの中でも最も人の聴覚に近い値を調べることができるメーター

についても紹介しました。

---
### YouTubeの音量
YouTube等に映像をアップすると、実は勝手に音量調整される、ということを知っていますか？

これは、視聴者にとっては、音量が一定に聞こえるので便利な機能です。

しかし、製作者としては、意図した結果と異なることとなります。

---
### Loudness Penalty
適当に音楽をアップすると、どのサービスではどのくらい音量が変わるかを確認できます。
[LOUDNESS PENALTY: ANALYZER](https://www.loudnesspenalty.com/)

---
### ラウドネスノーマライゼーション
2020年代では、基準値より大きいラウドネス値の音源をネットに上げるとネットに上げると自動的に音量が下げられてしまいます。

単位は二つの言い方がありますが、言い方が違うだけで数値は一緒です。
- LKFS(Loudness K-weighting relative to Full Scale)
- LUFS(Loudness Units relative to Full Scale)

---
### 基準値
- YouTube -14LKFS/LUFS(公表値ではない)
- テレビ番組 CM -24.0LKFS/LUFS


---
### YouTubeでの確認方法
YouTubeでは動画を右クリックして、詳細統計情報を見ると、YouTubeプレイヤーの音量と、補正後の音量が出ています。

[帝京平成大学 WebCM「自分だけの物語を描こう」（保育士篇）](https://www.youtube.com/watch?v=bXNqJTj918U)

> Volume / Normalized 100% / 97% (content loudness 0.2dB)

となっているので
- Youtubeの動画プレイヤー上の音量 ＝ 100%
- 補正後の音量 ＝ 97%
- 基準のラウドネス値からどのくらいオーバーしているか ＝ 0.2dB

となります。基準値より小さい場合には%が同じ数字となり、どのくらい音が小さいかがマイナス値でdBが表示されます。


---
### 音声レベル
TVやラジオに納品するための基準については以下に詳しく資料があります。
- [一般社団法人 日本民間放送連盟 放送に携わる皆様へ](https://www.j-ba.or.jp/category/references)

詳しく知りたい人は下記を見て見ましょう。
- [民放連技術規準Ｔ032「テレビ放送における音声レベル運用規準」](https://www.j-ba.or.jp/files/t032/%E6%B0%91%E6%94%BE%E9%80%A3%E6%8A%80%E8%A1%93%E8%A6%8F%E6%BA%96%EF%BC%B4%EF%BC%90%EF%BC%93%EF%BC%92%EF%BC%8D%EF%BC%92%EF%BC%90%EF%BC%92%EF%BC%90.pdf)


---
### ラウドネスメーター
ラウドネスを測るには、ラウドネスメーターを利用します。
1. オーディオトラックミキサーを開ける
2. 一番右上から「スペシャル」「ラウドネスメーター」を開く
3. 「ラウドネス...」をダブルクリック
4. 動画を再生させる
5. 統合の数値がラウドネス(短期は3秒間のラウドネス)

これを見ながら調整でもいいですが、大変ですよね。何しろ、1時間とかだと、1時間再生させないとラウドネス値がわからない。

レーダー状に表示するLoudness Raderもあります。

---
### 書き出し時の設定
書き出しを見てみると「エフェクト」という項目があり、その中に「ラウドネス正規化」という項目があります。
- ラウドネス標準を「ITU BS.1770-3」
- 目標ラウドネスを-14LKFS(YouTubeの場合)

にすることで自動で調整して書き出してくれます。

ラウドネス標準について詳しく知りたい人は参考を見てください。
[技術解説：ラウドネスメータどうなってるの？](https://pro.miroc.co.jp/2010/11/15/%E6%8A%80%E8%A1%93%E8%A7%A3%E8%AA%AC%EF%BC%9A%E3%83%A9%E3%82%A6%E3%83%89%E3%83%8D%E3%82%B9%E3%83%A1%E3%83%BC%E3%82%BF%E3%81%A9%E3%81%86%E3%81%AA%E3%81%A3%E3%81%A6%E3%82%8B%E3%81%AE%EF%BC%9F/#.YpI6hBPP08Y)

---
### 注意
- ある程度落ち着いてきたような気もしますが、基準値などはサービスによって改定があり得ます。
最新の情報を調べて設定するようにしましょう。
- 規定に満たない小さな音量をYouTubeが上げることはしていないようなので気をつけましょう。

---
### 長尺の映像のラウドネスを時間かけずに知る方法
ちょっとしたチートですが、多分これが一番早いかと。少しバグもあります。
1. 書き出す
2. 書き出した動画をpremiereに配置
3. エッセンシャルサウンドで適当にタイプを選ぶ
4. ラウドネスのところに「分析するラウドネス」に表示される。

出てこない場合、チェックやリセットなどを何回かやると表示されます。

## 今日のまとめ
1. 音楽と映像制作では少し性質が異なるが、マスタリングという工程がある
2. 聴感上の音の大きさはラウドネスで測るようになった
3. YouTube等サービスによって、ラウドネスノーマライゼーションが行われていて、基準値が異なる
4. ラウドネスメーターで測れる
5. 書き出し時にラウドネスの正規化は必須

## 音響技術まとめ
- 音響技術 I：マイク マイクの種類、取り扱い方等について学修する。
- 音響技術 II：ミキサー 音声情報をどのようにミックスするかについて学修する。
- 音響技術 III：エフェクター 音声情報の効果について学修する。
- 音響技術 IV：マスタリング 音声情報の整音について学修する。

と4回にわたって音響技術について行ってきました。

## 絶対に覚えてほしいこと！！
- 録音は高品質なコンデンサマイクを利用しよう
- コンデンサマイクにはファントム電源が必要
- オーディオトラックは種類別に可能なら分けよう(環境音・BGM・効果音・会話)
- エッセンシャルサウンドでオーディオタイプを設定しよう
- ラウドネスの自動一致をしてから、好みに応じて設定していこう
- 書き出し時にはエフェクトのラウドネスの正規化で(ITU BS.1770-3, -14dB YouTubeの場合)にして書き出そう。

# 小レポート
「マスタリングの重要性」について400字程度でまとめてmanabaにて提出
