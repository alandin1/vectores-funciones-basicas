function llenar (vector, tamaño) {
    let nPar = 2 

    let i = 0
    while (i<tamaño){
        vector[i] = nPar
        nPar += 2
        i++
    }

}

function mostrar(vector){
    console.log(vector)
}

function gDerecha(vector){
    let tamañoG = vector.length
    let ultimoNum = vector[tamañoG-1]
    let i = tamañoG-1
    while (i>=0){
        let numAnt = vector[i-1]
        vector[i] = numAnt
        i--
    }
    vector[0] = ultimoNum
}

function gIzq(vector){
    let tamañoG = vector.length
    let ultimoNum = vector[0]
    let i = 0
    while (i<=tamañoG-1){
        let numAnt = vector[i+1]
        vector[i] = numAnt
        i++
    }
    vector[tamañoG-1] = ultimoNum
}

function invertir(vector){
    let tamañoV = vector.length-1
    let iteraciones = Math.round(tamañoV/2)
    let nIzq = vector[0]
    let nDer = vector[tamañoV]
    let i = 0
    while(i<iteraciones){
        vector[tamañoV] = nIzq
        vector[i] = nDer
        tamañoV-=1
        i++
        nIzq = vector[i]
        nDer = vector[tamañoV]
    }
}

let vector = []
llenar(vector, 5)
mostrar(vector)
gDerecha(vector)
mostrar(vector)
gIzq(vector)
mostrar(vector)
invertir(vector)
mostrar(vector)
    