// 1) When you click Jump In - 
//     * Have an alert pop up saying "Splash! We're all in!!"

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("jumpIn").addEventListener('click', function (){
        window.alert("Splash! We're all in!!");
    });
});

// 2) When you click "Learn more" - 
//     * Hide the "Learn More" button
//     * Display an interesting fact about you and your partner 
//         Note - do not remove the other information

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("LearnMore").addEventListener('click', function () {
        document.getElementById("LearnMore").hidden = true
        let newThing = document.createElement("p");
        newThing.innerText=`Interesting fact: I am not interesting! -Logan\nSame here -Dan`;
        document.getElementById("para").appendChild(newThing)
    })
})

// 3) When you click Group Rates
//     * A box should appear above the about us box and it should display a list of group Rates
//     * Clicking the group rates button again will hide the group rates list.
//         it should be styled like the other boxes

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('groupRatesShow').addEventListener('click', function () {
        let groupTrips=document.getElementById('groupTrips');
        let groupRates=document.getElementById('groupTripsRates');
        groupTrips.classList.remove("card");
        groupTrips.hidden=true;
        groupRates.classList.add("card");
        groupRates.hidden=false;
    });
    document.getElementById('groupRatesHide').addEventListener('click', function () {
        let groupTrips=document.getElementById('groupTrips');
        let groupRates=document.getElementById('groupTripsRates');
        groupTrips.classList.add("card");
        groupTrips.hidden=false;
        groupRates.classList.remove("card");
        groupRates.hidden=true;
    });
})

// 4) When you click lets go 
//     * Display an input form that takes in the user's 
//         * first and last name
//         * dropdown with the cities:
//             San Juan, Bayamon, Carolina, Ponce, Caguas
//         * Another button that says "Book it"
//             when clicking this button - 
//             the information input from the form should be displayed in an alert

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("LetsGo").addEventListener('click', function () {
        document.getElementById("myModal").style.display = "block";
    })
    document.getElementById("closeForm").addEventListener('click', function () {
        document.getElementById("myModal").style.display = "none";
    })
    document.getElementById("BookIt").addEventListener('click', function () {
        alert((document.getElementById("name").value + `\n` + document.getElementById("cities").value));
    })

})


// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }