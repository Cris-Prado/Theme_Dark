document.querySelector('.check-luz').addEventListener('change',()=>{
    document.querySelectorAll('.tema').forEach(ele=>{
        ele.classList.toggle('acender')
    })
});