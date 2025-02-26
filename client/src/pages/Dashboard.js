// import React, { useEffect, useState } from "react";
// import { getPredefinedRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // ✅ Extract token from URL if present
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get("token");

//         if (token) {
//             localStorage.setItem("authToken", token); // ✅ Store the token
//             navigate("/dashboard"); // ✅ Redirect to clean URL
//         }

//         // ✅ Fetch repositories
//         const fetchRepos = async () => {
//             setLoading(true);
//             const repos = await getPredefinedRepos();
//             setRepositories(repos);
//             setLoading(false);
//         };
//         fetchRepos();
//     }, [navigate]);

//     return (
//         <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-black text-white">
//             <h1 className="mt-4">Explore Open-Source Projects</h1>
//             <p className="text-muted">Contribute and earn rewards</p>

//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-md-4">
//                                 <div className="card bg-dark text-white border-light mb-4">
//                                     <div className="card-body">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>
//                                         <div className="d-flex justify-content-between">
//                                             <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
//                                                 View on GitHub
//                                             </a>
//                                             <button className="btn btn-success">Contribute</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;















// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";  // ✅ Correct API function
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // ✅ Extract token from localStorage
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//             navigate("/github-link");  // 🔥 Redirect if no token
//             return;
//         }

//         // ✅ Fetch repositories from GitHub
//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);  // 🔥 Correct function
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//         <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-black text-white">
//             <h1 className="mt-4">Explore Open-Source Projects</h1>
//             <p className="text-muted">Contribute and earn rewards</p>

//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-md-4">
//                                 <div className="card bg-dark text-white border-light mb-4">
//                                     <div className="card-body">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>
//                                         <div className="d-flex justify-content-between">
//                                             <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
//                                                 View on GitHub
//                                             </a>
//                                             <button className="btn btn-success">Contribute</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;







// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         console.log("🔍 Token retrieved from localStorage in Dashboard:", token); // ✅ Debugging

//         if (!token) {
//             console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
//             navigate("/github-link"); // ✅ Redirect if no token
//             return;
//         }

//         // ✅ Fetch repositories if token is available
//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("❌ Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//       <div className="container mt-5 pt-5 bg-black text-white">
//         <div className="container text-white" style={{ marginTop: "100px", paddingTop: "20px" }}></div>
//             <h1 className="mt-4">Collaborate to Below Projects</h1>
//             <p className="text-muted">Code : Collab : Contribute and earn rewards</p>

//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-md-4">
//                                 <div className="card bg-dark text-white border-light mb-4">
//                                     <div className="card-body">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>
//                                         <div className="d-flex justify-content-between">
//                                             <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
//                                                 View on GitHub
//                                             </a>
//                                             <button className="btn btn-success">Contribute</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;









// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         console.log("🔍 Token retrieved from localStorage in Dashboard:", token);

//         if (!token) {
//             console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
//             navigate("/github-link");
//             return;
//         }

//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("❌ Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//       <div className="container-fluid mt-5 pt-5 bg-black text-white">
//         <div className="container text-white" style={{ marginTop: "120px" }}></div>

//         <h1 className="text-center mt-4">Collaborate on Open-Source Projects</h1>
//         <p className="text-center text-muted">Code | Collab | Contribute and Earn Rewards</p>

//         {loading ? (
//             <p className="text-center mt-3">Loading repositories...</p>
//         ) : (
//             <div className="container mt-4">
//                 <div className="row justify-content-center">
//                     {repositories.map((repo) => (
//                         <div key={repo.id} className="col-md-3 d-flex">
//                             <div className="card bg-dark text-white border-light mb-4 shadow-lg d-flex flex-column" 
//                                  style={{ borderRadius: "12px", height: "100%", minHeight: "300px", display: "flex" }}>
//                                 <div className="card-body d-flex flex-column">
//                                     <h5 className="card-title">{repo.name}</h5>
//                                     <p className="card-text flex-grow-1">{repo.description || "No description available."}</p>
//                                     <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                     <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>
                                    
