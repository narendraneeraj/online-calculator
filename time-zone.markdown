---
layout: default
title: time
permalink: /#time/
description: "time zone."
---
   <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        .clock-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .clock {
            width: 150px;
            height: 150px;
            border: 5px solid black;
            border-radius: 50%;
            position: relative;
            margin: 20px;
        }
        .hand {
            position: absolute;
            background: black;
            transform-origin: bottom;
            bottom: 50%;
            left: 50%;
            transform: translateX(-50%) rotate(0deg);
        }
        .hour {
            width: 5px;
            height: 40px;
        }
        .minute {
            width: 3px;
            height: 50px;
        }
        .second {
            width: 2px;
            height: 60px;
            background: red;
        }
    </style>

   <h2>Analog Clocks for Different Time Zones</h2>
 <div class="clock-container" id="clocks"></div>

 <script>
        const cities = [
            { name: "New York", timeZone: "America/New_York" },
            { name: "London", timeZone: "Europe/London" },
            { name: "Tokyo", timeZone: "Asia/Tokyo" },
            { name: "Sydney", timeZone: "Australia/Sydney" }
        ];

        function createClock(city) {
            let clockDiv = document.createElement("div");
            clockDiv.classList.add("clock");
            clockDiv.innerHTML = `
                <div class="hand hour" id="hour-${city.name}"></div>
                <div class="hand minute" id="minute-${city.name}"></div>
                <div class="hand second" id="second-${city.name}"></div>
                <p>${city.name}</p>
            `;
            document.getElementById("clocks").appendChild(clockDiv);
        }

        function updateClocks() {
            cities.forEach(city => {
                let now = new Date();
                let utc = now.getTime() + now.getTimezoneOffset() * 60000;
                let localTime = new Date(utc + (new Intl.DateTimeFormat('en-US', { timeZone: city.timeZone }).resolvedOptions().timeZoneOffset * 60000));
                
                let hours = localTime.getHours() % 12;
                let minutes = localTime.getMinutes();
                let seconds = localTime.getSeconds();
                
                document.getElementById(`hour-${city.name}`).style.transform = `translateX(-50%) rotate(${(hours * 30) + (minutes / 2)}deg)`;
                document.getElementById(`minute-${city.name}`).style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
                document.getElementById(`second-${city.name}`).style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
            });
        }

        cities.forEach(createClock);
        setInterval(updateClocks, 1000);
        updateClocks();
    </script>