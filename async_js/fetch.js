let description_of_program = `this program fetches all the repos of a given github username 
and displays the project names along side their git clones https urls`;

const fetch = require('node-fetch');

let url = "https://www.reddit.com/r/popular.json";
let url2 = "https://api.github.com/users/Trenblack/repos";

let settings = { method: "Get" };
data = [];
class Clone{
    constructor(name, url){
        this.name = name;
        this.url = url;
    }

}
fetch(url2, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
        let max = json.length;
        for (let i = 0; i<max; i++){
           let temp = new Clone(json[i].name, json[i].clone_url);
            data.push(temp);

        }
        console.log(data);
        data.map((clone)=>console.log(clone.name));

        
    });

