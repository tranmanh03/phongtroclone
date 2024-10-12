import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergelevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

const commonConfig = {
    storage,
    stateReconciler: autoMergelevel2
}

const authConfig = {
    ...commonConfig,
    key: "auth",
    whitelist: ["isLoggedIn", "token"]
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer
})

export default rootReducer