const { JWT_SECRET } = process.env;

let config = {
    secret: JWT_SECRET
}
module.exports = config;