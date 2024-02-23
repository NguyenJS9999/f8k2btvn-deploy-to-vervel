module.exports = {
  index: async (req, res) => {
    const {
      order = "asc",
      sort = "id",
      status,
      q,
      limit,
      page = 1,
    } = req.query;
    const response = {};
    try {
      const filter = {};
      if (status === "true" || status === "false") {
        filter.status = status === "true";
      }
      if (q) {
        filter[Op.or] = {
          fullname: {
            [Op.iLike]: `%${q.trim()}%`,
          },
          email: {
            [Op.iLike]: `%${q.trim()}%`,
          },
        };
      }
      const options = {
        order: [[sort, order]],
        attributes: { exclude: "password" },
        where: filter,
      };
      if (limit && Number.isInteger(+limit)) {
        const offset = (page - 1) * limit;
        options.limit = limit;
        options.offset = offset;
      }
      const { count, rows: users } = await User.findAndCountAll(options);
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: new UserTranformer(users),
        count,
      });
    } catch {
      Object.assign(response, { status: 500, message: "Server Error" });
    }

    res.status(response.status).json(response);
  },
  find: async (req, res) => {
    const { id } = req.params;
    
    res.status(response.status).json(response);
  },
};
