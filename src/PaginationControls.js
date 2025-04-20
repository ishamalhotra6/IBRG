import React from "react";
import Button from "./components/ui/button";

const PaginationControls = ({ page, setPage, totalItems, pageSize }) => {
    const totalPages = Math.ceil(totalItems / pageSize);

    return (
        <div className="flex justify-between items-center mt-4">
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </Button>
            <span>Page {page} of {totalPages}</span>
            <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next
            </Button>
        </div>
    );
};

export default PaginationControls;
