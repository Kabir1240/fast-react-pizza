import { getAddress } from "../../services/apiGeocoding";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", 
  async function () {
      // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  // PAYLOAD OF THE FULFILLED STATE
  return { position, address };
  }
)

interface UpdateNameAction {
  payload: string,
}

type UserAction = UpdateNameAction

interface UserState {
  username: string,
  status: string,
  position: {
    longitude: string,
    latitude: string,
  },
  address: string,
  error: string,
}

const initialState: UserState = {
  username: '',
  status: 'idle',
  position: {
    longitude: '',
    latitude: '',
  },
  address: '',
  error: '',
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state: UserState, action: UpdateNameAction) {
      state.username = action.payload;
    }
  },

  extraReducers: (builder) => 
    builder
      .addCase(fetchAddress.pending, (state: UserState) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state: UserState, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state: UserState, action) => {
        state.status = "error";
        console.log(action.error.message);
        state.error = "Error getting location data. Try again.";
      }),
});

export const { updateName } = userSlice.actions;
export type {UserState, UserAction, }
export default userSlice.reducer;
