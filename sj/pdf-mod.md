# PDFの加工

印刷用に製作されたイラストレータデータはP.4であれば、
- 1,4ページ
- 2,3ページ

の複数ページで1ファイル、複数ファイルになっており、さらにはトンボが付加されている。

これをWeb用に加工する必要がある。

---
## Web用のPDFの作成方法
1. Illustratorでタブロイド版?でアートボードをページ数分作成する。
2. アートボードパネルの左下から、縦に並べる
3. 加瀬さんからのPDFをイラストレーターで開く(1ファイルごとの方が重くならない)
4. 加瀬さんのデータから該当するアートボードにコピペする。
5. 位置をトンボを見ながら合わせる。
6. いらないところを消去
   - 白矢印の方が消しやすい
   - 必要以上に消さないように気をつけること
7. 5,6をページ数分作業
8. イラストレータファイルを保存(アウトライン化する前で保存)
9. 全選択して、Shift+Command+Oでアウトライン化
10. PDFとして保存。(最小ファイルサイズ)

アウトライン化の解除方法はないため、必ずファイルを保存して、前に戻れるようにしておくこと

---
## サムネイルの作成方法
1. 1ページ目をPNG化(PhotoshopでもIllustratorでも)

### 当初予定だと(Vol.0のやり方)
- 718x1072に調整して保存

### その後いくつかのやり方が...
- 1072x1072のサイズで左右に透明ピクセルを配置して作成


