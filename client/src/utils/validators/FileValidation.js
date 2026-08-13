export const handleFile = (selectedFile) => {
  if (!selectedFile) return;
  const allowedTypes = ["image/png", "image/jpef", "image/jpg"];
  if (!allowedTypes.includes(selectedFile.type)) {
    alert("Only PNG and JPG files are allowed");
    return;
  }
  if (selectedFile.size > 2 * 1024 * 1024) {
    alert("File size should be less than 2MB");
    return;
  }
  return true;
};
