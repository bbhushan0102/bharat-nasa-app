const { analysePersonality } = require('../models/watson');
const { getDataByTopic } = require('../models/news');
const profile = require('../profile.json');

exports.sendInsights = (req, res, next) => {
  const { topic } = req.params;
  getDataByTopic(topic)
    .then(articleContent => analysePersonality(articleContent))
    .then(profile => res.send({ profile }))
    .catch(next);
};
