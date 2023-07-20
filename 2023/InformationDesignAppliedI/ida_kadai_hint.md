# 情報デザイン演習 最終課題
## お題
Github上にポートフォリオサイトを作成せよ

## 準備
### サイト作成時のワークフロー
1. ヒアリング
2. 企画⽴案・サイト設計
3. コンテンツ制作
4. Webサイトデザイン
5. コーディング
6. 校正・品質チェック
7. 確認・チューニング
8. サイト公開

詳細は10回目資料参照のこと

### Githubの準備及びVSCへのクローン, 及びGithub Pagesの準備
- 「portfolio」というリポジトリを作成
- Code - CloneからURLをコピー
- VSCで新しいウィンドウ
- Gitリポジトリのクローンで、URLをペーストしてクローン
- GithubでSetting - Pagesでmainブランチを指定してSave

### デザインについて
- [サンプルXDファイル](./data/portfolio_common.xd)

を参考に進める

### パスについての注意
上記方法を取ると、VSC上でのルートとGithub Pagesサーバ上のルートが異なってしまう。
例えば
- https://sammyppr.github.io/portfolio/

のようになる。
そのため、絶対パスの利用ではうまくいかないため、相対パスを利用する。

### 階層構造
- index.html
- aboutme.html
- category-all.html
- category-(category_name).html
- work-(category_name)-00.html
- css
  - style.css
- img
  - 画像ファイル等
- html
  - iframe用ファイル

と規定する。

### メニュー構造
- aboutme
- movie
- programming
- design

とする。

### CSS作成の方法について
モバイルファーストを原則とし、その後タブレット・PC用のCSSを追加する。

### Emmet記法
通常通り入力しても良いが、Emmet記法を利用する
- [【チートシート付き】Emmetをまとめてみた！コーディング速度アップを目指そう！](https://pengi-n.co.jp/blog/emmet/)

## コーディング作業
### index.html
1. 「!」で最低限のHTML作成
2. titleタグはportfolioへ
3. bodyを3つの部分にまずは分割 「header+main+footer」
4. header内を2つの部分に分割「div#menubar+div#header-catch」
5. div#menubarを3つに分割「div#logo+div#menu+div#contact」
6. div#logoの中にimg
7. div#menuの中に「ul>li*4>a」
8. それぞれ中を整えてdiv#menubar完成------
9. div#header-catchを「div#header-catch-img+div#header-catch-text」
10. 中はそれぞれ「ヘッダー画像」「ヘッダーテキスト」くらいにして(後で調整)div#header-catch完成------
11. mainを3つに分割「div#main-about+div#main-latestwork+div#main-images」
12. div#main-aboutを分割「div#main-about-image+div#main-about-text」
13. div#main-latestworkを分割「div#main-latestwork-title+div#main-latestwork-images」
14. div#main-latestwork-imagesを分割「(div.main-latestwork>(img+div.work-genre+div.work-title))*3」
15. div#mainとりあえず完成----
16. footerを分割「div#footer-main+div#footer-sub」
17. div#footer-mainを「div#footer-title+div#footer-menus+div#footer-sns」
18. div#footer-menusを「(div.footer-menu>(div.footer-menu-title+div.footer-menu-item))*2」
19. div#footer-subにCopyright文(Terms of Use, Privacy Policyは省いた)

ここまででとりあえずbody内は
```
    <header>
        <div id="menubar">
            <div id="logo"><img src="./img/header/logo.png"></div>
            <div id="menu">
                <ul>
                    <li><a href="">aboutme</a></li>
                    <li><a href="">movie</a></li>
                    <li><a href="">programming</a></li>
                    <li><a href="">design</a></li>
                </ul>
            </div>
            <div id="contact"></div><button>contact</button></div>
        </div>
        <div id="header-catch">
            <div id="header-catch-img">ヘッダー画像</div>
            <div id="header-catch-text">ヘッダーテキスト</div>
        </div>
    </header>
    <main>
        <div id="main-about">
            <div id="main-about-image">about画像</div>
            <div id="main-about-text">aboutテキスト</div>
        </div>
        <div id="main-latestwork">
            <div id="main-latestwork-title">Latestwork</div>
            <div id="main-latestwork-images">
                <div class="main-latestwork">
                    <img src="./img/top/work1.png" alt="">
                    <div class="work-genre"></div>
                    <div class="work-title"></div>
                </div>
                <div class="main-latestwork">
                    <img src="./img/top/work2.png" alt="">
                    <div class="work-genre"></div>
                    <div class="work-title"></div>
                </div>
                <div class="main-latestwork">
                    <img src="./img/top/work3.png" alt="">
                    <div class="work-genre"></div>
                    <div class="work-title"></div>
                </div>
            </div>
        </div>
        <div id="main-images">
            <img src="./img/top/footer-pic1.png" alt="">
            <img src="./img/top/footer-pic2.png" alt="">
            <img src="./img/top/footer-pic3.png" alt="">
            <img src="./img/top/footer-pic4.png" alt="">
            <img src="./img/top/footer-pic5.png" alt="">
            <img src="./img/top/footer-pic6.png" alt="">
        </div>
    </main>
    <footer>
        <div id="footer-main">
            <div id="footer-title">Portfolio</div>
            <div id="footer-menus">
                <div class="footer-menu">
                    <div class="footer-menu-title"></div>
                    <div class="footer-menu-item"></div>
                </div>
                <div class="footer-menu">
                    <div class="footer-menu-title"></div>
                    <div class="footer-menu-item"></div>
                </div>
            </div>
            <div id="footer-sns"></div>
        </div>
        <div id="footer-sub">Copyright © 2023 Sammy. 
            All Rights Reserved.</div>
    </footer>

```

Mobile, PCのデザインを見比べて、そこそこ要素が入っていることを確認しよう。

### css/style.css
利用できるようにindex.htmlのhead内に