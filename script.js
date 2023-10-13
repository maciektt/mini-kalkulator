const input1Elem = document.querySelector("#zmienna1")
const input2Elem = document.querySelector("#zmienna2")

const plusElem = document.querySelector("#dodawanie")
const minusElem = document.querySelector("#odejmowanie")
const mnozenieElem = document.querySelector("#mnozenie")
const dzielenieElem = document.querySelector("#dzielenie")
const screenElem = document.querySelector(".screen")
const obliczElem = document.querySelector(".oblicz")

const znakiBtns = document.querySelectorAll('.znak')

let zmienna1
let zmienna2
let znak

znakiBtns.forEach((b)=>{
    
    b.addEventListener('click',()=>{
        znakiBtns.forEach((btn)=>{
            btn.classList.remove('active-btn')
        })
        b.classList.add('active-btn')
    })
})
function wyswietlNaEkranie(dowyswietlenia){
    screenElem.innerText = dowyswietlenia
}

function oblicz() {

    zmienna1 = Number(input1Elem.value)
    zmienna2 = Number(input2Elem.value)

    console.log(zmienna1,zmienna2)

    if((zmienna1 && zmienna2) || zmienna1===0 || zmienna2===0){
        if (znak==='+') return zmienna1+zmienna2

        if (znak==="-") return zmienna1-zmienna2
    
        if (znak==="x") return zmienna1*zmienna2
    
        if (znak==="/"){
            if(zmienna2===0) return 'NIE MOŻNA / 0 !'
            return zmienna1/zmienna2
        }
    }
    else{
        return 'podaj poprawne liczby i znak'
    }
}



plusElem.addEventListener('click',()=>{
    znak="+"
})
minusElem.addEventListener('click',()=>{
    znak="-"
})
mnozenieElem.addEventListener('click',()=>{
    znak="x"
})
dzielenieElem.addEventListener('click',()=>{
    znak="/"
})
obliczElem.addEventListener('click',()=>{
    wyswietlNaEkranie(oblicz())

})

