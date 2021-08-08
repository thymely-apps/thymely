'use strict';

/* Application Driver */

const activityRepository = new ActivityRepository();
const resultRepository = new ResultRepository();
const resultManager = new ResultManager(activityRepository, resultRepository);

resultRepository.results.clear();

document.addEventListener(
    'submit',
    (event) => {
      event.preventDefault();

      const location = event.target['park-area'].value;
      const thrillLevel = event.target['thrill-level'].value;

      const predicate = new Predicate(location, thrillLevel);

      resultManager.generateResults(predicate);

      window.location.assign('./results.html');
    },
);