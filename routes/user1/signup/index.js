// var express = require("express");
// var router = express.Router();

// const multer = require("multer");
// const upload = multer();

// const Joi = require("joi");

// var db = require("../modulelibrary/databaseconn");

// /////////////////////// for authentication /////////////////////
// function auth(req, res, next) {
//   if (req.session.authenticated == true) {
//     next();
//   } else {
//     req.session.destroy();
//     res.clearCookie("sessid");
//     res.send(JSON.stringify([{ id: "invalid" }]));
//     res.end();
//   }
// }
// ////////////////////////////////////////////////////////////////

// function updateuser1(id, logged) {
//   let post = { logged: logged };
//   let sql = "UPDATE user1_tbl SET ? WHERE id=?";
//   db.query(sql, [post, id], (err, results) => {
//     if (err) throw err;
//     console.log("Number of records updated: " + results.affectedRows);
//   });
// }

// /////////////////////// for login page /////////////////////
// router.use("/login", upload.none(), (req, res) => {
//   const { username, password } = req.body;
//   var schema = Joi.object().keys({
//     username: Joi.string().invalid("undefined").min(1).required(),
//     password: Joi.string().invalid("undefined").min(1).required(),
//   });
//   var dataToValidate = {
//     username: username,
//     password: password,
//   };
//   const result = schema.validate(dataToValidate);
//   try {
//     if (result.error == null) {
//       let sql = "SELECT * FROM user1_tbl WHERE username = ? AND password = ?";
//       db.query(sql, [username, password], (err, results, fields) => {
//         if (results.length > 0) {
//           if (results[0].logged != "yes") {
//             req.session.authenticated = true;
//             req.session.userid = results[0].id;
//             req.session.lastname = results[0].lastname;
//             req.session.firstname = results[0].firstname;
//             updateuser1(results[0].id, "yes");
//             res.send(JSON.stringify([{ id: "success" }]));
//             res.end();
//           } else {
//             res.send(JSON.stringify([{ id: "invalid" }]));
//             res.end();
//           }
//         } else {
//           res.send(JSON.stringify([{ id: "invalid" }]));
//           res.end();
//         }
//       });
//     } else {
//       res.send(JSON.stringify([{ id: "invalid" }]));
//       res.end();
//     }
//   } catch (error) {
//     console.log(error);
//     res.send(JSON.stringify([{ id: "invalid" }]));
//     res.end();
//   }
// });
// //////////////////////////////////////////////////////////////

// /////////////////////// for dashboard page ///////////////////
// router.use("/dashboard", auth, (req, res) => {
//   try {
//     console.log(
//       "Connected: " + req.app.socket.id + " node1 \nmy ip is " + req.ip
//     );
//     req.app.socket.emit(
//       "chat-message",
//       "from server" + " node1 \nmy ip is " + req.ip
//     );
//     res.send(
//       JSON.stringify([
//         {
//           id: "loggedin",
//           name:
//             "Hello World! " +
//             req.session.lastname +
//             " " +
//             req.session.firstname +
//             " Welcome",
//         },
//       ])
//     );
//     res.end();
//   } catch (error) {
//     res.send(JSON.stringify([{ id: "invalid" }]));
//     res.end();
//   }
// });

// router.use("/checkuser", auth, (req, res) => {
//   res.send(JSON.stringify([{ id: "loggedin" }]));
//   res.end();
// });

// router.use("/logout", auth, (req, res) => {
//   updateuser1(req.session.userid, "no");
//   req.session.destroy();
//   res.clearCookie("sessid");
//   res.send(JSON.stringify([{ id: "done" }]));
//   res.end();
// });
// ///////////////////////////////////////////////////////////////

// module.exports = router;
