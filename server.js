//required variables

const http = require("http");
const mongodb = require("mongodb");

// MongoDb connect

// let db;
const connectionString =
  "mongodb+srv://unknown1707:987231707j+@brrunknown.umwni.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, clientData) => {
    if (err) console.log("ERROR: Connection with MongoDB");
    else {
      console.log("MongoDB connection set successfully");
      module.exports = clientData;
      // after connection requiring app

      const app = require("./app");

      // 4 - rooting codes

      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `Server is running succesfully on port: ${PORT} http://localhost:${PORT}`
        );
      });
    }
  }
);
