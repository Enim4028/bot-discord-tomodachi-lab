const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const sheets = google.sheets('v4');

async function getAuthToken() {
    const auth = new google.auth.GoogleAuth({
        scopes: SCOPES
    });

    const authToken = await auth.getClient();

    return authToken;
}

async function getSpreadSheetValues({spreadsheetId, auth, sheetName}) {
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        auth,
        range: sheetName
    });

    return res;
}

async function appendValues({spreadsheetId, auth, sheetName, valueInputOption, resource}) {
    const res = await sheets.spreadsheets.values.append({
        spreadsheetId,
        auth,
        range: sheetName,
        valueInputOption,
        resource,
    });

    return res;
}

module.exports = {
    getAuthToken,
    getSpreadSheetValues,
    appendValues
}