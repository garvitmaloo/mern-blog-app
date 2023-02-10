exports.getPaginatedResults = function (model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = 9;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedResults = {};

    try {
      const allResults = await model.find();

      if (startIndex > 0) {
        paginatedResults.previousPage = {
          page: page - 1,
        };
      }

      if (endIndex < allResults.length) {
        paginatedResults.nextPage = {
          page: page + 1,
        };
      }

      paginatedResults.currentPage = allResults.slice(startIndex, endIndex);

      res.paginatedResults = paginatedResults;
      next();
    } catch (err) {
      throw new Error("Could not fetch data from the database");
    }
  };
};