//                                     {/* Buttons aligned properly inside the card */}
//                                     <div className="mt-auto">
//                                         <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light w-100 mb-2">
//                                             View on GitHub
//                                         </a>
//                                         <button className="btn btn-success w-100">Contribute</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         )}
//       </div>
//     );
// };

// export default Dashboard;








// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         console.log("🔍 Token retrieved from localStorage in Dashboard:", token);

//         if (!token) {
//             console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
//             navigate("/github-link");
//             return;
//         }

//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("❌ Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//         <div className="container mt-5 pt-5 bg-black text-white">
//             {/* 🔥 Navbar & Heading Fix */}
//             <div className="text-center" style={{ marginTop: "120px", paddingTop: "20px" }}>
//                 <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
//                     Collaborate on Open-Source Projects
//                 </h1>
//                 <p style={{ fontSize: "1rem", color: "gray", marginBottom: "30px" }}>
//                     Code | Collab | Contribute and Earn Rewards
//                 </p>
//             </div>

//             {/* ✅ Repository Cards - Auto Updates When New Repos Added */}
//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-md-4 d-flex justify-content-center">
//                                 <div className="card bg-dark text-white border-light mb-4"
//                                     style={{
//                                         width: "300px",
//                                         height: "auto",
//                                         borderRadius: "15px",
//                                         padding: "20px",
//                                         textAlign: "center",
//                                         boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)"
//                                     }}>
//                                     <div className="card-body">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>

//                                         {/* Buttons Section */}
//                                         <div className="d-flex flex-column gap-2">
//                                             {/* 🔗 View on GitHub Button */}
//                                             <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "black",
//                                                     color: "white",
//                                                     textDecoration: "none",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}>
//                                                 View on GitHub
//                                             </a>

//                                             {/* ✅ Contribute Button - Reverse Hover Effect */}
//                                             <button
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "white",
//                                                     color: "black",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}>
//                                                 Contribute
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;









// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         console.log("🔍 Token retrieved from localStorage in Dashboard:", token);

//         if (!token) {
//             console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
//             navigate("/github-link");
//             return;
//         }

//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("❌ Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//         <div className="container mt-5 pt-5 bg-black text-white">
//             {/* 🔥 Navbar & Heading Fix */}
//             <div className="text-left" style={{ marginTop: "120px", paddingTop: "20px" }}>
//                 <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
//                     Collaborate on Open-Source Projects
//                 </h1>
//                 <p style={{ fontSize: "1rem", color: "gray", marginBottom: "30px" }}>
//                     Code | Collab | Contribute and Earn Rewards
//                 </p>
//             </div>

//             {/* ✅ Repository Cards - Auto Updates When New Repos Added */}
//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     {/* 🔥 3-Column Grid for Repositories */}
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-md-4 d-flex">
//                                 <div className="card bg-dark text-white border-light mb-4"
//                                     style={{
//                                         width: "300px",
//                                         height: "auto",
//                                         borderRadius: "15px",
//                                         padding: "20px",
//                                         textAlign: "center",
//                                         boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)"
//                                     }}>
//                                     <div className="card-body">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>

//                                         {/* Buttons Section */}
//                                         <div className="d-flex flex-column gap-1">
//                                             {/* 🔗 View on GitHub Button */}
//                                             <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "black",
//                                                     color: "white",
//                                                     textDecoration: "none",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}>
//                                                 View on GitHub
//                                             </a>

//                                             {/* ✅ Contribute Button - Reverse Hover Effect */}
//                                             <button
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "white",
//                                                     color: "black",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}>
//                                                 Contribute
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;








// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         console.log("🔍 Token retrieved from localStorage in Dashboard:", token);

//         if (!token) {
//             console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
//             navigate("/github-link");
//             return;
//         }

//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("❌ Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//         <div className="container mt-5 pt-5 bg-black text-white">
//             {/* 🔥 Navbar & Centered Heading Fix */}
//             <div className="text-center" style={{ marginTop: "120px", paddingTop: "20px" }}>
//                 <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
//                     Collaborate on Open-Source Projects
//                 </h1>
//                 <p style={{ fontSize: "1rem", color: "gray", marginBottom: "30px" }}>
//                     Code | Collab | Contribute and Earn Rewards
//                 </p>
//             </div>

