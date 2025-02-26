// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${GITHUB_ORG}/repos`, {
//             headers: {
//                 Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding Access Token)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     console.log("🔹 Redirecting user to GitHub OAuth...");
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         console.log("✅ OAuth Code Received:", code);

//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         console.log("🔹 GitHub User Authenticated:", username);

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("❌ GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     console.log("🔹 Redirecting user to GitHub OAuth...");
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         console.log("✅ OAuth Code Received:", code);

//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         console.log("🔹 GitHub User Authenticated:", username);

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("❌ GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// module.exports = router;








// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     const token = req.headers.authorization?.split(" ")[1];  // ✅ Read token from header

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Missing access token" });
//     }

//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${token}`,
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;











// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     const token = process.env.GITHUB_ACCESS_TOKEN;  // ✅ Use the token from .env
//     if (!token) {
//     return res.status(401).json({ success: false, message: "GitHub access token is missing" });
// }

//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${token}`,
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { db } = require("../services/firebase");
// const { doc, setDoc, getDoc } = require("firebase/firestore");

// require("dotenv").config();
// const GITHUB_ORG = "mr-scientists"; // ✅
// const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// // 🔹 Step 1: Redirect to GitHub OAuth
// router.get("/login", (req, res) => {
//     const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
//     res.redirect(githubAuthURL);
// });

// // 🔹 Step 2: Handle OAuth Callback
// router.get("/callback", async (req, res) => {
//     const { code } = req.query;
//     if (!code) return res.status(400).json({ error: "Authorization code missing" });

//     try {
//         // Exchange code for GitHub access token
//         const tokenResponse = await axios.post(
//             "https://github.com/login/oauth/access_token",
//             { client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code },
//             { headers: { Accept: "application/json" } }
//         );

//         const accessToken = tokenResponse.data.access_token;
//         if (!accessToken) return res.status(400).json({ error: "Failed to obtain access token" });

//         // Fetch GitHub user details
//         const userResponse = await axios.get("https://api.github.com/user", {
//             headers: { Authorization: `token ${accessToken}` },
//         });

//         const githubUser = userResponse.data;
//         const username = githubUser.login;

//         // Store user data in Firebase (excluding accessToken)
//         const userRef = doc(db, "users", username);
//         await setDoc(userRef, {
//             githubUsername: username,
//             profileUrl: githubUser.html_url,
//             avatarUrl: githubUser.avatar_url,
//             linkedAt: new Date(),
//         });

//         // ✅ Generate a JWT with the access token
//         const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

//         // Redirect user to frontend with JWT token
//         res.redirect(`http://localhost:3000/dashboard?token=${jwtToken}`);
//     } catch (error) {
//         console.error("GitHub OAuth Error:", error.message);
//         res.status(500).json({ error: "GitHub Authentication Failed" });
//     }
// });

// // 🔹 Step 3: Get User GitHub Data
// router.get("/user", async (req, res) => {
//     const { username } = req.query;
//     if (!username) return res.status(400).json({ error: "Username required" });

//     try {
//         const userRef = doc(db, "users", username);
//         const userSnap = await getDoc(userRef);

//         if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

//         res.json(userSnap.data());
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch user data" });
//     }
// });

// router.get("/repos", async (req, res) => {
//     try {
//         const response = await axios.get(`https://api.github.com/user/repos`, {
//             headers: {
//                 Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // ✅ Ensuring token is correct
//                 Accept: "application/vnd.github.v3+json",
//             },
//         });

//         const repositories = response.data.map(repo => ({
//             id: repo.id,
//             name: repo.name,
//             description: repo.description,
//             html_url: repo.html_url,
//             language: repo.language,
//             stars: repo.stargazers_count,
//             forks: repo.forks_count
//         }));

//         res.json({ success: true, repositories });
//     } catch (error) {
//         console.error("❌ Error fetching GitHub repositories:", error.message);
//         res.status(500).json({ success: false, message: "Failed to fetch repositories" });
//     }
// });

// module.exports = router;












const express = require("express");
const router = express.Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { db } = require("../services/firebase");
const { doc, setDoc, getDoc } = require("firebase/firestore");

require("dotenv").config();
const GITHUB_ORG = "mr-scientists"; // ✅
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

// 🔹 Step 1: Redirect to GitHub OAuth
router.get("/login", (req, res) => {
    const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user,repo`;
    res.redirect(githubAuthURL);
});

router.get("/callback", async (req, res) => {
    const { code } = req.query;
    console.log("🔍 Received OAuth Code:", code);

    if (!code) {
        console.warn("❌ No authorization code received!");
        return res.status(400).json({ error: "Authorization code missing" });
    }

    try {
        const tokenResponse = await axios.post(
            "https://github.com/login/oauth/access_token",
            {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
            },
            {
                headers: { Accept: "application/json" },
            }
        );

        console.log("🔍 GitHub Token Response:", tokenResponse.data);

        const accessToken = tokenResponse.data.access_token;
        if (!accessToken) {
            console.warn("❌ Failed to obtain access token!");
            return res.status(400).json({ error: "Failed to obtain access token" });
        }

        // Fetch GitHub user details
        const userResponse = await axios.get("https://api.github.com/user", {
            headers: { Authorization: `token ${accessToken}` },
        });

        console.log("🔍 GitHub User Response:", userResponse.data);

        const githubUser = userResponse.data;
        const username = githubUser.login;

        // Generate JWT Token
        const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

        console.log("✅ Generated JWT Token:", jwtToken);

        // Redirect user to frontend with JWT
        res.redirect(`http://localhost:3000/github-link?token=${jwtToken}`);
    } catch (error) {
        console.error("GitHub OAuth Error:", error.message);
        res.status(500).json({ error: "GitHub Authentication Failed" });
    }
});

// 🔹 Step 3: Get User GitHub Data
router.get("/user", async (req, res) => {
    const { username } = req.query;
    if (!username) return res.status(400).json({ error: "Username required" });

    try {
        const userRef = doc(db, "users", username);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) return res.status(404).json({ error: "User not found" });

        res.json(userSnap.data());
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});

router.get("/repos", async (req, res) => {
    try {
        const response = await axios.get(`https://api.github.com/user/repos`, {
            headers: {
                Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // ✅ Ensuring token is correct
                Accept: "application/vnd.github.v3+json",
            },
        });

        const repositories = response.data.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count
        }));

        res.json({ success: true, repositories });
    } catch (error) {
        console.error("❌ Error fetching GitHub repositories:", error.message);
        res.status(500).json({ success: false, message: "Failed to fetch repositories" });
    }
});


