import React from "react";

const PartnerList = ({ partners, page, pageSize }) => {
    const startIndex = (page - 1) * pageSize;
    const paginatedPartners = partners.slice(startIndex, startIndex + pageSize);

    const groupedPartners = paginatedPartners.reduce((acc, partner) => {
        if (!acc[partner["Business Line"]]) {
            acc[partner["Business Line"]] = [];
        }
        acc[partner["Business Line"]].push(partner);
        return acc;
    }, {});

    return (
        <div>
            {Object.entries(groupedPartners).map(([businessLine, partners]) => (
                <div key={businessLine} className="mb-6">
                    <h2 className="text-xl font-bold mb-2">{businessLine}</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <tbody>
			<ul>
                            {partners.map((partner, index) => (
                                <React.Fragment key={index}>
				<tr className="bg-gray-100">
				</tr>
				    <li>
                                    <tr className="bg-gray-100">
                                        <td colSpan="3" className="p-2"><b>{partner.Name}</b></td>
                                    </tr>
				    </li>
					<tr className="bg-gray-100">
                                        <td colSpan="3" className="p-2 font-semibold"><i>Specialization</i> : {partner.Specialization}</td>
                                    </tr>

                                    <tr>
                                        <td className="p-2"><i>Contact</i> : {partner["Contact Name"]},</td>
                                        <td className="p-2">{partner.Contact},</td>
                                        <td className="p-2">{partner.Email}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3" className="p-2">
                                            <a href={partner["Google Review URL"]} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                                Google Reviews
                                            </a>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
			</ul>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default PartnerList;