//             {/* ✅ Repository Cards - Auto Updates When New Repos Added */}
//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     {/* 🔥 3-Column Grid for Repositories */}
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-md-4 d-flex">
//                                 <div className="card bg-dark text-white border-light mb-4"
//                                     style={{
//                                         width: "300px",
//                                         height: "auto",
//                                         borderRadius: "15px",
//                                         padding: "20px",
//                                         textAlign: "center",
//                                         boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)"
//                                     }}>
//                                     <div className="card-body">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>

//                                         {/* Buttons Section with GAP Fix */}
//                                         <div className="d-flex flex-column gap-2">
//                                             {/* 🔗 View on GitHub Button */}
//                                             <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "black",
//                                                     color: "white",
//                                                     textDecoration: "none",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}>
//                                                 View on GitHub
//                                             </a>

//                                             {/* ✅ Contribute Button - Reverse Hover Effect */}
//                                             <button
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "white",
//                                                     color: "black",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}>
//                                                 Contribute
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;     



// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         console.log("🔍 Token retrieved from localStorage in Dashboard:", token);

//         if (!token) {
//             console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
//             navigate("/github-link");
//             return;
//         }

//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("❌ Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//         <div className="container mt-5 pt-5 bg-black text-white">
//             {/* 🔥 Centered Heading Fix */}
//             <div className="text-center" style={{ marginTop: "120px", paddingTop: "20px" }}>
//                 <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
//                     Collaborate on Open-Source Projects
//                 </h1>
//                 <p style={{ fontSize: "1rem", color: "gray", marginBottom: "30px" }}>
//                     Code | Collab | Contribute and Earn Rewards
//                 </p>
//             </div>

//             {/* ✅ Repository Cards - Auto Updates When New Repos Added */}
//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     {/* 🔥 3-Column Grid for Repositories */}
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-md-4 d-flex">
//                                 <div className="card bg-dark text-white border-light mb-4"
//                                     style={{
//                                         width: "300px",
//                                         height: "auto",
//                                         borderRadius: "15px",
//                                         padding: "20px",
//                                         textAlign: "center",
//                                         boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)"
//                                     }}>
//                                     <div className="card-body">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>

//                                         {/* Buttons Section with GAP Fix */}
//                                         <div className="d-flex flex-column" style={{ gap: "10px" }}>
//                                             {/* 🔗 View on GitHub Button */}
//                                             <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "black",
//                                                     color: "white",
//                                                     textDecoration: "none",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}>
//                                                 View on GitHub
//                                             </a>

//                                             {/* ✅ Contribute Button - Reverse Hover Effect */}
//                                             <button
//                                                 style={{
//                                                     display: "block",
//                                                     width: "100%",
//                                                     padding: "10px",
//                                                     borderRadius: "8px",
//                                                     border: "2px solid white",
//                                                     backgroundColor: "white",
//                                                     color: "black",
//                                                     fontWeight: "bold",
//                                                     transition: "all 0.3s"
//                                                 }}
//                                                 onMouseOver={(e) => {
//                                                     e.target.style.backgroundColor = "black";
//                                                     e.target.style.color = "white";
//                                                 }}
//                                                 onMouseOut={(e) => {
//                                                     e.target.style.backgroundColor = "white";
//                                                     e.target.style.color = "black";
//                                                 }}>
//                                                 Contribute
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;







// import React, { useEffect, useState } from "react";
// import { getUserRepos } from "../services/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         console.log("🔍 Token retrieved from localStorage in Dashboard:", token);

//         if (!token) {
//             console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
//             navigate("/github-link");
//             return;
//         }

//         const fetchRepos = async () => {
//             try {
//                 setLoading(true);
//                 const repos = await getUserRepos(token);
//                 setRepositories(repos);
//             } catch (error) {
//                 console.error("❌ Failed to fetch repos:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRepos();
//     }, [navigate]);

