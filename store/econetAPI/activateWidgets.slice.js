import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_wordpress_sites_activate_widget_create = createAsyncThunk(
  "activateWidgets/modules_wordpress_sites_activate_widget_create",
  async payload => {
    const response = await apiService.modules_wordpress_sites_activate_widget_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const activateWidgetsSlice = createSlice({
  name: "activateWidgets",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_wordpress_sites_activate_widget_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_wordpress_sites_activate_widget_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_sites_activate_widget_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_wordpress_sites_activate_widget_create,
  slice: activateWidgetsSlice
}
