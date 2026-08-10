import DOCIcon from "../../assets/filesIcon/DOCIcon.svg";
import ExcelIcon from "../../assets/filesIcon/excelIcon.svg";
import FileIcon from "../../assets/filesIcon/FileIcon.svg";
import PDF from "../../assets/filesIcon/PDF.svg";
import XLSIcon from "../../assets/filesIcon/XLSIcon.svg";

export const getIconBasedOnType = (type) => {
  if (type === "pdf") {
    return PDF;
  } else if (type === "docx") {
    return DOCIcon;
  } else {
    return "File foramte is not available";
  }
};
