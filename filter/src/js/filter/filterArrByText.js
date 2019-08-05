function filterArrByText (data, text) {
    return data.filter(function (ele, index) {
        return ele.name.indexOf(text) != -1
    })  
}