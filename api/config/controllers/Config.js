'use strict';

/**
 * Config.js controller
 *
 * @description: A set of functions called "actions" for managing `Config`.
 */

module.exports = {

  /**
   * Retrieve config records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.config.search(ctx.query);
    } else {
      return strapi.services.config.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a config record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.config.fetch(ctx.params);
  },

  /**
   * Count config records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.config.count(ctx.query);
  },

  /**
   * Create a/an config record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.config.add(ctx.request.body);
  },

  /**
   * Update a/an config record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.config.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an config record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.config.remove(ctx.params);
  }
};
