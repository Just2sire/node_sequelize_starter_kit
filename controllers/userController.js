const User = require("../models/user");

const register = (req, res, next) => {
    const { username, email, password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (!user) {
                User.create({
                    username: username,
                    email: email,
                    password: password
                })
                    .then(response => {
                        res.json(response);
                    })
                    .catch(err => console.log(err));
            } else {
                res.status(500).json({
                    msg: `L'utilisateur ${username} existe déjà`
                });
            }
        })
        .catch(err => console.log(err));
};

const login = (req, res, next) => {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    User.findOne({
      where: {
        email: email
      }
    })
      .then((user, err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: "Internal error please try again",
            auth: false
          });
        } else if (!user) {
          res.status(401).json({
            error: "User email does not exist",
            auth: false
          });
        } else {
          user.authenticate(password, (err, same) => {
            if (err) {
              res.status(500).json({
                error: "Internal error please try again",
                auth: false
              });
            } else if (!same) {
              res.status(401).json({
                error: "That password is incorrect",
                auth: false
              });
            } else {
              const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 36000 });
              res.json({
                token: token,
                expiresIn: 36000,
                msg: "Connecté avec succès!",
                user: user,
                error: false,
                auth: true
              });
            }
          });
        }
      })
      .catch(err => console.log(err));
};

module.exports = {
  login,
  register
}