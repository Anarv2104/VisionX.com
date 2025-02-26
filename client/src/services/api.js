// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:5100/api/github',
// });

// // Login with GitHub
// export const loginWithGitHub = () => {
//     window.location.href = 'http://localhost:5100/api/github/login';
// };

// // Fetch GitHub repositories
// export const getUserRepos = async (accessToken) => {
//     const response = await api.get(`/repos?accessToken=${accessToken}`);
//     return response.data;
// };

// // Fetch contributions for a repository
// export const getRepoContributions = async (owner, repo, accessToken) => {
//     const response = await api.get(`/contributions/${owner}/${repo}?accessToken=${accessToken}`);
//     return response.data;
// };

// // Create project
// export const createProject = async (accessToken, projectName, visibility) => {
//     const response = await api.post('/github/create-project', {
//         accessToken,
//         projectName,
//         visibility,
//     });

//     return response.data;
// };

// // Extract GitHub Token from URL after login
// export const getGitHubTokenFromURL = () => {
//     const params = new URLSearchParams(window.location.search);
//     return params.get("token");
// };







// import axios from "axios";

// const api = axios.create({
//     baseURL: "http://localhost:5100/api/github",
// });

// // ✅ Login with GitHub
// export const loginWithGitHub = () => {
//     window.location.href = "http://localhost:5100/api/github/login";
// };

// // ✅ Fetch user-specific GitHub repositories
// export const getUserRepos = async (accessToken) => {
//     const response = await api.get(`/repos?accessToken=${accessToken}`);
//     return response.data;
// };

// // ✅ Fetch contributions for a repository
// export const getRepoContributions = async (owner, repo, accessToken) => {
//     const response = await api.get(`/contributions/${owner}/${repo}?accessToken=${accessToken}`);
//     return response.data;
// };

// // ✅ Create project on GitHub
// export const createProject = async (accessToken, projectName, visibility) => {
//     const response = await api.post("/github/create-project", {
//         accessToken,
//         projectName,
//         visibility,
//     });
//     return response.data;
// };

// // ✅ Extract GitHub Token from URL after login
// export const getGitHubTokenFromURL = () => {
//     const params = new URLSearchParams(window.location.search);
//     return params.get("token");
// };

// // ✅ 🔥 Fix: Add missing function to fetch predefined repositories
// export const getPredefinedRepos = async () => {
//     try {
//         const response = await api.get("/repos"); // Calls backend to fetch repositories
//         return response.data.repositories; // Returns an array of repositories
//     } catch (error) {
//         console.error("❌ Error fetching predefined repositories:", error.message);
//         return [];
//     }
// };










// import axios from "axios";

// const api = axios.create({
//     baseURL: "http://localhost:5100/api/github",
// });

// // ✅ Login with GitHub
// export const loginWithGitHub = () => {
//     window.location.href = "http://localhost:5100/api/github/login";
// };

// // ✅ Fetch user-specific GitHub repositories
// export const getUserRepos = async (accessToken) => {
//     const response = await api.get(`/repos?accessToken=${accessToken}`);
//     return response.data;
// };

// // ✅ Fetch contributions for a repository
// export const getRepoContributions = async (owner, repo, accessToken) => {
//     const response = await api.get(`/contributions/${owner}/${repo}?accessToken=${accessToken}`);
//     return response.data;
// };

// // ✅ Create project on GitHub
// export const createProject = async (accessToken, projectName, visibility) => {
//     const response = await api.post("/github/create-project", {
//         accessToken,
//         projectName,
//         visibility,
//     });
//     return response.data;
// };

// // ✅ Extract GitHub Token from URL after login
// export const getGitHubTokenFromURL = () => {
//     const params = new URLSearchParams(window.location.search);
//     return params.get("token");
// };

// // ✅ 🔥 Fix: Add missing function to fetch predefined repositories
// export const getPredefinedRepos = async () => {
//     try {
//         const response = await api.get("/repos"); // Calls backend to fetch repositories
//         return response.data.repositories; // Returns an array of repositories
//     } catch (error) {
//         console.error("❌ Error fetching predefined repositories:", error.message);
//         return [];
//     }
// };











import axios from "axios";

// ✅ API Base URL
const api = axios.create({
    baseURL: "http://localhost:5100/api/github",
});

// ✅ Login with GitHub (Redirects to OAuth)
export const loginWithGitHub = () => {
    window.location.href = "http://localhost:5100/api/github/login";
};

// ✅ Extract GitHub Token from URL after login
export const getGitHubTokenFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("token");
};

// ✅ Fetch user-specific GitHub repositories
export const getUserRepos = async (accessToken) => {
    try {
        const response = await api.get(`/repos`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response.data.repositories;
    } catch (error) {
        console.error("❌ Error fetching user repositories:", error.message);
        return [];
    }
};

// ✅ Fetch predefined repositories (For Dashboard)
export const getPredefinedRepos = async () => {
    try {
        const response = await api.get("/repos"); // Calls backend to fetch predefined repos
        return response.data.repositories;
    } catch (error) {
        console.error("❌ Error fetching predefined repositories:", error.message);
        return [];
    }
};

// ✅ Fetch contributions for a specific repository
export const getRepoContributions = async (owner, repo, accessToken) => {
    try {
        const response = await api.get(`/contributions/${owner}/${repo}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response.data;
    } catch (error) {
        console.error("❌ Error fetching contributions:", error.message);
        return [];
    }
};

// ✅ Create project on GitHub
export const createProject = async (accessToken, projectName, visibility) => {
    try {
        const response = await api.post("/create-project", {
            projectName,
            visibility,
        }, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response.data;
    } catch (error) {
        console.error("❌ Error creating project:", error.message);
        return null;
    }
};