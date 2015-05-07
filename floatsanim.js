              // shim Copied from Paul Irish      
              (function() {
                var lastTime = 0;
                var vendors = ['webkit', 'moz'];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] +
                                                          'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x] +
                                                         'CancelAnimationFrame'] ||
                                                  window[vendors[x] +
                                                         'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame) window.requestAnimationFrame = function(
                                                                                           callback,
                                                                                           element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() {
                        callback(currTime + timeToCall);
                    }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

                if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(
                                                                                         id) {
                    clearTimeout(id);
                };
            }());
         
         function Incrementor(increment, max, min) {
                var _i = increment, _value = 0, flag = true;
                var _upperLimit = max, _lowerLimit = min;

                var _timingFunction = _linear;

                function _linear() {
                    _i += increment;
                    return _i;
                };

                function _updateLimits() {
                    var rand = getRandomInt(min, max);
                    var inverse = max - Math.abs(rand);

                    if (rand > inverse) {
                        _upperLimit = rand;
                        _lowerLimit = inverse;
                    }
                    else if (rand < inverse) {
                        _upperLimit = inverse;
                        _lowerLimit = rand;
                    }
                    else {
                        _upperLimit = rand + 1;
                        _lowerLimit = rand;
                    }

                    _i = increment;
                };

                this.getIncrement = function() {
                    if (_value >= _upperLimit) {
                        flag = false;
                        _updateLimits();
                    }

                    if (_value <= _lowerLimit) {
                        flag = true;
                        _updateLimits();
                    }

                    if (flag) {
                        _value += _timingFunction();
                    }
                    else {
                        _value -= _timingFunction();
                    }

                    return _value;
                };
            };

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            
            
              var to = new Incrementor(increment, 200, 0);

            function draw(timestamp) {

                //                 calcTop();
                //                 calcLeft();
                
                t = to.getIncrement();

                el.style.top = t + "px";
                //                                 el.style.left = l + "px";

                window.requestAnimationFrame(draw);

            };
            var startTime = Date.now();
            window.requestAnimationFrame(draw);
