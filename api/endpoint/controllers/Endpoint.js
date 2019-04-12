'use strict';

/**
 * Endpoint.js controller
 *
 * @description: A set of functions called "actions" for managing `Endpoint`.
 */

module.exports = {

  /**
   * Retrieve endpoint records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.endpoint.search(ctx.query);
    } else {
      return strapi.services.endpoint.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a endpoint record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.endpoint.fetch(ctx.params);
  },

  /**
   * Count endpoint records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.endpoint.count(ctx.query);
  },

  /**
   * Create a/an endpoint record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.endpoint.add(ctx.request.body);
  },

  /**
   * Update a/an endpoint record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.endpoint.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an endpoint record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.endpoint.remove(ctx.params);
  }
};
