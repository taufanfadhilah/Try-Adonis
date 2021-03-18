'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HouseSchema extends Schema {
  up () {
    this.create('houses', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('real_estate_id').unsigned().references('id').inTable('real_estates')
      table.integer('block').unsigned()
      table.integer('unit_no').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('houses')
  }
}

module.exports = HouseSchema
