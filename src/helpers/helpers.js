export const removeTags = str => {
    return str ? str.replace(/(<([^>]+)>)/ig, '').replace(/\n/g, '') : "";
};
