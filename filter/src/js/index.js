// server data
var personArr = [
    {name: '王港', src: './src/img/3.png', des: '颈椎不好', sex: 'm'}, 
    {name: '刘莹', src: './src/img/5.png',des: '我是谁', sex: 'f'}, 
    {name: '王秀莹', src: './src/img/4.png', des: '我很好看', sex: 'f'}, 
    {name: '刘金雷', src: './src/img/1.png', des: '你没有见过陌生的脸', sex: 'm'}, 
    {name: '刘飞翔', src: './src/img/2.png', des: '瓜皮刘', sex: 'm'}
];









// 绑定事件
var oSpanArr = Array.prototype.slice.call(document.getElementsByTagName('span'), 0);
var lastSpan = oSpanArr[oSpanArr.length - 1];
oSpanArr.forEach(function (ele, index) {
    ele.onclick = function () {
        this.className = 'active';
        lastSpan.className = '';
        lastSpan = this;
        Store.dispatch({type: 'sex', value: this.getAttribute('sex')});
    }
});


oInput.oninput = function () {
   Store.dispatch({type: 'text', value: this.value})  
}



// 渲染page
function renderPage (data) {
    // data == personArr;
    var allStr = '';
    data.forEach(function (ele, index) {
        // {name, src, des, sex}
        // ele -> 
        allStr = allStr + '<li><img src="' + ele.src + '"></img><p class="name">' + ele.name + '</p><p class="des">' + ele.des + '</p></li>';
    });
    oUl.innerHTML = allStr;
}

renderPage(personArr);


// 

Store.subscribe(function () {
    renderPage( lastFilterFunc(personArr) );
});

