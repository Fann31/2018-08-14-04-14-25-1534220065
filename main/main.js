module.exports = function main(x) {
    console.log("Debug Info");
"use strict"
    var first = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
    var second =['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
    var third = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
    var arr = [];

    function print(arr1,arr2) {
        let str = "";
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if(arr1[i] == j){
                    str += arr2[j]+' '
                }
            }
        }
        return str;
    }

    for(let i = 0;i < x.length;i++){
        arr.push(x.charAt(i));
    }

    var result = print(arr,first) +'\n'+' '
    result += print(arr,second) +'\n'+' '
    result += print(arr,third)
    return result;
};