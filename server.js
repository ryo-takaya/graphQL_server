const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const apploServer = require("./model/graph_ql");
app.use(cors());

app.use(express.json());

apploServer.applyMiddleware({ app });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:3000${apploServer.graphqlPath}`
  );
});
