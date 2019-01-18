
// can't modify top-level state properties after app is initiated
// can directly modify state by passing in functions that return partial states
// call without 'new' to get a basic currying app
// call with 'new' to build a self-logging app
  // the log is an array accessible only by 'this.log' in convolution.prototype.access_log 
  // can extend/modify log access by overwriting convolution.prototype.access_log
  // modifications apply directly to all self-logging instances in current runtime
  // 'this' is really just an object 
    // you can use it to keep any notes about the instance by passing payloads through instance()
    // and handling them in access_log
    // the only thing you can't mess with is the log. it will always be there, and it will be an array



