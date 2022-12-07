import { configureStore} from "@reduxjs/toolkit";
import dashboardSlice from './dashboardSlice';

export default configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer
    },
})
