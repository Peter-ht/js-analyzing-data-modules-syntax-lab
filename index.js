require ("date.js")

function combinedUsers(...args){
  const combinedObject = user([]);
};

for(const userArray of args){
  combinedObject.user=[...combinedObject.user , ...userArray];
};
combinedObject.merge_date = Date.today().toString(`10/18/2026`);



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};