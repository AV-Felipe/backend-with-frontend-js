function includeNewRegister(dataObject, dbLastElement){
    const currentLastElementId = dbLastElement.id;
    const newElement = dataObject;

    newElement.id = currentLastElementId + 1;

    return (newElement);
}

module.exports = includeNewRegister;