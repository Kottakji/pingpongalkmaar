const cache = new Map();

/**
 * @typedef {Object} InstagramPost
 * @property {string} id - Unique identifier for the post
 * @property {string} url - Direct URL to the Instagram post
 * @property {string} displayUrl - URL of the post's display image
 * @property {string} caption - Post caption/description text
 * @property {number} likesCount - Number of likes on the post
 * @property {number} commentsCount - Number of comments on the post
 * @property {number} timestamp - Unix timestamp of when the post was created
 * @property {string} ownerUsername - Username of the post owner
 * @property {string} ownerFullName - Full name of the post owner
 * @property {boolean} isVideo - Whether the post is a video
 * @property {number} [videoViewCount] - Number of video views (if applicable)
 * @property {string[]} hashtags - Array of hashtags used in the post
 * @property {string[]} mentions - Array of user mentions in the post
 * @property {string} locationName - Name of the tagged location
 * @property {Object} dimensions - Image/video dimensions
 * @property {number} dimensions.height - Height in pixels
 * @property {number} dimensions.width - Width in pixels
 */
export async function getInstagramPosts() {
  const response = await fetch(
    `https://n8n.kottak.nl/webhook/ppa-instgram-posts`
  );

  if (!response.ok) {
    console.error("Failed to get instagram posts");

    return [];
  }

  return await response.json();
}