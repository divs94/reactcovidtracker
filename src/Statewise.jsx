import React, { useEffect,useState } from "react";
import "./statewise.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Statewise = () => {
           
    const [data, setData] = useState([]);

    const getCovidData = async () => {
    
       
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
             setData(actualData.statewise);
       
    };

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            
            <div className="container-fluid ">
                <div className="main-heading">
                    <h1>
                        <span>India</span> Covid-19 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>updated</th>
                            </tr>
                        </thead>
                        <tbody className="data_body">
                            {
                                data.map((curElem,index) => {
                                    return (
                                        <tr className="table-row" key={index}>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                      )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

};

export default Statewise;