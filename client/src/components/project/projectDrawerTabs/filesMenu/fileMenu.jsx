import downLoadIcon from "../../../../assets/filesIcon/download.svg";
import moreInfo from "../../../../assets/dot.svg";
import { getIconBasedOnType } from "../../../../utils/styles/fileIMenuHelper";
import Button from "../../../common/Button";

const FileMenu = ({ fileDetails = [] }) => {
  const fileData = fileDetails.files || [];

  const getExtension = fileData.forEach((file) => {
    const extension = file.name.split(".").pop();

    return extension;
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center mb-7">
        <h2 className="text-xl font-bold">Project Files</h2>
        <Button
          className="bg-blue-700 py-1 px-2 border-slate-200 rounded-2xl text-base"
          text="+ Upload Files"
          type="button"
        />
      </div>
      {fileData.map((data, id) => (
        <div className="flex flex-row justify-between items-center mb-2 border border-slate-400 rounded-2xl px-2 py-3">
          <div className="flex flex-row items-center gap-3">
            <span>
              <img className="w-9" src={getIconBasedOnType(data.type)} />
            </span>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">{data.name}</h3>
              <span className="text-sm text-slate-400">{`${data.size} . ${data.uploadedAt}`}</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span>
              <img className="w-6" src={downLoadIcon} />
            </span>
            <span>
              <img className="w-6" src={moreInfo} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileMenu;
