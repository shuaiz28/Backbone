var Car = Backbone.Model.extend({
	defaults: {
		id: "",
		make: "",
		color: "",
		length: "",
		width: "",
		height: "",
		weight: "",
		cylinder: "",
		capacity: "",
		maxPower: ""

	},
	idAttribute: "id",
// 	(1) validate is triggered only by .set  or .save
//  (2) if you want validate to be triggered with .set , you need to include {validate: true}:
//  car.set('make','Porsche',{validate: true})
	validate: function(attr, options) {
		if (!attr.make) {
			return "Car must have a make."
		}
	}
});