const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "monthly_revenue.html"));
})

app.get("/api/chart-data", (req, res) => {
  // 1. DB 접속
  const db = new sqlite3.Database("crm.db");
  console.log("DB 접속 성공");

  // 2. DB쿼리문
  db.all(
    `SELECT 
        strftime('%Y-%m', orders.ordered_at) AS YearMonth,
        SUM(item.unit_price) AS MonthlyRevenue
    FROM orders
    JOIN orderitem ON orderitem.order_id = orders.id
    JOIN item ON orderitem.item_id = item.id
    WHERE item.id = 'dfe74076-8823-4ca7-9ddf-5d6d7fe210c8'
    GROUP BY YearMonth
    ORDER BY YearMonth ASC`,
    (err, rows) => {
      if (err) {
        console.error(err.message);
      } else {
        let labels = (rows.map((row) => row.YearMonth));
        let revenues = (rows.map((row) => row.MonthlyRevenue));
        console.log(rows);
        res.json({ rows: rows, labels: labels, revenues: revenues }); //쿼리 결과 전달
      }
    }
  );
  // 3. DB 접속 종료
  db.close();
});

app.listen(port, () => {
  console.log("서버 레디");
});
