'use strict';

/**
 * Script.js controller
 *
 * @description: A set of functions called "actions" for managing `Script`.
 */

module.exports = {

  /**
   * Retrieve script records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.script.search(ctx.query);
    } else {
      return strapi.services.script.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a script record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.script.fetch(ctx.params);
  },

  /**
   * Count script records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.script.count(ctx.query);
  },

  /**
   * Create a/an script record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.script.add(ctx.request.body);
  },

  /**
   * Update a/an script record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.script.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an script record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.script.remove(ctx.params);
  }
};
