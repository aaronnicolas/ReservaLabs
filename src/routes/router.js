import express from 'express';
import Lab from '../models/Lab.js';
import Reservation from '../models/Reservations.js';
import Reserve from '../models/Reserve.js'
import { v4 as uuidv4 } from 'uuid';

const routes = express.Router();

// Define your routes here
routes.get("/", async function (req, res) {
    try {
        const laboratories = await Lab.find();
        const data = {
            title: "ReservaLab",
            username: "Crinkle Joe",
            style: "index.css",
            laboratories: laboratories.map(lab => ({
                id: lab.id,
                link: "/lab/" + lab._id,
                imageSrc: lab.imageSrc,
                name: lab.name,
                room: lab.room
            }))
        };
        res.render("index", data);
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        res.status(500).send('Something went wrong!');
    }
});

routes.get("/login", function(req, res) {
    var data = {
        style: "login.css"
    }
    res.render("login", data);
});

routes.get("/profile", function(req, res) {
    var data = {
        username: "Crinkle Joe",
        style: "profile.css"
    }
    res.render("profile", data);
});

routes.get("/reservelist", async function(req, res) {

    const reservations = await Reservation.find();
    const laboratories = await Lab.find();
    
    var data = {
        username: "Crinkle Joe",
        style: "style-reservation.css",
        tabs: [
            {
                tabNum: 1,
                time: "12:00pm to 12:30pm",
                checked: true,
                seats: [
                    { seatName: "Seat 1", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 2", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 3", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 4", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 5", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 6", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 7", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 8", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 9", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 10", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                ]
            },
            {
                tabNum: 2,
                time: "12:30pm to 1:00pm",
                checked: false,
                seats: [
                    { seatName: "Seat 1", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 2", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 3", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 4", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 5", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 6", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 7", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 8", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 9", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 10", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                ]
            },
            {
                tabNum: 3,
                time: "1:00pm to 1:30pm",
                checked: false,
                seats: [
                    { seatName: "Seat 1", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 2", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 3", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 4", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 5", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 6", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 7", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 8", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 9", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 10", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                ]
            },
            {
                tabNum: 4,
                time: "1:30pm to 2:00pm",
                checked: false,
                seats: [
                    { seatName: "Seat 1", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 2", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 3", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 4", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 5", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 6", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 7", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 8", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 9", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                    { seatName: "Seat 10", image: "/static/images/reserve/iconChairAvailable.png", status: "Available" },
                ]
            },
        ],
        reservations: reservations.map(reserve => {
            const matchingLab = laboratories.find(lab => {
                //console.log("lab.id:", lab.id);
                //console.log("reserve.labNum:", reserve.labNum);
                return lab.id === reserve.labNum;
            });
            console.log(matchingLab)
            return {
                id: reserve.id,
                labNum: reserve.labNum,
                roomNum: reserve.roomNum,
                reserveDate: reserve.reserveDate,
                timeSeatReservations: reserve.timeSeatReservations.map(timeSeat => ({
                    reserveTime: timeSeat.reserveTime,
                    seatNum: timeSeat.seatNum.split(',').map(num => num.trim()), // Convert seatNum to an array
                })),
                labId: matchingLab ? matchingLab._id : null,
            };
        }),
    }
    res.render("reservation", data);
});

// Original route without a selected date
routes.route("/lab/:id").get(async function (req, res) {
    const lab = await Lab.findById(req.params.id);
    const data = {
        style: "reserve.css",
        username: "Crinkle Joe",
        lab: {
            id: lab._id,
            imageSrc: lab.imageSrc,
            name: lab.name,
            room: lab.room
        }
    }
    res.render("reserveLab", data);
});

// New route with the selected date as a parameter
routes.route("/lab/:id/:selectedDate").get(async function (req, res) {
    try {
        const lab = await Lab.findById(req.params.id);
        const selectedDate = req.params.selectedDate; // Get the selected date from the URL parameter
        const existingReserve = await Reserve.findOne({ date: selectedDate, lab: lab.id });

    
        if (!existingReserve) {
            // No matching record found for the selected date
            return res.status(404).send('No reservation data found for the selected date.');
        }
        if (lab.id.toString() !== existingReserve.lab.toString()) {
            console.log(existingReserve.lab.toString())
            console.log(lab.id.toString())
            return res.status(403).send('Forbidden: Lab ID mismatch.');
            // You can customize the error status and message as needed.
        }

        const data = {
            style: "reserve.css",
            username: "Crinkle Joe",
            lab: {
                id: lab._id,
                imageSrc: lab.imageSrc,
                name: lab.name,
                room: lab.room
            },
            tabs: existingReserve.tabs.map(tab => ({
                tabNum: tab.tabNum,
                time: tab.time,
                checked: tab.checked,
                seats: tab.seats.map(seat => ({
                    seatName: seat.seatName, 
                    seatImage: seat.seatImage, 
                    seatStatus: seat.seatStatus 
                })),
            })),
        };
        res.render("reserveLab", data);
    } catch (error) {
        console.error("Error fetching lab data from MongoDB:", error);
        res.status(500).send('Something went wrong!');
        console.error(error.stack);
    }
});

routes.post("/lab/:id/:selectedDate/save", async function (req, res) {
    try {
        const labId = req.body.get_id;
        const labRoomNum = req.body.labRoom;
        const selectedDate = req.body.selectedDate;
        const labData = await Lab.findById(labId);
        const labNum = req.body.lab;
        const existingReserve = await Reserve.findOne({ date: selectedDate, lab: labNum });

        if (!existingReserve) {
            return res.status(404).send('No reservation data found for the selected date.');
        }

        if (labData.id.toString() !== existingReserve.lab.toString()) {
            return res.status(403).send('Forbidden: Lab ID mismatch.');
        }
        
        const updatedData = req.body.reservationData; // Adjust this based on your form structure
        const newReservation = new Reservation({
            id: generateUniqueReservationId(existingReserve.id),
            labNum: labNum,
            roomNum: labRoomNum,
            reserveDate: selectedDate,
            timeSeatReservations: existingReserve.tabs.flatMap(tab => {
                const time = tab.time;
                const selectedSeats = updatedData.tabs.find(updatedTab => +updatedTab.tabNum === tab.tabNum)?.seats || [];
        
                const changedSeats = selectedSeats
                    .filter(updatedSeat => {
                        const existingSeat = tab.seats.find(existingSeat => existingSeat.seatName === updatedSeat.seatName);
        
                        if (existingSeat) {
                            // Return true if the seat has changed, false otherwise
                            return updatedSeat.seatStatus !== existingSeat.seatStatus;
                        } else {
                            // If there's no corresponding existing seat, consider it as changed
                            return true;
                        }
                    });
        
                const seatNums = changedSeats.map(seat => seat.seatName).join(', ');
        
                return {
                    reserveTime: time,
                    seatNum: seatNums,
                };
            }),
        });  

        function generateUniqueReservationId(existingId) {
            let newId;
            
            // Ensure the generated ID is unique
            do {
              newId = uuidv4();
            } while (existingReserve.tabs.some(tab => tab.id === newId));
          
            return newId;
        }

        // Save the new Reservation document
        await newReservation.save();
        

        console.log("Updated reservationList data:", JSON.stringify(newReservation, null, 2));

        // Extract the updated data from the request body
        

        // Update the corresponding seat data
        existingReserve.tabs.forEach((tab, tabIndex) => {

            const updatedTab = updatedData.tabs.find(updatedTab => +updatedTab.tabNum === tab.tabNum);

            if (updatedTab) {
                tab.seats.forEach((seat, seatIndex) => {
                    const updatedSeat = updatedTab.seats.find(updatedSeat =>
                        updatedSeat.seatName === seat.seatName
                    );

                    if (updatedSeat) {
                        existingReserve.tabs[tabIndex].seats[seatIndex].seatName = updatedSeat.seatName;
                        existingReserve.tabs[tabIndex].seats[seatIndex].seatImage = updatedSeat.seatImage;
                        existingReserve.tabs[tabIndex].seats[seatIndex].seatStatus = updatedSeat.seatStatus;
                    }
                });
            }
        });
        // Save the updated reservation data
        await existingReserve.save();

        console.log("Updated reservation data:", JSON.stringify(existingReserve, null, 2));

        // Redirect back to the reservation page or render the page with the updated data
        // Adjust the URL or template as needed
        res.redirect(`/lab/${labId}/${selectedDate}`);
    } catch (error) {
        console.error("Error updating lab data in MongoDB:", error);
        res.status(500).send('Something went wrong!');
        console.error(error.stack);
    }
});

routes.route("/lab/:id").get(function (req, res) {
    Lab.findById(req.params.id).then((lab) => {
        res.json(lab);
        res.end();
    });
});

routes.route("/labs").get(function (req, res) {
    Lab.find().then((labs) => {
        res.json(labs);
        res.end();
    });
});

routes.route("/labs").post(function (req, res) {
    const lab = new Lab({
        id: req.body.id,
        link: req.body.link,
        imageSrc: req.body.imageSrc,
        name: req.body.name,
        room: req.body.room
    });
    lab.save();
    res.json({ message: "Lab Saved" });
});

export default routes;