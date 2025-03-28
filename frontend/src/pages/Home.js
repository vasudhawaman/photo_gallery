import React from "react";
import { FileUpload } from "primereact/fileupload";

export default function Home() {
    return (
        <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <p style={{ margin: "20px" }}>Upload your files here:</p>
            <FileUpload name="demo[]" url="./upload" accept="image/*" maxFileSize={1000000} />
        </div>
    )
}