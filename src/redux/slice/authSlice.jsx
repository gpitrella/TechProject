import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: null,
    idToken: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      AsyncStorage.setItem('userEmail', JSON.stringify(action.payload));
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload;
      AsyncStorage.setItem('userToken', JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      console.log('Clearing user');
      state.user = null; 
      state.idToken = null;
      AsyncStorage.removeItem('userEmail');
      AsyncStorage.removeItem('userToken');
      console.log('User', state.user);
      console.log('Idtoken:', state.idToken);
    },
  },
});

export const { setIdToken, setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;