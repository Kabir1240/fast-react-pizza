// import { getAddress } from "../../services/apiGeocoding";

import { createSlice } from "@reduxjs/toolkit"

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

interface UpdateNameAction {
  payload: string
}

type UserAction = UpdateNameAction

interface UserState {
  username: string
}

const initialState: UserState = {
  username: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state: UserState, action: UpdateNameAction) {
      state.username = action.payload
    },
  },
})

export const { updateName } = userSlice.actions;
export type {UserState, UserAction}
export default userSlice.reducer;
