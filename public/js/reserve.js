var datePicker = document.getElementById("datePicker");
var toggleButtons = document.querySelectorAll(".toggle-button");
var contents = document.querySelectorAll(".content");
var selectedFormattedDate = document.getElementById("selectedFormattedDate");
var accountNameElement = document.getElementById("account-name");
var accountName = accountNameElement.textContent;
var reservedSeats = [];
const labNameElement = document.getElementById("labName");
const labName = labNameElement.textContent.trim();

var saveSelectedDate;
let dropUpMenu = document.getElementById("drop-up-account-menu");

var reserveButton = document.getElementById("reserveButton");    


function toggleDropUpMenu(){
    dropUpMenu.classList.toggle("open-menu");
}

datePicker.addEventListener("change", function() {
    const selectedDateValue = datePicker.value;

    if (selectedDateValue) {
        const dateObject = new Date(selectedDateValue);
        const month = dateObject.toLocaleString('default', { month: 'long' });
        const day = dateObject.getDate();
        const year = dateObject.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;
        selectedFormattedDate.textContent = formattedDate;
        console.log(formattedDate);
        saveSelectedDate = formattedDate;
        console.log(saveSelectedDate)
    }
    
});

function toggleSeatStatus(chairElement, seatNumber, timeFrame) {
    // Check if a date has been selected
    const selectedDateValue = datePicker.value;
/*
    if (!selectedDateValue) {
        // Display an error message in a pop-up window
        alert("You must pick a date first!");
        return;
    }
*/
    // Rest of the code to toggle seat status
    const seatColumn = chairElement.parentElement;
    const statusMessage = seatColumn.querySelector(".status-message");
    const chairImage = seatColumn.querySelector(".chairIcon");
    const seatIndex = reservedSeats.findIndex(seat => seat.number === seatNumber);

    if (statusMessage.textContent === "Status: Available") {
        statusMessage.textContent = "Status: Selected";
        chairImage.src = "/static/images/reserve/iconChairSelected.png";
        reservedSeats.push({ number: seatNumber, time: timeFrame });
    } else if (statusMessage.textContent === "Status: Selected") {
        statusMessage.textContent = "Status: Available";
        chairImage.src = "/static/images/reserve/iconChairAvailable.png";
        reservedSeats.splice(seatIndex, 1);
    }
}

const chairIcons = document.querySelectorAll(".chairIcon");

chairIcons.forEach((chairIcon) => {
    chairIcon.addEventListener("click", () => {
        const seatColumn = chairIcon.parentElement;
        const seatNumber = seatColumn.querySelector("div").textContent.trim();
        const timeFrame = seatColumn.dataset.time;

        toggleSeatStatus(chairIcon, seatNumber, timeFrame);
    });
});

toggleButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (contents[index].style.display === "none" || contents[index].style.display === "") {
            contents[index].style.display = "block";
        } else {
            contents[index].style.display = "none";
        }
    });
});

// Add a function to redirect to the selected date
function redirectToSelectedDate() {
    //const selectedDate = document.getElementById("datePicker").value;

    if (saveSelectedDate) {
        // Extract labId from the current URL
        const labId = getLabIdFromURL();

        if (labId) {
            // Check if a date is selected and labId is obtained
            const redirectUrl = `/lab/${labId}/${saveSelectedDate}`;
            window.location.href = redirectUrl;
        } else {
            // Handle the case where labId is not found in the URL
            alert("Lab ID not found in the URL.");
        }
    } else {
        // Inform the user to select a date
        alert("Please select a date before proceeding.");
    }
}

// Function to extract labId from the current URL
function getLabIdFromURL() {
    const pathArray = window.location.pathname.split('/');
    const labIdIndex = pathArray.indexOf('lab') + 1;

    if (labIdIndex > 0 && pathArray.length > labIdIndex) {
        return pathArray[labIdIndex];
    }

    return null;
}

