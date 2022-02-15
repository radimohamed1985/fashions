const myPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("Connection Established");
  } else {
    reject(Error("Connection Failed"));
  }
}).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

const theResolved = (resolved) => console.log(resolved);
const therejected = (rejected) => console.log(rejected);

myPromise.then(theResolved, therejected)