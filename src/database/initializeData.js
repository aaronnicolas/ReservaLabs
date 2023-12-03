import Lab from "../models/Lab.js";
import Reservation from "../models/Reservations.js";
import Reserve from "../models/Reserve.js";

// Define an array of lab data
const labDataArray = [
  {
    id: "1",
    imageSrc: "images/homepage/laboratory-1.jpg",
    name: "Laboratory 1",
    room: "Room 101",
  },
  {
    id: "2",
    imageSrc: "images/homepage/laboratory-2.jpg",
    name: "Laboratory 2",
    room: "Room 102",
  },
  {
    id: "3",
    imageSrc: "images/homepage/laboratory-3.jpg",
    name: "Laboratory 3",
    room: "Room 103",
  },
  {
    id: "4",
    imageSrc: "images/homepage/laboratory-1.jpg",
    name: "Laboratory 4",
    room: "Room 104",
  },
  {
    id: "5",
    imageSrc: "images/homepage/laboratory-2.jpg",
    name: "Laboratory 5",
    room: "Room 105",
  },
];
/*
const reservationsData = [
  {
    id: 0,
    labNum: 1,
    roomNum: 101,
    reserveDate: "December-1-2023",
    timeSeatReservations: [
      { reserveTime: "12:00pm to 12:30pm", seatNum: "5, 6, 8" },
      { reserveTime: "1:30pm to 2:00pm", seatNum: "1, 5, 10" }
    ]
  },
  {
    id: 1,
    labNum: 2,
    roomNum: 102,
    reserveDate: "December-1-2023",
    timeSeatReservations: [
      { reserveTime: "12:00pm to 12:30pm", seatNum: "5, 6, 8" },
      { reserveTime: "12:30pm to 1:00pm", seatNum: "2, 7" }
    ]
  },
  {
    id: 2,
    labNum: 3,
    roomNum: 103,
    reserveDate: "December-1-2023",
    timeSeatReservations: [
      { reserveTime: "12:30pm to 1:00pm", seatNum: "2, 7" },
    ]
  },
  {
    id: 3,
    labNum: 4,
    roomNum: 104,
    reserveDate: "December-1-2023",
    timeSeatReservations: [
      { reserveTime: "12:00pm to 12:30pm", seatNum: "5, 6, 8" },
      { reserveTime: "12:30pm to 1:00pm", seatNum: "2, 7" },
      { reserveTime: "1:30pm to 2:00pm", seatNum: "1, 5, 10" }
    ]
  },
  {
    id: 4,
    labNum: 5,
    roomNum: 105,
    reserveDate: "December-1-2023",
    timeSeatReservations: [
      { reserveTime: "12:00pm to 12:30pm", seatNum: "5, 6, 8" },
      { reserveTime: "12:30pm to 1:00pm", seatNum: "2, 7" },
      { reserveTime: "1:00pm to 1:30pm", seatNum: "4, 5" },
      { reserveTime: "1:30pm to 2:00pm", seatNum: "1, 5, 10" }
    ]
  },
];
*/
const reserveSeatData = [
  {
    date: "December-1-2023", // Specific date for the tab
    lab: 1,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-1-2023",
    lab: 2,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-1-2023",
    lab: 3,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-1-2023",
    lab: 4,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-1-2023",
    lab: 5,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-2-2023", // Specific date for the tab
    lab: 1,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-2-2023",
    lab: 2,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-2-2023",
    lab: 3,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-2-2023",
    lab: 4,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-2-2023",
    lab: 5,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-3-2023", // Specific date for the tab
    lab: 1,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-3-2023",
    lab: 2,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-3-2023",
    lab: 3,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-3-2023",
    lab: 4,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-3-2023",
    lab: 5,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-4-2023", // Specific date for the tab
    lab: 1,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-4-2023",
    lab: 2,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-4-2023",
    lab: 3,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-4-2023",
    lab: 4,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-4-2023",
    lab: 5,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-5-2023", // Specific date for the tab
    lab: 1,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-5-2023",
    lab: 2,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-5-2023",
    lab: 3,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-5-2023",
    lab: 4,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  },
  {
    date: "December-5-2023",
    lab: 5,
    tabs: [
      {
          tabNum: 1,
          time: "12:00pm to 12:30pm",
          checked: true,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 2,
          time: "12:30pm to 1:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 3,
          time: "1:00pm to 1:30pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
      {
          tabNum: 4,
          time: "1:30pm to 2:00pm",
          checked: false,
          seats: [
              { seatName: "Seat 1", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 2", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 3", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 4", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 5", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 6", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 7", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 8", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 9", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
              { seatName: "Seat 10", seatImage: "/static/images/reserve/iconChairAvailable.png", seatStatus: "Available" },
          ]
      },
    ]
  }
];


// Insert the data into the Lab collection
const initializeData = async () => {
  try {
    // Insert labs data
    const labs = await Lab.insertMany(labDataArray);
    console.log("Lab data initialized successfully:", labs);
  } catch (labErr) {
    // Check if the error is due to duplicate key (replication)
    if (labErr.code === 11000) {
      console.log("Lab data already exists in the database. Skipped insertion.");
    } else {
      console.error("Error initializing lab data:", labErr);
      // Handle the error as needed
    }
  }
/*
  try {
    // Insert reservations data
    const reservations = await Reservation.insertMany(reservationsData);
    console.log("Reservations data initialized successfully:", reservations);
  } catch (reservationErr) {
    // Check if the error is due to duplicate key (replication)
    if (reservationErr.code === 11000) {
      console.log("Reservations data already exists in the database. Skipped insertion.");
    } else {
      console.error("Error initializing reservations data:", reservationErr);
      // Handle the error as needed
    }
  }
*/
  try {
    // Insert reserve data
    const reserveSeats = await Reserve.insertMany(reserveSeatData);
    console.log("ReserveSeat data initialized successfully:", reserveSeats);
  } catch (reserveErr) {
    // Check if the error is due to duplicate key (replication)
    if (reserveErr.code === 11000) {
      console.log("ReserveSeat data already exists in the database. Skipped insertion.");
    } else {
      console.error("Error initializing reserve data:", reserveErr);
      // Handle the error as needed
    }
  }
};

export default initializeData;