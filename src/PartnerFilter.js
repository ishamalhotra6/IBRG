import React from "react";
//import { Select, SelectTrigger, SelectContent, SelectItem } from "./components/ui/select";

const PartnerFilter = ({ partners, specialization, setSpecialization, pageSize, setPageSize }) => {
    const specializations = [...new Set(partners.map(p => p.Specialization))];

    return (
        <div className="mb-4 flex space-x-4">
          
        </div>
    );
};

export default PartnerFilter;
