import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27071/visit")
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const VisitSchema = new mongoose.Schema({
  count: Number,
});

const Visit = mongoose.model("Visit", VisitSchema);

app.get("/visit", async (req, res) => {
    try {
        let visit = await Visit.findOne();
        if (!visit) {
          visit = new Visit({ count: 1 });
        } else {
          visit.count += 1;
        }
        await visit.save();
        res.json({ count: visit.count });
      } catch (error) {
        console.error("❌ Error：", error);
        res.status(500).json({ error: "Server Error" });
      }
});

app.listen(8081, () => console.log("Server running on port 8081"));
