---
layout: page
title: Stopwatch
permalink: /stop-watch/
description: "Stopwatch New App"
---

<div id="timer">00:00</div>
<div class="text-center">
     <button class="btn btn-outline-primary" onclick="startTimer()">Start</button>
     <button class="btn btn-outline-warning " onclick="stopTimer()">Stop</button>
     <button class="btn btn-outline-danger " onclick="resetTimer()">Reset</button>
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




<script src="{{ '/assets/js/stop-watch.js' | relative_url }}"></script>
    