import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function UploadBtn({ uwConfig, setState, AddRoom }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if the script is already loaded
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {

                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        if (loaded) {
            var myWidget = window.cloudinary.createUploadWidget(
                uwConfig,
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        setState((prev) => [...prev, result.info.secure_url]);
                    }
                }
            );

            document.getElementById("upload_widget").addEventListener(
                "click",
                function () {
                    myWidget.open();
                },
                false
            );
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button
                id="upload_widget"
                className={AddRoom ? "" : "cloudinary-button"}
                onClick={initializeCloudinaryWidget}
                type="button"
            >
                {AddRoom ? "Upload Files" : "Upload"}
            </button>
        </CloudinaryScriptContext.Provider>
    );
}

export default UploadBtn;
export { CloudinaryScriptContext };
