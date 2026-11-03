async function getData(url) {
    const data = await fetch(url);
    return await data.json();
}

const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/users/1";

const promiseAllResult = Promise.all([getData(url1), getData(url2)])
    .then((results) => console.log("Promise.all results:", results))
    .catch((error) => console.error("Error in Promise.all:", error));
const promiseRaceResult = Promise.race([getData(url1), getData(url2)])
    .then((result) => console.log("Promise.race result:", result))
    .catch((error) => console.error("Error in Promise.race:", error));