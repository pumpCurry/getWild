# getWild
getWildする



## `getWildAndTough();` について
`getWildAndTough();` では、 一人の時の例外発生時は、 解けなかった `i` (=puzzle)を 得られるようにしました。

```javascript:getWild.js
function getWildAndTough(){
    var Do;
    try {
        Do = getWild() && getTough();
    } catch (OnlyOnePerson  i) {
        return i;  // [ = puzzle. ]
    }
    return void;
}
```

## `getChanceAndLuck();` について
`getChanceAndLuck();` では、一人の時の例外が発生時でも、そうでなくても、傷ついた夢を取得して戻すようにしました。

```javascript:getWild.js
function getChanceAndLuck(){
    var Do;
    try {
        Do = getChance() && getLuck();
    } catch (OnlyOnePerson  e) {
        return getDream("Wounded");
    }
    return getDream("Wounded");
}
```


## 重要
なお、一人の時実行すると、本ソースコードにおける重要な呼び出しである、
`Do = getWild() && getTough();` と、`Do = getChance() && getLuck();` において、一人の時例外が発生するため
残念ながら結果が出ません

```javascript:getWild.js
    var Do;
    Do = getWild() && getTough();  // <= OnlyOnePerson(一人の時例外)のExceptionが発生する
    Do = getChance() && getLuck(); // <= OnlyOnePerson(一人の時例外)のExceptionが発生する
```
