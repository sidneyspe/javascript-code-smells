data = _.flow(
  this.appendAnalyticsData,
  this.appendSubmissionData,
  this.appendAdditionalInputs,
  this.pruneObject
)(data);
