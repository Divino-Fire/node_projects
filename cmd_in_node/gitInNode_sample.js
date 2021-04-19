// index.ts
import * as simpleGit from "simple-git/promise";

async function build() {
  const git = simpleGit();

  //list commits
  // git log accepts an options object - from ts definition
  /*
    format?: T;
    file?: string;
    from?: string;
    multiLine?: boolean;
    symmetric?: boolean;
    to?: string;
  */
  const log = await git.log({ file: `sample-post-page.html` });

  // get first commit date of file
  const createdDate = new Date(log.all.slice(-1)[0].date);

  // get latest modified date of file
  const modifiedDate = new Date(log.latest.date);

  // output formatted time stamps
  console.log(createdDate.toLocaleDateString());
  console.log(modifiedDate.toLocaleDateString());
}

build();