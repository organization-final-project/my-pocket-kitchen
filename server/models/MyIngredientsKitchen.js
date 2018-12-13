const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MyIngredientKitchen = new Schema({
  nameIngredient: String,
  typeStorage: {type:String ,enum: ["fridge", "pantry"]},
  idUser: { type: Schema.Types.ObjectId, ref:'User'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const MyIngredient = mongoose.model('MyIngredient', MyIngredientKitchen);
module.exports = MyIngredient;