'use strict';

// const activityRepository = new ActivityRepository();
const resultRepository = new ResultRepository();

// function randomizeResults(results) {
//   let result = new Set();
//   let tryCount = 0;
//
//   while (result.size < 3 && tryCount < 3) {
//     let r = results[CommonLib.Random.getRandomIntInclusive(0,
//         results.length)];
//     if (r) result.add(r);
//     // else {
//     //   r = this.activityRepository.activities.get(new Predicate(' ', ' '));
//     // }
//
//     result.add(r);
//     this.resultRepository.add(r);
//     tryCount++;
//   }
//
//   return result;
// }

const results = Array.from(resultRepository.results.get());

const summaryElement = document.getElementById('thymely-results').
    getElementsByTagName('p')[0];
const activityElementTitle = document.getElementById('thymely-activity').
    getElementsByTagName('h2')[0];
const activityElementDescription = document.getElementById('thymely-activity').
    getElementsByTagName('p')[0];
const activityElementImage = document.getElementById('thymely-activity').
    getElementsByTagName('img')[0];
const ride1ElementTitle = document.getElementById('thymely-ride1').
    getElementsByTagName('h2')[0];
const ride1ElementDescription = document.getElementById('thymely-ride1').
    getElementsByTagName('p')[0];
const ride1ElementImage = document.getElementById('thymely-ride1').
    getElementsByTagName('img')[0];
const ride2ElementTitle = document.getElementById('thymely-ride2').
    getElementsByTagName('h2')[0];
const ride2ElementDescription = document.getElementById('thymely-ride2').
    getElementsByTagName('p')[0];
const ride2ElementImage = document.getElementById('thymely-ride2').
    getElementsByTagName('img')[0];

// const result = activityRepository.activities.get(
//     new Predicate(
//         'Critter Country',
//         CommonLib.Constants.THRILLLEVELLOW));

summaryElement.innerText =
    results[0].title + results[1].title + results[2].title;

activityElementTitle.innerText = results[0].title;
activityElementDescription.innerText = results[0].shortDescription;
activityElementImage.setAttribute('src', results[0].imageUrl);

ride1ElementTitle.innerText = results[1].title;
ride1ElementDescription.innerText = results[1].shortDescription;
ride1ElementImage.setAttribute('src', results[1].imageUrl);

ride2ElementTitle.innerText = results[2].title;
ride2ElementDescription.innerText = results[2].shortDescription;
ride2ElementImage.setAttribute('src', results[2].imageUrl);

// (function handleSubmitButtonClick() {
//   document.addEventListener(
//       'submit',
//       (e) => {
//         const predicate = CommonLib.Event.getSubmitButtonClickDelegate(e);
//         results = Array.from(resultRepository.activities.get(predicate));
//         window.location.assign('./results.html');
//       },
//   );
// })();