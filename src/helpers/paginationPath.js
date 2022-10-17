const { BadRequestResponse } = require("../_HTTP-response/errors");


const paginationPath = (currentPage, totalPages, prevPage, nextPage, rows, pathModel) => {

    if(Number(currentPage) > totalPages - 1) throw new BadRequestResponse(`Total pages:  ${totalPages}.`);

    const items = {
        prevPage: prevPage < 0 ? null : `http://localhost:${process.env.PORT}/api/${pathModel}?page=${prevPage}`,            
        currentPage: `http://localhost:${process.env.PORT}/api/${pathModel}?page=${currentPage}`,
        nextPage:  nextPage >= totalPages  ? null : `http://localhost:${process.env.PORT}/api/${pathModel}?page=${nextPage}` ,
        totalPages:totalPages,
        rows: rows,
    };

    return items;

}

module.exports = paginationPath