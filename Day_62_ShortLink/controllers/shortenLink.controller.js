module.exports = {
	index: async (req, res) => {
    res.render("shortenLink/index");
  },

  handleCreateShortenLink: async (req, res) => {
    const body = req.body;

    console.log('handleCreateShortenLink body: ', body);
    // res.render("shortenLink/index");

    return res.redirect("shortenLink");

  },

}