//     return (
//         <div className="container mt-5 pt-5 bg-black text-white">
//             <div className="text-center">
//                 <h1>Collaborate on Open-Source Projects</h1>
//                 <p className="text-muted">Code | Collab | Contribute and Earn Rewards</p>
//             </div>

//             {loading ? (
//                 <p className="text-center mt-3">Loading repositories...</p>
//             ) : (
//                 <div className="container mt-4">
//                     <div className="row">
//                         {repositories.map((repo) => (
//                             <div key={repo.id} className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
//                                 <div className="card bg-dark text-white border-light mb-4 w-100" style={{ minHeight: "300px" }}>
//                                     <div className="card-body d-flex flex-column">
//                                         <h5 className="card-title">{repo.name}</h5>
//                                         <p className="card-text flex-grow-1">{repo.description || "No description available."}</p>
//                                         <p className="text-muted">Language: {repo.language || "Unknown"}</p>
//                                         <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>
//                                         <div className="mt-auto">
//                                             <a 
//                                                 href={repo.html_url} 
//                                                 target="_blank" 
//                                                 rel="noopener noreferrer" 
//                                                 className="btn btn-outline-light w-100"
//                                             >
//                                                 View on GitHub
//                                             </a>
//                                             <button 
//                                                 className="btn btn-light w-100 mt-2"
//                                                 style={{
//                                                     color: "black",
//                                                     border: "2px solid white",
//                                                     transition: "all 0.3s ease",
//                                                 }}
//                                                 onMouseEnter={(e) => {
//                                                     e.target.style.background = "black";
//                                                     e.target.style.color = "white";
//                                                 }}
//                                                 onMouseLeave={(e) => {
//                                                     e.target.style.background = "white";
//                                                     e.target.style.color = "black";
//                                                 }}
//                                             >
//                                                 Contribute
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;




import React, { useEffect, useState } from "react";
import { getUserRepos } from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        console.log("🔍 Token retrieved from localStorage in Dashboard:", token);

        if (!token) {
            console.warn("❌ No token found in localStorage, redirecting to GitHub link page.");
            navigate("/github-link");
            return;
        }

        const fetchRepos = async () => {
            try {
                setLoading(true);
                const repos = await getUserRepos(token);
                setRepositories(repos);
            } catch (error) {
                console.error("❌ Failed to fetch repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [navigate]);

    return (
<div className="container mt-5 pt-5 bg-black text-white">
            <div className="text-center" style={{ marginTop: "100px", paddingTop: "20px" }}>
                <h1 className="mt-4">Collaborate on Open-Source Projects</h1>
                <p className="text-muted">Code | Collab | Contribute and Earn Rewards</p>
            </div>

            {loading ? (
                <p className="text-center mt-3">Loading repositories...</p>
            ) : (
                <div className="container mt-4">
                    {/* Grid Layout */}
                    <div className="row">
                        {repositories.map((repo) => (
                            <div key={repo.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div 
                                    className="card bg-dark text-white border-light shadow-sm"
                                    style={{ 
                                        borderRadius: "12px",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">{repo.name}</h5>
                                        <p className="card-text">{repo.description || "No description available."}</p>
                                        <p className="text-muted">Language: {repo.language || "Unknown"}</p>
                                        <p className="text-muted">⭐ {repo.stars} | 🍴 {repo.forks}</p>
                                    </div>
                                    <div className="card-footer d-flex flex-column align-items-center">
                                        <a 
                                            href={repo.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn btn-outline-light mb-2"
                                            style={{
                                                borderRadius: "10px",
                                                padding: "10px 20px",
                                                width: "100%",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            View on GitHub
                                        </a>
                                        <button 
                                            style={{
                                                backgroundColor: "white",
                                                color: "black",
                                                border: "1px solid white",
                                                borderRadius: "10px",
                                                padding: "10px 20px",
                                                width: "100%",
                                                fontWeight: "bold",
                                                cursor: "pointer"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "black";
                                                e.target.style.color = "white";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "white";
                                                e.target.style.color = "black";
                                            }}
                                            onClick={() => handleContribute(repo.name)}
                                        >
                                            Contribute
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;


















