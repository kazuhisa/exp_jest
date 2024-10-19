const work = async (userId) => {
  return await getUserQuery(userId);
};

const getUserQuery = (userId) => {
  return "original result";
};

module.exports = {
  work,
  getUserQuery,
};
