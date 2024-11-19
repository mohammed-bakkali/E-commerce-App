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
    const response = await baseURL.get(url, { data }); // or data
    return response;
  } catch (error) {
    // Log the error or handle it as necessary
    throw error;
  }
};

const fetchDatatoken = async (url, data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };
  try {
    const response = await baseURL.get(url, config);
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
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }, // Required for sending images/files
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };

  try {
    const res = await baseURL.post(url, params, config);
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
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Required for sending images/files
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };
  try {
    const response = await baseURL.post(url, data, config);

    return response;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
};

const postDataa = async (url, data) => {
  const config = { // Required for sending images/files
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };
  try {
    const response = await baseURL.post(url, data, config);

    return response;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
}

/**
 * Delete data from the API via a DELETE request.
 *
 * @param {string} url - The API endpoint to send the request to.
 * @returns {object} - The response data from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
// deleteData function
const deleteData = async (url) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Required for sending authorization token
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };

  try {
    const response = await baseURL.delete(url, config);
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
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Required for sending images/files
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };

  try {
    const res = await baseURL.put(url, params, config);
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
const UpdateData = async (url, body) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Required for sending images/files
    timeout: 10000, // Set a timeout of 10 seconds for the request
  };
  try {
    const response = await baseURL.put(url, body, config);
    console.log("Error response:", response); 
    return response;
  } catch (error) {
    // Log or handle the error as necessary
    throw error;
  }
};

// Export the functions for use in other parts of the application
export {
  fetchData,
  fetchDatatoken,
  postData,
  postDataWithImage,
  deleteData,
  UpdatetDataWithImage,
  UpdateData,
  postDataa,
};