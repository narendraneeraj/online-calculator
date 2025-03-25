---
layout: default
title: Square Root Calculator – Instant & Accurate Results
permalink: /square-root-calculator/
description: "Quickly find the square root of any number with our free online Square Root Calculator. Easy-to-use, accurate, and perfect for math, science, and everyday calculations. Try it now!"
---
<style>
.sqrt-symbol {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            font-weight: bold;
        }
.input-wrapper {
            position: relative;
        }
.result-box, .example-box {
            margin-top: 15px;
            padding: 20px;
            border-radius: 10px;
            background: #f8f9fa;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
 }
</style>
<div class="container mt-5 text-center">
<div class="row justify-content-center">
<div class="col-md-6">
<h2 class="mb-4">Square Root Calculator</h2>
<div class="card p-4 shadow-sm">
<div class="input-wrapper">
<span class="sqrt-symbol">√</span>
<input type="number" id="number" class="form-control ps-4" placeholder="Enter a number" oninput="calculateRoot()">
</div>
<div id="result" class="result-box d-none"></div>
<div id="example" class="example-box d-none"></div>
 </div>
 </div>
</div>
</div>

<script src="{{ '/assets/js/square-root.js' | relative_url }}"></script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>