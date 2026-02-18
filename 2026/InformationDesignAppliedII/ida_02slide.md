---
marp: true
theme: default
size: 16:9
paginate: true
headingDivider: 2
header: 情報デザイン応用演習II 2.ECMAScript入門
footer: ""
---

# 情報デザイン応用演習II 2.ECMAScript入門<!-- omit in toc -->

# 目次<!-- omit in toc -->

1. [初めに](#初めに)
2. [ECMAScript入門](#ecmascript入門)
   1. [バージョンによってできることが変わったりします](#バージョンによってできることが変わったりします)
   2. [JavaScript FirstStep](#javascript-firststep)



# 初めに

---
Visual Studio Code入ってますね。

- Japanese Language Pack for Visual Studio Code
- Live Server
- zenkaku

機能拡張入れておきましょう。

## 作業フォルダ<!-- omit in toc -->

前回、「IDA_root」というフォルダを作成してもらったと思います。
今日は、その中に「IDA_02」を作りましょう。

## 最低限のHTML<!-- omit in toc -->

「!」を押してリターンキーを押しましょう。
今後はこれを使いましょう。

# ECMAScript入門
JavaScript の標準規格である ECMAScript について学修する

## JavaScript? ECMAScript?<!-- omit in toc -->

総称すると、JavaScript なんですけれども、バージョンが色々あります。 JavaScript だと、バージョンがよくわからないので、ES2025 などと略されることがあるだけです。
Wiki にまとまってるので、確認してみましょう。

[ECMAScript Wiki](https://ja.wikipedia.org/wiki/ECMAScript)

## バージョンによってできることが変わったりします

ブラウザが古いと新しいJavaScriptが通らなかったりします。

気をつけましょう。

## Deprecated(非推奨)
バージョンが上がるに従って、
> deprecated

とされる関数があったりします。将来廃止予定のものです。

今回使うプログラムの中に
> document.write()

というものがありますが、これも基本的に非推奨となっています。

## document.write()の代わり
色々試してみたのですが、次のようなものを書かないとダメなので、今回はそのまま利用とします。

```
        function docwrite(text,prepend=false){
            if(document.body){//DOM生成されているかどうか
                document.currentScript.insertAdjacentHTML('beforebegin',text);
            } else {
                addEventListener("DOMContentLoaded",(event)=>{
                    if(!prepend){
                        document.body.insertAdjacentHTML('beforeend',text);//bodyの最後
                    } else {
                        document.body.insertAdjacentHTML('beforebegin',text);//bodyの先頭
                    }
                })
            }
        }

```

## JavaScript FirstStep

それでは入門編やってみましょう。

https://sammyppr.github.io/
から、PDFファイル見れます。