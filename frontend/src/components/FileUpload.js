import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function FileUpload() {

    return (
        <div className="card">
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} />

        </div>
    )
}
