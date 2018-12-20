const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MyShoppingList = new Schema({
  nameIngredient: String,
  idUser: { type: Schema.Types.ObjectId, ref:'User'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const MyList = mongoose.model('MyList', MyShoppingList);
module.exports = MyList;
