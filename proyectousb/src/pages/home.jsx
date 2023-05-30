// import React, { useState } from 'react';
import {read,utils} from 'xlsx';
import { saveAs } from 'file-saver';

function ExcelToWordConverter() {
  const [excelFile, setExcelFile] = useState(null);

  function handleExcelFileChange(event) {
    setExcelFile(event.target.files[0]);
  }
  
  function handleConvertButtonClick() {
    if (excelFile) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = read(data, { type: 'array' });
        let wordDocument = '';
        for (let i = 0; i < workbook.SheetNames.length; i++) {
          const sheet = workbook.Sheets[workbook.SheetNames[i]];
          const html = utils.sheet_to_html(sheet);
          wordDocument += html;
        }
        const blob = new Blob([wordDocument], { type: 'application/msword' });
        saveAs(blob, excelFile.name);
      };
      reader.readAsArrayBuffer(excelFile);
    }
  }


  return (
    <div>
      <h2>Convertir archivo Excel a Word</h2>
      <div>
        <label htmlFor="excel-file">Cargar archivo Excel:</label>
        <input type="file" name="excel-file" id="excel-file" accept=".xlsx,.xls" onChange={handleExcelFileChange} />
      </div>
      <div>
        <button onClick={handleConvertButtonClick}>Convertir a Word</button>
      </div>
    </div>
  );
}

export default ExcelToWordConverter;