import { createSlice } from "@reduxjs/toolkit";

export const logSignSlice = createSlice({
  name: "loginSignin",
  initialState: {
    allSignedIn: [],
    loggedIn: [],
    logMessage: "",
    signMessage: "",
  },
  reducers: {
    signIn(state, action) {
      const exist = state.allSignedIn.find(
        (user) =>
          user.userName === action.payload.userName &&
          user.password === action.payload.password
      );
      if (exist) {
        state.signMessage =
          "EMAIL or USERNAME are already in database.\nTry with another.";
      } else {
        state.allSignedIn.push({ ...action.payload });
        state.signMessage = `${action.payload.userName}, you are successfully registered.\n LOG IN and start shopping.`;
      }
    },

    logIn(state, action) {
      const exist = state.allSignedIn.find(
        (userInDatabase) =>
          userInDatabase.userName === action.payload.logUserName &&
          userInDatabase.password === action.payload.logPassword
      );

      if (state.loggedIn.length > 0) {
        state.logMessage =
          "You are alredy logged in!\nPlease go to shopping cart,\nlog out and try again.";
      } else if (exist) {
        exist.loggedIn = true;
        state.loggedIn.push(exist);
        state.logMessage = "You are successufuly logged in.";
      } else if (
        action.payload.logUserName.trim() === "" ||
        action.payload.logPassword.trim() === ""
      ) {
        state.logMessage = "Please fill all inputs!";
      } else {
        state.logMessage = "Username or password are incorrect!";
      }
    },
    logOut(state) {
      state.loggedIn = [];
      state.logMessage = "";
      state.signMessage = "";
    },
  },
});

export const { signIn, logIn, logOut } = logSignSlice.actions;
export default logSignSlice.reducer;
