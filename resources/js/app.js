import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Welcome Component
function Welcome() {
    const traits = [
        "Trustworthy",
        "Loyal",
        "Helpful",
        "Friendly",
        "Courteous",
        "Kind",
        "Obedient",
        "Cheerful",
        "Thrifty",
        "Brave",
        "Clean",
        "Reverent"
    ];

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #0b542d 0%, #0b09aa 100%)",
            color: "#fff",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            flexDirection: "column",
            textAlign: "center",
            padding: "2rem"
        }}>
            <h1 style={{
                fontSize: "3rem",
                marginBottom: "2rem",
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
            }}>
                Scout Law
            </h1>

            <a href="/scout-oath">
                <button
                    style={{
                        padding: "0.8rem 1.5rem",
                        fontSize: "1.2rem",
                        borderRadius: "8px",
                        border: "none",
                        background: "#fff",
                        color: "#0b542d",
                        cursor: "pointer",
                        marginBottom: "2rem",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        transition: "background 0.3s, transform 0.3s"
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = "#e0e0e0";
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    Scout Law
                </button>
            </a>

            <p style={{ fontSize: "1.4rem", marginBottom: "1.5rem" }}>
                <b>A Scout is...</b>
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "1rem",
                width: "100%",
                maxWidth: "800px"
            }}>
                {traits.map((trait, index) => (
                    <div
                        key={index}
                        style={{
                            padding: "1rem",
                            borderRadius: "12px",
                            background: "rgba(255,255,255,0.1)",
                            backdropFilter: "blur(5px)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                            transition: "transform 0.3s, background 0.3s",
                            cursor: "default"
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                        }}
                    >
                        <b>{trait}</b>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ScoutOath Component
function ScoutOath() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #0b542d 0%, #0b09aa 100%)",
            color: "#fff",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            flexDirection: "column",
            textAlign: "center",
            padding: "2rem"
        }}>
            <h1 style={{
                fontSize: "3rem",
                marginBottom: "2rem",
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
            }}>
                Scout Oath
            </h1>

            <p style={{
                fontSize: "1.4rem",
                marginBottom: "1.5rem",
                maxWidth: "600px",
                lineHeight: "1.6"
            }}>
                On my honor, I will do my best<br />
                To do my duty to God and my country and to obey the Scout Law;<br />
                To help other people at all times;<br />
                To keep myself physically strong, mentally awake and morally straight.
            </p>

            <a href="/">
                <button
                    style={{
                        padding: "0.8rem 1.5rem",
                        fontSize: "1.2rem",
                        borderRadius: "8px",
                        border: "none",
                        background: "#fff",
                        color: "#0b542d",
                        cursor: "pointer",
                        marginTop: "2rem",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        transition: "background 0.3s, transform 0.3s"
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = "#e0e0e0";
                        e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    Back to Home
                </button>
            </a>
        </div>
    );
}

// App Component with Routing
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/scout-oath" element={<ScoutOath />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

console.log("Laravel Webpack Mix is running!");
