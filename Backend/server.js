// const express = require('express')
// const mysql =  require('mysql')
// const cors = require('cors')

import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
})

// db.connect((err) => {
//     if (err) {
//       console.error('Database connection failed:', err);
//     } else {
//       console.log('Connected to the database.');
//     }
//   });

app.get('/', (re,res) => {
    res.json('From Backend site')
})

app.get('/0127', (req,res) => {
    const sql = 'SELECT * FROM `0127`';
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
    // return res.json('From Backend site')
})

app.listen(8081, () => {
    console.log("Listening on 8081")
})