function getDateFromURL() {
    const pathArray = window.location.pathname.split('/');
    const dateIndex = pathArray.indexOf('lab') + 2; // Assuming date is at index next to 'lab'

    if (dateIndex > 0 && pathArray.length > dateIndex) {
        const rawDate = pathArray[dateIndex];

        // Parse the date and format it
        const formattedDate = new Date(rawDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        return formattedDate;
    }

    return null;
}

function getFormattedDateFromURL() {
    const pathArray = window.location.pathname.split('/');
    const dateIndex = pathArray.indexOf('lab') + 2; // Assuming date is at index next to 'lab'

    if (dateIndex > 0 && pathArray.length > dateIndex) {
        const rawDate = pathArray[dateIndex];
        const dateObject = new Date(rawDate);
        const month = dateObject.toLocaleString('default', { month: 'long' });
        const day = dateObject.getDate();
        const year = dateObject.getFullYear();
        const formattedDate = `${month}-${day}-${year}`; // Format with hyphens

        return formattedDate;
    }

    return null;
}

// Add a function to send data to the server
reserveButton?.addEventListener("click", async function (e) {
    if (reservedSeats.length === 0) {
        alert("No seats selected for reservation.");
    } else {
        reservedSeats.forEach(seat => {
            const seatColumns = document.querySelectorAll(`.seat-column[data-time="${seat.time}"]`);
            
            seatColumns.forEach(seatColumn => {
                const seatNumberDiv = seatColumn.querySelector("div");
                if (seatNumberDiv && seatNumberDiv.textContent.trim() === seat.number) {
                    const statusMessage = seatColumn.querySelector(".status-message");
                    const chairImage = seatColumn.querySelector(".chairIcon");

                    statusMessage.textContent = "Status: Reserved by " + accountName;
                    chairImage.src = "/static/images/reserve/iconChairReserved.png";
                }
            });
        });

        // Organize reserved seats by time frame
        const seatsByTime = reservedSeats.reduce((acc, seat) => {
            if (!acc[seat.time]) {
                acc[seat.time] = [];
            }
            acc[seat.time].push(seat.number);
            return acc;
        }, {});

        // Create confirmation message
        const confirmationMessage = Object.keys(seatsByTime).map(time => {
            const seatNumbers = seatsByTime[time].join(", ");
            return `Time: ${time}
            Seats: ${seatNumbers}
            Reserved by: ${accountName}
            `;
        }).join("\n");

        alert("Reserved seats:\nDate: " + getDateFromURL() + "\nLab: " + labName + "\n" + confirmationMessage);


        // Reset the reservedSeats array
        reservedSeats = [];
    }
    try {
        const selectedDate = getFormattedDateFromURL();
        const labId = getLabIdFromURL();
        const labNameElement = document.getElementById('labName');
        const labName = labNameElement ? labNameElement.textContent.trim() : '';

        // Extract the number from the lab name
        const labNumber = labName.replace('Laboratory', '').trim();

        const labRoomElement = document.querySelector('.room');
        const labRoom = labRoomElement ? labRoomElement.textContent.trim() : '';

        // Extract the number from the lab name
        const labRoomNumber = labRoom.replace('Room', '').trim();

        console.log(selectedDate)

        if (!labId || !selectedDate) {
            alert("Lab ID or selected date is missing.");
            return;
        }

        const postData = {
            labRoom: labRoomNumber,
            selectedDate: selectedDate,
            lab: labNumber,
            get_id: labId,
            reservationData: {
                tabs: Array.from(document.querySelectorAll('.tabby-tab')).map(tab => {
                    const tabNum = tab.querySelector('input[type="radio"]').getAttribute('id').split('-')[1];
                    const time = tab.querySelector('label').textContent.trim();
                    const seats = Array.from(tab.querySelectorAll('.seat-column')).map(seat => {
                        return {
                            seatName: seat.querySelector('div').textContent.trim(),
                            seatImage: seat.querySelector('.chairIcon').getAttribute('src'),
                            seatStatus: seat.querySelector('.status-message').textContent.replace('Status: ', '').trim(),
                        };
                    });
    
                    return {
                        tabNum: tabNum,
                        time: time,
                        seats: seats,
                    };
                }),
            },
        };

        console.log('Attempting to save reservation data:', postData);

        const response = await fetch(`/lab/${labId}/${selectedDate}/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (response.redirected) {
            //window.location.href = response.url;
        } else {
            const data = await response.json();
        
            console.log('Response Body:', data);
        
            if (!response.ok) {
                throw new Error(`Failed to save data: ${response.statusText}`);
            }
        
            console.log('Data saved successfully!');
            // Additional actions based on the server response
        }

    } catch (error) {
        console.error('Error:', error.message);
        // Additional error handling
    }
});
    