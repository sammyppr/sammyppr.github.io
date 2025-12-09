<!--
 これが本当のSPI3だ！2027年度版
 非言語問題問題洗い出し
 -->

<!--
Markdown PDFで書き出す時、数式対応させるにはtemplate.htmlの改造必要
https://qiita.com/satshout/items/1d0d179f7188454a115c
https://note.com/5mingame2/n/n7dc8597b6be4
-->

<!--
# SPI非言語1 方針
15分：事務連絡等
15分：SPI非言語説明
- 3つのポイント「公式の暗記」「出題パターンへの慣れ」「時間配分」
	- 「公式の暗記」速さ・割合・確率・順列組み合わせなど。パターンを理解する。苦手分野をなくす
	- 「出題パターンへの慣れ」1冊を完璧に3周する。1周目：全部やってみる、2周目：解法のスピード・正確性を上げる、3周目：苦手分野の克服。図に書き起こして情報を整理しよう。
	- 「時間配分」スピード感が大事！
- 算数・数学？
- 推論対策：思い込みしないこと。図で整理すること
- 図表の読み取り：
45分：解く(3分x15)

順番(2)
内訳(2)
発言の正誤
平均から個々
人口密度
当てはまるものを全て
どちらの条件3
条件を使って数値4

図表の読み取り
数値の表から
割合の表から
2つの表から(2)
得点範囲の表から
表と一致するグラフはどれか

15分：自己採点・まとめ

# SPI非言語2 方針




-->


<style>
.column-left{
  float: left;
  width: 47.5%;
  text-align: left;
}
.column-right{
  float: right;
  width: 47.5%;
  text-align: left;
}
.column-one{
  float: left;
  width: 100%;
  text-align: left;
}
.clear{
  clear: both;
  margin-bottom: 1em;
}
* {
 list-style: none
}

table {
    border-collapse: collapse;
    border: 1px solid #000000 !important;
}
table th {
    font-weight: bold;
    border: 1px solid #000000 !important;
}
table td {
    border: 1px solid #000000 !important;
}
</style>

# SPI非言語　Part2
- 集合
- 順列・組み合わせ
- 確率
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>


学籍番号 _____________________________________


氏名 ________________________________________

自己採点結果(正解した問題数/解いた問題数)
<div style="font-size: 32px">
　　　/　　　
</div>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
注) 1問当たり、3分弱が目安です。

<div style="page-break-before:always"></div>

# SPI非言語 特徴
### セミナーでの出題範囲
頻出問題を取り上げようと思います。
- 非言語1回目：推論 / 図表の読み取り
- 非言語2回目：集合 / 順列・組み合わせ / 確率

その他に関しては、自分でSPI本などでしっかり取り組みましょう。

## 非言語2回目 集合 / 順列・組み合わせ / 確率 対策
### 集合
- ベン図を書けば解ける！

ベン図が書ければ、あとは簡単な四則演算だけで答えが出る問題がほとんどです。ベン図が苦手な人はカルノー表で解いてみても良いでしょう。

#### 必要な数学の知識
##### ベン図
<img src="./集合E01.jpeg" width="50%">
<img src="./集合E02.jpeg" width="40%">

2つ以上の項目について当てはまる人数と当てはまらない人数を考えるとき、上のような視覚的な図(ベン図)を書くと、状況がスッキリ整理できます。

##### カルノー表

|              | チョコが好き | チョコが嫌い | 合計 | 
| ------------ | ------------ | ------------ | ---- | 
| ケーキが好き | 10           | 13           | 23   | 
| ケーキが嫌い | 6            | 9            | 15   | 
| 合計         | 16           | 22           | 38   | 

集合が3つ以上ある場合は、かなり煩雑になってしまうので、カルノー表ではなくベン図を使うことをおすすめします。

### 順列・組み合わせ
- 積の法則を活用する!
- いくつかの場合に分ける!
- 組み合わせの公式を活用する!
- 余事象を利用する!

「順番を考えて並べる数」が順列。「順番を考えないで取り出した数」が組み合わせです。

#### 必要な数学の知識
##### 組み合わせ
5個から3個を選ぶ組み合わせは

$ {}_5 \mathrm{C}_3 = \frac{5\times 4 \times 3}{3\times 2 \times 1} $

##### 順列
5個から3個を並べる順列は

$ {}_5 \mathrm{P}_3= 5 \times 4 \times 3 $

