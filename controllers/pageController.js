exports.getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};
exports.getMeetingsPage = (req, res) => {
  res.status(200).render('meetings', {
    page_name: 'meetings',
  });
};
