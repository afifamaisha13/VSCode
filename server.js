const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.static("public"));

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQL",
    database: "university"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

// Route to get departments
app.get("/departments", (req, res) => {
    const faculty = req.query.faculty;

    const sql = "SELECT dept FROM departments WHERE faculty = ?";
    db.query(sql, [faculty], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
