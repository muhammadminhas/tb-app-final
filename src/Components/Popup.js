import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import updateStatus from "../services/data";
import Swal from "sweetalert2";
import ProgressBar from "react-bootstrap/ProgressBar";
export default function Popup(props) {
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProgress(progress1);
  }, [progress1]);
  // ar arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
  useEffect(() => {
    setData(
      props.newimportdata.filter(
        (item) =>
          item.importedby === props.username && item.filename === props.filename
      )
    );
  }, [props]);
  //
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  function InsertData(body) {
    return fetch(`http://localhost:5000/adminadddata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  async function RejectData() {
    await updateStatus(props.id, {
      status: "Rejected",
    });
    window.location.reload();
  }

  async function AcceptData() {
    setIsLoading(true);
    setProgress1(0);
    await delay(1000);
    setProgress1(20);
    for (var i = 0; i < data.length; i++) {
      let data1 = {
        country: data[i].country,
        education: data[i].education,
        employment: data[i].employment,
        case_definition: data[i].case_definition,
        type_of_resistance: data[i].type_of_resistance,
        x_ray_count: data[i].x_ray_count,
        organization: data[i].organization,
        affect_pleura: data[i].affect_pleura,
        overall_percent_of_abnormal_volume:
          data[i].overall_percent_of_abnormal_volume,
        le_isoniazid: data[i].le_isoniazid,
        le_rifampicin: data[i].le_rifampicin,
        le_p_aminosalicylic_acid: data[i].le_p_aminosalicylic_acid,
        hain_isoniazid: data[i].hain_isoniazid,
        hain_rifampicin: data[i].hain_rifampicin,
        period_start: data[i].period_start,
        period_end: data[i].period_end,
        period_span: data[i].period_span,
        regimen_count: data[i].regimen_count,
        qure_peffusion: data[i].qure_peffusion,
        treatment_status: data[i].treatment_status,
        regimen_drug: data[i].regimen_drug,
        comorbidity: data[i].comorbidity,
        ncbi_bioproject: data[i].ncbi_bioproject,
        gene_name: data[i].gene_name,
        x_ray_exists: data[i].x_ray_exists,
        ct_exists: data[i].ct_exists,
        genomic_data_exists: data[i].genomic_data_exists,
        qure_consolidation: data[i].qure_consolidation,
        outcome: data[i].outcome,
      };

      await InsertData(data1);
    }
    setProgress1(70);

    await updateStatus(props.id, {
      status: "Accepted",
    });
    setProgress1(100);
    await delay(1000);
    window.location.reload();
  }

  // for (var i = 0; i < props.newimportdata.length; i++) {
  //   if (
  //     props.newimportdata[i].importedby != props.username &&
  //     props.newimportdata[i].filename != props.filename
  //   ) {
  //     props.newimportdata.splice(i, 1);
  //     i--;
  //   }
  // }

  return props.trigger ? (
    <div className="popup" style={{ backgroundColor: "white" }}>
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <h1>View Data</h1>
        <div id="outerwrapper">
          <div id="innerwrapper">
            <table className="table">
              <thead
                className="thead-dark "
                style={{
                  position: "sticky",
                  top: "0px",
                  background: "#62306A",
                  color: "white",
                }}
              >
                <tr>
                  <th scope="col">Patient Id Number</th>
                  <th scope="col">Country </th>
                  <th scope="col">Education </th>
                  <th scope="col">Employment </th>
                  <th scope="col">Case_definition</th>
                  <th scope="col">Type_of_resistance</th>
                  <th scope="col">X_ray_count </th>
                  <th scope="col">Organization </th>
                  <th scope="col">Affect_pleura </th>
                  <th scope="col">Overall_percent_of_abnormal_volume</th>
                  <th scope="col">Le_isoniazid </th>
                  <th scope="col">Le_rifampicin</th>
                  <th scope="col">Le_p_aminosalicylic_acid </th>
                  <th scope="col">Hain_isoniazid</th>
                  <th scope="col">Hain_rifampicin</th>
                  <th scope="col">Period_start</th>
                  <th scope="col">Period_end </th>
                  <th scope="col">Period_span </th>
                  <th scope="col">Regimen_count</th>
                  <th scope="col">Qure_peffusion </th>
                  <th scope="col">Treatment_status</th>
                  <th scope="col">Regimen_drug</th>
                  <th scope="col">Comorbidity</th>
                  <th scope="col">Ncbi_bioproject</th>
                  <th scope="col">Gene_name </th>
                  <th scope="col">X_ray_exists </th>
                  <th scope="col">Ct_exists </th>
                  <th scope="col">Genomic_data_exists</th>
                  <th scope="col">Qure_consolidation</th>
                  <th scope="col">Outcome</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                {data.map((data, index) => (
                  <tr id="bodytableelements">
                    {}
                    <td>{data.id}</td>
                    <td>{data.country}</td>
                    <td>{data.education}</td>
                    <td>{data.employment}</td>
                    <td>{data.case_definition}</td>
                    <td>{data.type_of_resistance}</td>
                    <td>{data.x_ray_count}</td>
                    <td>{data.organization}</td>
                    <td>{data.affect_pleura}</td>
                    <td>{data.overall_percent_of_abnormal_volume}</td>
                    <td>{data.le_isoniazid}</td>
                    <td>{data.le_rifampicin}</td>
                    <td>{data.le_p_aminosalicylic_acid}</td>
                    <td>{data.hain_isoniazid}</td>
                    <td>{data.hain_rifampicin}</td>
                    <td>{data.period_start}</td>
                    <td>{data.period_end}</td>
                    <td>{data.period_span}</td>
                    <td>{data.regimen_count}</td>
                    <td>{data.qure_peffusion}</td>
                    <td>{data.treatment_status}</td>
                    <td>{data.regimen_drug}</td>
                    <td>{data.comorbidity}</td>
                    <td>{data.ncbi_bioproject}</td>
                    <td>{data.gene_name}</td>
                    <td>{data.x_ray_exists}</td>
                    <td>{data.ct_exists}</td>
                    <td>{data.genomic_data_exists}</td>
                    <td>{data.qure_consolidation}</td>
                    <td>{data.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isLoading ? (
            <div>
              Uploading Data Please Wait...
              <ProgressBar now={progress} animated label={`${progress}%`} />
            </div>
          ) : (
            <div className="button-wrapper">
              <Button variant="success" onClick={(e) => AcceptData()}>
                Accept
              </Button>
              &nbsp;&nbsp;
              <Button variant="danger" onClick={() => RejectData()}>
                Reject
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
