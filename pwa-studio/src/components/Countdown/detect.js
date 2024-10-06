/**
 * Determine if the content has highlight or not
 *
 * @param content
 * @returns {boolean}
 */
export default function detectMyCustomType(content) {
    return /data-content-type=\"example_countdown/.test(content);
}
