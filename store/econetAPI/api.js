import axios from "axios"
const econetAPI = axios.create({
  baseURL: "https://econet-45345.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return econetAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return econetAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return econetAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return econetAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return econetAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return econetAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return econetAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return econetAPI.post(`/rest-auth/logout/`)
}
function modules_privacy_policy_list(payload) {
  return econetAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return econetAPI.post(`/modules/privacy-policy/`, payload)
}
function rest_auth_registration_create(payload) {
  return econetAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return econetAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return econetAPI.post(`/rest-auth/password/change/`, payload)
}
function modules_privacy_policy_retrieve(payload) {
  return econetAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return econetAPI.put(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_partial_update(payload) {
  return econetAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload)
}
function modules_privacy_policy_destroy(payload) {
  return econetAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return econetAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function modules_wordpress_posts_create_post_create(payload) {
  return econetAPI.post(`/modules/wordpress/posts/create-post/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return econetAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return econetAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function modules_wordpress_follow_follow_blog_create(payload) {
  return econetAPI.post(`/modules/wordpress/follow/follow-blog/`)
}
function modules_wordpress_auth_get_auth_token_create(payload) {
  return econetAPI.post(`/modules/wordpress/auth/get-auth-token/`)
}
function modules_wordpress_taxonomy_create_tag_create(payload) {
  return econetAPI.post(`/modules/wordpress/taxonomy/create-tag/`, payload)
}
function modules_wordpress_follow_unfollow_blog_create(payload) {
  return econetAPI.post(`/modules/wordpress/follow/unfollow-blog/`)
}
function modules_wordpress_posts_edit_post_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/posts/${payload.id}/edit-post/`,
    payload
  )
}
function modules_wordpress_posts_like_post_create(payload) {
  return econetAPI.post(`/modules/wordpress/posts/${payload.id}/like-post/`)
}
function modules_wordpress_stats_get_site_stats_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/stats/get-site-stats/`)
}
function modules_wordpress_sites_activate_widget_create(payload) {
  return econetAPI.post(`/modules/wordpress/sites/activate-widget/`, payload)
}
function modules_wordpress_posts_unlike_post_create(payload) {
  return econetAPI.post(`/modules/wordpress/posts/${payload.id}/unlike-post/`)
}
function modules_wordpress_taxonomy_edit_tag_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/taxonomy/${payload.id}/edit-tag/`,
    payload
  )
}
function modules_wordpress_users_delete_user_create(payload) {
  return econetAPI.post(`/modules/wordpress/users/${payload.id}/delete-user/`)
}
function modules_wordpress_posts_get_multiple_post_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/posts/get-multiple-post/`)
}
function modules_wordpress_posts_restore_post_create(payload) {
  return econetAPI.post(`/modules/wordpress/posts/${payload.id}/restore-post/`)
}
function modules_wordpress_stats_get_site_followers_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/stats/get-site-followers/`)
}
function modules_wordpress_taxonomy_create_category_create(payload) {
  return econetAPI.post(`/modules/wordpress/taxonomy/create-category/`, payload)
}
function modules_wordpress_taxonomy_delete_tag_create(payload) {
  return econetAPI.post(`/modules/wordpress/taxonomy/${payload.id}/delete-tag/`)
}
function modules_wordpress_users_get_multiple_users_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/users/get-multiple-users/`)
}
function modules_wordpress_stats_get_post_views_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/stats/${payload.id}/get-post-views/`)
}
function modules_wordpress_comments_edit_comment_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/comments/${payload.id}/edit-comment/`,
    payload
  )
}
function modules_wordpress_comments_like_comment_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/comments/${payload.id}/like-comment/`
  )
}
function modules_wordpress_posts_delete_multiple_post_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/posts/delete-multiple-post/`,
    payload
  )
}
function modules_wordpress_menu_create_navigation_menu_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/menu/create-navigation-menu/`,
    payload
  )
}
function modules_wordpress_reader_unsubscribe_tag_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/reader/${payload.id}/unsubscribe-tag/`
  )
}
function modules_wordpress_taxonomy_edit_category_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/taxonomy/${payload.id}/edit-category/`,
    payload
  )
}
function modules_wordpress_comments_delete_comment_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/comments/${payload.id}/delete-comment/`
  )
}
function modules_wordpress_comments_unlike_comment_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/comments/${payload.id}/unlike-comment/`
  )
}
function modules_wordpress_menu_get_all_navigation_menu_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/menu/get-all-navigation-menu/`)
}
function modules_wordpress_posts_get_list_of_likes_retrieve(payload) {
  return econetAPI.get(
    `/modules/wordpress/posts/${payload.id}/get-list-of-likes/`
  )
}
function modules_wordpress_reader_get_feed_details_retrieve(payload) {
  return econetAPI.get(
    `/modules/wordpress/reader/${payload.id}/get-feed-details/`
  )
}
function modules_wordpress_sites_deactivate_widget_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/sites/${payload.id}/deactivate-widget/`
  )
}
function modules_wordpress_stats_get_site_stats_summary_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/stats/get-site-stats-summary/`)
}
function modules_wordpress_insights_get_list_of_insights_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/insights/get-list-of-insights/`)
}
function modules_wordpress_posts_delete_single_post_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/posts/${payload.id}/delete-single-post/`
  )
}
function modules_wordpress_reader_subscribe_new_tag_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/reader/${payload.id}/subscribe-new-tag/`
  )
}
function modules_wordpress_taxonomy_delete_category_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/taxonomy/${payload.id}/delete-category/`
  )
}
function modules_wordpress_reader_get_default_reader_menu_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/reader/get-default-reader-menu/`)
}
function modules_wordpress_taxonomy_get_list_of_site_tags_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/taxonomy/get-list-of-site-tags/`)
}
function modules_wordpress_users_update_user_details_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/users/${payload.id}/update-user-details/`,
    payload
  )
}
function modules_wordpress_comments_get_single_comment_retrieve(payload) {
  return econetAPI.get(
    `/modules/wordpress/comments/${payload.id}/get-single-comment/`
  )
}
function modules_wordpress_insights_get_raw_data_graph_retrieve(payload) {
  return econetAPI.get(
    `/modules/wordpress/insights/${payload.id}/get-raw-data-graph/`
  )
}
function modules_wordpress_menu_delete_navigation_menu_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/menu/${payload.id}/delete-navigation-menu/`
  )
}
function modules_wordpress_menu_update_navigation_menu_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/menu/${payload.id}/update-navigation-menu/`,
    payload
  )
}
function modules_wordpress_sites_get_active_inactive_widgets_retrieve(payload) {
  return econetAPI.get(`/modules/wordpress/sites/get-active-inactive-widgets/`)
}
function modules_wordpress_comments_create_comment_on_post_create(payload) {
  return econetAPI.post(
    `/modules/wordpress/comments/${payload.id}/create-comment-on-post/`,
    payload
  )
}
function modules_wordpress_taxonomy_get_list_of_site_categories_retrieve(
  payload
) {
  return econetAPI.get(
    `/modules/wordpress/taxonomy/get-list-of-site-categories/`
  )
}
function modules_wordpress_reader_get_list_of_post_from_tag_retrieve(payload) {
  return econetAPI.get(
    `/modules/wordpress/reader/${payload.id}/get-list-of-post-from-tag/`
  )
}
function modules_wordpress_sites_get_rendered_shortcode_for_site_retrieve(
  payload
) {
  return econetAPI.get(
    `/modules/wordpress/sites/get-rendered-shortcode-for-site/`
  )
}
function modules_wordpress_posts_get_list_of_post_subscribers_retrieve(
  payload
) {
  return econetAPI.get(
    `/modules/wordpress/posts/${payload.id}/get-list-of-post-subscribers/`
  )
}
function modules_wordpress_freshly_pressed_get_freshly_pressed_posts_retrieve(
  payload
) {
  return econetAPI.get(
    `/modules/wordpress/freshly-pressed/get-freshly-pressed-posts/`
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  rest_auth_password_reset_confirm_create,
  modules_wordpress_posts_create_post_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  modules_wordpress_follow_follow_blog_create,
  modules_wordpress_auth_get_auth_token_create,
  modules_wordpress_taxonomy_create_tag_create,
  modules_wordpress_follow_unfollow_blog_create,
  modules_wordpress_posts_edit_post_create,
  modules_wordpress_posts_like_post_create,
  modules_wordpress_stats_get_site_stats_retrieve,
  modules_wordpress_sites_activate_widget_create,
  modules_wordpress_posts_unlike_post_create,
  modules_wordpress_taxonomy_edit_tag_create,
  modules_wordpress_users_delete_user_create,
  modules_wordpress_posts_get_multiple_post_retrieve,
  modules_wordpress_posts_restore_post_create,
  modules_wordpress_stats_get_site_followers_retrieve,
  modules_wordpress_taxonomy_create_category_create,
  modules_wordpress_taxonomy_delete_tag_create,
  modules_wordpress_users_get_multiple_users_retrieve,
  modules_wordpress_stats_get_post_views_retrieve,
  modules_wordpress_comments_edit_comment_create,
  modules_wordpress_comments_like_comment_create,
  modules_wordpress_posts_delete_multiple_post_create,
  modules_wordpress_menu_create_navigation_menu_create,
  modules_wordpress_reader_unsubscribe_tag_create,
  modules_wordpress_taxonomy_edit_category_create,
  modules_wordpress_comments_delete_comment_create,
  modules_wordpress_comments_unlike_comment_create,
  modules_wordpress_menu_get_all_navigation_menu_retrieve,
  modules_wordpress_posts_get_list_of_likes_retrieve,
  modules_wordpress_reader_get_feed_details_retrieve,
  modules_wordpress_sites_deactivate_widget_create,
  modules_wordpress_stats_get_site_stats_summary_retrieve,
  modules_wordpress_insights_get_list_of_insights_retrieve,
  modules_wordpress_posts_delete_single_post_create,
  modules_wordpress_reader_subscribe_new_tag_create,
  modules_wordpress_taxonomy_delete_category_create,
  modules_wordpress_reader_get_default_reader_menu_retrieve,
  modules_wordpress_taxonomy_get_list_of_site_tags_retrieve,
  modules_wordpress_users_update_user_details_create,
  modules_wordpress_comments_get_single_comment_retrieve,
  modules_wordpress_insights_get_raw_data_graph_retrieve,
  modules_wordpress_menu_delete_navigation_menu_create,
  modules_wordpress_menu_update_navigation_menu_create,
  modules_wordpress_sites_get_active_inactive_widgets_retrieve,
  modules_wordpress_comments_create_comment_on_post_create,
  modules_wordpress_taxonomy_get_list_of_site_categories_retrieve,
  modules_wordpress_reader_get_list_of_post_from_tag_retrieve,
  modules_wordpress_sites_get_rendered_shortcode_for_site_retrieve,
  modules_wordpress_posts_get_list_of_post_subscribers_retrieve,
  modules_wordpress_freshly_pressed_get_freshly_pressed_posts_retrieve
}
