
// // ES6
'use strict';

// const MESSAGE = "Hello!";

// let greet = () => {
//   console.log('MEssdds:',MESSAGE);
//   };

// greet();
// fetchData();
// // htmlgagAsync();
// const fetchData = async ('https://hatsuatari.microcms.io/api/v1/hatsu'
// ,{ headers: { 'X-API-KEY': 'b9d1cdd1-9158-4717-a5f6-61746b9629c8' }}) => {
//   const resp = await fetch(
//           'https://hatsuatari.microcms.io/api/v1/hatsu'
//           ,{ headers: { 'X-API-KEY': 'b9d1cdd1-9158-4717-a5f6-61746b9629c8' }}
//       );
//   const json = await resp.json();
//   console.log(json);
// };
// async function htmlgagAsync(){
//   const htmls = await fetch(
//       'https://hatsuatari.microcms.io/api/v1/hatsu'
//       ,{ headers: { 'X-API-KEY': 'b9d1cdd1-9158-4717-a5f6-61746b9629c8' }}
//   )
//   htmls = await htmls.json();
//   const textjng = await function(htmls){
//       console.log('aaaaaaa');
//   }
// return console.log(textjng);
// }
const USERS_API = "https://jsonplaceholder.typicode.com/users";
async function callApi() {
  const res = await window.fetch(USERS_API);
  const users = await res.json();
  console.log(users);
}

callApi();