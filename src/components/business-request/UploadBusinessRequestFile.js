import { useState } from "react";
import styles from "../../pages/business-request/businessRequest.module.css";
import { Spinner } from "react-bootstrap";

const UploadBusinessRequestFile = ({
  isSubmitting,
  filename,
  fileDescription,
  requestFormFileName,
  requestFormFile,
  setFormValue,
  handleUpload,
}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.filename = filename ? "" : "Filename is required";
    temp.fileDescription =
      fileDescription ? "" : "File description is required";
    temp.requestFormFileName =
      requestFormFileName ? "" : "Please choose a file";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const setFormDataValue = (key, value) => {
    setFormValue(key, value);
  };

  const setFile = (e) => { 
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setFormValue("requestFormFile", imageFile);
        setFormValue("requestFormFileName", x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setFormValue("requestFormFile", null);
      setFormValue("requestFormFileName", "");
    }
  };

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      handleUpload();
    }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.content_wrapper}>
          <h2>Attach financial statements and related documents </h2>
          <div className="row">
            <div className={`col-md-6 py-2 ${styles.field_wrapper}`}>
              <label className={styles.field_label}>File name</label>
              <input
                label="file name"
                name="filename"
                type="text"
                placeholder="file name"
                onChange={(e) => {
                  setFormDataValue(e.target.name, e.target.value);
                }}
                value={filename}
                className={styles.field}
              />
              <div className="text-danger">
                <span>{errors.filename ? errors.filename : ""}</span>
              </div>
            </div>
            <div className={`col-md-6 py-2 ${styles.field_wrapper}`}>
              <label className={styles.field_label}>File description</label>
              <textarea
                name="fileDescription"
                onChange={(e) => {
                  setFormDataValue(e.target.name, e.target.value);
                }}
                value={fileDescription}
                className={`${styles.field} ${styles.file_description}`}
              ></textarea>
              <div className="text-danger">
                <span>
                  {errors.fileDescription ? errors.fileDescription : ""}
                </span>
              </div>
            </div>
            <div className={`col-md-12 py-2 ${styles.field_wrapper}`}>
              <label className={styles.field_label}>File</label>
              <input
                name="file"
                type="file"
                accept="image/*,.doc,.docx,.pdf,.csv,xlsx"
                className={styles.field}
                onChange={setFile}
              />
              <div className="text-danger">
                <span>
                  {errors.requestFormFileName ? errors.requestFormFileName : ""}
                </span>
              </div>
            </div>
          </div>

          {requestFormFileName && <button
            className={`mt-4 btn btn-sm btn-outline-primary ${styles.request_btn}`}
            type="submit"
            disabled={isSubmitting}
          >
            {!isSubmitting  ? (
              "Upload"
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </button>}
        </div>
      </form>
    </div>
  );
};

export default UploadBusinessRequestFile;
