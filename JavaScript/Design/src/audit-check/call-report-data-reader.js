const ReportDateReader = require('./report-data-reader');

ReportDateReader().then(data => {
    console.log('Data:', data);
}).catch(err => {
    console.error('Error:', err);
});
