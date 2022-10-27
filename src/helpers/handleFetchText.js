const axios = require("axios");
const cheerio = require("cheerio");

const fetchText = async (req, res, next) => {
  const url = "https://text.123docz.net//document/" + req.params.url + ".htm";
  try {
  } catch (err) {
    if (!err.message) {
      err.message = "Link get text invalid!!!";
    }
    next(err);
  }
  const $ = await fetchHtmlFromUrl(url);
  res.send($(".vf_view_pc").html());
};

const fetchHtmlFromUrl = async (url) => {
  return await axios
    .get(url)
    .then((response) => cheerio.load(response.data))
    .catch((error) => {
      error.status = (error.response && error.response.status) || 500;
      throw error;
    });
};

module.exports = fetchText;
