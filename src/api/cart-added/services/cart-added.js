'use strict';

/**
 * cart-added service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cart-added.cart-added');
