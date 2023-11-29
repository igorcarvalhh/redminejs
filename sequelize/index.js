const sequelize = require("./database.js");

const User = require("./models/user.js")
const Stuff = require("./models/stuff.js")
const Project = require("./models/project.js")

// sequelize.sync({ force: true }).then(() => {
//     console.log("Tables crated!")
// });

module.exports = {
    sequelize,
    Stuff,
    Project,
    User
}