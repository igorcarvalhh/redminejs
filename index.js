const { User } = require("./sequelize/index")

User.create({ email: "igor@gmail.com", password: "12345678" }).then(() => {
    console.log("Register crated!")
});