const Sequelize = require('sequelize');

const sequelize = require('../database/db.config');

const bcrypt = require('bcrypt');

const saltRounds = 10;


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// hash password with bcrypt
User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, saltRounds)
        .then(password => {
            user.password = password;
        })
        .catch(err => {
            console.log(err)
            throw new Error();
        });
});

// prototype method for all users to check password
User.prototype.authenticate = async function (value, callback) {
    await bcrypt.compare(value, this.password, function(err, same){
        if (err){
            console.log(err)
            callback(err)
        }else{
            console.log('authenticate', err, same)
            callback(err, same)
        }
    })
}

module.exports = User;