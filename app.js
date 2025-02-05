const  endDate  = " 5 february 2025 10:43 am "
 
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

 function clock(){
    const end = new Date(endDate)
    const now = new Date()
   //  console.log(end);
   //  console.log(now)
    const diff  = (end - now )/1000;
    console.log(diff);
   


    if(diff < 0) return;


   //  convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff /3600) % 24 ;
    inputs[2].value = Math.floor(diff / 60) % 60 ;
    inputs[3].value = Math.floor(diff) % 60 ;

 }

 //initial call
 clock()

/** 
 * 1 day = 24 hrs
 * 1 hrs 60 mins 
 * 60 min = 3600 sec  
 * 
 *  */ 


setInterval(
   () => {
         clock()
   },
   1000
)

