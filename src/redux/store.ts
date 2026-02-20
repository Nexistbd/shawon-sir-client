import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/authSliece";
import courseCartReducer from "./feature/slice/courseSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "@/api/baseApi";

const persisConfig = {
  key: "auth",
  storage,
};
const persistAnswersConfig = {
  key: "answers",
  storage,
};

const persistAuthReducer = persistReducer(persisConfig, authReducer);
// const persistAnswerReducer = persistReducer(
//   persistAnswersConfig,
//   // answerReducer,
// );

const rootReducer = combineReducers({
  auth: persistAuthReducer,
  courseCart: courseCartReducer,
  // answers: persistAnswerReducer, // Add answers reducer here
  [baseApi.reducerPath]: baseApi.reducer,
});

// const rootReducer = combineReducers({
//   auth: persistAuthReducer,

//   [baseApi.reducerPath]: baseApi.reducer,
// });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
