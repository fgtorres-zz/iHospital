Hospitais = new Mongo.Collection("Hospitais");

var schemas = new SimpleSchema({
	cep:{
        type: String,
        label: 'CEP',
        defaultValue: '41741550',
        optional:true,
    },
	latitude: {
	  type: String,
	  label: 'Latitude',
	  defaultValue: '-12.8809348',
	  optional:true,
	},
	longitude: {
	  type: String,
	  label: 'Longitude',
	  defaultValue: '-38.4175336',
	  optional:true,
	},
	updatedAt: {
		type: Date,
		label: "Updated Date",
		autoValue: function() {
			return new Date();
		},
		optional: true
	},
});

Hospitais.attachSchema(schemas);