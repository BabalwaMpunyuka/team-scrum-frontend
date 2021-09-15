import { Icon } from "@iconify/react";
import styles from "./report.module.css";

function Report() {
  return (
    <div className={`container ${styles.report_wrapper}`}>
      <div className="mt-4 pt-4 px-3">
        <h1>Reports</h1>
      </div>
      <div className={`mt-4 pt-4 px-3 ${styles.section_report}`}>
        <div className="row mb-2">
          <div className="col-sm-2">
            <span>Name</span>
          </div>
          <div className="col-sm-10">
            <span></span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-2">
            <span>Type</span>
          </div>
          <div className="col-sm-10">
            <span>
              PDF{" "}
              <Icon
                icon="majesticons:file-report-line"
                className="text-primary"
              />{" "}
            </span>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-2">
            <span>Id</span>
          </div>
          <div className="col-sm-4">
            <span>HyJIhFPaoYHMgXuVylG7Y1</span>
          </div>
          <div className="col-sm-4">
            <span>&nbsp;</span>
          </div>
          <div className="col-sm-2">
            <Icon icon="typcn:download" id={styles.icon_file} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-4">
            <span id={styles.date_posted}>Date posted: 2days ago </span>
          </div>
          <div className="col-sm-8">
            <span></span>
          </div>
        </div>
      </div>

      <div className="w-100 mt-4">
        <p className="text-right px-2">
          <small>
            See all new documents{" "}
            <Icon icon="typcn:download" id={styles.icon_file} />
          </small>
        </p>
        <hr />
      </div>
      <div className={`w-100 mt-4 ${styles.report_history}`}>
        <h3>Report History</h3>
        <div className="row my-2">
          <div className="col-sm-3">
            <span>Financial Appraisal</span>
          </div>
          <div className="col-md-2">
            <span>
              {" "}
              Downloaded
              <Icon
                icon="majesticons:file-report-line"
                className="text-primary"
              />
            </span>
          </div>
          <div className="col-md-3">
            <span> Downloaded by user</span>
          </div>
          <div className="col-md-2">
            <span>2days ago 9:00am uct</span>
          </div>
        </div>
        <hr />
        <div className="row my-2">
          <div className="col-sm-3">
            <span>Financial Statement</span>
          </div>
          <div className="col-md-2">
            <span>
              {" "}
              Uploaded
              <Icon
                icon="majesticons:file-report-line"
                className="text-primary"
              />
            </span>
          </div>
          <div className="col-md-3">
            <span> Downloaded by user</span>
          </div>
          <div className="col-md-2">
            <span>2days ago 9:00am uct</span>
          </div>
        </div>
        <hr />
        <div className="row my-2">
          <div className="col-sm-3">
            <span>Financial statement</span>
          </div>
          <div className="col-md-2">
            <span>
              {" "}
              Viewed
              <Icon
                icon="majesticons:file-report-line"
                className="text-primary"
              />
            </span>
          </div>
          <div className="col-md-3">
            <span> Downloaded by user</span>
          </div>
          <div className="col-md-2">
            <span>2days ago 9:00am uct</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
