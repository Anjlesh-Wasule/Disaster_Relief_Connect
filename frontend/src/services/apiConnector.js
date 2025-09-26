import axios from "axios";
import { toast } from "react-toastify";

const apiConnector = async function ({
  method = "get",
  url,
  data = null,
  headers = null,
}) {
  // Initialize headers if not provided
  headers = headers || {};

  // Add authorization token if available
  const token = sessionStorage.getItem("_token");
  if (token) {
    headers.Authorization = token;
  }

  try {
    // Log data properly
    console.log("Inside the connector data:", data);

    const response = await axios({
      method: method.toLowerCase(),
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      console.error("API Error - Response:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
      
      // Show specific error messages based on status code
      if (error.response.status === 401) {
        toast.error("Unauthorized - Please login again");
      } else if (error.response.status === 404) {
        toast.error("Resource not found");
      } else if (error.response.status >= 500) {
        toast.error("Server error - Please try again later");
      } else {
        toast.error(error.response.data.message || "Request failed");
      }
    } else if (error.request) {
      console.error("API Error - No Response:", error.request);
      toast.error("Network error - Please check your connection");
    } else {
      console.error("API Error - Setup:", error.message);
      toast.error("Request setup failed");
    }

    // Create enhanced error object
    const apiError = new Error(error.message || "API request failed");
    apiError.isAxiosError = true;
    apiError.config = { method, url, data, headers };
    apiError.response = error.response || null;
    apiError.request = error.request || null;
    
    throw apiError;
  }
};

export default apiConnector;

// // Import necessary dependencies
// import axios from "axios";
// import { toast } from "react-toastify";

// // Create an async function for making API requests
// const apiConnector = async function ({
//   method = "get", // HTTP request method (default is GET)
//   url, // URL for the API endpoint
//   data, // Request body data (default is null)
//   headers = null, // Custom headers for the request (default is null)
// }) {
//   // Check if a JWT token is stored in sessionStorage and set it as a default header
//   if (sessionStorage.getItem("_token")) {
//     if (headers) {
//       headers += {
//         Authorization: sessionStorage.getItem("_token"),
//       };
//     } else {
//       headers = {
//         Authorization: sessionStorage.getItem("_token"),
//       };
//     }
//   }

//   try {
//     // Make the API request using Axios

//     console.log("Inside the connector data: " + data);

//     const response = await axios({
//       method: method,
//       url: url,
//       data,
//       headers: headers,
//     });
//     return response.data; // Return the response data
//   } catch (error) {
//     if (error.response) {
//       // Handle the case where the server responded with an error status code
//       console.log("Response data:", error.response.data);
//       console.log("Response status:", error.response.status);
//     } else if (error.request) {
//       // Handle the case where the request was made but no response was received
//       console.log("No response received. Network error.");
//       toast.error("Network error occurred.");
//     } else {
//       // Handle other types of errors
//       console.error("Error:", error.message);
//     }

//     // Create a custom error object to propagate the error information
//     const customError = new Error("API call failed");
//     customError.response = {
//       data: error.response ? error.response.data : null,
//       status: error.response ? error.response.status : null,
//     };
//     throw customError; // Throw the custom error to indicate API call failure
//   }
// };

// export default apiConnector; // Export the API connector function
