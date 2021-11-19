import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import common from 'src/store/commonSlice';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
    configureStore({
        reducer: {
            common,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(),
        ...options,
    });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
