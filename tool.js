/**
 *  封装经常使用的元素
 *  用对象封装更加不容易出错
 * 
 * tool.getZeroize(num)   补零
 * tool.getDate()  获取当前时间  返回值 2019-08-20 19:39:43
 * tool.getRandom(n,m)  返回(n,m)之间的随机整数
 * tool.getRgbColor()   返回RGB颜色
 * tool.getRandomColor()   返回十六进制的随机颜色
 * tool.getId()   根据时间戳和最大随机数获得一个字符串
 * tool.getLocalDataArray(key)   从localStorage里面根据指定的键(key)获取一个数组
 * tool.saveLocalDataArray(key,obj)   存储一个数据在本地存储中
 * tool.appendDataIntoArray(key,obj)  向localStorage里面指定键(key)的数组数据追加一个数据对象（data）参数
 * tool.deleteLocalDataById(key,id)  根据对应的id从localStorage中指定键(key)的数组中删除一条数据参数
 * tool.modifyLocalDataById(key,id,data)  根据id修改localStorage里面的指定键(key)的数组数据参数
 * 
 */
var tool = {};

/**
 * 获取当前时间  返回值 2019-08-20 19:39:43
 */
/**
 * 补零
 */
tool.getZeroize = function (num) {
    return num < 10 ? "0" + num : num;
}
tool.getDate = function () {
    let date = new Date();
    let year = date.getFullYear();
    let month = tool.getZeroize(date.getMonth()+1);
    let day = tool.getZeroize(date.getDate());
    let hour = tool.getZeroize(date.getHours());
    let minute = tool.getZeroize(date.getMinutes());
    let second = tool.getZeroize(date.getSeconds());
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

/**
 * 根据时间戳和最大随机数获得一个字符串
*/
tool.getId = function () {
    let date = new Date();
    let id = date.getTime();   // 获取1970年1月1日到目前为止的毫秒数 
    return id = id + "" + this.getRandom(10000, 99999);
}

/**
 * 从localStorage里面根据指定的键(key)获取一个数组
 * key 为本地数据的键名
 */
tool.getLocalDataArray = function (key) {
    let str = localStorage.getItem(key);//获取本地数据中的字符串
    let arr = JSON.parse(str);// 把字符串转换成数组
    return arr || [];
}

/**
 * 存储一个数据在本地存储中
 */
tool.saveLocalDataArray = function (key,obj) {
    let arr = JSON.stringify(obj);
    localStorage.setItem(key, arr);
}

/**
 * 向localStorage里面指定键(key)的数组数据追加一个数据对象（data）参数
 */
tool.appendDataIntoArray = function (key, obj) {
    let oldArr = tool.getLocalDataArray(key);
    oldArr.push(obj);
    arr = JSON.stringify(oldArr);
    localStorage.setItem(key, arr);
}

/**
 * 根据对应的id从localStorage中指定键(key)的数组中删除一条数据参数
 */
tool.deleteLocalDataById = function (key, id) {
    let oldArr = tool.getLocalDataArray(key);
    oldArr.forEach((e, i) => {
        if (e.id === id) {
            oldArr.splice(i, 1);
            return;
        }
    })
    tool.saveLocalDataArray(key,oldArr);
}

/**
 * 根据id修改localStorage里面的指定键(key)的数组数据参数
 */
tool.modifyLocalDataById = function (key, id,data) {
    let oldArr = tool.getLocalDataArray(key);
    let flag = false;
    oldArr.forEach((e, i) => {
        if (e.id === id) {
            oldArr[i] = data;
            flag = true;
            return;
        }
    })
    tool.saveLocalDataArray(key, oldArr);
    return flag;
}