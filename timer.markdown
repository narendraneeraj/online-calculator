---
layout: page
title: Timer
permalink: /timer/
description: "Timer"
---

<div id="timer">00:00</div>
<div>
    <button class="btn btn-primary btn-circle" onclick="startTimer()">Start</button>
     <button class="btn btn-warning btn-circle" onclick="stopTimer()">Stop</button>
     <button class="btn btn-danger btn-circle" onclick="resetTimer()">Reset</button>
</div>
   <div class="table-container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody id="timeRecords"></tbody>
        </table>
    </div>

<script src="{{ '/assets/js/timer.js' | relative_url }}"></script>
    