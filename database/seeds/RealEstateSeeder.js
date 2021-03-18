'use strict'

/*
|--------------------------------------------------------------------------
| RealEstateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RealEstateSeeder {
  async run () {
    await Factory.model('App/Models/RealEstate').createMany(30)
  }
}

module.exports = RealEstateSeeder
