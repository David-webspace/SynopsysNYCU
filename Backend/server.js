// import express from 'express';
// import mysql from 'mysql';
// import cors from 'cors';

// const app = express()
// app.use(cors())

// const db = mysql.createConnection({
//     host: "localhost",
//     user: 'root',
//     password: '',
//     database: 'test'
// })

// app.get('/', (re,res) => {
//     res.json('From Backend site')
// })

// app.get('/0127', (req,res) => {
//     const sql = 'SELECT * FROM `0127`';
//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         return res.json(data)
//     })
// })

// app.listen(8081, () => {
//     console.log("Listening on 8081")
// })

import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON body parsing

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
});

// Route to get current visit count
app.get('/visitCount', (req, res) => {
    const sql = "SELECT count FROM visits WHERE id = 1"; // Assuming there is a row with id = 1
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data[0]); // Return the first row
    });
});

// Route to update visit count
app.post('/updateVisitCount', (req, res) => {
    const { newCount } = req.body;
    const sql = "UPDATE visits SET count = ? WHERE id = 1"; // Update the count in the database

    db.query(sql, [newCount], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json({ message: "Visit count updated successfully", newCount });
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
