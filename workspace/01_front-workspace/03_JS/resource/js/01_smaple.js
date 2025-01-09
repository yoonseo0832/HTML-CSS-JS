function test(){
    window.alert('안녕하세요');
}

window.onload = function(){
    let btn2 = document.getElementById('htn2');
    btn2.onClick = function(){
        console.log("콘솔창이야");
    }
};