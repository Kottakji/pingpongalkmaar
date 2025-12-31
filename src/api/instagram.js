const cache = new Map();

/**
 * @typedef {Object} InstagramPost
 * @property {string} type - The type of Instagram post (e.g., "Sidecar" for multi-image posts)
 * @property {string} shortcode - Instagram's unique identifier for the post
 * @property {string} caption - The full caption text of the post, including emojis and formatting
 * @property {string} hashtags - Comma-separated list of hashtags used in the post
 * @property {string} mentions - Comma-separated list of user mentions in the post (empty string if none)
 * @property {string} url - Full URL to the Instagram post
 * @property {string} image - Base64-encoded JPEG image data (truncated in example)
 * @property {string} alt - Alternative text description for the image
 * @property {string} date - ISO 8601 formatted date string of when the post was published
 * @property {number} id - Unique database identifier for this record
 * @property {string} createdAt - ISO 8601 formatted timestamp of when this record was created in the database
 * @property {string} updatedAt - ISO 8601 formatted timestamp of when this record was last updated in the database
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