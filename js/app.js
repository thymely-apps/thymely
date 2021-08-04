'use strict';

/* Application Driver Class */

// The activity repository contains a ton of activities
// We're going to filter them based on "criteria", a.k.a. predicate
//  --> applyFilter(activityLevel, thrillLevel)
// The activity repository might have the the filter as a prototype method.
const activityRepository = new ActivityRepository('');