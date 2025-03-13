---
layout: page
title: Countdown
permalink: /countdown/
---


<div class=row>
<div class="col-md-3 bg-light">

<div class="p-4 mb-2 bg-body-secondary">
      <p class="fs-2"> <a class="text-decoration-none" href="#"><i class="fa-solid fa-stopwatch-20"></i>Countdown</a></p>
       <p class="fs-2"> <a class="text-decoration-none" href="#"><i class="fa-solid fa-stopwatch"></i> StopWatch</a></p>
       <p class="fs-2"> <a class="text-decoration-none" href="#"><i class="fa-solid fa-bell"></i> Alarm Clock</a></p>
      <p class="fs-2"> <a class="text-decoration-none" href="/current-time"><i class="fa-solid fa-clock"></i>Time</a></p>
</div>
</div>





<div class="col-md-8 text-center">
<h1>Countdown Timer</h1>
    <div id="timerDisplay">0:00</div>
    

    
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