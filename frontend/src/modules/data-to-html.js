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


export {createTableHeader, populateData,};