export const GetIdFromUrl = (path) => {
    let pathArr = path.split('/');
    let id = pathArr[pathArr.length-1];

    if (Number.isInteger(parseInt(id))){
        return id;
    }
    
    console.log('Last element of path is not an integer.');
    return null;
}

export const IsEmptyObject = (obj) => {
    return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
}