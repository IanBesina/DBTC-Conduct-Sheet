function createIndividualConduct() {
  var ss        = SpreadsheetApp.getActiveSpreadsheet();

   // Get the named range in Conduct Grade Sheet that has the names of students
  var namesDataRange = ss.getRangeByName("Names");
   // Get the individual values of names
  var namesObjects = namesDataRange.getValues();
   // Enter and retrieve data from another sheet named Rubrics
  var template = ss.getSheetByName('version2 rubrics');
   // Keep on creating a new sheet for as long as not all names have been given a sheet and left with blank
  for (var i=0; i < namesObjects.length; i++) {
    
     // Put the sheet you want to create in a variable
     var sheet = ss.getSheetByName(namesObjects[i]);

      // Check if the sheet you want to create already exists. If so,
      // log this and loop back. If not, create the new sheet.
      // Stop with an error upon reaching the blank cell with no name
        if (sheet) {
           Logger.log("Sheet " + namesObjects[i] + "already exists");
        } else {
           template.copyTo(ss).setName(namesObjects[i]);
           }
        }
  return;
}