router.get("/callback", async (req, res) => {
    const { code } = req.query;
    console.log("🔍 Received OAuth Code:", code);

    if (!code) {
        console.warn("❌ No authorization code received!");
        return res.status(400).json({ error: "Authorization code missing" });
    }

    try {
        const tokenResponse = await axios.post(
            "https://github.com/login/oauth/access_token",
            {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                code,
            },
            {
                headers: { Accept: "application/json" },
            }
        );

        console.log("🔍 GitHub Token Response:", tokenResponse.data);

        const accessToken = tokenResponse.data.access_token;
        if (!accessToken) {
            console.warn("❌ Failed to obtain access token!");
            return res.status(400).json({ error: "Failed to obtain access token" });
        }

        // Fetch GitHub user details
        const userResponse = await axios.get("https://api.github.com/user", {
            headers: { Authorization: `token ${accessToken}` },
        });

        console.log("🔍 GitHub User Response:", userResponse.data);

        const githubUser = userResponse.data;
        const username = githubUser.login;

        // Generate JWT Token
        const jwtToken = jwt.sign({ username, accessToken }, JWT_SECRET, { expiresIn: "24h" });

        console.log("✅ Generated JWT Token:", jwtToken);

        // Redirect user to frontend with JWT
        res.redirect(`http://localhost:3000/github-link?token=${jwtToken}`);
    } catch (error) {
        console.error("GitHub OAuth Error:", error.message);
        res.status(500).json({ error: "GitHub Authentication Failed" });
    }
});
module.exports = router;











