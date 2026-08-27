import { useRef, useState } from "react";
import fileUpload from "../../assets/teams/fileUpload.svg";
import Label from "./Label";

const DragAndDrop = ({
  name,
  label,
  accept,
  allowedTypes,
  maxSize,
  onFileSelect,
  setValue,
  className,
  isLableReq
}) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    // File Type Validation
    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Invalid file type");
      return;
    }

    // File Size Validation
    if (selectedFile.size > maxSize * 1024 * 1024) {
      alert(`File size should be less than ${maxSize} MB`);
      return;
    }

    setFile(selectedFile);

    setValue(name, selectedFile, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col items-start">
      <Label label={label} isLableReq={isLableReq} />

      <div
        className={`flex flex-col justify-center items-center p-2 border-2 border-dashed border-slate-600 rounded-2xl bg-slate-800/10 mb-2 ${className}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img className="w-11" src={fileUpload} alt="file upload" />

        <p className="text-sm font-bold text-slate-200">
          Drag & Drop an image here
        </p>
        <button
          className="text-sm text-blue-700 cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        >
          or click to browsr
        </button>

        {file ? (
          <p className="text-sm text-green-500">{file.name}</p>
        ) : (
          <p className="text-sm text-slate-500">Max Size: {maxSize} MB</p>
        )}

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default DragAndDrop;
