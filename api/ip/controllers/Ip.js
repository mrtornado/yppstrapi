'use strict';

/**
 * Ip.js controller
 *
 * @description: A set of functions called "actions" for managing `Ip`.
 */

module.exports = {

  /**
   * Retrieve ip records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ip.search(ctx.query);
    } else {
      return strapi.services.ip.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ip record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ip.fetch(ctx.params);
  },

  /**
   * Count ip records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ip.count(ctx.query);
  },

  /**
   * Create a/an ip record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ip.add(ctx.request.body);
  },

  /**
   * Update a/an ip record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ip.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ip record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ip.remove(ctx.params);
  }
};
