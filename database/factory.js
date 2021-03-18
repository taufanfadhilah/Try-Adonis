'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make('secret123'),
  }
})

Factory.blueprint('App/Models/RealEstate', (faker) => {
  return {
    name: faker.name(),
    address: faker.address()
  }
})

Factory.blueprint('App/Models/House', (faker) => {
  return {
    user_id: faker.integer({min: 1, max: 50}),
    real_estate_id: faker.integer({min: 1, max: 30}),
    block: faker.integer({min: 1, max: 50}),
    unit_no: faker.integer({min: 1, max: 50}),
  }
})
