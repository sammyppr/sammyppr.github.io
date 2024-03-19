# React

[ゼミTOP に戻る](../../index.md)

## 更新履歴
- ver0.1 2024/3/19

## はじめに
全然触ってないので詳しくないけど、必要になってきたので...

コースで扱っている内容より、難易度高いです。

ターミナルなどの操作が全然わからない人は、全くわからないと思います。
- [https://tech-camp.in/note/technology/18730/](https://tech-camp.in/note/technology/18730/)

ツールが色々あって、どれ使って良いか悩むと思います。ヒントになれば...
情報が古いの拾ってたらごめんなさい。

---
## node.js
元々JavaScriptはWebブラウザ上で実行されることを想定していましたが、
それを、コンピュータ上でも利用できるようにしたJavaScript実行環境がnode.jsです。
- [node.js](https://nodejs.org/en)

ダウンロードしてインストールでも良いですが、次のnodebrew/voltaを使ってもいいかもしれません。

## nodebrew(node.js バージョン管理)...古いか？
開発していると、node.jsのバージョンを管理したくなります。
そのため、それを管理するにはnodebrewが便利です。
- [nodebrewによるNode.jsのインストール手順まとめ](https://qiita.com/kiharito/items/4785d4d54c967b8ddc9a)

インストールするときにhomebrewというののインストールを求められます。
これは、macにアプリケーションをインストールするためのパッケージマネージャと呼ばれるもので、
- [homebrew](https://brew.sh/)

ここから、インストールのコマンドラインをコピーして、ターミナルで貼り付けるとインストールされます。

## volta(node.js バージョン管理)
- [Node.jsのバージョン管理にVoltaを推したい](https://zenn.dev/taichifukumoto/articles/how-to-use-volta#volta-%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B)

- [google trend volta vs nodebrew](https://trends.google.co.jp/trends/explore?geo=JP&q=volta,nodebrew&hl=ja)

- [【Tips】MacにNode.js(npm)を簡単にインストールする方法Volta編](https://gift-by-gifted.com/node-volta/)


## npm(Node Package Manager)
node.jsで利用されるパッケージマネージャで、簡単に追加機能をインストールできます。

---
## フロントエンドJSフレームワーク
UIコンポーネントを作成するのに利用されます。
単純にいうと、Web上で表示するパーツをコンポーネントという単位で管理できるという事です。

フロントエンドで利用されるJSフレームワークとして
- React
- Vue
- Angular
- jQuery

などありますが、現在シェア率の高いのはReact,Vueとなりますが、Reactの方が圧倒的です。
- [npm trendsreact vs vue](https://npmtrends.com/react-vs-vue)

Vueの方が初心者向け、という人もいます。
- [【周りに流されるな！】人気なReactよりも初心者にVueがおすすめな理由 4選](https://qiita.com/kouphasi/items/bad24618a84d753da6cd)

jQueryは一世風靡しましたが、古くなっちゃったという感じがしています。

## Next.js
ReactベースのJavaScriptフレームワークであり、Reactアプリケーションの開発を簡素化することが可能です。
主な特徴に次のものがあります。

- サーバサイドレンダリング（SSR）
- 静的サイト作成（SSG）
- AFIルーティング
- ファイルベースのルーティング
- ホットリロード
- TypeScriptへのサポート

## Vite
次世代のフロントエンド開発ツールと言われています。
Next.jsではwebpackというのを利用していますが、それより高機能のようです。

## TypeScript
TypeScriptを使うとJavaScriptをベースにしつつ、型安全性を提供しより信頼性の高いコードの作成を可能にします。
- [TypeScript（タイプスクリプト）とは？JavaScriptとの違いやできること、メリットなど初心者にわかりやすく解説！](https://jitera.com/ja/insights/4795)

## create-react-app???
Reactで開発するときに
> npx create-react-app

としていましたが、
- [create-react-appが消えてしまったことの調査](https://zenn.dev/laravelstudy/articles/bad11d64eeac42)

によれば、非推奨になりそう、とのことです。
記事を調べるときに気をつけましょう。

## Tailwind CSS
Reactとはこれがよく使われます。
Tailwind CSSは、ユーティリティファーストのCSS（カスケーディングスタイルシート）フレームワークです。

通常のCSSではクラス名を設定し、そこにCSSを書いていくのですが、Reactではコンポーネント単位で開発が進められるため、別のCSSファイルを利用せず、TailwindCSSの方式で記載することが多いようです。

## どう使えばいいの？
現時点では
- volta
- node.js

をインストール後に
- React + next.js
- React + vite

で利用する流れになっているようです。

## React入門
- [【2024年】React環境構築を1から丁寧に初めてみよう【viteを利用】](https://www.youtube.com/watch?v=2E6iPVsGfPI)
はじめはいらないでしょうが、vitest(テスト環境),eslint(静的検証ツール)等いろんな環境構築をしています。

- [新・日本一わかりやすいReact入門【基礎編】](https://www.youtube.com/watch?v=XKSYF2aZnkQ&list=PLX8Rsrpnn3IWPoM7-1YPDksRRkamRY25k)
create-react-app使ってるけど...






