const axios = require('axios');
export const getWorkReportDataApi = () => {
    return axios.get('/api/work-report-data');
};
