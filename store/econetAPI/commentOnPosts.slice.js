import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_wordpress_comments_create_comment_on_post_create = createAsyncThunk(
  "commentOnPosts/modules_wordpress_comments_create_comment_on_post_create",
  async payload => {
    const response = await apiService.modules_wordpress_comments_create_comment_on_post_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const commentOnPostsSlice = createSlice({
  name: "commentOnPosts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_wordpress_comments_create_comment_on_post_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_wordpress_comments_create_comment_on_post_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_wordpress_comments_create_comment_on_post_create.rejected,
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
  modules_wordpress_comments_create_comment_on_post_create,
  slice: commentOnPostsSlice
}
