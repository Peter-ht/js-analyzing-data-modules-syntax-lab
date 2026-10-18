require("date.js");

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    for (const userArray of args) {
        combinedObject.users = [
            ...combinedObject.users,
            ...userArray
        ];
    }

    combinedObject.merge_date = Date.today().toString("MM/dd/yyyy");

    return combinedObject;
}

module.exports = {
    ...(typeof combineUsers !== "undefined" && { combineUsers })
};