'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RealEstateSchema extends Schema {
  up () {
    this.create('real_estates', (table) => {
      table.increments()
      table.string('name')
      table.text('address')
      table.timestamps()
    })
  }

  down () {
    this.drop('real_estates')
  }
}

module.exports = RealEstateSchema
