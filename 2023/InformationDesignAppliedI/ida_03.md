# 情報デザイン応用演習I 3.Canvas入門

[情報デザイン応用演習I TOP に戻る](./index.md)

---

## 目次

- [情報デザイン応用演習I 3.Canvas入門](#情報デザイン応用演習i-3canvas入門)
  - [目次](#目次)
  - [スライド](#スライド)
  - [配布資料](#配布資料)
  - [できた人へちょっと難しい問題(アルゴリズムについて)](#できた人へちょっと難しい問題アルゴリズムについて)
    - [Q.](#q)
    - [A.](#a)

---

## スライド

[スライド資料](./ida_03slide.pdf){:target="_blank"}

## 配布資料

[Canvas FirstStep](./tex/CanvasFirstStep.pdf)

## できた人へちょっと難しい問題(アルゴリズムについて)
### Q.
長方形が右下に偏って表示されていると思うが、何故か。そして、その偏りをなくすにはどうしたら良いか

### A.
```
//均等に長方形を出す方法
let posx1=getRandomNum(cw);
let posy1=getRandomNum(ch);
let posx2=getRandomNum(cw);
let posy2=getRandomNum(ch);
ctx.fillRect(Math.min(posx1,posx2),Math.min(posy1,posy2),getRandomNum(Math.abs(posx1-posx2)),getRandomNum(Math.abs(posy1-posy2)));
```

Math.min()は最小値、Math.absは絶対値