const {
    getAuthToken,
    getSpreadSheetValues,
    appendValues
} = require('./spreadsheet.js');

const spreadsheetId = '1MgHD3WphEVh7vzM21DFQ_53hhreqcQywavo5u1N2G-k';
const sheetName = 'Foglio1';
const valueInputOption = 'USER_ENTERED';

async function getValues() {
    const auth = await getAuthToken();
    const res = await getSpreadSheetValues({
        spreadsheetId,
        sheetName,
        auth
    });


    

async function appendRow(values) {
    const resource = {
        values,
    };

    try {
        const auth = await getAuthToken();
        const response = await appendValues({
            spreadsheetId,
            sheetName,
            auth,
            valueInputOption,
            resource
        });
        
        console.log('output for append', JSON.stringify(response.data, null, 2));
    } catch(error) {
        console.log(error.message, error.stack);
    }
}

module.exports = {
    getValues,
    appendRow
}