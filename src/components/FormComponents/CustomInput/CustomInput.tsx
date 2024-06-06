import React from 'react';
import "./CustomInput.scss"

type Props = {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;

}

const CustomInput: React.FC<Props> = ({type, name, value, onChange, placeholder, required}) => {
    return (
            <>
                <input
                    className="custom-input"
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            </>
    );
};

export default CustomInput;