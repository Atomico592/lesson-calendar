import React from 'react';
import "./Button.scss"

type BtnProps = {
    title: string;
    onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({title, onClick}) => {
    return (
        <div className="btn" onClick={onClick}>
            {title}
        </div>
    );
};

export default Button;