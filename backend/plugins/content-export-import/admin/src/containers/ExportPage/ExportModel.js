import React, { useState } from "react";
import { Button } from "strapi-helper-plugin";
import { saveAs } from "file-saver";
import { fetchEntries } from "../../utils/contentApis";
import { HFlex, ModelItem } from "./ui-components";
import JsonDataDisplay from "../../components/JsonDataDisplay";

const ExportModel = ({ model }) => {
  const [fetching, setFetching] = useState(false);
  const [content, setContent] = useState(null);
  const fetchModelData = () => {
    setFetching(true);
    fetchEntries(model.apiID, model.schema.kind)
      .then((data) => {
        setContent(data);
      })
      .finally(() => {
        setFetching(false);
      });
  };

  const downloadJson = () => {
    const current = new Date();
    const file = new File(
      [JSON.stringify(content)],
      `${model.apiID}-${current.getTime()}.json`,
      { type: "application/json;charset=utf-8" }
    );
    saveAs(file);
  };

  // JSON to CSV Converter
  function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var key in array[0]){
      str += key + ',';
    }

    str = str.substring(0, str.length - 1);
    str += '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

  const downloadCSV = () => {
    const current = new Date();
    const csv = ConvertToCSV(JSON.stringify(content));
    const file = new File(
      [csv],
      `${model.apiID}-${current.getTime()}.csv`,
      { type: "application/csv;charset=utf-8" }
    );
    saveAs(file);
  };

  return (
    <ModelItem>
      <HFlex>
        <span className="title">{model.schema.name}</span>
        <div>
          <Button
            disabled={fetching}
            loader={fetching}
            onClick={fetchModelData}
            secondaryHotline
          >
            {fetching ? "Fetching" : "Fetch"}
          </Button>
          <Button
            disabled={!content}
            onClick={downloadJson}
            kind={content ? "secondaryHotline" : "secondary"}
          >
            Download JSON
          </Button>
          <Button
            disabled={!content}
            onClick={downloadCSV}
            kind={content ? "secondaryHotline" : "secondary"}
          >
            Download CSV
          </Button>
        </div>
      </HFlex>
      {content && <JsonDataDisplay data={content} />}
    </ModelItem>
  );
};

export default ExportModel;
