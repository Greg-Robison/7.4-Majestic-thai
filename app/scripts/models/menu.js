var Backbone = require('backbone');

var Entree = Backbone.Model.extend({
  idAttribute: '_id',
  dish: "",
  price: "",
  description: "",
  category: ""
});

var EntreeCollection = Backbone.Collection.extend({
  model: Entree,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/greg_thai'
});

var Order = Backbone.Model.extend({
  idAttribute: '_id',
  dish: "",
  price: ""
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/greg_order'

});

// var springRoll = new Entree();
// springRoll.set({dish: 'Spring Roll', description: "Served with Chef's own sweet chili sauce!", price: '3.99', category: 'appetizers'});
// var basilRoll = new Entree();
// basilRoll.set({dish: 'Basil Roll', description: "Served with Chef's famous peanut sauce!", price: '4.99', category: 'appetizers'});
// var dumplings = new Entree();
// dumplings.set({dish: 'Dumplings', description: "Served with Chef's signature spicy soy ginger sauce!", price: '4.99', category: 'appetizers'});
// var tomYumGoong = new Entree();
// tomYumGoong.set({dish: 'Tom Yum Goong', description: "Made with South Carolina wild shrimp!", price: '6.99', category: 'appetizers'});
// var tomYumGai = new Entree();
// tomYumGai.set({dish: 'Tom Yum Gai', description: 'Made with local Upstate free-range chicken!', price: '6.99', category: 'appetizers'});
//
// var padGarlic = new Entree();
// padGarlic.set({dish: 'Pad Garlic and Peppercorn', description: "Your choice of meat, stir-fried with fresh mushrooms and onions in Chef's special garlic and peppercorn sauce.", price: '9.99', category: 'entree'});
// var spicyCrispy = new Entree();
// spicyCrispy.set({dish: 'Spicy Crispy', description: "Lightly breaded and deep fried until crispy! With your choice of meat, stir-fried with onions, bell peppers, carrots, zucchini, fresh mushrooms and Chef's special brown sauce.", price: '9.99', category: 'entree'});
// var padPrigKhing = new Entree();
// padPrigKhing.set({dish: 'Pad Prig Khing', description: "Your choice of meat, stir-fried with green beans and bell peppers in chili paste, topped with shredded Kaffir lime leaf.", price: '10.99', category: 'entree'});
// var padThai = new Entree();
// padThai.set({dish: 'Pad Thai', description: "One of the most famous noodle dishes! It consists of rice noodles, tofu, egg, chives, bean sprouts and crushed peanuts. Prepared with your choice of meat.", price: '8.99', category: 'entree'});
// var padSeeEwe = new Entree();
// padSeeEwe.set({dish: 'Pad See-Ewe', description: "Stir-fried freash rice noodles with Chinese kale or broccoli and your choice of meat, seasoned with black soy sauce.", price: '9.99', category: 'entree'});
// var massamonCurry = new Entree();
// massamonCurry.set({dish: 'Massamon Curry', description: "A very unique, aromatic and spicy dish that blends fresh herbs and spices together then cooked with coconut milk to give thickness and a little sweetness to it.", price: '10.99', category: 'entree'});
//
// var grilledTuna = new Entree();
// grilledTuna.set({dish: 'Grilled Tuna', description: "Topped with Chef's famous peanut sauce and served over a bed of steamed cabbage.", price: '15.99', category: 'chefSpecialties'});
// var grilledHalibut = new Entree();
// grilledHalibut.set({dish: 'Grilled Halibut', description: "Topped with Thai Roasted Chili sauce, onions, snow peas, mushrooms and bell peppers.", price: '17.99', category: 'chefSpecialties'});
// var basilDuck = new Entree();
// basilDuck.set({dish: 'Basil Duck', description: "Half of a crispy roasted duck topped with chili and basil sauce.", price: '21.99', category: 'chefSpecialties'});
//
// var thaiIcedTea = new Entree();
// thaiIcedTea.set({dish: 'Thai Iced Tea', price: '2.99', category: 'drinks'});
// var coke = new Entree();
// coke.set({dish: 'Coca-cola Products', price: '1.99', category: 'drinks'});
// var jasmineHotTea = new Entree();
// jasmineHotTea.set({dish: 'Jasmine Hot Tea', price: '1.99', category: 'drinks'});
// var coffee = new Entree();
// coffee.set({dish: 'Coffee', price: '1.99', category: 'drinks'});

// var entreeCollection = new EntreeCollection();

// entreeCollection.fetch().done(function(){
//   console.log('length', entreeCollection.length);
// });

// entreeCollection.fetch().done(function(){
//   entreeCollection.forEach(function(item){
//     console.log('here', item);
//     item.destroy();
//   })
// })





// entreeCollection.create(springRoll.toJSON());
// entreeCollection.create(basilRoll.toJSON());
// entreeCollection.create(dumplings.toJSON());
// entreeCollection.create(tomYumGoong.toJSON());
// entreeCollection.create(tomYumGai.toJSON());
// entreeCollection.create(padGarlic.toJSON());
// entreeCollection.create(spicyCrispy.toJSON());
// entreeCollection.create(padPrigKhing.toJSON());
// entreeCollection.create(padThai.toJSON());
// entreeCollection.create(padSeeEwe.toJSON());
// entreeCollection.create(massamonCurry.toJSON());
// entreeCollection.create(grilledTuna.toJSON());
// entreeCollection.create(grilledHalibut.toJSON());
// entreeCollection.create(basilDuck.toJSON());
// entreeCollection.create(thaiIcedTea.toJSON());
// entreeCollection.create(coke.toJSON());
// entreeCollection.create(jasmineHotTea.toJSON());
// entreeCollection.create(coffee.toJSON());

module.exports = {
  Entree,
  Order,
  OrderCollection,
  EntreeCollection
};
