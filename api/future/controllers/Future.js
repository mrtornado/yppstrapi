'use strict';

/**
 * Future.js controller
 *
 * @description: A set of functions called "actions" for managing `Future`.
 */

module.exports = {

  /**
   * Retrieve future records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.future.search(ctx.query);
    } else {
      return strapi.services.future.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a future record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.future.fetch(ctx.params);
  },

  /**
   * Count future records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.future.count(ctx.query);
  },

  /**
   * Create a/an future record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.future.add(ctx.request.body);
  },

  /**
   * Update a/an future record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.future.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an future record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.future.remove(ctx.params);
  }
};
