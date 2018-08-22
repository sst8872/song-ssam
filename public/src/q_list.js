// let questions = '';
//
// function ajax_call() {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", '/quiz/getquiz');
//         xhr.onload = () => {
//             const data = JSON.parse(xhr.responseText);
//             renderQuestion(data);
//             resolve(data);
//         };
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();
//     });
// }
//
// ajax_call()
//     .then((data) => {
//         questions = data;
//         console.log(questions);
//     })
//     .catch(err => console.log(err));



const questions = [
    [ "What is 10 + 4?", "12", "14", "16", "B" ],
    [ "What is 20 - 9?", "7", "13", "11", "C" ],
    [ "What is 7 x 3?", "21", "24", "25", "A" ],
    [ "What is 8 / 2?", "10", "2", "4", "C"]
];

