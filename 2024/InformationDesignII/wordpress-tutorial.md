# wordpress 簡単な使い方

- [wordpress 簡単な使い方](#wordpress-簡単な使い方)
  - [できるようになること](#できるようになること)
  - [やってみよう](#やってみよう)
    - [Local by flywheelを利用してのwordpressインストール](#local-by-flywheelを利用してのwordpressインストール)
    - [クラシックテーマ(FSE対応ではない)としてTwenty-Twentyを利用](#クラシックテーマfse対応ではないとしてtwenty-twentyを利用)
    - [子テーマの作成](#子テーマの作成)
      - [style.css](#stylecss)
      - [functions.php](#functionsphp)
    - [カテゴリ「news」を作成しての投稿対応](#カテゴリnewsを作成しての投稿対応)
    - [トップページにお知らせを埋め込み](#トップページにお知らせを埋め込み)
    - [プラグイン「ContactForm7」を利用した問い合わせページ作成](#プラグインcontactform7を利用した問い合わせページ作成)
    - [メニューの設定](#メニューの設定)
    - [ウィジェットでフッターに「カレンダー」「最新の投稿」の埋め込み](#ウィジェットでフッターにカレンダー最新の投稿の埋め込み)
    - [子テーマでのsite-titleの色の変更](#子テーマでのsite-titleの色の変更)
  - [まとめ](#まとめ)



## できるようになること
- Local by flywheelを利用してのwordpressインストール
- クラシックテーマ(FSE対応ではない)としてTwenty-Twentyを利用
- 子テーマの作成
- カテゴリ「news」を作成しての投稿対応
- トップページにお知らせを埋め込み
- プラグイン「ContactForm7」を利用した問い合わせページ作成
- メニューの設定
- ウィジェットでフッターに「カレンダー」「最新の投稿」の埋め込み
- 子テーマでのsite-titleの色の変更

## やってみよう
### Local by flywheelを利用してのwordpressインストール
- [Local](https://localwp.com/)からダウンロード
- MacではIntel版・Apple Silicon版があるので気をつけること(Appleメニュー - このMacについて　のプロセッサにIntelと書いてあるかどうかで判断)
- 起動して「+ Create a new site」または左下の「+」アイコンをクリック
- タイトルやユーザネーム・パスワードは指定して、それ以外はそのままでOK
- ADMINで管理画面、OPEN SITEでサイトが表示される
- 管理画面にアクセス
- 設定-一般から「日本語」「UTC+9」をそれぞれ選択

### クラシックテーマ(FSE対応ではない)としてTwenty-Twentyを利用
- 外観 - テーマから新しいテーマを追加
- 「Twenty Twenty」を検索して、インストール・有効化

注意事項
- ※ FSE対応テーマの場合には外観のサブメニューに「テーマ」「エディタ」しかないので注意
- ※ テーマによってできることがかなり変わるので選定には注意すること。

### 子テーマの作成
子テーマは親テーマを直接カスタマイズせずに差分として定義するもの。親テーマがバージョンアップによって更新されても差分は残る。

- テーマがインストールされたディレクトリを以下の要領で開く
  1. Localの管理画面から「Go to site folder」をクリック
  2. app - public がwordpressがインストールされている場所
  3. wp-content - themes がテーマがインストールされている場所
- 「my-twentytwenty」等として子テーマのフォルダを作成
- その中に、style.css, functions.phpを以下の内容で作成
- style.cssは「Template: twentytwenty」となる。
- 外観 - テーマ に表示されれば成功。有効化。表示されなければ何か間違っている。

#### style.css
```css
/*
Theme Name: 子テーマの名前
Template: 親テーマの名前（※ディレクトリ名をそのまま）
*/
```

#### functions.php
```php
<?php
function theme_enqueue_styles() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
?>
```

### カテゴリ「news」を作成しての投稿対応
投稿には必ずカテゴリを作成すること

- 投稿 - カテゴリに名前：お知らせ、スラッグ：newsを作成
- いくつかお知らせカテゴリとして投稿しておく

### トップページにお知らせを埋め込み
- 固定ページ - 新規固定ページを追加
- 簡単な文章を入力後、「最新の投稿」ブロックを追加
- 設定 - 表示設定で固定ページのトップページを設定
- これで、トップページの表示が変更する

### プラグイン「ContactForm7」を利用した問い合わせページ作成
- プラグイン - 新規プラグインを追加 で「Contact Form 7」を追加してインストール・有効化
- 「お問い合わせ」というメニューが増えているので、コンタクトフォーム1を確認。ショートコードをコピー
- 固定ページ - 新規追加。タイトルはお問合せとして、ブロックでショートカードをペースト

### メニューの設定
メニューの位置はテーマによって定義されています。

- 外観 - メニュー
- 「MainMenu」を「デスクトップ水平メニュー」「モバイルメニュー」にチェックを入れて作成
- トップページ・問い合わせを追加

### ウィジェットでフッターに「カレンダー」「最新の投稿」の埋め込み
- フッター1にカレンダーを登録


### 子テーマでのsite-titleの色の変更
タイトルのHTMLをデベロッパーツールで確認すると

```HTML
<div class="site-title faux-heading">
    <a href="http://test.local/">test</a>
</div>
```
の様になっており、

```CSS
.site-title a {
    color: inherit;
    display: block;
    text-decoration: none;
}
```
となっているので、color: red;　で色が変わることを確認。
デベロッパーツール上で
```CSS
    color: red;
```
と変更することで色が変わることを確認後、子テーマフォルダのstyle.cssに

```CSS
.site-title a {
    color: red;
}
```
としてCSSの追加ができたことを確認しよう。

## まとめ
一通りのwordpressの使い方をこれでマスターしたはず。

テーマによってできることがかなり異なるのでテーマ選びは慎重に。
テーマによっては、そのマニュアルが整備されているものもある。

例えば
 - [Lightning](https://lightning.vektor-inc.co.jp/)