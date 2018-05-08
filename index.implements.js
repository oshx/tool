import Express from "express";

((app,
  PORT,
  mapList) => {
  "use strict";

  if (process.argv.length > 2) {
    process.argv.map(arg => {
      // port setting
      const port = arg.split("PORT=");
      if (port.length > 1 &&
          !isNaN(Number(port[1]))) {
        PORT = port[1];
      }
    });
  }

  // routers
  mapList.map((map) => app.use(map.path, (req, res) => res.sendFile(__dirname + "/" + map.file)));

  // log info
  app.listen(PORT, () => {
    console.info(`LISTEN ${PORT}`);
  });
})(
  new Express(),
  80,
  [
    { path: "/", file: "index.html" },
  ],
);