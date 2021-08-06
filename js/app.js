'use strict';

/* Application Driver */

const activityRepository = new ActivityRepository();
const resultRepository = new ResultRepository();

document.addEventListener(
    'submit',
    (e) => {
      const predicate = CommonLib.Event.getSubmitButtonClickDelegate(e);
      // const matchingActivities = resultRepository.activities.get(predicate);
      window.location.assign('./results.html');
    },
);