'use strict';

/* Dependencies */

const activityRepository = new ActivityRepository();
const resultRepository = new ResultRepository();
const resultManager = new ResultManager(activityRepository, resultRepository);

/*  Page Elements  */

const results = resultManager.getResults();
const summaryElement = document.getElementById('thymely-results');
const activityElement = document.getElementById('thymely-activity');
const ride1Element = document.getElementById('thymely-ride1');
const ride2Element = document.getElementById('thymely-ride2');

setSummaryText();
setElement(activityElement, results.activities[0]);
setElement(ride1Element, results.activities[1]);
setElement(ride2Element, results.activities[2]);

/* Functions */

function setSummaryText() {
  summaryElement.getElementsByTagName('p')[0].innerText =
      `Your adventure starts at ${results.activities[0].title}. ` +
      `Next, you'll visit ${results.activities[1].title}. ` +
      `And finally, you'll go to ${results.activities[2].title}. ` +
      'We sincerely hope you enjoy our magical world!';
}

function setElement(element, activity) {
  element.getElementsByTagName('h2')[0].innerText = activity.title;
  element.getElementsByTagName('p')[0].innerText = activity.shortDescription;
  element.getElementsByTagName('img')[0].setAttribute('src', activity.imageUrl);
}

document.getElementById('thymely-regen-button').addEventListener(
    'click',
    (e) => {
      window.location.assign('./index.html');
    },
);