





function call(e) {
  e.preventDefault()
  var name= document.getElementById("firstname").value;
  var travel = document.querySelector(`input[name=option]:checked`).value;
  var state =   getcheckbox("sym")
  console.log(name , travel,state)
}


function getcheckbox(name){
  var items = document.querySelectorAll(`input[name="${name}"]:checked`)
  
  var v=[]
  items.forEach((data)=>{
        v.push(data.value)
  })
  return v
}

document.addEventListener("submit",call);