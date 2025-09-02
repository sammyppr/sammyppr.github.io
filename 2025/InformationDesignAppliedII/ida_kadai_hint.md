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

index.html部分までとりあえずスクリーンキャスト化しました。
[ida_portfolio](https://www.youtube.com/watch?v=s6FE3g6wI08&list=PLeaTO-zJc7wA7_HK4V8sQOSDhqYqZf64H&themeRefresh=1)

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


画像はXDから書き出してimgフォルダに適切な名前をつけて保存しておきましょう。利用する画像はHTMLで指定しましょう。

ここまででとりあえずbody内は
```
    <header>
        <div id="menubar">
            <div id="logo">
                <img src="./img/header/logo.png">
            </div>
            <div id="menu">
                <ul>
                    <li><a href="">aboutme</a></li>
                    <li><a href="">movie</a></li>
                    <li><a href="">programming</a></li>
                    <li><a href="">design</a></li>
                </ul>
            </div>
            <div id="contact">
                <button>contact</button>
            </div>
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
利用できるようにindex.htmlのhead内に次を追加
```
<link rel="stylesheet" href="./css/style.css">
```

変数を定義する。他も適宜必要であれば追加。
bodyのmarginもリセット。imgはとりあえずwidth:100%にしておく
```
/* CSS 変数定義 */
:root {
    --primary-bg: #28293E;
    --secondary-bg: #FDF0E9;
    --teritiary-color: #EF6D58;
    --primary-color: white;
    --secondary-color: #391400;
    --padding-default: 24px;
    --padding-narrow: 12px;
    --padding-footer: 24px;
}
/* body リセット */
body {
    margin: 0px;
}
img {
    width: 100%;
}
```

背景と文字色のデフォルトを指定。ロゴのサイズも指定しておく
```
/* header */
header {
    color: var(--primary-color);
    background-color: var(--primary-bg);
}
#logo {
    width: 195px;
}

/* main */
main {

}
main #main-about {
    color: var(--secondary-color);
    background-color: var(--secondary-bg);
}
main #main-latestwork {
    color: var(--primary-color);
    background-color: var(--primary-bg);
}

/* footer */
footer {
    color: var(--primary-color);
    background-color: var(--primary-bg);
}
```

#header-catch, #main-aboutの画像、テキストを適当に入れよう。

左右のpaddingが現在ないので、
header,#main-about,#main-latestwork-titleに以下を追加
```
    padding: var(--default-padding);
```
#main-latestwork-imagesのところは
```
main #main-latestwork-images {
    padding: var(--padding-narrow);
}
```

main #main-imagesはflexを使って
```
main #main-images{
    display: flex;
    flex-wrap: wrap;
}
main #main-images img{
    width: 50%;
}
```

workのところの.work-genle,.work-titleに文字入れて、整えてみよう

```
/* work-card */
.main-latestwork {
    position: relative;
}
.work-genre, .work-title {
    position: absolute;
}
.work-genre {
    bottom: 60px;
    left: 12px;
    background-color: white;
    color: var(--secondary-color);
    font-size: 12px;
    padding: 4px 24px;
    border-radius: 24px;
}
.work-title {
    bottom: 24px;
    left: 12px;
    font-weight: bold;
}
```

Footerの中を整えよう。
.footer-menu-title, .footer-menu-itemを適宜入れて、

```

/* footer */
footer {
    padding-top: 40px;
    color: var(--primary-color);
    background-color: var(--primary-bg);
    font-size: 12px;
    padding-left: var(--padding-footer);
    padding-right: var(--padding-footer);
}
footer hr {
    border-color: rgba(255,255,255,0.2);
    margin-bottom: 12px;
}
#footer-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 24px;
}
.footer-menu {
    margin: 36px;
}
.footer-menu-title {
    color: var(--teritiary-color);
    margin-bottom: 24px;
}
.footer-menu-item {
    margin-bottom: 8px;
}
#footer-sns {
    margin-bottom: 24px;
}
.sns-icon {
    width: 24px;
}
#footer-title, #footer-menus, #footer-sns {
    text-align: center;
}

#footer-sub{
    text-align: center;
    font-size: 9px;
    padding-bottom: var(--padding-narrow);
}
```

ハンバーガーメニューのところを残しているけれども、
レスポンシブ対応にしていこう

```
@media(min-width: 768px){
    #header-catch {
        display: flex;
        flex-direction: row-reverse;
    }
    #header-catch-img,#header-catch-text {
       padding: 5%; 
    }
}

