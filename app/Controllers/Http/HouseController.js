"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with houses
 */
const House = use("App/Models/House");

class HouseController {
  /**
   * Show a list of all houses.
   * GET houses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const houses = await House.query()
      .with("user")
      .with("realEstate")
      .paginate(1, 10);
    return {
      success: true,
      message: "get all houses",
      data: houses,
    };
  }

  /**
   * Create/save a new house.
   * POST houses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const house = await House.create(request.all());
    return { success: true, message: "house stored successfully", data: house };
  }

  /**
   * Display a single house.
   * GET houses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    let house = await House.find(id);
    if (!house) {
      response.json({
        success: false,
        message: "house not found",
        data: null,
      });
      return;
    }
    await house.loadMany(["user", "realEstate"]);
    return { success: true, message: "get house detail", data: house };
  }

  /**
   * Update house details.
   * PUT or PATCH houses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { user_id, real_estate_id, block, unit_no } = request.all();
    const house = await House.query()
      .where("id", id)
      .update({ user_id, real_estate_id, block, unit_no });

    return {
      success: true,
      message: "house updated successfully",
      data: house,
    };
  }

  /**
   * Delete a house with id.
   * DELETE houses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const house = await House.query().where("id", id).delete();
    return {
      success: true,
      message: "house deleted successfully",
      data: house,
    };
  }
}

module.exports = HouseController;
