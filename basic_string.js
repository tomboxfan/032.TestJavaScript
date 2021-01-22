// Copied from https://blog.fundebug.com/2019/08/30/20-javascript-string-method/


// charAt(position)
// 返回字符串中position位置的字符，下标从 0 开始。
var str1 = 'jQuery FTW!!!';
console.log(str1.charAt(7)); // F



// charCodeAt(position)
// 返回字符串中 position 位置处字符的 unicode 值。
var str2="jquery4u"
console.log(str2.charCodeAt(1)) // 113



// concat()
// 用于连接两个或多个字符串，此方法不改变现有的字符串，返回拼接后的新的字符串。
var str3="Sam"
var final=str3.concat(" is a"," hopeless romantic.")
console.log(final) // Sam is a hopeless romantic.



// fromCharcode(c1,c2)
// 转换一组Unicode值转换为字符。
console.log(String.fromCharCode(97,98,99,120,121,122)) //output: abcxyz
console.log(String.fromCharCode(72,69,76,76,79)) //output: HELLO



// indexOf(substr, [start])
// 搜索并(如果找到)返回字符串中搜索到的字符或子字符串的索引。如果没有找到，则返回-1。
// Start是一个可选参数，指定字符串中开始搜索的位置，默认值为0。
var str4="Hi, my name is Sam!"
if (str4.indexOf("Sam")!=-1) {
  console.log("Sam is in there!")
}


// lastIndexOf(substr, [start])
// 返回指定文本在字符串中最后一次出现的索引, 如果未找到，则返回-1。
// Start 是一个可选参数，指定字符串中开始搜索的位置, 默认值为string.length-1。
var str5 = 'javascript rox';
console.log(str5.lastIndexOf('r')); //output: 11



// match(regexp)
// 根据正则表达式在字符串中搜索匹配项。如果没有找到匹配项，则返回一个信息数组或null。
var intRegex = /[0-9 -()+]+$/;

var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(myInt);  //output: 999

var str6 = '999 JS Coders';
var myInt = str6.match(intRegex)
console.log(myInt);


// replace(regexp/substr, replacetext)
// 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
var str7 = '999 JavaScript Coders';
console.log(str7.replace(/JavaScript/i, "jQuery")); //output: 999 jQuery Coders
console.log(str7.replace(new RegExp( "999", "gi" ), "The")); //output: The JavaScript Coders



// search(regexp)
// 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，如果找到，返回与 regexp 相匹配的子串的起始位置，否则返回 -1。
var intRegex = /[0-9 -()+]+$/;
var myNumber = '999';
var index = myNumber.search(intRegex);
console.log(index);



// slice(start, [end])
// 可提取字符串的某个部分，返回一个新的字符串。包括字符串从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
var str8="excellent"
console.log(str8.slice(0,4)) //returns "exce"
console.log(str8.slice(2,4)) //returns "ce"
// substr(start, [length])
// slice 的第二个参数是index, substr的第二个参数是长度
console.log(str8.substr(0,4)) //returns "exce"
console.log(str8.substr(2,4)) //returns "cell"
// substring 和 slice 一样
console.log(str8.substring(0,4)) //returns "exce"
console.log(str8.substring(2,4)) //returns "ce"



// split(delimiter, [limit])
// 用于把一个字符串分割成字符串数组，返回一个字符串数组返回的数组中的字串不包括 delimiter自身。 可选的“limit”是一个整数，允许各位指定要返回的最大数组的元素个数。
var str7Sub = str7.split(" ");
console.log(str7Sub);
for (var i = 0; i < str7Sub.length; i++) {
  console.log(str7Sub[i]);
}
var str7Sub = str7.split(" ", 2); // 只要2个
console.log(str7Sub);

// toUpperCase() 变大写
var str8 = 'abc';
var str8UpperCase = str8.toUpperCase();
console.log(str8UpperCase);


// parseInt(str) parse to int
var num_8 = "8"
console.log(parseInt(num_8) -2)
