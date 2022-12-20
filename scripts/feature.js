const confirmBtn =document.getElementsByClassName("btns");

for(const bts of confirmBtn){
    bts.addEventListener('click', function(){
        bts.style.display = 'none';
        
    })
}