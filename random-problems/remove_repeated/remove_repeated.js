exports.removeRepeated = function (arr) {
    var arrRes = []
    for (var i = 0; i <= arr.length - 1; i++) {
        if(arrRes.indexOf(arr[i]) == -1){
            arrRes.push(arr[i]);
        }
    };
    return arrRes;
}