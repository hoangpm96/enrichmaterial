'use strict';

/**
 * age controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::age.age');
