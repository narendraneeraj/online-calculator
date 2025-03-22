---
layout: default
title: Length Converter | Easily Convert Between Different Units of Measurement
permalink: /length-converter/
description: "Easily convert measurements with our Length Converter. Switch between units instantly and get accurate results in just a few clicks!"
---

<div class="container mt-5">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Length Converter</h2>

 <div class="mb-3">
            <input type="number" id="inputValue" class="form-control" placeholder="Enter value">
        </div>

<div class="mb-3">
            <select id="conversionType" class="form-select">
                <option value="cmToInches">CM to Inches</option>
                <option value="inchesToCm">Inches to CM</option>
                <option value="mmToInches">MM to Inches</option>
                <option value="inchesToMm">Inches to MM</option>
                <option value="metersToFeet">Meters to Feet</option>
                <option value="feetToMeters">Feet to Meters</option>
                <option value="kmToMiles">KM to Miles</option>
                <option value="milesToKm">Miles to KM</option>
                <option value="cmToFeet">CM to Feet</option>
                <option value="feetToCm">Feet to CM</option>
                <option value="inchesToFeet">Inches to Feet</option>
                <option value="feetToInches">Feet to Inches</option>
                <option value="metersToYards">Meters to Yards</option>
                <option value="yardsToMeters">Yards to Meters</option>
                <option value="mmToCm">MM to CM</option>
                <option value="cmToMm">CM to MM</option>
                <option value="cmToKm">CM to KM</option>
                <option value="kmToCm">KM to CM</option>
                <option value="mmToFeet">MM to Feet</option>
                <option value="feetToMm">Feet to MM</option>
                <option value="metersToMiles">Meters to Miles</option>
                <option value="milesToMeters">Miles to Meters</option>
                <option value="feetToMiles">Feet to Miles</option>
                <option value="milesToFeet">Miles to Feet</option>
                <option value="yardsToFeet">Yards to Feet</option>
                <option value="feetToYards">Feet to Yards</option>
                <option value="inchesToMeters">Inches to Meters</option>
                <option value="metersToInches">Meters to Inches</option>
                <option value="kmToMm">KM to MM</option>
                <option value="mmToKm">MM to KM</option>
                <option value="inchesToYards">Inches to Yards</option>
                <option value="yardsToInches">Yards to Inches</option>
                <option value="yardsToMiles">Yards to Miles</option>
                <option value="milesToYards">Miles to Yards</option>
            </select>
        </div>

<button class="btn btn-primary btn-shadow w-100" onclick="convert()">Convert</button>
<div class="mt-3">
            <h4>Result: <span id="result">-</span></h4>
        </div>
    </div>
</div>

<script>
        function convert() {
            let value = parseFloat(document.getElementById("inputValue").value);
            let type = document.getElementById("conversionType").value;
            let result = 0;

            const conversions = {
                cmToInches: value => value / 2.54,
                inchesToCm: value => value * 2.54,
                mmToInches: value => value / 25.4,
                inchesToMm: value => value * 25.4,
                metersToFeet: value => value * 3.28084,
                feetToMeters: value => value / 3.28084,
                kmToMiles: value => value * 0.621371,
                milesToKm: value => value / 0.621371,
                cmToFeet: value => value / 30.48,
                feetToCm: value => value * 30.48,
                inchesToFeet: value => value / 12,
                feetToInches: value => value * 12,
                metersToYards: value => value * 1.09361,
                yardsToMeters: value => value / 1.09361,
                mmToCm: value => value / 10,
                cmToMm: value => value * 10,
                cmToKm: value => value / 100000,
                kmToCm: value => value * 100000,
                mmToFeet: value => value / 304.8,
                feetToMm: value => value * 304.8,
                metersToMiles: value => value / 1609.34,
                milesToMeters: value => value * 1609.34,
                feetToMiles: value => value / 5280,
                milesToFeet: value => value * 5280,
                yardsToFeet: value => value * 3,
                feetToYards: value => value / 3,
                inchesToMeters: value => value / 39.37,
                metersToInches: value => value * 39.37,
                kmToMm: value => value * 1000000,
                mmToKm: value => value / 1000000,
                inchesToYards: value => value / 36,
                yardsToInches: value => value * 36,
                yardsToMiles: value => value / 1760,
                milesToYards: value => value * 1760
            };

            if (!isNaN(value) && conversions[type]) {
                result = conversions[type](value).toFixed(4);
            } else {
                result = "Invalid input";
            }

            document.getElementById("result").textContent = result;
        }
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
