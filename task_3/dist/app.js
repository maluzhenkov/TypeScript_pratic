import fetch from "node-fetch";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const getData = async (url) => {
    return fetch(url).then((response) => response.json());
};
getData(COMMENTS_URL).then((data) => {
    console.log(data.map(({ id, email }) => ({ id, email })));
});
//# sourceMappingURL=app.js.map