/**
 *  封装经常使用的元素
 *  用对象封装更加不容易出错
 * 
 * tool.getDate()  获取当前时间  返回值 2019-08-20 19:39:43
 * tool.getRandom()  返回(n,m)之间的随机整数
 * tool.getRgbColor()   返回RGB颜色
 * tool.getRandomColor()   返回十六进制的随机颜色
 * 
 * 
 * 
 */
var tool = {};
/**
 * 获取当前时间  返回值 2019-08-20 19:39:43
 */
tool.getDate = function () {
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}
/**
 * 获取随机数   (n,m)之间的随机整数
 */
tool.getRandom = function (n,m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}
/**
 * 获取随机rgb颜色
 */
tool.getRgbColor = function () {
    let r = tool.getRandom(0, 255);
    let g = tool.getRandom(0, 255);
    let b = tool.getRandom(0, 255);
    return "rgb(" + r + "," + g + "," + b +")";
}
/**
 * 获取随机十六进制的颜色  0-9 a-f   #123456
 */
// 获取10-15之间对应的英文字母
tool.getSixIndex = function (num) {
    switch (num) {
        case 10:
            num = "a";
            break;
        case 11:
            num = "b";
            break;
        case 12:
            num = "c";
            break;
        case 13:
            num = "d";
            break;
        case 14:
            num = "e";
            break;
        case 15:
            num = "f";
            break;
    }
    return num;  
}
tool.getRandomColor = function () {
    let one = tool.getSixIndex(tool.getRandom(0, 15));
    let two = tool.getSixIndex(tool.getRandom(0, 15));
    let three = tool.getSixIndex(tool.getRandom(0, 15));
    let four = tool.getSixIndex(tool.getRandom(0, 15));
    let five = tool.getSixIndex(tool.getRandom(0, 15));
    let six = tool.getSixIndex(tool.getRandom(0, 15));
    let sixteen = String(one) + String(two) + String(three) + String(four) + String(five) + String(six);
    return "#" + sixteen;
}