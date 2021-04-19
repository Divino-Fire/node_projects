// index.ts
//import * as simpleGit from "simple-git/promise";
let simpleGit = require("simple-git/promise");

async function build(_clone) {
  const git = simpleGit();

  const log = await git.clone(_clone);

}

build();