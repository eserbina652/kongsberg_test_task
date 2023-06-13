import React from 'react';

interface BreadcrumbProps {
    path: string[]; // Replace with the path data type
    onNavigate: (index: number) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path, onNavigate }) => {
    return (
        <div>
            {path.map((level, index) => (
                <span key={index}>
          {index > 0 && ' / '}
                    <span style={{ cursor: 'pointer' }} onClick={() => onNavigate(index)}>
            {level}
          </span>
        </span>
            ))}
        </div>
    );
};

export default Breadcrumb;