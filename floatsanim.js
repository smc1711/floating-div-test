<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="../js/d3.js"></script>
<script type="text/javascript" src="../js/jquery-2.1.3.js"></script>
<script type="text/javascript" src="../js/benchmark.js"></script>

<!-- PARALLEL COORDINATES SVG FOR SECOND SUMMARY -->

<style type="text/css">
.component {
    margin: 20px;
    text-align: center;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.container {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.container:hover {
    box-shadow: 0 0 4px #888;
}

.line.t {
    border-top-style: solid;
    width: 100%;
    top: 0;
    transition-delay: 0ms;
}

.line.r {
    border-right-style: solid;
    height: 100%;
    right: 0;
    transition-delay: 400ms;
}

.line.b {
    border-bottom-style: solid;
    width: 100%;
    bottom: 0;
    transition-delay: 500ms
}

.line.l {
    border-left-style: solid;
    height: 100%;
    left: 0;
    transition-delay: 100ms;
}

.line {
    border-color: #ddd;
    border-width: 2px;
    position: absolute;
    transition-property: all;
    transition-timing-function: linear;
    transition-duration: 400ms;
}

.line.remove {
    width: 0 !important;
    height: 0 !important;
}

.text {
    margin: 5px;
    opacity: 1;
    transition: all 0.5s ease 100ms;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.text.remove {
    opacity: 0 !important;
}

.line.st {
    height: 50px;
    border-left-style: solid;
    position: relative;
    width: 1px;
    left: 50%;
    top: -2px;
}
</style>

<script type="text/javascript">
    $(function() {

        var summary = $(".summary");
        var component = summary.find(".component");

        setTimeout(function() {
            summary.find(".remove").removeClass("remove");
            component.find(".text").text("abcddefggffggg");
        }, 1000);

        var last;

        setTimeout(function() {

            component.append(last = $("#template .line.st").clone());

        }, 2000);

        setTimeout(function() {

            last.removeClass("remove");

            component.append(last = $("#template .container").clone());

        }, 2500);

        setTimeout(function() {
            last.removeClass("remove").find(".remove").removeClass("remove");
        }, 3000);

    });
</script>



</head>
<body>
  <div class="summary">
    <div class="component">
      <div class="container">
        <div class='line t remove'></div>
        <div class='line r remove'></div>
        <div class='line b remove'></div>
        <div class='line l remove'></div>
        <div class="text remove"></div>
      </div>
    </div>
  </div>


  <section id="template" style="display: none">
    <div class="component"></div>

    <div class="line st remove"></div>

    <div class="container">
      <div class='line t remove'></div>
      <div class='line r remove'></div>
      <div class='line b remove'></div>
      <div class='line l remove'></div>
      <div class="text remove">asasaasaasa</div>
    </div>

  </section>
  <script type="text/javascript">
            /*   var suite = new Benchmark.Suite;

              var el = document.querySelector("#template .container");

              //add tests
              suite.add('RegExp#test', function() {
                  var d = $(el).clone();

              }).add('String#indexOf', function() {
                  var c = document.createElement("div");
                  c.className = 'container';
                  var d = document.createElement("div");
                  d.className = "line t remove";
                  c.appendChild(d);
                  d = document.createElement("div");
                  d.className = "line t remove";
                  c.appendChild(d);
                  d = document.createElement("div");
                  d.className = "line t remove";
                  c.appendChild(d);
                  d = document.createElement("div");
                  d.className = "line t remove";
                  c.appendChild(d);
                  var t = document.createElement("div");
                  t.className = "text remove";
                  t.textContent = "asfdvgh";
                  c.appendChild(t);

              }).add('String#match', function() {
                  var d = el.cloneNode(true);

              })
              //add listeners
              .on('cycle', function(event) {
                  console.log(String(event.target));
              }).on('complete', function() {
                  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
              })
              //run async
              .run({'async' : true}); */
        </script>


  <div class="box">
    <div class="el">asdasdasdasdad</div>
  </div>

  <script type="text/javascript">
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
        </script>


  <style type="text/css">
.box {
    position: absolute;
    left: 40%;
    /*     border: 1px solid; */
    width: 300px;
    height: 400px;
    top: 50px;
}

.el {
    position: absolute;
    /*     border: 1px solid #666; */
    width: 30px;
    height: 30px;
    /*     border-radius: 50%; */
    /*     background: #666; */
}
</style>

  <script type="text/javascript">
            /****Using only javascrpit***/

            var el = $(".el").get()[0];

            var Incrementor = function(increment, max, min) {
                var _max = max, _min = min, _increment = increment;
                var _i = _increment, _j = increment, _value = 0, decrease = false;
                var _upperLimit = 0, _lowerLimit = 0;

                _updateLimits();

                var _timingFunction = _ease;

                function _ease() {
                    _i += _increment;
                    _j = _i * _i;
                    return _i + _j;
                };

                function _updateLimits() {
                    var rand = getRandomInt(_min, _max);
                    var inverse = _max - Math.abs(rand);

                    if (rand > inverse) {
                        _upperLimit = rand;
                        _lowerLimit = inverse;
                    }
                    else if (rand < inverse) {
                        _upperLimit = inverse;
                        _lowerLimit = rand;
                    }
                    else {
                        _upperLimit = rand + 0.5;
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

                this.stop = function() {
                    _max = 0;
                    _min = 0;
                    _increment = 0.1;
                };

                this.resume = function() {
                    _max = max;
                    _min = min;
                    _increment = increment;
                }
            };

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }

            var increm = 0.0015;
            var t = 1, l = 1;

            var to = new Incrementor(increm, 50, -50);
            var lo = new Incrementor(increm, 50, -50);

            var start;

            function draw(timestamp) {

                t = to.getIncrement();
                l = lo.getIncrement();

                el.style.top = t + "px";
                el.style.left = l + "px";

                window.requestAnimationFrame(draw);

            };
            window.requestAnimationFrame(draw);
        </script>


  <div class="box" style="left: 800px">
    <div class="el el2">aaaaaaaaaaaaaaaaa</div>
  </div>


  <style type="text/css">
.el2 {
    transition: all 2s linear;
}
</style>
  <script type="text/javascript">
            var el2 = $(".el2").get()[0];

            var start2;
            var m = 50, n = -50;

            function draw2(timestamp) {

                if (!start2) start2 = timestamp;
                var diff = timestamp - start2;

                if (diff > 1000) {
                    start2 = timestamp;

                    var x = getRandomInt(m, n);
                    var y = getRandomInt(m, n);

                    el2.style.webkitTransform = "translate(" + x + "px," + y + "px)";
                    el2.style.transform = "translate(" + x + "px," + y + "px)";
                }
                window.requestAnimationFrame(draw2);
            };
            window.requestAnimationFrame(draw2);
        </script>


  <style type="text/css">
.navigation li {
    position: relative;
    text-decoration: none;
    list-style-type: none;
    margin: 20px;
    height: 30px;
}

.navigation a {
    position: absolute;
    /*     transition: all 1.2s ease; */
}

.navigation {
    display: inline-block;
    position: absolute;
    top: 200px;
    left: 500px;
    width: 200px;
}

.navigation ul {
    display: inline-block;
}

div.navigation>ul>li:first-child {
    margin-left: 0px;
}

div.navigation>ul>li:nth-child(2) {
    margin-left: -40px;
}

div.navigation>ul>li:nth-child(3) {
    margin-left: -0px;
}

div.navigation>ul>li:nth-child(4) {
    margin-left: -70px;
}

div.navigation>ul>li:nth-child(5) {
    margin-left: -50px;
}

div.navigation>ul>li:nth-child(6) {
    margin-left: -85px;
}

.navigation a {
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: #666;
    opacity: 0.7;
}

.navigation a:hover {
    transition: all 0.4s ease;
    -webkit-transform: scale(3);
}
</style>

  <div class="navigation">
    <!-- start div.navigation -->
    <ul>
      <li><a class="" href=""></a></li>
      <li><a class="" href=""></a></li>
      <li><a class="" href=""></a></li>
      <li><a class="" href=""></a></li>
      <li><a class="" href=""></a></li>
      <li><a class="" href=""></a></li>

    </ul>
  </div>

  <script type="text/javascript">
            var lis = document.querySelectorAll(".navigation li a");

            var start3, incrementors = [];
            var inc = 0.1, maxh = 15, minh = -15, maxl = 350, minl = -350;

            for (var i = 0, len = lis.length; i < len; i++) {
                var t = new Incrementor(inc, maxh, minh);
                var l = new Incrementor(inc, maxl, minl);

                incrementors.push({t : t, l : l});
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

            $(".navigation").on("mouseover", function() {
                for (var i = 0, len = lis.length; i < len; i++) {
                    incrementors[i].t.stop();
                    incrementors[i].l.stop();
                }
            }).on("mouseout", function() {
                for (var i = 0, len = lis.length; i < len; i++) {
                    incrementors[i].t.resume();
                    incrementors[i].l.resume();
                }
            });
        </script>




  <style type="text/css">
.dots-container {
    /*     border: 1px solid; */
    /*     width: 500px; */
    height: 500px;
    position: absolute;
    top: 600px;
    left: 20%;
}

.d-cont {
    width: 100px;
    height: 100px;
    /*     border: 1px solid; */
    margin-left: 200px;
    margin-top: 200px;
    position: relative;
    display: inline-block;
}

.dot {
    width: 4px;
    height: 4px;
    background: steelblue;
    position: absolute;
    transition: all 1.4s ease-out;
    top: 0;
    left: 0;
    position: absolute;
}

path {
    stroke: #067E7E;
    stroke-width: 1;
    fill: none;
}

svg {
    width: 200px;
    height: 200px;
    top: 400px;
    position: relative;
    transition: all 4s ease;
}

svg:hover {
    -webkit-transform: rotate(1440deg);
    transform: rotate(1440deg);
}
</style>

  <div class="dots-container">
    <div class="d-cont">
      <div class="dot"></div>
    </div>
    <div class="d-cont">
      <div class="dot"></div>
    </div>
    <div class="d-cont">
      <div class="dot"></div>
    </div>
    <div class="d-cont">
      <div class="dot"></div>
    </div>
    <div class="d-cont">
      <div class="dot"></div>
    </div>
    <div class="d-cont">
      <div class="dot"></div>
    </div>
  </div>


  <svg viewBox="-100,-100, 200, 200">
<path d="m00,100" />
</svg>
  <svg viewBox="-100,-100, 200, 200">
<path d="m00,100" />
</svg>
  <svg viewBox="-100,-100, 200, 200">
<path d="m00,100" />
</svg>
  <svg viewBox="-100,-100, 200, 200">
<path d="m00,100" />
</svg>
  <svg viewBox="-100,-100, 200, 200">
<path d="m00,100" />
</svg>
  <svg viewBox="-100,-100, 200, 200">
<path d="m00,100" />
</svg>

  <script type="text/javascript">
            var dotContainers = document.getElementsByClassName("d-cont");
            var dots = document.getElementsByClassName("dot");
            var paths = document.getElementsByTagName("path");
            var theta = 0, d = 100, k = [4 / 7, 5, 3, 1.6, 2 / 7, 3 / 5], m = [10, 3, 7,
                                                                               5, 4, 6];
            var n = [13, 14, 15, 16, 17, 18, 19];

            var startTime, diff;
            function draw4(timestamp) {

                diff = timestamp - (startTime ? startTime : 0);

                                if (diff > 50) 
                for (var i = 0, len = dotContainers.length; i < len; i++) {

                    var dotContainer = dotContainers[i];
                    //                     var dot = dots[i].cloneNode();
                    //                     dotContainer.appendChild(dot);
                    //                     window.getComputedStyle(dot).top;
                    //                     window.getComputedStyle(dot).left;

                    var r = d * Math.cos(k[i] * theta);
                    //                                         var r = theta * m[i] + theta;

                    var x = r * Math.sin(theta);
                    var y = r * Math.cos(theta);

                    //                     dot.style.top = x + "px";
                    //                     dot.style.left = y + "px";
                    //                     dot.style.webkitTransform = "scale(" + Math.sin(theta) + ")";

                    //                     var clone = dot.cloneNode();

                    paths[i].setAttribute("d", paths[i].getAttribute("d") + " L" + x +
                                               "," + y);
                }

                                if (diff > 50) startTime = timestamp;

                if (theta >= -24 * Math.PI) {
                    if(diff>50)
                    theta -= 0.5;
                    window.requestAnimationFrame(draw4);
                }

            };

            window.requestAnimationFrame(draw4);
        </script>




</body>
</html>
