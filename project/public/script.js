const container = document.querySelector('.container')
const movieSelecte=document.getElementById('movie')


var ticketPrice = +movieSelecte.value;

function updateCost (){

    const daySelect = document.getElementById('day');
    const selectedDay = daySelect.options[daySelect.selectedIndex].value;
    const showTimeSelect = document.getElementById('showTime');
    const selectedShowTime = showTimeSelect.options[showTimeSelect.selectedIndex].value;


    const selectedSeats = document.querySelectorAll('.row .seat.selected') 

    var finalCost = document.getElementById('finalCost')
    finalCost.style.display="block"
    finalCost.style.visibility= "visible"

    const selectedSeatsCount = selectedSeats.length

    var cost = document.getElementById("cost")
    cost.innerText = "You have selected " + selectedSeatsCount + " seats. The total cost is Rs." + selectedSeatsCount * ticketPrice;
}


/// this is select seat function

movieSelecte.addEventListener('change',(e)=>{
    var screenNo = e.target.selectedIndex + 1
   
  

    if(screenNo === 1){
        
        var screen1 =document.getElementById('screen1')
        var screen2 =document. getElementById('screen2')
        var screen3 =document. getElementById('screen3')

        screen1.style.display = "flex"
        screen1.style.visibility = "visible"
        
        screen2.style.display = "none"
        screen2.style.visibility = "hidden"

        screen3.style.display = "none"
        screen3.style.visibility = "hidden"

    }
    else if (screenNo===2){
        var screen1 =document. getElementById('screen1')
        var screen2 =document. getElementById('screen2')
        var screen3 =document. getElementById('screen3')

        screen2.style.display = "flex"
        screen2.style.visibility = "visible"
        
        screen1.style.display = "none"
        screen1.style.visibility = "hidden"

        screen3.style.display = "none"
        screen3.style.visibility = "hidden"
      

    }

    else if (screenNo ===3){
        var screen1 = document.getElementById('screen1')
        var screen2 =document. getElementById('screen2')
        var screen3 =document. getElementById('screen3')

        screen3.style.display = "flex"
        screen3.style.visibility = "visible"
        
        screen2.style.display = "none"
        screen2.style.visibility = "hidden"

        screen1.style.display = "none"
        screen1.style.visibility = "hidden" 

    }


    ticketPrice = + e.target.value
    updateCost()
})

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') &&  !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateCost()
    }
})
const daySelect = document.getElementById('day');
daySelect.addEventListener('change', updateCost);

const showTimeSelect = document.getElementById('showTime');
showTimeSelect.addEventListener('change', updateCost);

updateCost()



