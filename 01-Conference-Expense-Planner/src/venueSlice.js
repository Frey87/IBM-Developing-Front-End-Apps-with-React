import { createSlice } from "@reduxjs/toolkit";

import conferenceRoom from "./assets/conference-room.jpg";
import auditorium from "./assets/auditorium.jpg";
import presentationRoom from "./assets/presentation-room.jpg";
import largeMeetingRoom from "./assets/large-meeting-room.jpg";
import smallMeetingRoom from "./assets/small-meeting-room.jpg";

export const venueSlice = createSlice({
  name: "venue",

  initialState: [
    {
      img: conferenceRoom,
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: auditorium,
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: presentationRoom,
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: largeMeetingRoom,
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: smallMeetingRoom,
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  ],

  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;

      if (state[index]) {
        if (
          state[index].name === "Auditorium Hall (Capacity:200)" &&
          state[index].quantity >= 3
        ) {
          return;
        }

        state[index].quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const { payload: index } = action;

      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
} = venueSlice.actions;

export default venueSlice.reducer;