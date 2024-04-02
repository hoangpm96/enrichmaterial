'use strict';

/**
 * vocab-bank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vocab-bank.vocab-bank');
