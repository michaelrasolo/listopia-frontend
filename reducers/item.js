import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    selectedItem: {
      _id:null,
      itemName: null,
      image: null,
      url: null,
      price: null,
      dealer: null,
      booked: false,
      desc: null,
      gifter: null,
      email: null,
      message: null,
      category: null,
    },
  },
};

export const itemSlice = createSlice({
  name: "item",

  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.value.selectedItem = {
        ...state.value.selectedItem,
        _id: action.payload._id,
        itemName: action.payload.itemName,
        image: action.payload.image,
        url: action.payload.url,
        price: action.payload.price,
        dealer: action.payload.dealer,
        booked: action.payload.booked,
        desc: action.payload.desc,
        gifter: action.payload.gifter,
        email: action.payload.email,
        message: action.payload.message,
        category: action.payload.category,
      };
    },
    releaseItem: (state) => {
      state.value.selectedItem = {
        _id:null,
        itemName: null,
        image: null,
        url: null,
        price: null,
        dealer: null,
        booked: false,
        desc: null,
        gifter: null,
        email: null,
        message: null,
        category: null,
      };
    },
  },
});

export const { selectItem, releaseItem } = itemSlice.actions;
export default itemSlice.reducer;
