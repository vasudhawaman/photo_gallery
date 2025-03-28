import React, { useState, useRef, useEffect } from 'react';
import './ExpandableCard.css'; // Import the CSS file for styling

const ExpandableCard = ({ title, pictures }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isExpanded && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [isExpanded]);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="expandable-card">
            <div className="card-header" onClick={toggleExpand}>
                <h3>{title}</h3>
                <button>{isExpanded ? 'Collapse' : 'Expand'}</button>
            </div>
            <div
                className={`card-content ${isExpanded ? 'content-visible' : 'content-hidden'}`}
                ref={contentRef}
            >
                <div className="picture-grid">
                    {pictures.map((picture, index) => (
                        <img key={index} src={picture} alt={`Picture ${index + 1}`} className="grid-item" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpandableCard;
