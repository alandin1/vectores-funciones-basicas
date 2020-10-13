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
    
}

let vector = []
llenar(vector, 7)
mostrar(vector)
gDerecha(vector)
mostrar(vector)
gIzq(vector)
mostrar(vector)
