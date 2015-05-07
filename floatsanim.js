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
         
            var increment = 0.0015;
            var t = 1, l = 1;

            var to = new Incrementor(increment, 50, -50);
            var lo = new Incrementor(increment, 50, -50);

            var start;

            function draw(timestamp) {

                t = to.getIncrement();
                l = lo.getIncrement();

                el.style.top = t + "px";
                el.style.left = l + "px";

                window.requestAnimationFrame(draw);

            };
            window.requestAnimationFrame(draw);

            function Incrementor(increment, max, min) {
                var _i = increment, _j = increment, _value = 0, decrease = false;
                var _upperLimit = 0, _lowerLimit = 0;

                _updateLimits();

                var _timingFunction = _linear;

                function _linear() {
                    _i += increment;
                    _j = _i * _i;
                    return _i + _j;
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
                    if (_value >= _upperLimit && decrease == false) {
                        decrease = true;
                        _updateLimits();
                    }

                    if (_value <= _lowerLimit && decrease) {
                        decrease = false;
                        _updateLimits();
                    }

                    if (decrease) {
                        _value -= _timingFunction();
                    }
                    else {
                        _value += _timingFunction();
                    }

                    return _value;
                };
            };

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            
            
       var lis = document.querySelectorAll(".navigation li a");

            var start3, m1 = 100, n1 = 0, incrementors = [];
            var inc = 0.0015, maxh = 15, minh = -15, maxl = 30, minl = -30;

            for (var i = 0, len = lis.length; i < len; i++) {
                incrementors.push({t : new Incrementor(inc, maxh, minh),
                                   l : new Incrementor(inc, maxl, minl)});
            }

            function draw3(timestamp) {

                for (var i = 0, len = lis.length; i < len; i++) {
                    var t = incrementors[i].t.getIncrement();
                    var l = incrementors[i].l.getIncrement();

                    lis[i].style.top = t + "px";
                    lis[i].style.left = l + "px";
                }

                window.requestAnimationFrame(draw3);
            };

            window.requestAnimationFrame(draw3);
