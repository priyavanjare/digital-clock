


function a() {
    const date = new Date();
    const a = date.getHours();
    const b = date.getMinutes();
    const c = date.getSeconds();
  
  
    document.getElementById("sq1").innerHTML = a
    document.getElementById("sq2").innerHTML = b
    document.getElementById("sq3").innerHTML = c
    document.getElementById("sq4").innerHTML = myFunc();
    
  }
  function myFunc(){
    let date = new Date();
    let hour = date.getHours();
    return hour<12&&hour>0 ? "AM" : "PM"
  }
  
  setInterval(a, 1000);
  
  