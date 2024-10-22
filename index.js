const {getUserQuery} = require("./query");

const work = async (userId) => {
  return await getUserQuery(userId);
};

module.exports = {
  work,
};
