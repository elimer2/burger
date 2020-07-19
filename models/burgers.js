const orm = require("../config/orm.js");

//Also inside burger.js, create the code that will call the
//ORM functions using burger specific input for the ORM.

//i just dont understand why its cb as the param there
//orm.all is callin the table and the response.

const burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  create: (newBurger, cb) => {
    orm.create("burgers", newBurger, (res) => {
      cb(res);
    });
  },
  update: (burgerData, criteria, cb) => {
    orm.update("burgers", burgerData, criteria, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
