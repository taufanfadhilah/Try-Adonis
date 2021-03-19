"use strict";

class HouseUpdate {
  get rules() {
    return {
      user_id: "required|number",
      real_estate_id: "required|number",
      block: "required|number",
      unit_no: "required|number",
    };
  }

  get validateAll() {
    return true;
  }

  async fails(errorMessages) {
    return this.ctx.response.send({
      success: false,
      message: "failed to update house",
      data: errorMessages,
    });
  }
}

module.exports = HouseUpdate;
