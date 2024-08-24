// cartReducers.js

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_CART_ITEM_SELECTION,
  TOGGLE_BULK_SELECTION,
  INCREMENT_ITEM_QUANTITY,
    DECREMENT_ITEM_QUANTITY
} from "../constants/cartTypes";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );
      const existingItemindex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      console.log(existingItemindex);
      debugger;

      if (existingItem !== undefined) {
        // If the item already exists in the cart, update the quantity
        // const existingItem = state.items[existingItemIndex];
        // const quantityToAdd = Math.min(newItem.quantity, existingItem.available_stock - existingItem.quantity);
        let quantityToAdd = 0;
        if (newItem.package?.pkg_type?.toLowerCase() !== "waqf") {
          quantityToAdd =Math.min(newItem.quantity, existingItem.available_stock - existingItem.quantity);
        } else {
          quantityToAdd =newItem.quantity
        }
        if (quantityToAdd > 0) {
          const updatedItem = {
            ...existingItem,
            quantity: quantityToAdd,
            price: newItem.price // Update price if necessary
          };
    
          // Replace the existingItem in the items array with the updatedItem
          const updatedItems = state.items.map(item => 
            item.id === updatedItem.id ? updatedItem : item
          );
    
          return {
            ...state,
            items: updatedItems,
            totalPrice: state.totalPrice + quantityToAdd * newItem.price,
          };
        } else {S
          return state; // No change if quantity to add is 0 or negative
        }
      } else {
        // If the item is not in the cart, add it
        const updatedItem = {
          ...newItem,
          selected: state.items.length === 0 // Select if it's the first item
        };
        return {
          ...state,
          items: [...state.items, updatedItem],
          totalPrice: state.totalPrice + newItem.quantity * newItem.price,
          
        };
      }
    }

    case REMOVE_FROM_CART: {
      const animalId = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== animalId);
      const removedItem = state.items.find((item) => item.id === animalId);
      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - removedItem.quantity * removedItem.price,
      };
    }

    // case TOGGLE_CART_ITEM_SELECTION: {
    //   const animalId = action.payload;
    //   const updatedItems = state.items.map((item) => {
    //     if (item.id === animalId) {
    //       return {
    //         ...item,
    //         selected: !item.selected,
    //       };
    //     }
    //     return item;
    //   });
    //   return {
    //     ...state,
    //     items: updatedItems,
    //   };
    // }
    case TOGGLE_CART_ITEM_SELECTION: {
      const animalId = action.payload;
      const updatedItems = state.items.map((item) => ({
        ...item,
        selected: item.id === animalId,
      }));
      return {
        ...state,
        items: updatedItems,
      };
    }
    
    case TOGGLE_BULK_SELECTION: {
      const { animalType, isSelected } = action.payload;
      const updatedItems = state.items.map((item) => {
        if (item.package.name.toLowerCase() === animalType) {
          return {
            ...item,
            selected: isSelected,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };
    }

    case INCREMENT_ITEM_QUANTITY: {
      debugger;
      const updatedItems = state.items.map(item => {
        const canIncreaseQuantity = item.available_stock ? item.quantity < item.available_stock : true;

        if (item.id === action.payload && canIncreaseQuantity) {
          const pricePerUnit = item?.actual_price ? parseInt(item?.actual_price) : parseInt(item?.price_per_unit);   

          return {...item, quantity: item.quantity + 1, price: (item.quantity + 1) * pricePerUnit};
        }
        return item;
      });
      const newTotalPrice = updatedItems.reduce((acc, item) => acc + item.price, 0);
      return {...state, items: updatedItems, totalPrice: newTotalPrice};
    }

    case DECREMENT_ITEM_QUANTITY: {
      debugger;
      const updatedItems = state.items.map(item => {
        const canIncreaseQuantity = item.available_stock ? item.quantity < item.available_stock : true;

        if (item.id === action.payload && canIncreaseQuantity) {// Ensures quantity does not fall below 1
          const pricePerUnit = item?.actual_price ? parseInt(item?.actual_price) : parseInt(item?.price_per_unit);   
          if(item.quantity !=1)
          {
            return {...item, quantity: item.quantity - 1, price: (item.quantity - 1) * pricePerUnit};
          }
        }
        return item;
      });
      const newTotalPrice = updatedItems.reduce((acc, item) => acc + item.price, 0);
      return {...state, items: updatedItems, totalPrice: newTotalPrice};
    }
    
    default:
      return state;
  }
};

export default cartReducer;
