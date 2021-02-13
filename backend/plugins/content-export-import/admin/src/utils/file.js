const csv = require("csvtojson");

export const readLocalFile = (file, parser) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      const result =
        parser && typeof parser === "function"
          ? parser(event.target.result)
          : event.target.result;
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
};

export const readFileContent = (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const fileAsBinaryString = reader.result;
      csv({
        noheader: true,
        output: "json"
      })
        .fromString(fileAsBinaryString)
        .then((csvRows) => {
          const toJson = []
          csvRows.forEach((aCsvRow, i) => {
            if (i !== 0) {
              const builtObject = {}
              Object.keys(aCsvRow).forEach((aKey) => {
                const valueToAddInBuiltObject = aCsvRow[aKey];
                const keyToAddInBuiltObject = csvRows[0][aKey].replace(/[^a-zA-Z ]/g, "");
                builtObject[keyToAddInBuiltObject] = valueToAddInBuiltObject;
              })
              toJson.push(builtObject)
              resolve(toJson);
            }
          })
        })
    };
    reader.onerror = reject;  
    reader.readAsBinaryString(file);
  });
};
