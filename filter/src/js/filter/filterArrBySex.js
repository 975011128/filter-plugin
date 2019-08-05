function filterArrBySex (data, text) {
    if(text == 'a') return data;
    return data.filter(function (ele) {
        return ele.sex == text;
    });
}