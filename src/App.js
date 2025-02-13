import React, { useEffect, useState } from "react";
import PartnerFilter from "./PartnerFilter";
import PartnerList from "./PartnerList";
import PaginationControls from "./PaginationControls";

const TrustedPartners = () => {
    const [partners, setPartners] = useState([]);
    const [filteredPartners, setFilteredPartners] = useState([]);
    const [specialization, setSpecialization] = useState("");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        fetch("http://localhost:8080/api/trustedpartners/list")
            .then(res => res.json())
            .then(data => {
                setPartners(data);
                setFilteredPartners(data);
            });
    }, []);

    useEffect(() => {
        let filtered = partners;
        if (specialization) {
            filtered = partners.filter(p => p.Specialization === specialization);
        }
        setFilteredPartners(filtered);
    }, [specialization, partners]);

    return (
        <div className="p-4">
            <PartnerFilter 
                partners={partners} 
                specialization={specialization} 
                setSpecialization={setSpecialization} 
                pageSize={pageSize} 
                setPageSize={setPageSize} 
            />
            <PartnerList partners={filteredPartners} page={page} pageSize={pageSize} />
            <PaginationControls 
                page={page} 
                setPage={setPage} 
                totalItems={filteredPartners.length} 
                pageSize={pageSize} 
            />
        </div>
    );
};

export default TrustedPartners;
