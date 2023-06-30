import './Career.css';
import position from "./position";
import Card from "./Card";
import {useState} from "react";


function Career() {
    const [showType, setShowType] = useState("All");
    const list = position.map((e) => {
        return (
            showType === "All" || showType === e.type ?
                <Card
                    type="position"
                    key={e.name}
                    title={e.name}
                    content={e.jobDescription}
                    price={e.salary}
                /> : ""
        );
    });
    return (
        <div>
            <h2 className="main-title">Career</h2>
            <p className="career-text">
                Yang's Kitchen seeks passionate and talented individuals who share our love for Chinese food and
                culture.</p>
            <p className="career-text">
                As part of our team, you'll have the chance to learn and grow while providing exceptional
                customer service.
            </p>
            <p className="career-text">
                Contact us at 425-660-8800 for job opportunities.
            </p>
            <label htmlFor="filter">Filter:</label>
            <select id="filter" onChange={(e) => setShowType(e.target.value)}>
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Service">Service</option>
            </select>
            <div className="openings">
                {list}
            </div>
        </div>
    );
}

export default Career;