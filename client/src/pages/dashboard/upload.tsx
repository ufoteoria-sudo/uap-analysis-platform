import React, { useState } from 'react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // TODO: Implement upload logic
      console.log('Uploading file:', selectedFile.name);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Upload Data</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4"
            accept=".json,.csv,.xml"
          />
          {selectedFile && <p className="text-slate-600 mb-4">Selected: {selectedFile.name}</p>}
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition"
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
}
