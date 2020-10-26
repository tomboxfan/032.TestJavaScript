// 2020-10-26 SC Gyanendra Prasad Giri 给我了我一个JIRA
// Requirment: 由直盘货币对计算出交叉盘货币对
// For example: GBPUSD 1.3031 - 1 GBP = 1.3031 USD
//              EURUSD 1.1840 - 1 EUR = 1.1840 EUR
//              GBPEUR rate = 1.3031 / 1.1840
// 那么这里client需要传入5个参数 GBPUSD 1.3031 EURUSD 1.1840 GBPEUR
// 你的function需要传回来GBPEUR的Rate

// Logic:
// 这里的代码逻辑是: 计算出 1 GBP = ? USD, 1 EUR = ? USD
// 然后根据这两个rate, 计算出结果




function getFxRate(straightPair1, straightRate1, straightPair2, straightRate2, crossPair) {
  var ccy1 = straightPair1.toUpperCase().slice(0,3)
  var ccy2 = straightPair1.toUpperCase().slice(3,6)
  var ccy3 = straightPair2.toUpperCase().slice(0,3)
  var ccy4 = straightPair2.toUpperCase().slice(3,6)

  var rate_a;
  var rate_b;
  var ccy_a;
  var ccy_b;

  if (ccy1 === "USD" && ccy2 != "USD") {
    rate_a = 1 / straightRate1;
    ccy_a = ccy2;
  }
  else if (ccy1 != "USD" && ccy2 === "USD") {
    rate_a = straightRate1;
    ccy_a = ccy1;
  }
  else {
    throw "There is no USD currency in " + straightPair1;
  }

  if (ccy3 === "USD" && ccy4 != "USD") {
    rate_b = 1 / straightRate2;
    ccy_b = ccy4;
  }
  else if (ccy3 != "USD" && ccy4 === "USD") {
    rate_b = straightRate2;
    ccy_b = ccy3;
  }
  else {
    throw "There is no USD currency in " + straightPair2;
  }

  var ccy_final_a = crossPair.toUpperCase().slice(0,3);
  var ccy_final_b = crossPair.toUpperCase().slice(3,6);

  if (ccy_a === ccy_final_a && ccy_b === ccy_final_b) {
    return rate_a / rate_b;
  }

  else if (ccy_a === ccy_final_b && ccy_b === ccy_final_a) {
    return rate_b / rate_a;
  }

  var errMsg = "Ccy pair not match!" + " We have " + ccy_a + " and " +  ccy_b + ". But you ask: " + crossPair;
  throw errMsg;
}

console.log(getFxRate("GBPUSD", 1.3031, "EURUSD", 1.1840, "GBPEUR"));
console.log(getFxRate("GBPUSD", 1.3031, "EURUSD", 1.1840, "EURGBP"));
