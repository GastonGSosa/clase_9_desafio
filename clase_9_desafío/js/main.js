class Carta {
    constructor (nombre,hp,ataque,rareza="básica"){
    this.nombre=nombre
    this.hp=hp
    this.ataque=ataque
    this.rareza=rareza
}}

const mazo =[]

const form=document.getElementById('idForm') // document.querySelector ('#idForm') -- Como lo selecciono en CSS: <> # .
const divCartas= document.getElementById('cartas')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let nombre = document.getElementById('idNombre').value
    let hp = parseInt(document.getElementById('idHp').value)
    let ataque = parseInt(document.getElementById('idAtaque').value)
    let rareza = document.getElementById('idRareza').value

    const carta = new Carta (nombre, hp, ataque, rareza)

    mazo.push(carta)

    form.reset()
})

document.getElementById('botonCartas').addEventListener('click',()=>{
    mazo.forEach(carta => {
        divCartas.innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${carta.nombre}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">HP: ${carta.hp}</li>
            <li class="list-group-item">Ataque: ${carta.ataque}</li>
            <li class="list-group-item">Rareza: ${carta.rareza}</li>
        </ul>
    </div>
    <br>
    `   
    });
})