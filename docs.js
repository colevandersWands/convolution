
// can't modify top-level state properties after app is initiated
// can directly modify state by passing in functions that return partial states
// call without 'new' to get a basic currying app
// call with 'new' to build a self-logging meta-app
  // the log is an array accessible only by 'this.log' in convolution.prototype.meta 
  // can extend/modify meta access by overwriting convolution.prototype.meta
  // in meta you have access by 'this' to an object bound within each app instance
  // modifying meta applies directly to all self-logging instances in current runtime by inheritance
  // 'this' is really just an object bound 
    // you can use it to keep any notes about the instance by passing payloads through instance()
    // and handling them in meta
    // the only thing you can't mess with is the .log it will always be there, and it will be an array
// to permanently kill meta access for each instance, simply have conv.proto.meta redirect 'this's __proto__
// initializing actions not an object leaves the app with no methods, but still able to accept partial state functions
// initializing with state not an object leaves 'no state here' as the permanant state 
// can turn bound this into a full oop program that feels almost functional by {action: '', args: []}
// assume people don't use both in a note

/*
const papp = new convolution();
convolution.prototype.meta = function() {this.a = 0; this.add = (x)=>this.a+x;};
papp({e:4}) //-> undefined
convolution.prototype.meta = function(args) {return this[args.act](args.args)};
convolution.prototype.meta = function() {this.a = 0; this.add = function(x){return this.a+x;}};
papp({args:3, act:'add'}) //-> undefined
convolution.prototype.meta = function(args) {return this[args.act](args.args)};
papp({args:3, act:'add'}) //-> 3
*/