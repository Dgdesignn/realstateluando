

const galeria = document.querySelector('.galeria')
const stack_ul = document.querySelector('.stack-itens ul')
const stacks = document.querySelectorAll('.stack')
const display = document.querySelector('#display-img')
const closeGaleria = document.querySelector('.close-galeria')



closeGaleria.addEventListener('click',()=>{
    galeria.classList.remove('show-galeria')
})


/*VISUALIZAR OS ITENS DA GALERIA NO DISPLAY*/

function inicial(){

    const stack_itens = document.querySelectorAll('.stack-itens img')
    display.setAttribute('src',stack_itens[0].getAttribute('src'))

    stack_itens.forEach(iten=>{
        iten.addEventListener('click',(event)=>{
            display.setAttribute('src',event.target.getAttribute('src'))
            //console.log(event.target.getAttribute('src'))
        })
    })

}


/*ATRIBUIR OS ITENS NA LI'S DA GALERIA*/
stacks.forEach(iten=>{
    iten.addEventListener('click',event=>{

        galeria.classList.add('show-galeria')

        const span =event.target.querySelectorAll('span')
       handleSpan(span)
    })
})


function handleSpan(data){
    stack_ul.innerHTML = "";
    data.forEach(span=>{
        stack_ul.innerHTML  += `
        <li>
        <img src="${span.dataset.source}" alt="">
        </li>
        `
    })

    inicial()
}

inicial()


