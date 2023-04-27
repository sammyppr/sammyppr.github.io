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
  - [バグってどうとるの？](#バグってどうとるの)
  - [好きに作れない人へ](#好きに作れない人へ)
    - [円が外側に広がっていく模様を作ってみよう](#円が外側に広がっていく模様を作ってみよう)
    - [中心から正方形を描いてみよう](#中心から正方形を描いてみよう)

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

## バグってどうとるの？
1. デベロッパーツールのコンソールを開くと、エラーがあれば、赤字で表示されるよ。行番号とか書いてあるので、その辺をチェックしてみよう。
2. 動いているかどうかを
```
console.log("hello");
```
とか追記して確認してみよう。プログラムが適切にそこを通過していれば、デベロッパーツールのコンソールに「hello」と表示されるよ。
表示されていなければ、そこは実行そもそもされていないことがわかるよ。
3. 機能拡張「Zenkaku」は入っているかな？全角スペースは思いもよらないバグの元。気をつけよう。

## 好きに作れない人へ
### 円が外側に広がっていく模様を作ってみよう
答え(これだけじゃないよ)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        let ctx;
        let cw;
        let ch;
        let circle_delta = 0;
        let loopNum = 10;

        function init(){
            let canvas = document.getElementById("mycanvas");
            if(!canvas || ! canvas.getContext){
                return false;
            }
            ctx = canvas.getContext("2d");
            cw = canvas.width;
            ch = canvas.height;
            loopNum = Math.floor(Math.min(cw/2,ch/2)/10);

            ctx.globalAlpha = 0.5;

            draw();

            setInterval("draw()",200);
        }

        function draw(){
            circle_delta++;
            if(circle_delta>9){
                circle_delta=0;
            }
            ctx.fillStyle = "rgba(255,255,255,0.3)";
            ctx.fillRect(0,0,cw,ch);

            for(let i=0;i<loopNum;i++){
                /* 色 */
                ctx.strokeStyle = "rgba("+getRandomColor()+","+getRandomColor()+","+getRandomColor()+","+getRandomAlpha()+")";
                ctx.lineWidth=1;


                //円----------------------
                ctx.beginPath();
                ctx.arc(cw/2,ch/2,i*10+circle_delta,0,360/180*Math.PI,true);
                ctx.stroke();
                                
            }
        }
        function getRandomNum(num){
            return Math.floor(Math.random()*num);
        }
        function getRandomColor(){
            return getRandomNum(255);
        }
        function getRandomAlpha(){
            return Math.random();
        }
    </script>
</head>
<body onload="init();">
    <h1>CanvasTest</h1>
    <canvas id="mycanvas" width="500" height="500"></canvas>
</body>
</html>
```

### 中心から正方形を描いてみよう

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        let ctx;
        let cw;
        let ch;
        let loopNum = 10;

        function init(){
            let canvas = document.getElementById("mycanvas");
            if(!canvas || ! canvas.getContext){
                return false;
            }
            ctx = canvas.getContext("2d");
            cw = canvas.width;
            ch = canvas.height;
            loopNum = Math.floor(Math.min(cw/2,ch/2)/10);

            ctx.globalAlpha = 0.5;

            draw();

            //setInterval("draw()",200);
        }

        function draw(){
            ctx.fillStyle = "rgba(255,255,255,0.3)";
            ctx.fillRect(0,0,cw,ch);



            for(let i=0;i<loopNum;i++){
                /* 色 */
                ctx.strokeStyle = "rgba("+getRandomColor()+","+getRandomColor()+","+getRandomColor()+","+getRandomAlpha()+")";
                ctx.lineWidth=1;
                
                ctx.strokeRect(cw/2 - 10*i,ch/2 - 10*i ,10*i*2,10*i*2);
            }
        }
        function getRandomNum(num){
            return Math.floor(Math.random()*num);
        }
        function getRandomColor(){
            return getRandomNum(255);
        }
        function getRandomAlpha(){
            return Math.random();
        }
    </script>
</head>
<body onload="init();">
    <h1>CanvasTest</h1>
    <canvas id="mycanvas" width="500" height="500"></canvas>
</body>
</html>
```