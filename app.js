const Koa = require("koa");
const app = new Koa();
const fetch = require("node-fetch");

const f = async () => {
  const data = await fetch(
    "https://www.json-schema-linter.com/api/jsonschemalinter/analyze ",
    {
      method: "POST",
      body: { "type": "string"  },
      headers: { "Content-Type": "application/json" },
    }
  );
  const res = await data.json();
  console.log("Data ", res);
};

f();

app.listen(3000);
