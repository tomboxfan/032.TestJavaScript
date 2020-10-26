// Copied from <2013 - A Smarter Way to Learn JavaScript>



//========================================================
// if
//========================================================

var x = "Vatican"

// === 即比较类型而且比较值
if (x === "Vatican") {
  console.log("value equals and type equals!");
}

// == 仅仅比较值，忽略类型, 建议永远使用 ===
// 所以这一行等于 ToNumber("0") === 0
if ("0" == 0) {
  console.log("value equals!");
}
