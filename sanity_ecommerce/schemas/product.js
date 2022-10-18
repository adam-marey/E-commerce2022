export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspots: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        sounce: 'name',
        maxLenght: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
  ],
};
