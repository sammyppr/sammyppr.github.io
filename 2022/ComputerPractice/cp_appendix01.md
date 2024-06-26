# コンピュータ演習 付録01 Wordのページ番号について

[コンピュータ演習 TOP に戻る](./index.md)


---

## 目次

- [コンピュータ演習 付録01 Wordのページ番号について](#コンピュータ演習-付録01-wordのページ番号について)
  - [目次](#目次)
  - [高橋先生のレポートについて](#高橋先生のレポートについて)
  - [考え方](#考え方)
  - [方法](#方法)


---

## 高橋先生のレポートについて
表紙・目次・本文・参考文献の順で書かれたレポートのページ番号について、本文のみにページをつけたい、との質問がありました。
それにつきまとめます。

高橋先生としては、
- 表紙・目次・参考文献
- 本文

と別ファイルで作成して印刷、それを順に並べてホッチキスどめのつもりだったようです。
理由は、Wordのバージョンでなかなかうまく行かない場合もあったとのこと。

一応、現在使っている
- Microsoft 365のサブスクリプション
- バージョン 16.67(22111300)

で、単体ファイルで成功したので、その方法についてまとめます。

## 考え方
Wordには「セクション区切り」という考え方があり、セクションごとにレイアウトを変更することができるようです。
しかし、これには少しクセがあります。
セクションを区切っただけだと、「前と同じ」という設定がONになっています。
そのため、今回に関しては
1. セクションを3つ(セクション1,セクション2,セクション3)を作成する
2. セクション2とセクション3の「前と同じ」をOFFにする
3. セクション2にページ番号を設定する

という順で行っていきます。

## 方法
1. ホームタブの「編集記号の表示非表示」をクリックして、セクション区切りをわかりやすくしておく
2. 表紙・目次・本文・参考文献をセクション区切り付きで入力(次のページから新しいセクション・現在の位置から新しいセクション)を使いましょう。「挿入」 -「 区切り」 の中にあります。
3. 挿入タブの「フッター」「フッターの編集」をクリック
4. セクション2,3とも見てみると右に「前と同じ」というマークが出ているので、リボンの「前と同じヘッダー/フッター」をクリックして二つとも解除しておく
5. セクション2のフッターにカーソル
6. 「ページ番号」- 中央。書式でページ番号を1から

一応、例としてやってみたdocxのリンクを貼っておきます。

[cp_appendix01_wordtest_page](file/cp_appendix01_wordtest_page.docx)
