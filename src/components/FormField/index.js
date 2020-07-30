import React from 'react';

const FormField = ({ label, type, name, value, onChange }) => {
    return (
        type === "text" || type === "color"
            ?
            <div>
                <label>
                    {label}
                    <input
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
            :
            <div>
                <label>
                    {label}
                    <textarea
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
    );
}

export default FormField;