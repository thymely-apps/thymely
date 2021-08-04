'use strict';

/* Application Driver Class */

const activityRepository = new ActivityRepository();
const resultRepository = new ResultRepository();

CommonLib.Event.attachClickListener(
    '',
    CommonLib.Event.submitButtonClickDelegate);