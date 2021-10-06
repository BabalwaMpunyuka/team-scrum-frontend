import { saveAs } from "file-saver";


  const downloadFile = (fileUrl) => {
    saveAs(
      fileUrl
    );
  };

  export default downloadFile;
 