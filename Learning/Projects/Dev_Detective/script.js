//Initial Variable Declaration
const searchBar = document.querySelector(".input-container");
const profileContainer = document.querySelector(".profile-container");
const root = document.documentElement.style;
const get = (param) => document.getElementById(`${param}`);
const url = "https://api.github.com/users/";
const noResults = get("no-results");
const btnMode = get("btn-mode");
const btnsubmit = get("submit");
const input = get("input");
const avatar = get("avatar");
const userName = get("name");
const user = get("user");
const date = get("date");
const bio = get("bio");
const repos = get("repos");
const followers = get("followers");
const following = get("following");
const userLocation = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");
let darkMode = false;

function init(){
    darkMode = false;

    
}

