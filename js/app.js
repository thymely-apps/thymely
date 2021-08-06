'use strict';

/* Application Driver */

const activityRepository = new ActivityRepository();
const resultRepository = new ResultRepository();

(function handleSubmitButtonClick() {
  document.addEventListener(
      'submit',
      (e) => {
        const predicate = CommonLib.Event.getSubmitButtonClickDelegate(e);
        const activities = Array.from(activityRepository.activities.get(predicate));
        for (const activity of activities) {
          resultRepository.results.add(activity);
        }
        window.location.assign('./results.html');
      },
  );
})();