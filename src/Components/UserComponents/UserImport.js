import { CSVLink } from "react-csv";
import React, { useState, CSSProperties, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { toast } from "react-toastify";
import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from "react-papaparse";

const GREY = "#CCC";
const GREY_LIGHT = "rgba(255, 255, 255, 0.4)";
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = "#686868";
let usercount = 1;
function usercounter() {
  usercount = usercount + 1;
}
const styles = {
  zone: {
    alignItems: "center",
    border: `2px dashed ${GREY}`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  file: {
    background: "linear-gradient(to bottom, #EEE, #DDD)",
    borderRadius: 20,
    display: "flex",
    height: 120,
    width: 120,
    position: "relative",
    zIndex: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  },
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
  },
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  zoneHover: {
    borderColor: GREY_DIM,
  },
  default: {
    borderColor: GREY,
  },
  remove: {
    height: 23,
    position: "absolute",
    right: 6,
    top: 6,
    width: 23,
  },
};

export default function ImportExport(props) {
  var filename;
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [organization, setOrganization] = useState(
    localStorage.getItem("organization")
  );
  const [filenames, setFilename] = useState("");
  const [result, setResult] = useState("");
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [flage, setFlage] = useState("False");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    setProgress(progress1);
  }, [progress1]);
  async function importdata(e) {
    if (flage == "True") {
      setIsLoading(true);
      setProgress1(10);
      for (var i = 0; i < result.length; i++) {
        if (i == result.length / 3) {
          setProgress1(70);
        }
        if (i == result.length / 2) {
          setProgress1(50);
        }
        let data1 = {
          filename: filename,
          importedby: username,
          country: result[i].country,
          education: result[i].education,
          employment: result[i].employment,
          case_definition: result[i].case_definition,
          type_of_resistance: result[i].type_of_resistance,
          x_ray_count: result[i].x_ray_count,
          organization: result[i].organization,
          affect_pleura: result[i].affect_pleura,
          overall_percent_of_abnormal_volume:
            result[i].overall_percent_of_abnormal_volume,
          le_isoniazid: result[i].le_isoniazid,
          le_rifampicin: result[i].le_rifampicin,
          le_p_aminosalicylic_acid: result[i].le_p_aminosalicylic_acid,
          hain_isoniazid: result[i].hain_isoniazid,
          hain_rifampicin: result[i].hain_rifampicin,
          period_start: result[i].period_start,
          period_end: result[i].period_end,
          period_span: result[i].period_span,
          regimen_count: result[i].regimen_count,
          qure_peffusion: result[i].qure_peffusion,
          treatment_status: result[i].treatment_status,
          regimen_drug: result[i].regimen_drug,
          comorbidity: result[i].comorbidity,
          ncbi_bioproject: result[i].ncbi_bioproject,
          gene_name: result[i].gene_name,
          x_ray_exists: result[i].x_ray_exists,
          ct_exists: result[i].ct_exists,
          genomic_data_exists: result[i].genomic_data_exists,
          qure_consolidation: result[i].qure_consolidation,
          outcome: result[i].outcome,
        };

        await InsertData(data1);
        //   if(flage=="True"){
        //   console.log(data1)
        //   InsertData(data1)
        //   alert("Imported Successfully");
        // }
        // else{
        //   alert("Error:Wrong Format Of Dataset");
        // }
      }
      let notificationdata = {
        filename: filename,
        username: username,
        status: "pending",
        organization: organization,
      };
      await InsertNotifications(notificationdata);
      setProgress1(100);
      await delay(1000);
      alert("Import Successfull");
      window.location.reload();
    } else {
      alert("Error:Wrong Dataset Format");
    }
  }
  var importflage = false;

  // API for post notifications
  function InsertNotifications(body) {
    return fetch(`http://localhost:5000/addnotifications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  // API for post new imports
  function InsertData(body) {
    return fetch(`http://localhost:5000/useradddata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  //   const [importdata,setImportData] = useState([]);
  // //   function insertTo(body){
  // //     return(
  // //         fetch(`http://localhost:5000/add` ,{
  // //             'method' : 'POST',
  // //             headers : {
  // //                 'Content-Type' : 'application/json'
  // //             },
  // //             body : JSON.stringify(body)
  // //         })
  // //         .then(resp => resp.json())
  // //     )}

  // //   const insertRecord =()=>{
  // //     insertTo({importdata})
  // //     .then(resp => props.insertedRecord(resp))
  // //     .catch(error => console.log(error))

  // //     toast.success("Record inserted Successfully",{autoClose:2500});
  // // }

  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );

  const templatedata = [
    {
      country: "",
      education: "",
      employment: "",
      case_definition: "",
      type_of_resistance: "",
      x_ray_count: "",
      organization: "",
      affect_pleura: "",
      overall_percent_of_abnormal_volume: "",
      le_isoniazid: "",
      le_rifampicin: "",
      le_p_aminosalicylic_acid: "",
      hain_isoniazid: "",
      hain_rifampicin: "",
      period_start: "",
      period_end: "",
      period_span: "",
      regimen_count: "",
      qure_peffusion: "",
      treatment_status: "",
      regimen_drug: "",
      comorbidity: "",
      ncbi_bioproject: "",
      gene_name: "",
      x_ray_exists: "",
      ct_exists: "",
      genomic_data_exists: "",
      qure_consolidation: "",
      outcome: "",
    },
  ];
  const templateheader = [
    { label: "country", key: "country" },
    { label: "education", key: "education" },
    { label: "employment", key: "employment" },
    { label: "case_definition", key: "case_definition" },
    { label: "type_of_resistance", key: "type_of_resistance" },
    { label: "x_ray_count", key: "x_ray_count" },
    { label: "organization", key: "organization" },
    { label: "affect_pleura", key: "affect_pleura" },
    {
      label: "overall_percent_of_abnormal_volume",
      key: "overall_percent_of_abnormal_volume",
    },
    { label: "le_isoniazid", key: "le_isoniazid" },
    { label: "le_rifampicin", key: " le_rifampicin" },
    { label: "le_p_aminosalicylic_acid", key: "le_p_aminosalicylic_acid" },
    { label: "hain_isoniazid", key: "hain_isoniazid" },
    { label: "hain_rifampicin", key: "hain_rifampicin" },
    { label: "period_start", key: "period_start" },
    { label: "period_end", key: "period_end" },
    { label: "period_span", key: "period_span" },
    { label: "regimen_count", key: "regimen_count" },
    { label: "qure_peffusion", key: "qure_peffusion" },
    { label: "treatment_status", key: "treatment_status" },
    { label: "regimen_drug", key: "regimen_drug" },
    { label: "comorbidity", key: "comorbidity" },
    { label: "ncbi_bioproject", key: "ncbi_bioproject" },
    { label: "gene_name", key: "gene_name" },
    { label: "x_ray_exists", key: "x_ray_exists" },
    { label: "ct_exists", key: "ct_exists" },
    { label: "genomic_data_exists", key: "genomic_data_exists" },
    { label: "qure_consolidation", key: "qure_consolidation" },
    { label: "outcome", key: "outcome" },
  ];

  const header = [
    { label: "Id", key: "id" },
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
  ];
  const templateDownload = {
    filename: "NIH-template.csv",
    headers: templateheader,
    data: templatedata,
  };

  const Export = {
    filename: "NIH-Data.csv",
    headers: templateheader,
    data: props.patients,
  };
  return (
    <div
      style={{
        backgroundColor: "#D4D4D4",
        height: "100%",
        paddingBottom: "0px",
        marginTop: "0px",
      }}
      class="row"
    >
      <div
        className="row"
        style={{
          width: "80%",
          marginLeft: "10%",
          backgroundColor: "white",
          height: "calc(100vh - 350px)",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "30vh",
            height: "15vh",
            background: "#62306A",
            position: "absolute",
            right: "20vh",
            marginTop: "8vh",
            marginLeft: "20vh",
            textAlign: "center",
            padding: "0px",
          }}
          id="templatediv"
        >
          <p style={{ color: "white", fontSize: "25px", textAlign: "center" }}>
            CSV File Template
          </p>
          <button
            type="button"
            id="viewbtn"
            className="btn btn-primary btn-md"
            style={{
              backgroundColor: "#706DF3",
              width: "100px",
              marginLeft: "0vh",
            }}
          >
            <CSVLink
              style={{ color: "white", textDecoration: "none" }}
              {...templateDownload}
            >
              Download
            </CSVLink>
          </button>
        </div>

        <div className="col-mg-12 col-lg-12 col-sm-12">
          <h1
            style={{
              fontSize: "24px",
              fontFamily: "Open Sans",
              fontWeight: "bold",
              marginTop: "9vh",
              marginBottom: "0vh",
            }}
          >
            Import Dataset:
          </h1>

          <div id="importdiv" style={{ width: "80%" }}>
            <CSVReader
              onUploadAccepted={(results: any) => {
                console.log("---------------------------");
                console.log(results);
                // console.log(results.data[0].Array(1))
                const data = [
                  "country",
                  "education",
                  "employment",
                  "case_definition",
                  "type_of_resistance",
                  "x_ray_count",
                  "organization",
                  "affect_pleura",
                  "overall_percent_of_abnormal_volume",
                  "le_isoniazid",
                  "le_rifampicin",
                  "le_p_aminosalicylic_acid",
                  "hain_isoniazid",
                  "hain_rifampicin",
                  "period_start",
                  "period_end",
                  "period_span",
                  "regimen_count",
                  "qure_peffusion",
                  "treatment_status",
                  "regimen_drug",
                  "comorbidity",
                  "ncbi_bioproject",
                  "gene_name",
                  "x_ray_exists",
                  "ct_exists",
                  "genomic_data_exists",
                  "qure_consolidation",
                  "outcome",
                ];
                const cols = results.data[0].map((col, index) => {
                  return {
                    Header: col,
                    accessor: col.split(" ").join("_").toLowerCase(),
                  };
                });

                setFilename(filename);
                var result = [];
                var keys = results.data[0];
                for (var i = 1; i < results.data.length - 1; i++) {
                  var item = {};
                  item[keys[0]] = results.data[i][0];
                  item[keys[1]] = results.data[i][1];
                  item[keys[2]] = results.data[i][2];
                  item[keys[3]] = results.data[i][3];
                  item[keys[4]] = results.data[i][4];
                  item[keys[5]] = results.data[i][5];
                  item[keys[6]] = results.data[i][6];
                  item[keys[7]] = results.data[i][7];
                  item[keys[8]] = results.data[i][8];
                  item[keys[9]] = results.data[i][9];
                  item[keys[10]] = results.data[i][10];
                  item[keys[11]] = results.data[i][11];
                  item[keys[12]] = results.data[i][12];
                  item[keys[13]] = results.data[i][13];
                  item[keys[14]] = results.data[i][14];
                  item[keys[15]] = results.data[i][15];
                  item[keys[16]] = results.data[i][16];
                  item[keys[17]] = results.data[i][17];
                  item[keys[18]] = results.data[i][18];
                  item[keys[19]] = results.data[i][19];
                  item[keys[20]] = results.data[i][20];
                  item[keys[21]] = results.data[i][21];
                  item[keys[22]] = results.data[i][22];
                  item[keys[23]] = results.data[i][23];
                  item[keys[24]] = results.data[i][24];
                  item[keys[25]] = results.data[i][25];
                  item[keys[26]] = results.data[i][26];
                  item[keys[27]] = results.data[i][27];
                  item[keys[28]] = results.data[i][28];
                  result.push(item);
                }
                let notificationdata = {
                  filename: filename,
                  username: "User1",
                  status: "pending",
                };
                var counter = 0;
                for (var i = 0; i < 29; i++) {
                  for (var j = 0; j < 29; j++) {
                    if (data[i] == results.data[0][j]) {
                      counter = counter + 1;
                    }
                  }
                }
                if (counter == 29) {
                  setFlage("True");
                } else {
                  setFlage("False");
                }
                setResult(result);
                for (var i = 0; i < result.length; i++) {
                  let data1 = {
                    filename: filename,
                    importedby: "user1",
                    country: result[i].country,
                    education: result[i].education,
                    employment: result[i].employment,
                    case_definition: result[i].case_definition,
                    type_of_resistance: result[i].type_of_resistance,
                    x_ray_count: result[i].x_ray_count,
                    organization: result[i].organization,
                    affect_pleura: result[i].affect_pleura,
                    overall_percent_of_abnormal_volume:
                      result[i].overall_percent_of_abnormal_volume,
                    le_isoniazid: result[i].le_isoniazid,
                    le_rifampicin: result[i].le_rifampicin,
                    le_p_aminosalicylic_acid:
                      result[i].le_p_aminosalicylic_acid,
                    hain_isoniazid: result[i].hain_isoniazid,
                    hain_rifampicin: result[i].hain_rifampicin,
                    period_start: result[i].period_start,
                    period_end: result[i].period_end,
                    period_span: result[i].period_span,
                    regimen_count: result[i].regimen_count,
                    qure_peffusion: result[i].qure_peffusion,
                    treatment_status: result[i].treatment_status,
                    regimen_drug: result[i].regimen_drug,
                    comorbidity: result[i].comorbidity,
                    ncbi_bioproject: result[i].ncbi_bioproject,
                    gene_name: result[i].gene_name,
                    x_ray_exists: result[i].x_ray_exists,
                    ct_exists: result[i].ct_exists,
                    genomic_data_exists: result[i].genomic_data_exists,
                    qure_consolidation: result[i].qure_consolidation,
                    outcome: result[i].outcome,
                  };
                }

                // InsertNotifications(notificationdata);

                console.log("---------------------------");
                setZoneHover(false);
              }}
              onDragOver={(event: DragEvent) => {
                event.preventDefault();
                setZoneHover(true);
              }}
              onDragLeave={(event: DragEvent) => {
                event.preventDefault();
                setZoneHover(false);
              }}
            >
              {({
                getRootProps,
                acceptedFile,
                ProgressBar,
                getRemoveFileProps,
                Remove,
              }: any) => (
                <>
                  <div
                    {...getRootProps()}
                    style={Object.assign(
                      {},
                      styles.zone,
                      zoneHover && styles.zoneHover
                    )}
                  >
                    {acceptedFile
                      ? ((filename = acceptedFile.name),
                        (
                          <>
                            <div style={styles.file}>
                              <div style={styles.info}>
                                <span style={styles.size}>
                                  {formatFileSize(acceptedFile.size)}
                                </span>
                                <span style={styles.name}>
                                  {acceptedFile.name}
                                </span>
                              </div>
                              <div style={styles.progressBar}>
                                <ProgressBar />
                              </div>
                              <div
                                {...getRemoveFileProps()}
                                style={styles.remove}
                                onMouseOver={(event: Event) => {
                                  event.preventDefault();
                                  setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                                }}
                                onMouseOut={(event: Event) => {
                                  event.preventDefault();
                                  setRemoveHoverColor(
                                    DEFAULT_REMOVE_HOVER_COLOR
                                  );
                                }}
                              >
                                <Remove color={removeHoverColor}></Remove>
                              </div>
                            </div>
                          </>
                        ))
                      : "Drop CSV file here or click to upload"}
                  </div>
                </>
              )}
            </CSVReader>
            {isLoading ? (
              <div>
                Uploading Data Please Wait...
                <ProgressBar now={progress} animated label={`${progress}%`} />
              </div>
            ) : (
              <div>
                <p id="importinfo" style={{ color: "red" }}></p>
                <br />
                <br />
                <button
                  type="button"
                  onClick={importdata}
                  id="Importbtn"
                  className="btn btn-primary btn-md"
                  style={{ backgroundColor: "#62306A", width: "100px" }}
                >
                  Import
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
