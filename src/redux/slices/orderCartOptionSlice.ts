import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  foodsuppliesData: [],
  equipmentsData: [],
};

const requestCartOptions = createSlice({
  name: "requestOptions",
  initialState: initialState,
  reducers: {
    setFoodSuppliesData: (state, action: PayloadAction<any>) => {
      const foodsuppliesStock = action.payload.foodsuppliesData;
      const foodsuppliesCart = action.payload.foodsuppliesCart;
      // Update each stock_quantity of productsData on from productsCart

      const updatedFoodSuppliesStock = foodsuppliesStock
        ? foodsuppliesStock.map((stockFoodSupply: any) => {
            const cartFoodSupply = foodsuppliesCart.find(
              (foodsupply: any) =>
                foodsupply.foodsupply_id === stockFoodSupply.id
            );
            if (cartFoodSupply) {
              return {
                ...stockFoodSupply,
                stock_quantity:
                  stockFoodSupply.stock_quantity - cartFoodSupply.quantity,
              };
            }
            return stockFoodSupply;
          })
        : [];

      state.foodsuppliesData = updatedFoodSuppliesStock;
    },
    setEquipmentsData: (state, action: PayloadAction<any>) => {
      const equipmentsStock = action.payload.equipmentsData;
      const equipmentsCart = action.payload.equipmentsCart;

      const updatedEquipmentsStock = equipmentsStock
        ? equipmentsStock.map((stockEquipment: any) => {
            const cartEquipment = equipmentsCart.find(
              (equipment: any) => equipment.equipment_id === stockEquipment.id
            );
            if (cartEquipment) {
              return {
                ...stockEquipment,
                stock_quantity:
                  stockEquipment.stock_quantity - cartEquipment.quantity,
              };
            }
            return stockEquipment;
          })
        : [];

      state.equipmentsData = updatedEquipmentsStock;
    },
  },
});

export const { setFoodSuppliesData, setEquipmentsData } =
  requestCartOptions.actions;
export default requestCartOptions.reducer;
