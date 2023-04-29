import fetch from "node-fetch";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface ICommentData {
  id: number;
  email: string;
}

const getData = async <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => response.json() as Promise<T>);
};

getData<ICommentData[]>(COMMENTS_URL).then((data) => {
  console.log(data.map(({ id, email }) => ({ id, email })));
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
