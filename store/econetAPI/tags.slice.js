import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_wordpress_taxonomy_create_tag_create = createAsyncThunk(
  "tags/modules_wordpress_taxonomy_create_tag_create",
  async payload => {
    const response = await apiService.modules_wordpress_taxonomy_create_tag_create(
      payload
    )
    return response.data
  }
)
export const modules_wordpress_taxonomy_edit_tag_create = createAsyncThunk(
  "tags/modules_wordpress_taxonomy_edit_tag_create",
  async payload => {
    const response = await apiService.modules_wordpress_taxonomy_edit_tag_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_wordpress_taxonomy_create_tag_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_wordpress_taxonomy_create_tag_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_taxonomy_create_tag_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_taxonomy_edit_tag_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_wordpress_taxonomy_edit_tag_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_taxonomy_edit_tag_create.rejected,
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
  modules_wordpress_taxonomy_create_tag_create,
  modules_wordpress_taxonomy_edit_tag_create,
  slice: tagsSlice
}
