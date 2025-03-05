---
layout: page
title: kmp to mph Speed Converter
permalink: /kmp-to-mph/
description: "Quickly convert kilometers per hour to miles per hour (kmp to mph) with our free tool. Check out conversion tables and learn about other speed units today!"
---
<div class="container d-flex justify-content-center align-items-center ">
        <div class="col-6">
            <div class="card shadow">
                <div class="card-body">
                    <h4 class="card-title text-center">kmp to mph Speed Converter</h4>
                    <form id="converterForm">
                        <div class="mb-3">
                            <label for="kmInput" class="form-label">Speed in km/h</label>
                            <input type="number" class="form-control" id="kmInput" placeholder="Enter speed in km/h" required>
                        </div>
                        <div class="mb-3">
                            <label for="mileOutput" class="form-label">Speed in mph</label>
                            <input type="text" class="form-control" id="mileOutput" readonly>
                        </div>
                        <button type="button" class="btn btn-primary w-100" onclick="convertSpeed()">Convert</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


<script src="{{ '/assets/js/kmp-mph.js' | relative_url }}"></script>
    