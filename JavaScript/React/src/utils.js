const { writeFile } = require('fs');

const useDebug = false;

function writeAuditDataReport(auditDataReports) {
    writeFile('/home/ubuntu/temp/auditDataReports.txt', auditDataReports.toString(), (err) => {
        if (err) {
            console.error(`Error writing audit file: ${err.message}`);
            return;
        }

        if (useDebug) {
            console.log('parseJson:', typeof getAudit);
        }
    });
}

const getCurrentDateTime = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

console.log(getCurrentDateTime());

module.exports = { getCurrentDateTime, writeAuditDataReport };
