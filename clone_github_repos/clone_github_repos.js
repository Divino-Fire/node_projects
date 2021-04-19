// username will be passed as cmd line arguments

let usernames = process.argv.slice(2);

function clone_all_repos(usernames){  // github usernames array

if (usernames.length == 0) console.log("no usernames; nothing to clone");
else usernames.map((username)=>clone_repo(username));

}

function clone_repo(username){

let description_of_program = `this program fetches all the repos of a given github username 
and displays the project names along side their git clones https urls`;

const fetch = require('node-fetch');
let simpleGit = require("simple-git/promise");

//let url = "https://www.reddit.com/r/popular.json";
let repo_url = `https://api.github.com/users/${username}/repos`;

let settings = { method: "Get" };
data = [];

class Clone{
    constructor(name, url){
        this.name = name;
        this.url = url;
    }

}

async function git_clone(_clone) {
  const git = simpleGit();

  const log = await git.clone(_clone);

}


fetch(repo_url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
        let max = json.length;
        for (let i = 0; i<max; i++){
           let temp = new Clone(json[i].name, json[i].clone_url);
            data.push(temp);

        }
        console.log(data);
        let len = data.length;
        let count = 0;
        let percent = 0;
        //console.log('cloning in progress...  ${percent}')
        process.stdout.write(`cloning progress...  ${percent}%`);
       

        (async function(){

            await data.map((clone) => {

                git_clone(clone.url);
                count++;
                percent = count/len * 100;
                //percent = int(percent);
                percent = String(percent);
                function per(a){ let m=a.length; let n = 3-m; let k = " ".repeat(n); return `${k}${a}`}
                percent = per(percent);
                percent = `${percent}%`
                process.stdout.write("\b\b\b\b" + percent);
                //setTimeout(function(){},1000);

             });

            await console.log(`\n ${count} repo(s) have been cloned`);
            await console.log("\n\n");
        })();
        
        
    });
} // end of function clone all repos


clone_all_repos(usernames);