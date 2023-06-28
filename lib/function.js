const axios = require("axios");

function gempa(){
  return new Promise((resolve,reject) => {
    axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
    .then((response) => {
      
      var result = response.data.Infogempa.gempa;
      resolve(result);
      
    }).catch(err => reject(err));
  });
}

module.exports.gempa = gempa;