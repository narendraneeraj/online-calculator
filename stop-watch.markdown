---
layout: page
title: Stopwatch
permalink: /stop-watch/
description: "Stopwatch New App"
---
<!-- Sidebar -->
<div class=row>
<div class="col-md-3 bg-light">

<div class="p-4 mb-2 bg-body-secondary">
      <p class="fs-2"> <a class="text-decoration-none" href="#"><i class="fa-solid fa-stopwatch-20"></i> Timer</a></p>
       <p class="fs-2"> <a class="text-decoration-none" href="#"><i class="fa-solid fa-stopwatch"></i> StopWatch</a></p>
       <p class="fs-2"> <a class="text-decoration-none" href="#"><i class="fa-solid fa-bell"></i> Alarm Clock</a></p>
      <p class="fs-2"> <a class="text-decoration-none" href="#"><i class="fa-solid fa-clock"></i>Time</a></p>
</div>
</div>





<div class="col-md-8">

<div id="timer">00:00</div>
<div class="text-center ">
     <button class="btn btn-outline-success fw-bold" onclick="startTimer()">Start</button>
     <button class="btn btn-outline-danger fw-bold" onclick="stopTimer()">Stop</button>
     <button class="btn btn-outline-warning fw-bold " onclick="resetTimer()">Reset</button>
</div>
<div class="table-container p-4">
       <table class="table table-striped table-bordered text-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody id="timeRecords"></tbody>
        </table>
</div>


</div>







<script src="{{ '/assets/js/stop-watch.js' | relative_url }}"></script>
    