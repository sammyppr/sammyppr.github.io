# React入門

## JavaScriptの3大フレームワーク
- Angular
- React
- Vue.js

## WebComponents

HTMLタグを自分で定義できる

再利用性の向上(拡張性)
(スタイルの)カプセル化


https://qiita.com/hedrall/items/f2ebb5338f79007083a3
```HTML
<my-title></my-title>
<script>
  class MyTitle extends HTMLElement {
    constructor() { super(); }

    connectedCallback() {
      const title = document.createElement('h1');
      title.textContent = 'タイトル';
      this.appendChild(title);
    }
  }
  customElements.define('my-title', MyTitle);
</script>
```

## React
React（リアクト）とは、Meta（旧Facebook）社などが開発・保守している、Webサイトやアプリのユーザーインターフェース（UI）を構築するためのJavaScriptライブラリ

開発元 Meta（旧Facebook）
特徴: UIパーツを構築するためのJavaScriptライブラリです。仮想DOMによる高速な描画やコンポーネント指向が特徴で、最もエコシステム（関連ツール）が発展しています。 

## WebComponentとの主な違いと関係性
- React：宣言的なDOMやデータの同期を行い、アプリケーション全体の状態管理やUI構築を得意とするライブラリです。
- Web Components：ブラウザ標準技術（カスタム要素、Shadow DOM、HTMLテンプレート）を使い、フレームワークに依存しない再利用可能なUI部品を作る仕様です。

## 環境構築
https://qiita.com/r-terao/items/fa150ec297e90d4d94d4
https://zenn.dev/rasshii/books/learning-react-2026
https://ja.react.dev/learn
https://www.tohoho-web.com/ex/react.html


### Vite
次世代の高速なフロントエンドビルドツールです。

「フロントエンドの開発を体験よく行うためのツール」