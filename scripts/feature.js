const confirmBtn =document.querySelectorAll("#cnfm");
const delBtn = document.querySelectorAll("#delete-btn");
const addBtn = document.querySelectorAll("#add-btn");
const removeBtn = document.querySelectorAll("#remove-btn");
const cancel = document.querySelectorAll('#cancel');
const frnd_request = document.getElementById('friend-request');
const frnd_suggestion = document.getElementById('frnd-suggestion');
const allfrnd = document.getElementById('all-frnd')
// =================for accept request=======================  
for(const bts of confirmBtn){
    bts.addEventListener('click', function(){
        bts.parentNode.style.display = 'none';
        bts.parentElement.nextElementSibling.style.display = 'block'
    })
}

// =================for delete request ==========================================================


for(const bts of delBtn){
    bts.addEventListener('click', function(){
        bts.parentNode.style.display = 'none';
        bts.parentElement.nextElementSibling.nextElementSibling.style.display = 'block'
    })
}


// =========================for sending request======================================================
for(const bts of addBtn){
    bts.addEventListener('click', function(){
        bts.parentElement.style.display = 'none';
        bts.parentElement.previousElementSibling.style.display = 'none';
        bts.parentElement.nextElementSibling.style.display = 'block';
        bts.parentElement.nextElementSibling.nextElementSibling.style.display = 'block';
    })
}


// =============================for removing from suggestion ================================================
for(const bts of removeBtn){
    bts.addEventListener('click', function(){
        bts.parentElement.parentElement.style.display = 'none'
    })
}


// =====================for canceling send request===========================================================
for(const bts of cancel){
    bts.addEventListener('click', function(){
        bts.style.display = 'none';
        bts.previousElementSibling.previousElementSibling.previousElementSibling.style.display = 'flex';
        bts.previousElementSibling.previousElementSibling.style.display = 'flex';
        bts.previousElementSibling.style.display = 'none'
    })
}


// =========================friend request button ===========================================

frnd_request.addEventListener('click', function(){
    const frnd = document.getElementById('sec2');
    const frndHead = document.getElementById('cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1')
    frnd1.style.display = 'flex';
    frndHead1.style.display = 'flex';
    frndHead.style.display = 'none';
    frnd.style.display = 'none';
});

// ==========================friend Suggestion button===========================================


frnd_suggestion.addEventListener('click', function(){
    const frnd = document.querySelector('#sec2');
    const frndHead = document.querySelector('#cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1')
    const hr = document.getElementById('hr')
    hr.style.display = 'none';
    frnd1.style.display = 'none';
    frndHead1.style.display = 'none';
    frndHead.style.display = 'flex';
    frnd.style.display = 'flex';
});



// =======================all friend button ==========================================
allfrnd.addEventListener('click', function(){
    const frnd = document.querySelector('#sec2');
    const frndHead = document.querySelector('#cont2');
    const frnd1 = document.getElementById('sec1');
    const frndHead1 = document.getElementById('cont1');
    const hr = document.getElementById('hr')
    hr.style.display = 'block';
    frnd1.style.display = 'flex';
    frndHead1.style.display = 'flex';
    frndHead.style.display = 'flex';
    frnd.style.display = 'flex';
});


const mediaQuery = window.matchMedia('(max-width: 480px)');
if(mediaQuery.matches) {
    alert('media query matched!');
}