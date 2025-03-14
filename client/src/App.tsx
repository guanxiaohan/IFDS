import { useState, useEffect } from "react";
import axios from "axios";
import IFDS_Logo from "./assets/icons/IFDS_Icon.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [serverMessage, setServerMessage] = useState("");

    useEffect(() => {
        axios.get("/api/ping")
            .then((res) => {setServerMessage(res.data)})
            .catch((err) => {setServerMessage(err)});
    }, []);

    return (
        <>
            <div>
                <img
                    src={IFDS_Logo}
                    className="IFDS-Icon"
                    alt="IFDS Logo."
                />
                
            </div>
            <h1>Insight File Database Server</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Look into readme.md to know more about the project.
            </p>
            <p>
                The information below is only for test, and will be removed in the future.
            </p>
            <p>
                Information from Server: {serverMessage}
            </p>
        </>
    );
}

export default App;