#### 階乗
全ての数を並べるときは、順列の公式の左と右の数が一致し、
例えば5個を並べるときには

$ {}_5 \mathrm{P}_5 = 5! = 5 \times 4\times 3\times 2\times 1 $
となります。

#### 組み合わせ条件が2つの時
- AかつB = Aが何通り x Bが何通り (積の法則)
- AまたはB = Aが何通り + Bが何通り (和の法則)

#### 余事象
ある事柄に関して、それが起こらない場合のことを余事象と言います。

Aである組み合わせの数 = 組み合わせの総数 - Aでない組み合わせの数

問題文に「少なくとも〜」「〜以上(以下)」の場合に余事象が有効です。






### 確率
- どのような場合があるかを具体的に考えてみる！

確率の問題で重要なことは、確率を求める前に、「どのような場合があるか」を具体的に考えることです。これをしっかりやれば、間違えることはなくなります。

#### 必要な数学の知識
「順列・組み合わせ」に対して、全体を総数ではなく1とすることが違うだけです。
それ以外は考え方は同じになります。

##### 確率の出し方
$ 確率 = \frac{求める場合の数}{すべての場合の数}$

##### 2つの確率を組み合わせるときは
- AかつB = Aの確率 x Bの確率 (確率の積の法則)
- AまたはB = Aの確率 + Bの確率 (確率の和の法則)

##### 余事象
Aが起きる確率 = 1 - (Aが起きない確率)





<div style="page-break-before:always"></div>
&nbsp;
<div style="page-break-before:always"></div>



### 集合
#### 集合01(1) 2つのうち1つの項目だけに当てはまる人数の問題
#### 集合01(2) 3つのうち1つの項目だけに当てはまる人数の問題
#### 集合01(3) 2つまたは3つの項目に当てはまる人数の問題

ある出版社が購読者100人を対象に、雑誌P,Q,Rの購読状況を調査した。

- 雑誌Pを購読している人 54人
- 雑誌Qを購読している人 48人
- 雑誌Rを購読している人 18人

なお、雑誌P,Q,Rのいずれも購読していない人は1人もいなかった。

(1) 雑誌Pを購読している人のうち、雑誌Qも購読している人は8人だった。雑誌Qは購読しているが、雑誌Pは購読していない人は何人いるか。

<div class="column-left">
A 34人<br>
B 36人<br>
C 38人<br>
D 40人<br>
E 42人<br>
</div>
<div class="column-right">
F 44人<br>
G 46人<br>
H 48人<br>
I 56人<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

(2)雑誌Pを購読している人のうち雑誌Qも購読している人は8人だった。雑誌Rだけを購読している人は何人いるか。

<div class="column-left">
A 2人<br>
B 3人<br>
C 4人<br>
D 5人<br>
E 6人<br>
</div>
<div class="column-right">
F 7人<br>
G 8人<br>
H 9人<br>
I 10人<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

(3)3つの雑誌を全て購読している人は5人だけだった。2つ以上の雑誌を購読している人は何人いるか。

<div class="column-left">
A 5人<br>
B 8人<br>
C 10人<br>
D 11人<br>
E 13人<br>
</div>
<div class="column-right">
F 15人<br>
G 17人<br>
H 18人<br>
I 20人<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

<div style="page-break-before:always"></div>
&nbsp;
<div style="page-break-before:always"></div>


#### 集合02 2つの項目に当てはまらない男女の合計人数の問題
夏の行楽について男女各60人を対象に、調査を行った。下表は調査項目と集計結果の一部である。女性で海と山の両方とも行くと答えた人が18人いた。

| 調査項目：回答         | 男性 | 女性 | 
| ---------------------- | ---- | ---- | 
| 海に行きますか：はい   | 41人 | 34人 | 
| 海に行きますか：いいえ | 9人  | 26人 | 
| 山に行きますか：はい   | 32人 | 27人 | 
| 山に行きますか：いいえ | 28人 | 33人 | 

(1)男性で、海には行くが山にはいかないと答えた人が17人いた。海と山の両方ともいかないと答えた人は、男女合わせて何人か。

<div class="column-left">
A 6人<br>
B 9人<br>
C 11人<br>
D 17人<br>
E 20人<br>
</div>
<div class="column-right">
F 26人<br>
G 28人<br>
H 30人<br>
I 32人<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

<div style="page-break-before:always"></div>

#### 集合03 全体の人数の問題
空欄に当てはまる数値を求めなさい。

