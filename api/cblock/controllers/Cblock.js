'use strict';

/**
 * Cblock.js controller
 *
 * @description: A set of functions called "actions" for managing `Cblock`.
 */

module.exports = {

  /**
   * Retrieve cblock records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cblock.search(ctx.query);
    } else {
      return strapi.services.cblock.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cblock record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cblock.fetch(ctx.params);
  },

  /**
   * Count cblock records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cblock.count(ctx.query);
  },

  /**
   * Create a/an cblock record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cblock.add(ctx.request.body);
  },

  /**
   * Update a/an cblock record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cblock.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cblock record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cblock.remove(ctx.params);
  }
};
