'use strict';

/**
 * batch controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::batch.batch'),({ strapi }) => ({


  async update(ctx) {
   return ctx
  },




});
