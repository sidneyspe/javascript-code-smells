var funcs = [
  this.appendAnalyticsData,
  this.appendSubmissionData,
  this.appendAdditionalInputs,
  this.pruneObject
];

data = funcs.reduce(function(memo, func) {
  return func(memo);
}, data);
