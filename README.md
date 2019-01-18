so cool framework to be the centerpiece of the second part of class

shallow learning objectives:
* working with frameworks
* functional application lifecycle
* writing curried functions
* creating useful logging experiences

deep learning objectives
* context (binding), inheritance, closure
* using curried functions
* framework design

early-stage documentation
* can't modify top-level state properties after app is initiated
* can directly modify state by passing in functions that return partial states
* call without 'new' to get a basic currying app
* call with 'new' to build a self-logging app
    * the log is an array accessible only by 'this.log' in convolution.prototype.access_log 
    * can extend/modify log access by overwriting convolution.prototype.access_log
    * modifications apply directly to all self-logging instances in current runtime
    * 'this' is really just an object 
        * you can use it to keep any notes about the instance by passing payloads through instance()
        * and handling them in access_log
        * the only thing you can't mess with is the log. it will always be there, and it will be an array




___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
