import baseURL from "../Api/BaseURL";

/**
 * Fetch data from an API using a GET request.
 *
 * @param {string} url - The API endpoint to send the request to.
 * @param {object} params - The query parameters to be sent with the request (optional).
 * @returns {object} - The response data from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
const fetchData = async (url, data) => {
  try {
    const response = await baseURL.get(url, { data });
    return response;
  } catch (error) {
    // Log the error or handle it as necessary
    throw error;
  }
};

/**
 * Send a POST request with image data using "multipart/form-data" format.
 *
 * @param {string} url - The API endpoint to send the request to.
 * @param {object} params - The form data (including images) to be sent in the request.
 * @returns {object} - The response from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
const postDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" }, // Required for sending images/files
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };

  try {
    const res = await baseURL.post(url, params, config);
    console.log("Status:", res.status); // Log the status of the response
    return res;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
};

/**
 * Send a POST request to insert data into the API.
 *
 * @param {string} url - The API endpoint to send the request to.
 * @param {object} data - The data to be sent in the request body.
 * @returns {object} - The response from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
const postData = async (url, data) => {
  try {
    const response = await baseURL.post(url, data);
    return response;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
};

/**
 * Delete data from the API via a DELETE request.
 *
 * @param {string} url - The API endpoint to send the request to.
 * @returns {object} - The response data from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
const deleteData = async (url) => {
  try {
    const response = await baseURL.delete(url);
    return response;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
};

/**
 * Update data with image via a PUT request.
 *
 * @param {string} url - The API endpoint to send the request to.
 * @param {object} params - The form data (including images) to be sent in the request.
 * @param {number} [timeout=10000] - Optional timeout for the request in milliseconds.
 * @returns {object} - The response data from the API.
 * @throws {Error} - Throws an error if the request fails.
 */

const UpdatetDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" }, // Required for sending images/files
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };

  try {
    const res = await baseURL.put(url, params, config);
    console.log("Status:", res.status); // Log the status of the response
    return res;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
};

/**
 * Update data via a PUT request.
 *
 * @param {string} url - The API endpoint to send the request to.
 * @returns {object} - The response data from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
const UpdateData = async (url) => {
  try {
    const response = await baseURL.put(url);
    return response;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
};

// Export the functions for use in other parts of the application
export {
  fetchData,
  postData,
  postDataWithImage,
  deleteData,
  UpdatetDataWithImage,
  UpdateData,
};
