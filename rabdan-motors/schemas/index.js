export const schemaTypes = [
  {
    name: 'home_products',
    title: 'Home_products',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
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
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      { 
        name: 'kilometers',
        title: 'Kilometers',
        type: 'number',
      },
      { 
        name: 'make',
        title: 'Make',
        type: 'string',
      },
      { 
        name: 'model',
        title: 'Model',
        type: 'string',
      },
      { 
        name: 'year',
        title: 'Year',
        type: 'number',
      },
      { 
        name: 'drive_train',
        title: 'Drive_Train',
        type: 'string',
      },
      { 
        name: 'color',
        title: 'Color',
        type: 'string',
      },
      { 
        name: 'vehicle_type',
        title: 'Vehicle_type',
        type: 'string',
      },
      { 
        name: 'export_status',
        title: 'Export_status',
        type: 'string',
      },
      { 
        name: 'specs',
        title: 'Specs',
        type: 'string',
      },
      { 
        name: 'gearbox',
        title: 'Gearbox',
        type: 'string',
      },
      { 
        name: 'fuel',
        title: 'Fuel',
        type: 'string',
      },
      { 
        name: 'seats',
        title: 'Seats',
        type: 'number',
      },
      { 
        name: 'cylinders',
        title: 'Cylinders',
        type: 'number',
      },
      {
        title: 'horse_power',
        name: 'Horse_Power',
        type: 'string',
      },
      { 
        name: 'engine_capacity',
        title: 'Engine_Capacity',
        type: 'number',
      },
      { 
        name: 'interior',
        title: 'Interior',
        type: 'string',
      }
    ]
  },  
  {
        name: 'bmw',
        title: 'Bmw',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'audi',
        title: 'Audi',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'bentley',
        title: 'Bentley',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'dodge',
        title: 'Dodge',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'ford',
        title: 'Ford',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'gmc',
        title: 'GMC',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      }, {
        name: 'jeep',
        title: 'Jeep',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'land_rover',
        title: 'Land_Rover',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'maserati',
        title: 'Maserati',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'mercedes_benz',
        title: 'Mercedes_Benz',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },  
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'porsche',
        title: 'Porsche',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'tesla',
        title: 'Tesla',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'toyota',
        title: 'Toyota',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      },
      {
        name: 'volkswagen',
        title: 'Volkswagen',
        type: 'document',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
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
              source: 'name',
              maxLength: 90,
            }
          },
          { 
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          { 
            name: 'description',
            title: 'Description',
            type: 'string',
          },
          { 
            name: 'kilometers',
            title: 'Kilometers',
            type: 'number',
          },
          { 
            name: 'make',
            title: 'Make',
            type: 'string',
          },
          { 
            name: 'model',
            title: 'Model',
            type: 'string',
          },
          { 
            name: 'year',
            title: 'Year',
            type: 'number',
          },
          { 
            name: 'drive_train',
            title: 'Drive_Train',
            type: 'string',
          },
          { 
            name: 'color',
            title: 'Color',
            type: 'string',
          },
          { 
            name: 'vehicle_type',
            title: 'Vehicle_type',
            type: 'string',
          },
          { 
            name: 'export_status',
            title: 'Export_status',
            type: 'string',
          },
          { 
            name: 'specs',
            title: 'Specs',
            type: 'string',
          },
          { 
            name: 'gearbox',
            title: 'Gearbox',
            type: 'string',
          },
          { 
            name: 'fuel',
            title: 'Fuel',
            type: 'string',
          },
          { 
            name: 'seats',
            title: 'Seats',
            type: 'number',
          },
          { 
            name: 'cylinders',
            title: 'Cylinders',
            type: 'number',
          },
          {
            title: 'horse_power',
            name: 'Horse_Power',
            type: 'string',
          },
          { 
            name: 'engine_capacity',
            title: 'Engine_Capacity',
            type: 'number',
          },
          { 
            name: 'interior',
            title: 'Interior',
            type: 'string',
          }
        ]
      }

]
