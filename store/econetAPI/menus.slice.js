import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_wordpress_menu_create_navigation_menu_create = createAsyncThunk(
  "menus/modules_wordpress_menu_create_navigation_menu_create",
  async payload => {
    const response = await apiService.modules_wordpress_menu_create_navigation_menu_create(
      payload
    )
    return response.data
  }
)
export const modules_wordpress_menu_update_navigation_menu_create = createAsyncThunk(
  "menus/modules_wordpress_menu_update_navigation_menu_create",
  async payload => {
    const response = await apiService.modules_wordpress_menu_update_navigation_menu_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const menusSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_wordpress_menu_create_navigation_menu_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_wordpress_menu_create_navigation_menu_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_menu_create_navigation_menu_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_menu_update_navigation_menu_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_wordpress_menu_update_navigation_menu_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_menu_update_navigation_menu_create.rejected,
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
  modules_wordpress_menu_create_navigation_menu_create,
  modules_wordpress_menu_update_navigation_menu_create,
  slice: menusSlice
}
