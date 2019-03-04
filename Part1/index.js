let box = []

let clear = (box)=>{
  let btn = document.getElementById('btn')
    for(let i=0; i<box.length; i++){
      box[i] = undefined
    }
  return box
}

let play = (val)=>{
  let player = document.getElementById('player')
  let element = document.getElementById(val)

  if(player.innerText === 'X'){
    player.innerText = 'O'
    element.innerText = 'X'
    box[val] = 'X'
  }else{
    player.innerText = 'X'
    element.innerText = 'O'
    box[val] = 'O'
  }

  let sq1 = box[0]
  let sq2 = box[1]
  let sq3 = box[2]
  let sq4 = box[3]
  let sq5 = box[4]
  let sq6 = box[5]
  let sq7 = box[6]
  let sq8 = box[7]
  let sq9 = box[8]

  if(sq1 !== undefined && sq1 === sq2 && sq1 === sq3){
    window.alert(`${sq1} wins`)
  return
  }else if(sq4 !== undefined && sq4 === sq5 && sq4 === sq6){
    window.alert(`${sq4} wins`)
    return
  }else if(sq7 !== undefined && sq7 === sq8 && sq7 === sq9){
    window.alert(`${sq7} wins`)
    return
  }else if(sq1 !== undefined && sq1 === sq5 && sq1 === sq9){
    window.alert(`${sq1} wins`)
    return
  }else if(sq3 !== undefined && sq3 === sq5 && sq3 === sq7){
    window.alert(`${sq3} wins`)
    return
  }else if(sq1 !== undefined && sq1 === sq4 && sq1 === sq7){
    window.alert(`${sq1} wins`)
    return
  }else if(sq2 !== undefined && sq2 === sq5 && sq2 === sq8){
    window.alert(`${sq2} wins`)
    return
  }else if(sq3 !== undefined && sq3 === sq6 && sq3 === sq9){
    window.alert(`${sq3} wins`)
  }
  let full = true

  for(let i=0; i<=8; i++){
    if(box[i] === undefined){
      full = false
    }
  }
  if(full === true){
    window.alert("DRAW")
  }
}