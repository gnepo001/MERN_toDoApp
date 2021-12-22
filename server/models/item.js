import mongoose from "mongoose";

const itemSchema = mongoose.Schema({ text: String });

const item = mongoose.model("item", itemSchema);

export default item;
