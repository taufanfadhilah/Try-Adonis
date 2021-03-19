"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class House extends Model {
  realEstate() {
    return this.belongsTo("App/Models/RealEstate");
  }

  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = House;
