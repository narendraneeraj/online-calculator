---
layout: page
title: Celsius to Fahrenheit Temperature Converter
permalink: /celsius-to-fahrenheit/
description: "Quickly and accurately convert temperatures from Celsius (°C) to Fahrenheit (°F) with this easy-to-use tool."
---

<!-- Article Part -->
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white text-center">
          <h4>Celsius to Fahrenheit Converter</h4>
        </div>
        <div class="card-body">
          <form id="converter-form">
            <div class="mb-3">
              <label for="celsius" class="form-label">Celsius</label>
              <input type="number" class="form-control" id="celsius" placeholder="Enter temperature in Celsius">
            </div>
            <div class="mb-3 text-center">
              <button type="button" class="btn btn-primary" onclick="convertToFahrenheit()">Convert</button>
            </div>
            <div class="alert alert-info d-none" id="result"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/temp.js' | relative_url }}"></script>