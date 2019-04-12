'use strict';

/**
 * Machine.js controller
 *
 * @description: A set of functions called "actions" for managing `Machine`.
 */

module.exports = {

  /**
   * Retrieve machine records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.machine.search(ctx.query);
    } else {
      return strapi.services.machine.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a machine record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.machine.fetch(ctx.params);
  },

  /**
   * Count machine records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.machine.count(ctx.query);
  },

  /**
   * Create a/an machine record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.machine.add(ctx.request.body);
  },

  /**
   * Update a/an machine record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.machine.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an machine record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.machine.remove(ctx.params);
  }
};
