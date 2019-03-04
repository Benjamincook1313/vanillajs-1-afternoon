
const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')

let setCard = ()=>{
  const card = document.getElementById(id.value)
  console.log(card)
  card.style.color = color.value
}