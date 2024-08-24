// cartActions.js

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    TOGGLE_CART_ITEM_SELECTION,
    TOGGLE_BULK_SELECTION,
    INCREMENT_ITEM_QUANTITY,
    DECREMENT_ITEM_QUANTITY
  } from '../constants/cartTypes';
  
  export const addToCart = (animal) => {
    return (dispatch, getState) => {
        const state = getState();
        const cartItems = state.cartReducer.items;
        const existingItem = cartItems.find(item => item.id === animal.id);
        const price = animal.package?.pkg_type?.toLowerCase() === "waqf" ? animal?.price_per_unit : animal?.actual_price;
 
debugger;

        if (existingItem != undefined) {
            // Item exists, update its quantity and price
            const availableStock = existingItem.available_stock;
            // const newQuantity = Math.min(animal.quantity + existingItem.quantity, availableStock);

            let newQuantity =0;
            if (animal.package?.pkg_type?.toLowerCase() !== "waqf") {
              newQuantity = Math.min(animal.quantity  + existingItem.quantity, availableStock);
            } else {
              newQuantity =animal.quantity + existingItem.quantity;
            }

            if (newQuantity > existingItem.quantity) {
                const updatedItem = {
                    ...existingItem,
                    quantity: newQuantity,
                    price: newQuantity * parseInt(price)
                    // price: newQuantity * parseInt(existingItem.package.animal.price)
                };

                // Dispatch an action to update the item
                dispatch({
                    type: ADD_TO_CART,
                    payload: updatedItem
                });
            }
        } else {
            // Item does not exist, add as new
            // const quantityToAdd = Math.min(animal.quantity, animal.available_stock);
            let quantityToAdd = 0;
            if (animal.package?.pkg_type?.toLowerCase() !== "waqf") {
              quantityToAdd =Math.min(animal.quantity, animal.available_stock)
            } else {
              quantityToAdd =animal.quantity 
            }

            if (quantityToAdd > 0) {
                dispatch({
                    type: ADD_TO_CART,
                    payload: {
                        ...animal,
                        quantity: quantityToAdd,
                        price: quantityToAdd * parseInt(price)
                        // price: quantityToAdd * parseInt(animal.package.animal.price)
                    }
                });
            }
        }
    };
};

  
  export const removeFromCart = (animalId) => ({
    type: REMOVE_FROM_CART,
    payload: animalId
  });

  
  export const toggleCartItemSelection = (animalId) => ({
    type: TOGGLE_CART_ITEM_SELECTION,
    payload: animalId
  });
  
  export const toggleBulkSelection = (animalType, isSelected) => ({
    type: TOGGLE_BULK_SELECTION,
    payload: { animalType, isSelected }
});
// cartActions.js

export const incrementItemQuantity = (itemId) => ({
  type: INCREMENT_ITEM_QUANTITY,
  payload: itemId
});

export const decrementItemQuantity = (itemId) => ({
  type: DECREMENT_ITEM_QUANTITY,
  payload: itemId
});
