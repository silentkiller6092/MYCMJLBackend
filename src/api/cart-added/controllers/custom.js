
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cart-added.cart-added', ({ strapi }) =>  ({
 
  async CartAction(ctx) {
    let alldata=ctx.request.body
    const entry = await strapi.entityService.create('api::cart-added.cart-added', {
        data: {
            Phone:alldata.Phone,
            Title:alldata.Title,
            slug:alldata.slug,
            Price:alldata.Price,
            Description:alldata.Description,
            ImageUrl:alldata.ImageUrl
        },
      });
  },
}));