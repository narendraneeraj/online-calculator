---
layout: default
title: Free Countdown Timer – Digital Countdown Clock to Track Time Accurately
permalink: /countdown/
description: "Use our free countdown timer and digital countdown clock to track time accurately for any task. Perfect for work, study, cooking, and events. Set your timer for any duration, like a 2-minute timer, 1-minute timer."
---

<div class=row>
<div class="col-md-3 bg-light">
<div class="p-4 mb-2 bg-body-secondary">
 <p class="fs-2 "><a class="text-decoration-none" href="/countdown"><i class="fa-solid fa-stopwatch-20 me-3"></i>Countdown</a></p>
 <p class="fs-2"> <a class="text-decoration-none" href="/stop-watch"><i class="fa-solid fa-stopwatch me-3"></i>StopWatch</a></p>
 <p class="fs-2"> <a class="text-decoration-none" href="/current-time"><i class="fa-solid fa-clock me-3"></i>Time</a></p>
</div>
</div>




<div class="col-md-8 text-center">
<h1>Countdown Timer</h1>
<code><div id="timerDisplay">0:00</div></code>
 <div class="py-4">
  <input type="number" id="customTime" class="form-control w-25 d-inline" placeholder="Enter minutes" disabled>
  <button class="btn btn-success" onclick="startCustomTimer()">Start</button>
  <button class="btn btn-warning" onclick="editTime()">Edit Time</button>
  <button class="btn btn-danger" onclick="resetTimer()">Reset</button>
</div>

 <button class="btn btn-primary m-2" onclick="startTimer(60)">1 Min</button>
 <button class="btn btn-primary m-2" onclick="startTimer(120)">2 Min</button>
 <button class="btn btn-primary m-2" onclick="startTimer(600)">10 Min</button>
 <button class="btn btn-primary m-2" onclick="startTimer(1800)">30 Min</button>

</div>
<hr class="m-4">
<script src="{{ '/assets/js/countdown.js' | relative_url }}"></script>