[問い] あるイベントの来場者のうち、会場内で買い物をした人は56%, 食事をした人は36%で、どちらもしなかった人は24%だった。両方ともした人が20人だった時、イベントの来場者は[　　　]人である。

<div style="page-break-before:always"></div>

#### 集合04 少なくとも何人が当てはまるかの問題
空欄に当てはまる数値を求めなさい。

[問い] ある日の美容室の来店客54人の女性と男性の比率は13:5で、予約して来店した客は合わせて31人だった。予約なしで来店した女性は少なくとも[　　　]人いた。

<div style="page-break-before:always"></div>

<!-- 問題種 区切り -->

### 順列組み合わせ
#### 順列組み合わせ02(1) 「積の法則」の問題
#### 順列組み合わせ02(2)「積の法則」と「和の法則」の問題
1,2,4,7の4つの数字を組み合わせて3けたの数を作る。ただし、同じ数字を何回用いても良いものとする。

(1) いずれの位にも2が入っていない数は何通り作れるか。

<div class="column-left">
A 6通り<br>
B 9通り<br>
C 12通り<br>
D 24通り<br>
E 27通り<br>
</div>
<div class="column-right">
F 36通り<br>
G 48通り<br>
H 54通り<br>
I 64通り<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

(2)440より大きい数は何通り作れるか

<div class="column-left">
A 2通り<br>
B 8通り<br>
C 12通り<br>
D 16通り<br>
E 24通り<br>
</div>
<div class="column-right">
F 32通り<br>
G 36通り<br>
H 48通り<br>
I 64通り<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

<div style="page-break-before:always"></div>

#### 順列組み合わせ03(1) 「組み合わせ」と「積の法則」の問題
#### 順列組み合わせ03(2) 「余事象」の問題
X組の生徒とY組の生徒が5人ずつ、合わせて10人いる。この中から掃除当番を4人選びたい

(1)X組の生徒が3人、Y組の生徒が1人となるように選ぶとすると、掃除当番の選び方は何通りあるか。

<div class="column-left">
A 15通り<br>
B 30通り<br>
C 40通り<br>
D 45通り<br>
E 50通り<br>
</div>
<div class="column-right">
F 60通り<br>
G 75通り<br>
H 80通り<br>
I 90通り<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

(2) X組の生徒が少なくとも1人含まれるように選ぶとすると、掃除当番の選び方は何通りあるか。

<div class="column-left">
A 60通り<br>
B 95通り<br>
C 120通り<br>
D 150通り<br>
E 175通り<br>
</div>
<div class="column-right">
F 180通り<br>
G 205通り<br>
H 210通り<br>
I 240通り<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

<div style="page-break-before:always"></div>

#### 順列組み合わせ04「順列」の問題
あるクラスでJ,K,L,M,Nの5人が席替えをすることにした。

TODO: 図

(1) 机の配置が図アの場合、[1]の席にJが座り、[2]はあけておくことにすると、残り4人の[3]から[6]の席の決め方は何通りあるか。

<div class="column-left">
A 4通り<br>
B 10通り<br>
C 12通り<br>
D 15通り<br>
E 18通り<br>
</div>
<div class="column-right">
F 24通り<br>
G 28通り<br>
H 48通り<br>
I 60通り<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

(2)机の配置が図イの場合、JとKが必ず向かい合って座るようにすると、5人の席の決め方は何通りあるか。

<div class="column-left">
A 18通り<br>
B 24通り<br>
C 36通り<br>
D 48通り<br>
E 60通り<br>
</div>
<div class="column-right">
F 72通り<br>
G 120通り<br>
H 144通り<br>
I 360通り<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

<div style="page-break-before:always"></div>

#### 順列組み合わせ05「最後に当てはまらない場合を引く」問題
空欄に当てはまる数値を求めなさい。

[問い] 10gのおもりが2つ、50gのおもりが1つ、100gのおもりが2つある。天びんの片側だけにおもりをのせる時、[　　　]通りの重さを図ることができる。

<div style="page-break-before:always"></div>

#### 順列組み合わせ06「同じものを含む順列」の問題
空欄に当てはまる数値を求めなさい。

[問い] ある月に、P社を3回、Q社とR社を1回ずつ訪問した。訪問した順番は[　　　]通り考えられる。

<div style="page-break-before:always"></div>

<!-- 問題種 区切り -->

