import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './feactures/theme/darkModeSlice'

/**
 * Store configuration
 */
export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
    }
})