function search(){
    var k = document.getElementById('input');
    if(k != null){
        k.value
    }
    var item = document.querySelectorAll('div#wrapper>h1');
    for( var i = 0; i<item.length;i++){
        item[i].getElementsByTagName('h1')[0].innerText;
        if(h1.index0f(k) >= 0){
            item[i].style.outline = "2px solid red"
        }
    }
}