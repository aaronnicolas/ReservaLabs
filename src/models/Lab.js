import mongoose from "mongoose";
const { Schema, model } = mongoose;

const labSchema = new Schema({
    id: { type: Number, unique: true },
    imageSrc: String,
    name: String,
    room: String
})

const Lab = model("Lab", labSchema);

export default Lab;