@media(min-width: 768px){
    #main-about {
        display: flex;
    }
    #main-about-image,#main-about-text {
        padding: 10%;
    }
    #main-latestwork-images {
        display: flex;
        justify-content: space-between;
    }
    .main-latestwork {
        flex-basis: 33%;
    }
    main #main-images{
        flex-wrap: nowrap;
        justify-content: space-between
    }
    main #main-images img{
        width: 16%;
    }
}

@media(min-width: 768px){
    #footer-main, #footer-menus {
        display: flex;
        justify-content: space-between;
    }
}
```

まだまだ調整はできるけど、あとはハンバーガーメニューかな

これを参考に実装します。
https://web-camp.io/magazine/archives/88361

このサンプルでは、メディアクエリーでの切り替えはやっていないので、
- メニューを追加(position:absoluteで、上に引っ付ける)
- メディアクエリーで切り替え
- pc版の時のメニューを最初に普通にCSSで作る

の方針でやってみます。

htmlのheaderの一番上で以下を追加
```
        <div id="menubar-mobile">
            <div class="nav">
    
                <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
                <input id="drawer_input" class="drawer_hidden" type="checkbox">
            
                <!-- ハンバーガーアイコン -->
                <label for="drawer_input" class="drawer_open"><span></span></label>
            
                <!-- メニュー -->
                <nav class="nav_content">
                  <ul class="nav_list">
                    <li class="nav_item"><a href="">メニュー1</a></li>
                    <li class="nav_item"><a href="">メニュー2</a></li>
                    <li class="nav_item"><a href="">メニュー3</a></li>
                    <li class="nav_item"><a href="">メニュー4</a></li>
                  </ul>
                </nav>
           
            </div>
        </div>
```

CSSの一番最後に以下を追加

```

/* メニュー */
header{
    position: relative;
}
#menubar-mobile{
    display: block;
    position: absolute;
    top: 0px;
}

/* ここから下がハンバーガーメニューに関するCSS */
#menubar-mobile {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}
.nav {
    margin-right: 40px;
}
/* チェックボックスを非表示にする */
.drawer_hidden {
    display: none;
  }
  
  /* ハンバーガーアイコンの設置スペース */
  .drawer_open {
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;/* 重なり順を一番上にする */
    cursor: pointer;
  }
  
  /* ハンバーガーメニューのアイコン */
  .drawer_open span,
  .drawer_open span:before,
  .drawer_open span:after {
    content: '';
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background: white;
    transition: 0.5s;
    position: absolute;
  }
  
  /* 三本線の一番上の棒の位置調整 */
  .drawer_open span:before {
    bottom: 8px;
  }
  
  /* 三本線の一番下の棒の位置調整 */
  .drawer_open span:after {
    top: 8px;
  }
  
  /* アイコンがクリックされたら真ん中の線を透明にする */
  #drawer_input:checked ~ .drawer_open span {
    background: rgba(255, 255, 255, 0);
  }
  
  /* アイコンがクリックされたらアイコンが×印になように上下の線を回転 */
  #drawer_input:checked ~ .drawer_open span::before {
    bottom: 0;
    transform: rotate(45deg);
  }
  
  #drawer_input:checked ~ .drawer_open span::after {
    top: 0;
    transform: rotate(-45deg);
  }
    
  /* メニューのデザイン*/
  .nav_content {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 100%; /* メニューを画面の外に飛ばす */
    z-index: 99;
    background: var(--primary-bg);
    color: var(--primary-color);
    transition: .5s;
  }
  .nav_content a,
  .nav_content a:link,
  .nav_content a:hover,
  .nav_content a:active {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  /* メニュー黒ポチを消す */
  .nav_list {
    list-style: none;
  }
  
  /* アイコンがクリックされたらメニューを表示 */
  #drawer_input:checked ~ .nav_content {
    left: 0;/* メニューを画面に入れる */
  }

  @media(min-width: 768px){
    #menubar-mobile{
        display: none;
    }
}
```

あと、PC版のメニューの調整で
```
#menubar #menu, #menubar #contact {
    display: none;
}
@media(min-width: 768px){
    #menubar #menu, #menubar #contact {
        display: block;
    }
    #menubar{
        display: flex;
        justify-content: space-between;
    }
    #menubar ul {
        display: flex;
    }
    #menubar li {
        list-style: none;
        margin-right: 10px;
    }
    #menubar a {
        text-decoration: none;
    }
    #menubar li a, #menubar li a:hover {
        color: var(--primary-color);
    }
    #menubar button {
        background-color: var(--primary-bg);
        color: var(--primary-color);
        border: 1px solid white;
    }
}
```

くらいまでとりあえず...

https://github.com/sammyppr/portfolio

のindex.html, css/style.cssが現在の最新版となります。

ここまで2023/07/20 16:00 update
---
---
---


index.htmlの共通部分
- header
- footer

を後で修正しなくていいように、まずはリンクや文言などを整えておこう。

ロゴからindex.htmlに飛ぶのを忘れずに

(ハンバーガーメニューの実装ミス発覚。モバイルモードで、ロゴのボタンが押せない。面倒なので、メニューにHomeを加えた)

ファイルを複製してから直すのは非常に面倒くさい(こういうのはWordpressが得意としているところ。静的ファイルで制作するデメリット)

---
### aboutme.html
#header-catch部分の構造が異なる。
#header-simple(カテゴリーページでも使いまわせそう)とする。

中は適当に...

- index.htmlをコピーしてaboutme.htmlとする
- #header-catchの代わりに#header-simpleにとする。

```
        <div id="header-simple">
            <h2>About Me</h2>
            <p>Agency provides a full service range including technical skills, design, <br>business understanding.</p>
        </div>
