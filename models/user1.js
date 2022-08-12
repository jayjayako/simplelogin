var db = require("../modulelibrary/databaseconn");

function user1auth(req, res, next) {
  res.locals.results = "none";
  const { username, password } = req.body;
  console.log(username);
  let sql = "SELECT * FROM user1_tbl WHERE username = ? AND connection = ?";
  db.query(sql, [username, "offline"], (err, results, fields) => {
    if (results.length > 0) {
      res.locals.results = results;
      next();
    } else {
      res.locals.results = "none";
      next();
    }
  });
}

function user1auth2(req) {
  let sql = "SELECT * FROM user1_tbl WHERE id = ? AND connection = ?";
  db.query(sql, [req.session.userid, "offline"], (err, results, fields) => {
    if (results.length > 0) {
      console.log("triggers logout safety");
      req.session.destroy();
    }
  });
}

function user1registerauth(req, res, next) {
  res.locals.results = "none";
  const { username, password } = req.body;
  console.log(username);
  let sql = "SELECT * FROM user1_tbl WHERE username = ?";
  db.query(sql, [username], (err, results, fields) => {
    if (results.length > 0) {
      res.locals.results = results;
      next();
    } else {
      res.locals.results = "none";
      next();
    }
  });
}

function user1registerinsert(post) {
  let sql = "INSERT INTO user1_tbl SET ?";
  db.query(sql, [post], (err, results) => {
    if (err) throw err;
    console.log("Number of records updated: " + results.affectedRows);
  });
}

function updateuser1loggedin(id, connection) {
  let post = { connection: connection };
  let sql = "UPDATE user1_tbl SET ? WHERE id=?";
  db.query(sql, [post, id], (err, results) => {
    if (err) throw err;
    console.log("Number of records updated: " + results.affectedRows);
  });
}

module.exports = {
  user1auth: user1auth,
  user1auth2: user1auth2,
  user1registerauth: user1registerauth,
  user1registerinsert: user1registerinsert,
  updateuser1loggedin: updateuser1loggedin,
};
