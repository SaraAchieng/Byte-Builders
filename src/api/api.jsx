import axios from "axios";

// Base API configuration
const API_BASE_URL = "http://localhost:3000"; // Local development server URL

// 1. Create a centralized Axios client instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // Axios automatically rejects promises for non-2xx status codes
});

export const Project = {
  // GET /projects: Fetch all projects
  async getAll() {
    const response = await apiClient.get("/projects");
    return response.data;
  }, // GET /projects/{id}: Fetch a single project by ID

  async getById(id) {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  }, // NEW: Get up to 3 featured projects, sorted by completion date (newest first)

  async getFeatured(limit = 3) {
    try {
      // These parameters are standard for tools like json-server:
      // featured=true: Filters projects where the 'featured' property is true
      // _sort=completion_date: Sorts by the completion_date field
      // _order=desc: Orders the results descending (newest first)
      // _limit=X: Limits the number of results returned
      const params = {
        featured: true,
        _sort: "completion_date",
        _order: "desc",
        _limit: limit,
      };

      const response = await apiClient.get("/projects", { params });
      return response.data;
    } catch (error) {
      // Use your existing global error handler
      throw handleApiError(error);
    }
  },
};
export const TeamMember = {
  // GET /teamMembers: Fetch all team members
  async getAll() {
    const response = await apiClient.get("/teamMembers");
    return response.data;
  },
};


export const Service = {
  // GET /services: Fetch all services
  async getAll() {
    const response = await apiClient.get("/services");
    return response.data;
  },
};

export const ContactSubmission = {
  // POST /contactSubmissions: Submit a new contact form
  async submit(formData) {
    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      status: "pending", // Default status for a new submission
    };
    const response = await apiClient.post(
      "/contactSubmissions",
      submissionData
    );
    return response.data;
  },

  // GET /contactSubmissions: Fetch all submissions (typically for admin use)
  async getAll() {
    const response = await apiClient.get("/contactSubmissions");
    return response.data;
  },
};

// --- 3. Utility Functions ---

/**
 * Global error handler for Axios responses, providing structured error data.
 * @param {object} error - The error object thrown by Axios.
 */
export const handleApiError = (error) => {
  console.error("API Error:", error);

  // Check for network errors (no response received)
  if (error.code === "ERR_NETWORK") {
    return {
      success: false,
      message:
        "Network connection error or server is unreachable. Check if your local server is running on port 3000.",
    };
  }

  // Handle errors with HTTP response (4xx, 5xx status codes)
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;

    if (status === 404) {
      return { success: false, message: "Resource not found (404)." };
    }

    // Use detailed message from response body if available
    const detailedMessage =
      data?.message || data?.error || `Server responded with status ${status}.`;

    return {
      success: false,
      message: detailedMessage,
      status: status,
    };
  }

  // General errors (e.g., request setup failed)
  return {
    success: false,
    message: error.message || "An unknown error occurred during the API call.",
  };
};

/**
 * Simple health check to verify the API is reachable using a basic GET request.
 */
export const healthCheck = async () => {
  try {
    // Simplified check: GET /projects?_limit=1
    await apiClient.get("/projects", { params: { _limit: 1 } });
    return {
      status: "ok",
      message: "API is running successfully on localhost:3000",
    };
  } catch (error) {
    return {
      status: "error",
      message: `API is not accessible. ${handleApiError(error).message}`,
    };
  }
};

// Export all services as a single API object
export const API = {
  Project,
  TeamMember,
  Service,
  ContactSubmission,
  handleApiError,
  healthCheck,
};

export default API;
