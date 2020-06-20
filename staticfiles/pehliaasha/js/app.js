window.onload=()=>{
    let burger = document.getElementById('burger')
    let close = document.getElementById('close')
    let navbar = document.getElementById('mob-navbar')

    let mob_item = document.querySelectorAll('#mob-navbar #nav-container a')
    for(let i=0 ; i< mob_item.length;i++){
        mob_item[i].addEventListener('click',()=>{
            close.click()
        })
    }

    burger.addEventListener('click',()=>{
        navbar.classList.toggle('showNav')
    })
    close.addEventListener('click',()=>{
        navbar.classList.toggle('showNav')
    })
}

let prePos = window.pageYOffset

window.onscroll=()=>{
    let imgLogo = document.querySelector('.ngo-logo img')

    if(document.body.screenTop>50 || document.documentElement.scrollTop>50){
        imgLogo.style.width = '50px'
        imgLogo.style.height = '50px'
        
    }else{
        imgLogo.style.width = '100px'
        imgLogo.style.height = '100px'
    }

    let currPos = window.pageYOffset
    if ( prePos > currPos ){
        document.querySelector('#mob-nav').classList.remove('up')  
        document.querySelector('#win-nav').classList.remove('up')           
    }else{
        document.querySelector('#mob-nav').classList.add('up')
        document.querySelector('#win-nav').classList.add('up')
    }
    
    prePos = currPos
}
