function escopo(){

    let hora = (hora) => {
        const data = new Date()
        hora = data.getHours()
        return hora
    }
    
    

    horas = hora()
    const container = document.querySelector('.container')
    const meio = document.querySelector('.meio')
    const h1 = criaH1()
    const img = criaImg()
    
    h1.innerText = `são ${hora()} horas`
    h1.classList.add('tit-hora')
    meio.appendChild(h1)
    img.setAttribute('class', 'imagem')
    img.setAttribute('alt', '')

    
    if(horas++){
        if(hora() >= 06 && hora() < 12){
            container.classList.add('dia')
            img.src = '../img/dia.jpg'
            meio.appendChild(img)
            const h1 = criaH1()
            h1.classList.add('bom-algo')
            h1.innerHTML = `Bom Dia !`
            meio.appendChild(h1)
        }

        if(hora() >= 12 && hora() < 18){
            container.classList.add('tarde')
            img.src = '../img/tarde.jpg'
            meio.appendChild(img)
            const h1 = criaH1()
            h1.classList.add('bom-algo')
            h1.innerHTML = `Boa Tarde !`
            meio.appendChild(h1)
        }

        if(hora() >= 18 && hora() < 24 || hora() >= 00 && hora() < 06){
            container.classList.add('noite')
            img.src = '../img/noite.jpg'
            meio.appendChild(img)
            const h1 = criaH1()
            h1.classList.add('bom-algo')
            h1.innerHTML = `Boa noite !`
            meio.appendChild(h1)
        }
    }


    function criaImg(){ 
        const img = document.createElement('img')
        return img
    }

    function criaH1(){
        const h1 = document.createElement('h1')
        return h1
    }
}

escopo()