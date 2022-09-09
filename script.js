// setTimeout(function(){
//     alert()
// })

window.addEventListener('DOMContentLoaded',()=>{
    const loader = document.querySelector('.loader')
    setTimeout(()=>{
        loader.style.opasity = '0'
        setTimeout(()=>{
            loader.style.display = 'none'
        }, 500)
    }, 200)
})