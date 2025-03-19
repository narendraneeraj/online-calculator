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





<div class="col-md-8">

<div id="timer">00:00</div>
<div class="text-center ">
     <button class="btn btn-outline-success fw-bold" onclick="startTimer()">Start</button>
     <button class="btn btn-outline-danger fw-bold" onclick="stopTimer()">Stop</button>
     <button class="btn btn-outline-warning  fw-bold " onclick="resetTimer()">Reset</button>
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
    