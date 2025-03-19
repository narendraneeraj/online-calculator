---
layout: default
title: Online Stopwatch | Digital Stopwatch - Easy to Use
permalink: /stop-watch/
description: "Use our online stopwatch, Accurate and user-friendly. Track lap times with export in CSV, Digital stopwatch, and enjoy optional split intervals for your timing needs."
---
<!-- Sidebar -->
<div class=row>
<div class="col-md-3 bg-light">
<div class="p-4 mb-2 bg-body-secondary">
 <p class="fs-2 "><a class="text-decoration-none" href="/countdown"><i class="fa-solid fa-stopwatch-20 me-3"></i>Countdown</a></p>
 <p class="fs-2"> <a class="text-decoration-none" href="/stop-watch"><i class="fa-solid fa-stopwatch me-3"></i>StopWatch</a></p>
 <p class="fs-2"> <a class="text-decoration-none" href="/current-time"><i class="fa-solid fa-clock me-3"></i>Time</a></p>
</div>
</div>

<div class="col-md-8 text-center">
<h1>Stopwatch</h1>
<div class="display py-4">
 <span id="hours">00</span>: <span id="minutes">00</span>: <span id="seconds">00</span>: <span id="centiseconds">00</span>
 </div>

<!-- Buttons -->
<button id="startPauseBtn" class="btn btn-outline-primary" onclick="toggleStartPause()">Start</button>
<button class="btn btn-outline-success" onclick="splitTime()">Lap</button>
<button class="btn btn-outline-warning" onclick="resetStopwatch()">Reset</button>
<button class="btn btn-outline-dark" onclick="exportCSV()">Export CSV</button>

<!-- Lap Table -->
<div class="py-4">
  <table id="splitTable" class="table table-hover">
     <tr class="table-primary">
       <th>Lap</th>
        <th>Time</th>
      </tr>
     </table>
   </div>
</div>


<h2>What is stopwatch</h2><p>A stopwatch is a device used to track the time that passes from when it starts to when it stops.</p>
<h3>Digital Stopwatch</h3>


</div>

<script src="{{ '/assets/js/stop-watch.js' | relative_url }}"></script>
    