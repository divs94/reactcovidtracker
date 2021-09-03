import React, { useEffect , useState } from "react";
import './covid.css';
import Navbar from "./Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    };



    useEffect(() => {
    getCovidData();
    }, []);
    return (

        <>

            <section>
                <Navbar />
                <hr />
            <ul className="card_back">
                <li id="first" className="card">
                    <div className="card_main">
                        <div className="card_inner">
                            <p className="card_name"><span> our </span>COUNTRY</p>
                            <p className="card_total card_small">INDIA</p>
                    </div>
                        </div>
                    </li>
                    <li id="second" className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> Total </span>RECOVERED</p>
                                <p className="card_total card_small">{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li id="third" className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> Total </span>CONFIRMED</p>
                                <p className="card_total card_small">{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li id="fourth" className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> Total </span>DEATH</p>
                                <p className="card_total card_small">{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li id="five" className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> Total </span>ACTIVE</p>
                                <p className="card_total card_small">{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li id="six" className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span> Last </span>UPDATED</p>
                                <p id="last" className="card_total card_small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Covid;