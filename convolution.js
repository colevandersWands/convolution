function convolution (state, actions) {

  if (!isObject(state)) {
    state = 'no state here';          
  };
  const constructor = this instanceof convolution;

  let instance = function (arg, log_info) {                 // users can clear the log
                                                            //  but not remove it, or change it's type
                                                            if (constructor) {
                                                             if (!(this.log instanceof Array)) {
                                                              this.log = [];
                                                             }; };

    if (isObject(arg)) {                                    if (constructor) {
                                                              if (!(this instanceof convolution)) {
                                                                return 'you killed meta';
                                                              };
                                                              try {
                                                                const result = this.meta(arg);
                                                                if (result instanceof Error) {
                                                                  throw result;
                                                                } else {
                                                                  return result;
                                                                };
                                                              } catch (err) {
                                                                throw err;
                                                              };
                                                            } else {
                                                              return 'no meta here';
                                                            };
    } else if (arg === 'meta') {
                                                            if (constructor) {
                                                              if (this instanceof convolution) {
                                                                console.log(1)
                                                                return copy(this);
                                                              } else {
                                                                console.log(2)
                                                                return this;
                                                              };
                                                            } else {
                                                              return 'no meta here';
                                                            };
    } else if (arg === 'state') {                           
                                                            if (constructor) {
                                                              const new_entry = {};
                                                              if (log_info !== undefined) {
                                                                new_entry.notes = log_info; };
                                                              new_entry.state = copy(state);
                                                              this.log.push(new_entry);  };
      return copy(state);

    } else if (arg instanceof Function) {                        
      const result = arg(state);                            const new_entry = {};
                                                            if (constructor) {
                                                              try { // allows manual state updates
                                                                if (log_info.args === undefined && 
                                                                  log_info.name === undefined) {
                                                                  // assume people don't use both in a note
                                                                  new_entry.action = arg;
                                                                  if (log_info !== undefined) {
                                                                    new_entry.notes = log_info; };
                                                                } else {
                                                                  new_entry.action = log_info.name; 
                                                                  new_entry.args = log_info.args;
                                                                }; 
                                                              } catch {
                                                                new_entry.action = arg;
                                                                if (log_info !== undefined) {
                                                                  new_entry.notes = log_info; };
                                                              }; /* comment this beast later */ };
                     
                                
      if (result instanceof Error) {                        if (constructor) {
                                                              new_entry.state = copy(state);
                                                              new_entry.error = result;  
                                                              this.log.push(new_entry);  };
        throw result;                                      

      } else {                                             
        const old_state = copy(state);                     
        const new_state = update_state(result, old_state); 
        state = copy(new_state);                          
                                                            if (constructor) {
                                                              new_entry.result = result;
                                                              new_entry.old_state = copy(old_state);
                                                              new_entry.new_state = copy(new_state); 
                                                              this.log.push(new_entry); }
        return result;
      };

    } else if ( arg === undefined ) {                       if (constructor) {
                                                              this.log.push({undefined: null});  };
      return null;

    } else {                                               
      const err = new Error('i don\'t do that');            if (constructor) {
                                                              const err_log = {arg};
                                                              err_log.err = err;
                                                              if (log_info !== undefined) {
                                                                new_entry.notes = log_info; };
                                                              this.log.push(err_log);  };
                                                           
      throw err;
    };
  };

                                                            // add logger to instance
                                                            if (constructor) {
                                                              const log = {log:['hi!']};
                                                              log.__proto__ = this;
                                                              instance = instance.bind(log);  };

  // attach action curriers
  for (const action in actions) {
    if (actions[action] instanceof Function) {
      const actionow = actions[action];
      // cant be arrow function for 'this' reasons
      instance[action] = function(args) {
        return this(actionow(args), {name:action, args});
      };
    };
  };

  // freeze and return instance so it can't be modified later
  return Object.freeze(instance);



  // closed utilites for instance
  function update_state(result, _state) {
    const new_state = copy(_state)
    if (isObject(result)) {
      const state_keys = Object.keys(new_state);
      for (let key of state_keys) {
        if (result.hasOwnProperty(key)) {
            new_state[key] = result[key];
        };
      }
      return new_state;
    } else { 
      return new_state;
    };
  }
  function copy(thing) {
    if (thing === Object(thing)) {
      return JSON.parse(JSON.stringify(thing));
    } else {
      return thing;
    }
  }
  function isObject(val) {
      if (val === null || typeof val !== 'object') { return false;}
      return ( (typeof val === 'function') || (typeof val === 'object') );
  }
};

convolution.prototype.meta = function(args){
                                if (args.clear) {
                                  this.log = [];
                                };
                                if (args.flag !== undefined) {
                                  this.log.push(args.flag);
                                };
                                if (args.read) {
                                  return this.log;
                                };
                              };



