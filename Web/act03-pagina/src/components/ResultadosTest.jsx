import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetchPamByEmailQuery, useFetchPamWithTestResultInRangeQuery, useFetchTestQuestionResultsQuery  } from "../store";
import { Pie } from "react-chartjs-2";
import './ResultadosTest.css'
function ResultadosTest() {
    const [chartData, setChartData] = useState({});

  const { user } = useSelector((state) => state.auth);
  const { data, error, isFetching } = useFetchPamByEmailQuery(user ? user.email : " ");
  const {
    data: dataPamsInRange1,
    error: errorPamsInRange1,
    isFetching: isFetchingPamsInRange1,
  } = useFetchPamWithTestResultInRangeQuery({
    testId: 12,
    lowerBoundary: 0,
    upperBoundary: 5,
  });
  const {
    data: dataPamsInRange2,
    error: errorPamsInRange2,
    isFetching: isFetchingPamsInRange2,
  } = useFetchPamWithTestResultInRangeQuery({
    testId: 12,
    lowerBoundary: 6,
    upperBoundary: 10,
  });
  const {
    data: dataPamsInRange3,
    error: errorPamsInRange3,
    isFetching: isFetchingPamsInRange3,
  } = useFetchPamWithTestResultInRangeQuery({
    testId: 12,
    lowerBoundary: 11,
    upperBoundary: 100,
  });

  const {data: testQuestionResults1, error: errorTestQuestionResults1, isFetching: isFetchingTestQuestionResults1} = useFetchTestQuestionResultsQuery({
    testId: 12,
    questionNumber: 72
  });

  const [testQResults1, setTestQResults1] = useState([]); // [
  const [pamData, setPamData] = useState(null);
  const [pamsInRange1, setPamsInRange1] = useState([]);
  const [pamsInRange2, setPamsInRange2] = useState([]);
  const [pamsInRange3, setPamsInRange3] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);

  useEffect(() => {
    if (data) {
      setPamData(data);
    }
  }, [data]);

  useEffect(() => {
    if (dataPamsInRange1) {
      setPamsInRange1(dataPamsInRange1.pams);
    }
  }, [dataPamsInRange1]);

  useEffect(() => {
    if (dataPamsInRange2) {
      setPamsInRange2(dataPamsInRange2.pams);
    }
  }, [dataPamsInRange2]);

  useEffect(() => {
    if (dataPamsInRange3) {
      setPamsInRange3(dataPamsInRange3.pams);
    }
  }, [dataPamsInRange3]);

  useEffect (() => {
    if (testQuestionResults1) {
        setTestQResults1(testQuestionResults1);

    }
    }, [testQuestionResults1]);

    if(testQuestionResults1 != null){
        console.log("TEST QUESTION RESULTS 1")
        console.log(testQuestionResults1)
    }
    


  const prepareChartData = () => {
    const countInRange1 = pamsInRange1.length;
    const countInRange2 = pamsInRange2.length;
    const countInRange3 = pamsInRange3.length;

    return {
      labels: ["0 - 5", "6 - 10", "11+"],
      datasets: [
        {
          data: [countInRange1, countInRange2, countInRange3],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
  };

  const openModal = (range) => {
    setSelectedRange(range);
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    setSelectedRange(null);
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  };

  return (
    <>
      <div>
        <h1>Resultados</h1>
        <div className="chart-container">
          {pamData && <Pie data={prepareChartData()} />}
        </div>
        <div className="button-container">
          {pamsInRange1.length > 0 && (
            <button onClick={() => openModal("range1")}>View Pams with Test Result Between 0 and 5</button>
          )}
          {pamsInRange2.length > 0 && (
            <button onClick={() => openModal("range2")}>View Pams with Test Result Between 6 and 10</button>
          )}
          {pamsInRange3.length > 0 && (
            <button onClick={() => openModal("range3")}>View Pams with Test Result Greater Than 10</button>
          )}
        </div>
      </div>

      {selectedRange === "range1" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pams with Test Result Between 0 and 5</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {pamsInRange1?.map((pam, index) => (
                  <tr key={index}>
                    <td>{`${pam.first_name} ${pam.last_name}`}</td>
                    <td>{pam.test_result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}

      {selectedRange === "range2" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pams with Test Result Between 6 and 10</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {pamsInRange2?.map((pam, index) => (
                  <tr key={index}>
                    <td>{`${pam.first_name} ${pam.last_name}`}</td>
                    <td>{pam.test_result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}

      {selectedRange === "range3" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pams with Test Result Greater Than 10</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {pamsInRange3?.map((pam, index) => (
                  <tr key={index}>
                    <td>{`${pam.first_name} ${pam.last_name}`}</td>
                    <td>{pam.test_result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}


    </>
  );
}

export default ResultadosTest;
