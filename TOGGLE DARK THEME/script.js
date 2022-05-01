const tog=document.getElementById('toggle');

tog.addEventListener('change',(e) =>{

    document.body.classList.toggle('dark',e.target.checked);
})