```
CSSは
```
#header-simple{
    text-align: center;
}

```

- mainの中はバッサリ削除して、適当に作り直し

簡素化のため、mainの中に「div#main-aboutme」を作成し「div#main-aboutme-img+div#main-aboutme-text」

```
#main-aboutme {
    color: var(--secondary-color);
    background-color: var(--secondary-bg);
    padding: var(--padding-default);
}
```
くらいであとはお好きに...

---
### category-all.html

モバイルで、選択制のになっているが、JavaScript使いたくないので、縦に並べる

- about.htmlをcategory-all.htmlにコピー
- mainの中を削除
- 「div#main-portfolio」作成
- 中に「div#main-portfolio-menu+div#main-portfolio-images」
- div#main-portfolio-menuの中にタイトルやli等
- div#main-portfolio-imagesにdiv.main-portfolio-imageを適当に追加。例えば「(div.main-portfolio-image>(img+div.work-genre+div.work-title))*9」

```
#main-portfolio{
    color: var(--secondary-color);
    background-color: var(--secondary-bg);
    padding: var(--padding-default);
}
#main-portfolio li{
    list-style-type: none;
}
#main-portfolio a,
#main-portfolio a:link,
#main-portfolio a:visited,
#main-portfolio a:hover{
    color: var(--secondary-color);
    text-decoration: none;
}
```

下の画像については

```
.main-portfolio-image {
    position: relative;
}

@media(min-width: 768px){
    #main-portfolio-images{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .main-portfolio-image {
        width: 30%;
    }
}
```

くらいで並べた。

自分の場合は、
- category-movie.html
- cagtegory-programming.html
- category-design.html

が必要なので、コピって適当に修正

デモなので、最初のサムネイルに
- work-movie-00.html
- work-programming-00.html
- work-design-00.html

にリンクするようにしておいた。

Category-***.html とりあえずここで完了
---

### work-***-**.html
- category-all.htmlをコピーして、work-(genre名)-00.html等に
- div#header-simpleを削除
- div#main-portfolioを削除してdiv#main-workに

```
#main-work{
    color: var(--secondary-color);
    background-color: var(--secondary-bg);
    padding: var(--padding-default);
}
```
あとは、適当にー

#### YouTubeの埋め込み
- 映像を見る
- 共有
- 埋め込むのコードをコピー
- width, heightのところは外す

```
/* iframe */
#main-work {
    width: 100%;
    padding: 0px;
    aspect-ratio: 16 / 9;
}
#main-work iframe {
    width: 100%;
    height: 100%;
}
```
で貼り付けられる。

#### HTMLの埋め込み
全部うまくいくかわからないが、Canvas入門のファイルを
- html/ida_00

に配置し、

```
        <div id="main-work">
            <iframe src="./html/ida_00/index.html" frameborder="1" ></iframe>
        </div>
```
とすることで、Canvasの内容も貼れる。
