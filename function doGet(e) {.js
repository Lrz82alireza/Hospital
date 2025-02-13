function doGet(e) {
  var response = ContentService.createTextOutput();
  response.setMimeType(ContentService.MimeType.JSON);

  var sheet = SpreadsheetApp.openById("12zJjgr0p1oGB6LFIuqUSiANiUEH1ZQ8Sag0nN4Qudws").getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();

  var id = e.parameter.id;
  if (!id) {
    response.setContent(JSON.stringify({ error: "No ID provided!" }));
    return response;
  }

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      var result = {
        name: data[i][1],
        model: data[i][2],
        location: data[i][3],
        date: data[i][4],
        info: data[i][5]
      };
      response.setContent(JSON.stringify(result));
      return response;
    }
  }

  response.setContent(JSON.stringify({ error: "Device not found!" }));
  return response;
}
