import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  VehiclesCart: [],
};

const ordervehicleCart = createSlice({
  name: "ordervehicleCart",
  initialState: initialState,
  reducers: {
    addvehicleToCart: (state, action: PayloadAction<any>) => {
      state.VehiclesCart.push(action.payload);
    },
    removevehicleFromCart: (state, action: PayloadAction<any>) => {
      state.VehiclesCart = state.VehiclesCart.filter(
        (vehicle: any) => vehicle.id !== action.payload
      );
    },
    updatevehiclePriceFromCart: (state, action: PayloadAction<any>) => {
      state.VehiclesCart = state.VehiclesCart.map((vehicle: any) => {
        if (vehicle.id === action.payload.id) {
          vehicle.price = action.payload.price;
        }
        return vehicle;
      });
    },
    resetOrdervehicleCart: (state) => {
      state.VehiclesCart = [];
    },
  },
});

export const {
  addvehicleToCart,
  removevehicleFromCart,
  updatevehiclePriceFromCart,
  resetOrdervehicleCart,
} = ordervehicleCart.actions;
export default ordervehicleCart.reducer;
