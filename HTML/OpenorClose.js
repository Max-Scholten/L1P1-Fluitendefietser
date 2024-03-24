
window.addEventListener('load', function () {
    var popup = document.getElementById('popup');
    var now = new Date();
    var dayOfWeek = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();

    var isOpen = false;

    if (dayOfWeek == 1 && hour >= 12 && (hour < 18 || (hour === 18 && minute === 0))) {
        isOpen = true;
    } else if (dayOfWeek == 2 && hour >= 8 && (hour < 18 || (hour === 18 && minute === 0))) {
        isOpen = true;

    } else if (dayOfWeek == 3 && hour >= 8 && (hour < 19 || (hour === 19 && minute === 0))) {
        isOpen = true;

    } else if (dayOfWeek == 4 && hour >= 8 && (hour < 18 || (hour === 18 && minute === 0))) {
        isOpen = true;


    } else if (dayOfWeek == 5 && hour >= 8 && (hour < 19 || (hour === 18 && minute === 0))) {
        isOpen = true;

    } else if (dayOfWeek == 6 && hour >= 9 && (hour < 17 || (hour === 17 && minute === 0))) {
        isOpen = true;
    }

    if (!isOpen) {
        // Display the pop-up
        popup.style.display = "block";

        // Set a timeout function to make the pop-up disappear after 1 minute
        setTimeout(function () {
            popup.style.display = "none";
        }, 1000); // 1 minute = 60 seconds * 1000 milliseconds
    }

});

// Set the initial position of the images



function openOverlay(divID) {
    document.getElementById("overlay" + divID.slice(-1)).classList.add("show");
}


function closeOverlay(divID) {
    document.getElementById("overlay" + divID.slice(-1)).classList.remove("show");
}




