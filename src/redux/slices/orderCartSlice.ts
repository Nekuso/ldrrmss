import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  foodsuppliesCart: [],
  equipmentsCart: [],
};

const orderCart = createSlice({
  name: "orderCart",
  initialState: initialState,
  reducers: {
    addFoodSupplyToCart: (state, action: PayloadAction<any>) => {
      state.foodsuppliesCart.push(action.payload);
    },
    addEquipmentToCart: (state, action: PayloadAction<any>) => {
      state.equipmentsCart.push(action.payload);
    },
    removeFoodSupplyFromCart: (state, action: PayloadAction<any>) => {
      state.foodsuppliesCart = state.foodsuppliesCart.filter(
        (foodsupply: any) => foodsupply.foodsupply_id !== action.payload
      );
    },
    removeEquipmentFromCart: (state, action: PayloadAction<any>) => {
      state.equipmentsCart = state.equipmentsCart.filter(
        (equipment: any) => equipment.equipment_id !== action.payload
      );
    },

    incrementFoodSupplyQuantity: (state, action: PayloadAction<any>) => {
      state.foodsuppliesCart = state.foodsuppliesCart.map((foodsupply: any) => {
        if (foodsupply.foodsupply_id === action.payload) {
          return { ...foodsupply, quantity: foodsupply.quantity + 1 };
        }
        return foodsupply;
      });
    },
    decrementFoodSupplyQuantity: (state, action: PayloadAction<any>) => {
      state.foodsuppliesCart = state.foodsuppliesCart
        .map((foodsupply: any) => {
          if (foodsupply.foodsupply_id === action.payload) {
            if (foodsupply.quantity === 1) {
              return null; // Remove the product from cart
            } else {
              return { ...foodsupply, quantity: foodsupply.quantity - 1 };
            }
          }
          return foodsupply;
        })
        .filter((foodsupply: any) => foodsupply !== null);
    },
    incrementEquipmentQuantity: (state, action: PayloadAction<any>) => {
      state.equipmentsCart = state.equipmentsCart.map((equipment: any) => {
        if (equipment.equipment_id === action.payload) {
          return { ...equipment, quantity: equipment.quantity + 1 };
        }
        return equipment;
      });
    },
    decrementEquipmentQuantity: (state, action: PayloadAction<any>) => {
      state.equipmentsCart = state.equipmentsCart
        .map((equipment: any) => {
          if (equipment.equipment_id === action.payload) {
            if (equipment.quantity === 1) {
              return null; // Remove the part from cart
            } else {
              return { ...equipment, quantity: equipment.quantity - 1 };
            }
          }
          return equipment;
        })
        .filter((equipment: any) => equipment !== null);
    },
    resetCart: (state) => {
      state.foodsuppliesCart = [];
      state.equipmentsCart = [];
      state.foodsuppliesTotalPrice = 0;
      state.equipmentsTotalPrice = 0;
    },
  },
});

export const {
  addFoodSupplyToCart,
  addEquipmentToCart,
  removeEquipmentFromCart,
  removeFoodSupplyFromCart,
  incrementFoodSupplyQuantity,
  decrementFoodSupplyQuantity,
  incrementEquipmentQuantity,
  decrementEquipmentQuantity,
  resetCart,
} = orderCart.actions;
export default orderCart.reducer;
