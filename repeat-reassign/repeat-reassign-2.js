var funcs = [
  this.appendAnalyticsData,
  this.appendSubmissionData,
  this.appendAdditionalInputs,
  this.pruneObject
];

funcs.forEach(function(func) {
  data = func(data);
});
