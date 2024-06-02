import axios from "axios";
import FileSaver from "file-saver";

const handleDownload = async (fileName: string, fileType: string) => {
  try {
    const response = await axios.get(`/files/${fileName}.${fileType}`, {
      responseType: "blob",
    });
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    FileSaver.saveAs(blob, `${fileName}.${fileType}`);
  } catch (error) {
    console.error("Download failed", error);
  }
};

export default handleDownload;
