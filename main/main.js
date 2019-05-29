module.exports = function main() {
    console.log("Debug Info");
    "use strict"
var first = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
var second =['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
var third = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];



function print(arr1,arr2) {
    let str = '';
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] == j){
                str += arr2[j]+' '
            }
        }
    }
    console.log(str);
}



var num = prompt("请输入要输入数字的个数");
var arr = new Array();

for (let i = 0; i < num ; i++) {
    arr[i] = prompt("请输入第"+(i+1)+"个数字:");
}

console.log("打印的数字如下:")
print(arr,first)
print(arr,second)
print(arr,third)
};