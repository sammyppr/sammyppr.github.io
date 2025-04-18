# ゼロから始めるHoudini by さつき先生

[Houdini TOPP に戻る](./index.md)

---

## 目次

- [ゼロから始めるHoudini by さつき先生](#ゼロから始めるhoudini-by-さつき先生)
  - [目次](#目次)
  - [【ゼロから始めるHoudini】 について](#ゼロから始めるhoudini-について)
  - [【ゼロから始めるHoudini】新しい初心者向け講座が公開されます【予告編】](#ゼロから始めるhoudini新しい初心者向け講座が公開されます予告編)
  - [【ゼロから始めるHoudini】 01 - UIとコンセプト](#ゼロから始めるhoudini-01---uiとコンセプト)
    - [トラックパッドの場合](#トラックパッドの場合)
      - [MiddleClick...失敗か？](#middleclick失敗か)
  - [【ゼロから始めるHoudini】 02 - シンプルなモデリング](#ゼロから始めるhoudini-02---シンプルなモデリング)
  - [【ゼロから始めるHoudini】 03 - プロシージャルについて考える](#ゼロから始めるhoudini-03---プロシージャルについて考える)
  - [【ゼロから始めるHoudini】 04 - ジオメトリのデータ構造](#ゼロから始めるhoudini-04---ジオメトリのデータ構造)
  - [【ゼロから始めるHoudini】 05 - アトリビュートって何？](#ゼロから始めるhoudini-05---アトリビュートって何)
  - [【ゼロから始めるHoudini】 06 - ボリュームという概念](#ゼロから始めるhoudini-06---ボリュームという概念)
  - [【ゼロから始めるHoudini】 07 - OpenVDBというボリューム](#ゼロから始めるhoudini-07---openvdbというボリューム)
  - [【ゼロから始めるHoudini】 08 - ブロック化する仕組みを作ろう](#ゼロから始めるhoudini-08---ブロック化する仕組みを作ろう)
  - [【ゼロから始めるHoudini】 09 - 繰り返し処理をさせよう](#ゼロから始めるhoudini-09---繰り返し処理をさせよう)
  - [【ゼロから始めるHoudini】 10 - 処理の効率を考えよう](#ゼロから始めるhoudini-10---処理の効率を考えよう)
  - [【ゼロから始めるHoudini】 11 - 様々なループ処理](#ゼロから始めるhoudini-11---様々なループ処理)
  - [【ゼロから始めるHoudini】 12 - 独自のノードを作ろう](#ゼロから始めるhoudini-12---独自のノードを作ろう)
  - [【ゼロから始めるHoudini】 13 - プログラムを書いてみよう](#ゼロから始めるhoudini-13---プログラムを書いてみよう)
  - [【ゼロから始めるHoudini】 14 - シミュレーションをしてみよう](#ゼロから始めるhoudini-14---シミュレーションをしてみよう)
  - [【ゼロから始めるHoudini】 15 - 完成画像を書き出そう](#ゼロから始めるhoudini-15---完成画像を書き出そう)

---
## 【ゼロから始めるHoudini】 について
2022/7/25に公開されたSideFXの中の人、**さつき先生**によるチュートリアルです。

- [ゼロから始めるHoudini - Houdini Fundamentals](https://www.youtube.com/playlist?list=PLAsWwUHApt3P92c3R1VjJrPJQNIfEijrT){:target="_blank"}


> Houdiniを始めて使う人むけのチュートリアルシリーズです。真面目に予習復習も含めると多分大学の１単位くらい…？
この動画を基礎として、もっと専門的な内容が作れたらよいかなぁというのが最近のきもち。

まずは、これを攻略して、考え方を理解しましょう。

動画の気になるところに注釈入れていきます。

---
## 【ゼロから始めるHoudini】新しい初心者向け講座が公開されます【予告編】

---
## 【ゼロから始めるHoudini】 01 - UIとコンセプト
### トラックパッドの場合
- スペースキー長押しでカメラツールに一時的に変更
- 左クリックで回転
- 右クリック(2本指)でズーム
- 中ボタン パン ...簡単なのが見つからない...

#### MiddleClick...失敗か？
トラックパッドで中ボタンを有効にするアプリがあります。これを使いましょう。

- [【Mac】トラックパッドでホイールクリック【MiddleClick】](https://chigusa-web.com/blog/middleclick/)

1. [MiddleClick-BigSur](https://github.com/artginzburg/MiddleClick-BigSur)にアクセス
2. Releaseへ
3. 最新版のMiddleClick.zipをダウンロード
4. 解凍してアプリケーションフォルダへ
5. 右クリックから開く
6. システム環境設定- セキュリティとプライバシー アクセシビリティでチェック
7. システム環境設定- ユーザとグループで、ログイン項目に追加



---
## 【ゼロから始めるHoudini】 02 - シンプルなモデリング

---
## 【ゼロから始めるHoudini】 03 - プロシージャルについて考える

---
## 【ゼロから始めるHoudini】 04 - ジオメトリのデータ構造

---
## 【ゼロから始めるHoudini】 05 - アトリビュートって何？

---
## 【ゼロから始めるHoudini】 06 - ボリュームという概念

---
## 【ゼロから始めるHoudini】 07 - OpenVDBというボリューム

---
## 【ゼロから始めるHoudini】 08 - ブロック化する仕組みを作ろう

---
## 【ゼロから始めるHoudini】 09 - 繰り返し処理をさせよう

---
## 【ゼロから始めるHoudini】 10 - 処理の効率を考えよう

---
## 【ゼロから始めるHoudini】 11 - 様々なループ処理

---
## 【ゼロから始めるHoudini】 12 - 独自のノードを作ろう

---
## 【ゼロから始めるHoudini】 13 - プログラムを書いてみよう

---
## 【ゼロから始めるHoudini】 14 - シミュレーションをしてみよう

---
## 【ゼロから始めるHoudini】 15 - 完成画像を書き出そう





