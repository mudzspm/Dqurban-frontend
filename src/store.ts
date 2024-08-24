import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
    animalInventoryReducer,
    countryReducer,
    stateReducer,
    regionReducer,
    animalTypesReducer,
    cartReducer,
    orderReducer,
    userReducer,
    placeOrderReducer,
    feedlotReducer,
    participantReducer,
    transactionsReducer,
    transactionsByIdReducer,
    signUpReducer,
    masterPackagesReducer,
    qurbanCalandarReducer,
    waqfReducer,
    installationPaynowReducer
    // @ts-ignore
} from './context/reducers';

// Define the type of the root reducer's state
const rootReducer = combineReducers({
    animalInventoryReducer,
    countryReducer,
    stateReducer,
    regionReducer,
    animalTypesReducer,
    cartReducer,
    orderReducer,
    userReducer,
    placeOrderReducer,
    feedlotReducer,
    participantReducer,
    transactionsReducer,
    transactionsByIdReducer,
    signUpReducer,
    masterPackagesReducer,
    qurbanCalandarReducer,
    waqfReducer,
    installationPaynowReducer
});

// Create a type that matches the root reducer's output
export type RootState = ReturnType<typeof rootReducer>;

// Define the persist configuration, ensuring it adheres to the `PersistConfig` type
const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
    whitelist: ['cartReducer','participantReducer','transactionsByIdReducer'], // Reducers you want to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// Configure and create the store with proper typing
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

// Create and export the persistor
export const persistor = persistStore(store);

// Type for `AppDispatch` to infer dispatch typing
export type AppDispatch = typeof store.dispatch;