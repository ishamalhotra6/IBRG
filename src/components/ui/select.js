import React from "react";

const Select = ({ value, onChange, options, className }) => {
    return (
        <select 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            className={`px-3 py-2 border rounded ${className}`}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectTrigger = ({ children, className }) => {
    return <div className={`px-3 py-2 border rounded bg-gray-100 ${className}`}>{children}</div>;
};

const SelectContent = ({ children, className }) => {
    return <div className={`border rounded shadow-md bg-white ${className}`}>{children}</div>;
};

const SelectItem = ({ value, children, onSelect }) => {
    return (
        <div 
            className="px-3 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => onSelect(value)}
        >
            {children}
        </div>
    );
};

export { Select, SelectTrigger, SelectContent, SelectItem };