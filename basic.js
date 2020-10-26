// Copied from <2013 - A Smarter Way to Learn JavaScript>





//========================================================
//输出
//========================================================
console.log("Thanks for your input!");

// 你不在browser里面，window.alert 和 document.write 用不了
// window.alert("here!");
// document.write("here");



//========================================================
//变量定义
//========================================================

// String -------------------
var name = "Mark";

// 先声明，再定义
var nationality; // 这个时候, 变量还是undefined
nationality = "U.S.";


// int ---------------------
var weight = 150;
console.log(weight + 25); // 175
console.log(name + 25);   // Mark25
