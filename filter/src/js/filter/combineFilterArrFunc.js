function combineFilterArrFunc (obj) {
    return function (data) {
        var arr = data;
        for (var prop in obj) {
           arr = obj[prop](arr, Store.getState(prop) );
        }
        return arr;
    }
}
var lastFilterFunc = combineFilterArrFunc({text: filterArrByText, sex: filterArrBySex});