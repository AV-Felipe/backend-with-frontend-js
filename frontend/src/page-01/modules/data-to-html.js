function createTableHeader (tableKind){
    if(tableKind === 'month'){
        return(`
            <thead>
                <tr>
                    <th scope="col">Colaborador</th>
                    <th scope="col">Data</th>
                </tr>
            </thead>
            <tbody></tbody>
        `);
    }

    if(tableKind === 'department'){
        return(`
            <thead>
                <tr>
                    <th scope="col">Colaborador</th>
                </tr>
            </thead>
            <tbody></tbody>
        `);
    }

    if(tableKind === 'branch'){
        return(`
            <thead>
                <tr>
                    <th scope="col">Colaborador</th>
                    <th scope="col">Ramal</th>
                </tr>
            </thead>
            <tbody></tbody>
        `);
    }
}

function populateData(dataObject, tableKind){
    
    if (tableKind === 'month'){
        return(`
            <tr>
                <td>${dataObject.name}</td>
                <td>${dataObject.birthDate}</td>
            </tr>
        `);
    }

    if(tableKind === 'department'){
        return(`
            <tr>
                <td>${dataObject.name}</td>
            </tr>
        `);
    }

    if(tableKind === 'branch'){
        return(`
            <tr>
                <td>${dataObject.name}</td>
                <td>${dataObject.branchLine}</td>
            </tr>
        `);
    }
    
}

function updateValueList(queryType){
    if(queryType === 'month'){
        return (`
            <option value="01">janeiro</option>
            <option value="02">fevereiro</option>
            <option value="03">março</option>
            <option value="04">abril</option>
            <option value="05">maio</option>
            <option value="06">junho</option>
            <option value="07">julho</option>
            <option value="08">agosto</option>
            <option value="09">setembro</option>
            <option value="10">outubro</option>
            <option value="11">novembro</option>
            <option value="12">dezembro</option>
        `);
    }

    if(queryType === 'department'){
        return (`
            <option value="Health Care">Health Care</option>
            <option value="Consumer Durables">Consumer Durables</option>
            <option value="Consumer Non-Durables">Consumer Non-Durables</option>
            <option value="n/a">n/a</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Capital Goods">Capital Goods</option>
            <option value="Basic Industries">Basic Industries</option>
            <option value="Consumer Services">Consumer Services</option>
            <option value="Technology">Technology</option>
            <option value="Public Utilities">Public Utilities</option>
            <option value="Finance">Finance</option>
            <option value="Energy">Energy</option>
            <option value="Transportation">Transportation</option>
        `);
        

    }
}


export {createTableHeader, populateData, updateValueList};