### 確率
#### 確率01(1) 「積の法則」の問題
#### 確率01(2) 「積の法則」と「和の法則」の問題 パターン1
P,Qを含む5人が買い物に出かける。自転車が2台あるので、自転車に乗る2人はくじで決めることにした。くじは5本あり、一度引いたくじはもとに戻さないものとする。くじは1番目にP,2番目にQが引くことにした。

(1) P,Qがともに自転車に乗れる確率はどれだけか。

<div class="column-left">
A $\frac{2}{25}$<br>
B $\frac{1}{10}$<br>
C $\frac{3}{25}$<br>
D $\frac{3}{20}$<br>
E $\frac{1}{5}$<br>
</div>
<div class="column-right">
F $\frac{6}{25}$<br>
G $\frac{9}{25}$<br>
H $\frac{2}{5}$<br>
I $\frac{3}{5}$<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

(2) P,Qのうち、どちらか1人だけが自転車に乗れる確率はどれだけか。

<div class="column-left">
A $\frac{2}{25}$<br>
B $\frac{1}{10}$<br>
C $\frac{3}{25}$<br>
D $\frac{3}{20}$<br>
E $\frac{1}{5}$<br>
</div>
<div class="column-right">
F $\frac{6}{25}$<br>
G $\frac{9}{25}$<br>
H $\frac{2}{5}$<br>
I $\frac{3}{5}$<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>


<div style="page-break-before:always"></div>

#### 確率02(1) 「積の法則」と「和の法則」の問題 パターン2
#### 確率02(1) 「余事象」の問題
ハートの1から13まで、合計13枚のトランプがある。ここから1枚抜いた時、4の倍数が出る確率は3/13である。

(1) まず1枚抜いて確認した後、そのカードを元に戻してからよく切り、もう一度1枚抜く。この2枚のうち、1枚だけ4の倍数である確率はいくらか。

<div class="column-left">
A $\frac{2}{13}$<br>
B $\frac{5}{26}$<br>
C $\frac{3}{13}$<br>
D $\frac{60}{169}$<br>
E $\frac{5}{13}$<br>
</div>
<div class="column-right">
F $\frac{30}{169}$<br>
G $\frac{109}{169}$<br>
H $\frac{21}{26}$<br>
I $\frac{139}{169}$<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

(2)まず1枚抜いて確認した後、そのカードを元に戻してからよく切り、もう一度1枚抜く。この2枚のうち、少なくとも1枚は4の倍数以外である確率はいくらか。

<div class="column-left">
A $\frac{9}{169}$<br>
B $\frac{1}{13}$<br>
C $\frac{15}{169}$<br>
D $\frac{30}{169}$<br>
E $\frac{3}{13}$<br>
</div>
<div class="column-right">
F $\frac{60}{169}$<br>
G $\frac{7}{13}$<br>
H $\frac{154}{169}$<br>
I $\frac{160}{169}$<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

<div style="page-break-before:always"></div>

#### 確率03 確率が小数で提示される問題
2つの講演会P,Qの参加者の抽選をした。Pに当選する確率は0.70、Qに当選する確率は0.40であるという。

(1) P,Qの両方に応募した人が、PかQかの<u>いずれか一方だけ</u>に当選する確率はいくらか(必要なときは、最後に小数点以下第3位を四捨五入すること)。

<div class="column-left">
A 0.12<br>
B 0.30<br>
C 0.42<br>
D 0.46<br>
E 0.50<br>
</div>
<div class="column-right">
F 0.54<br>
G 0.72<br>
H 0.82<br>
I 0.90<br>
J AからIのいずれでもない<br>
</div>
<div class="clear"></div>

<div style="page-break-before:always"></div>

#### 確率04「求める場合の数÷全ての場合の数」の問題 パターン1
空欄に当てはまる数値を求めなさい。

[問い] 3本のあたりくじが入った8本のくじがある。5人が順にくじをひき、一度引いたくじは戻さないものとする。5人とも当たりくじを引かない確率は[　　　]/[　　　]である。約分した分数で答えなさい。

<div style="page-break-before:always"></div>

#### 確率05「求める場合の数÷全ての場合の数」の問題 パターン2
空欄に当てはまる数値を求めなさい。

[問い] 10円玉が3枚、5円玉が3枚ある。この6枚の硬貨を同時に投げ、表が出たものの金額を足す。金額の合計が15円になる確率は[　　　]/[　　　]である。約分した分数で答えなさい。

<div style="page-break-before:always"></div>

