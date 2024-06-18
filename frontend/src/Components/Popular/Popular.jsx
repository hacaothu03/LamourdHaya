import React, { useEffect, useState } from "react";
import './Popular.css'
import Item from "../Item/Item";

const Popular = () => {
    const [popularDolls, setPopularDolls] = useState([]);
    const [popularAnimals, setPopularAnimals] = useState([]);
    const [popularTools, setPopularTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/popularindolls')
            .then(response => response.json())
            .then(data => setPopularDolls(data))
            .catch(error => console.error("Error fetching dolls:", error));

        fetch('http://localhost:4000/popularinanimals')
            .then(response => response.json())
            .then(data => setPopularAnimals(data))
            .catch(error => console.error("Error fetching animals:", error));

        fetch('http://localhost:4000/popularintools')
            .then(response => response.json())
            .then(data => setPopularTools(data))
            .catch(error => console.error("Error fetching tools:", error));
    }, []);

    const renderPopularSection = (title, items) => (
        <div className="popular-section">
            <h1>{title}</h1>
            <hr />
            <div className="popular-item">
                {items.map((item, i) => (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price} 
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="popular">
            {renderPopularSection("POPULAR IN DOLLS", popularDolls)}
            {renderPopularSection("POPULAR IN STUFFED ANIMALS", popularAnimals)}
            {renderPopularSection("POPULAR IN CROCHET TOOLS", popularTools)}
        </div>
    );
}

export default Popular;
