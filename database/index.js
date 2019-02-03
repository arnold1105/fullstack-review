const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  "id": Number,
  "name": String,
  "forks_count": Number,
  "repo_url": String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repos = JSON.stringify(repos);
  repos = JSON.parse(repos);
  repos.forEach((info) => {
    var info = new Repo({
      id: info.id,
      name: info.name,
      forks_count: info.forks_count,
      repo_url: info.owner.repos_url
    })

    info.save((err) => {
      if (err) {
        console.log(err);
        return;
      }
    })
  })
}

var retrieve = (callback) => {
  Repo.find()
  .select("id name hmtl_url forks_count")
  .limit(25)
  .sort({forks_count: -1})
  .exec(callback);
}

module.exports.save = save;
module.exports.retrieve = retrieve;
