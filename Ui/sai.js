const container = document.querySelector('.container');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateCost() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    const finalCost = document.getElementById('finalCost');
    finalCost.style.display = "block";
    finalCost.style.visibility = "visible";

    const cost = document.getElementById("cost");
    cost.innerText = "You have selected " + selectedSeatsCount + " seats. The total cost is Rs." + selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', (e) => {
    const screenNo = e.target.selectedIndex + 1;

    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');

    screen1.style.display = (screenNo === 1) ? "flex" : "none";
    screen1.style.visibility = (screenNo === 1) ? "visible" : "hidden";

    screen2.style.display = (screenNo === 2) ? "flex" : "none";
    screen2.style.visibility = (screenNo === 2) ? "visible" : "hidden";

    screen3.style.display = (screenNo === 3) ? "flex" : "none";
    screen3.style.visibility = (screenNo === 3) ? "visible" : "hidden";

    ticketPrice = +e.target.value;
    updateCost();
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateCost();
    }
});

updateCost();
