'use strict';

/**
 * Productcat.js controller
 *
 * @description: A set of functions called "actions" for managing `Productcat`.
 */

module.exports = {

  /**
   * Retrieve productcat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.productcat.search(ctx.query);
    } else {
      return strapi.services.productcat.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a productcat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.productcat.fetch(ctx.params);
  },

  /**
   * Count productcat records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.productcat.count(ctx.query);
  },

  /**
   * Create a/an productcat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.productcat.add(ctx.request.body);
  },

  /**
   * Update a/an productcat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.productcat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an productcat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.productcat.remove(ctx.params);
  }
};
