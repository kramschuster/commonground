import React from 'react';

interface PerspectiveCardProps {
    title: string;
    content: string;
    footer?: React.ReactNode;
}

const PerspectiveCard: React.FC<PerspectiveCardProps> = ({ title, content, footer }) => {
    return (
        <div className="perspective-card">
            <h2>{title}</h2>
            <p>{content}</p>
            {footer && <div className="footer">{footer}</div>}
        </div>
    );
};

export default PerspectiveCard;
