import mongoose from 'mongoose';

const { Schema, model } = mongoose;
 
const reserveSchema = new Schema({
    date: String,
    lab: Number,
    tabs: [
        {
            tabNum: Number,
            time: String,
            checked: Boolean,
            seats: [
                {
                    seatName: String,
                    seatImage: String,
                    seatStatus: String,
                },
            ]
        }
    ],
});

// Ensure a compound index for unique date and lab combination
reserveSchema.index({ date: 1, lab: 1 }, { unique: true });
const Reserve = model("Reserve", reserveSchema);

export default Reserve;