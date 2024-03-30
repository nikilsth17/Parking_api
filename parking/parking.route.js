import express from "express"
import { isUser } from "../auth/auth.middleware.js";
import { Parking } from "./parking.model.js";



const router= express.Router();


router.post("/parkingslot/add", async (req, res) => {
    try {
        const { slotNumber, vehicleNumber,bookedTime,expiredTime } = req.body;

        // Basic validation
        if (!slotNumber || !vehicleNumber || !bookedTime || !expiredTime) {
            return res.status(400).json({ error: 'Slot number and vehicle number are required.' });
        }

        // Check if the slot number already exists
        const existingSlot = await Parking.findOne({ slotNumber });
        if (existingSlot) {
            return res.status(400).json({ error: 'Slot number already exists.' });
        }

        // Create a new parking slot
        const newParkingSlot = new Parking({ slotNumber, vehicleNumber,bookedTime,expiredTime });
        await newParkingSlot.save();

        res.status(201).json({ message: 'Parking slot added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

router.get("/parkingslot/all",async(req,res)=>{
    try {
        const request = await Parking.find();
        console.log('show booked parking slots:',request);
        res.json(request);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }

})
export default router