module.exports = {
	index: async (req, res) => {
    res.render("shortenLink/index");
  },

  handleCreateShortenLink: async (req, res) => {
    const body = req.body;

    console.log('handleCreateShortenLink req: ', req);
    // console.log('handleCreateShortenLink body: ', body);
    // res.render("shortenLink/index");
    // res.render("index", { req })
    return res.redirect("/"); // shortenLink

  },

}