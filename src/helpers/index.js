/**
 * 
 * @param {String} html a string of an html code 
 * @returns {String} parsed string of sanitized html code
 */
export const sanitizeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.documentElement.textContent
}