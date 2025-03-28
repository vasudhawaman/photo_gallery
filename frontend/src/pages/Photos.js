import React from "react";
import ExpandableCard from "../components/ExpandableCard";
import photo1 from "../assets/image1.png";
import photo2 from "../assets/image2.png";
import photo3 from "../assets/image3.png";
import "./Photos.css"; // Import the CSS file for styling

export default function Photos() {
    const cardData = [
        {
            title: "Gallery 1",
            pictures: [photo1, photo2],
        },
        {
            title: "Gallery 2",
            pictures: [photo2, photo3],
        },
        {
            title: "Gallery 3",
            pictures: [photo1, photo3],
        },
        {
            title: "Gallery 4",
            pictures: [photo1, photo3],
        },
    ];

    return (
        <div className="photos-grid">
            {cardData.map((card, index) => (
                <ExpandableCard key={index} title={card.title} pictures={card.pictures} />
            ))}
        </div>
    );
};