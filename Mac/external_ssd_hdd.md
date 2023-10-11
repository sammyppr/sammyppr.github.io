# 外付けのSSD,HDDの利用に関すること

[Mac TOP に戻る](./index.md)

---
## まとめ
> フォーマットがNTFSの場合にはexFATにしよう

---
## ファイルフォーマット
ディスクの書き込み方式にはいくつもあります。
- FAT: すごく昔のMS-DOS, Windowsの方式
- FAT32: ちょいちょい昔のWindowsの方式
- HFS: すごく昔のMacの方式
- NTFS: 現在、利用可能なWindowsの方式。Macは読み込みのみ対応
- HFS+: ちょっと前のMacの方式(macOS Sierra 10.12以前)
- exFAT: 現在、利用可能なWindowsの方式。Macにも対応
- APFS: 現在のMacの方式

他にもLinux由来のフォーマット(ext4等)も存在する。

---
## 初期化(フォーマット)の方法
1. ディスクユーティリティを開く
2. ドライブを選択
3. 消去
4. フォーマット形式などを選ぶ

---
## 外付けディスクにexFATをお勧めする理由
Macでしか利用しないならAPFSでも問題はないが、Windowsとデータのやり取りの可能性もないとは言えないため、
- 最新
- Mac, Windows互換

であるexFATをお勧めする。

---
## 参考
- [APFSとexFATフォーマットはどっち？](https://www.note-pc.biz/data/mac/mac_format.html)


