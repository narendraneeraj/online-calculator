---
layout: default
title: World Clock – Custom City Time Tracker
permalink: /world-clock/
description: "Easily track time across multiple cities with our customizable world clock. Add your preferred cities, view real-time updates, and stay on schedule across time zones. Perfect for travelers, remote teams, and global businesses!"
---

<div class="container mt-4">
<h1 class="mb-4">World Clock</h1>
<div class="digital-clock" id="digital-clock"></div>
 <div class="clock-container" id="clock-container"></div>
<h2 class="mt-4">Add Custom City</h2>
 <div class="input-group mb-3">
 <select id="city-select" class="form-select">
<option value="Accra,0,https://flagcdn.com/gh.svg">Accra</option>
<option value="Addis Ababa,3,https://flagcdn.com/et.svg">Addis Ababa</option>
<option value="Algiers,1,https://flagcdn.com/dz.svg">Algiers</option>
<option value="Athens,2,https://flagcdn.com/gr.svg">Athens</option>
<option value="Auckland,13,https://flagcdn.com/nz.svg">Auckland</option>
<option value="Bangkok,7,https://flagcdn.com/th.svg">Bangkok</option>
<option value="Beijing,8,https://flagcdn.com/cn.svg">Beijing</option>
<option value="Berlin,1,https://flagcdn.com/de.svg">Berlin</option>
<option value="Bogotá,-5,https://flagcdn.com/co.svg">Bogotá</option>
<option value="Brisbane,10,https://flagcdn.com/au.svg">Brisbane</option>
<option value="Buenos Aires,-3,https://flagcdn.com/ar.svg">Buenos Aires</option>
<option value="Cairo,2,https://flagcdn.com/eg.svg">Cairo</option>
<option value="Casablanca,0,https://flagcdn.com/ma.svg">Casablanca</option>
<option value="Dar es Salaam,3,https://flagcdn.com/tz.svg">Dar es Salaam</option>
<option value="Delhi,5.5,https://flagcdn.com/in.svg">Delhi</option>
<option value="Havana,-5,https://flagcdn.com/cu.svg">Havana</option>
<option value="Hong Kong,8,https://flagcdn.com/hk.svg">Hong Kong</option>
<option value="Istanbul,3,https://flagcdn.com/tr.svg">Istanbul</option>
<option value="Jakarta,7,https://flagcdn.com/id.svg">Jakarta</option>
<option value="Johannesburg,2,https://flagcdn.com/za.svg">Johannesburg</option>
<option value="Kinshasa,1,https://flagcdn.com/cd.svg">Kinshasa</option>
<option value="Kolkata,5.5,https://flagcdn.com/in.svg">Kolkata</option>
<option value="Kuala Lumpur,8,https://flagcdn.com/my.svg">Kuala Lumpur</option>
<option value="Lagos,1,https://flagcdn.com/ng.svg">Lagos</option>
<option value="Lima,-5,https://flagcdn.com/pe.svg">Lima</option>
<option value="Los Angeles,-7,https://flagcdn.com/us.svg">Los Angeles</option>
<option value="Madrid,1,https://flagcdn.com/es.svg">Madrid</option>
<option value="Manila,8,https://flagcdn.com/ph.svg">Manila</option>
<option value="Melbourne,11,https://flagcdn.com/au.svg">Melbourne</option>
<option value="Mexico City,-6,https://flagcdn.com/mx.svg">Mexico City</option>
<option value="Moscow,3,https://flagcdn.com/ru.svg">Moscow</option>
<option value="Mumbai,5.5,https://flagcdn.com/in.svg">Mumbai</option>
<option value="Nairobi,3,https://flagcdn.com/ke.svg">Nairobi</option>
<option value="Paris,1,https://flagcdn.com/fr.svg">Paris</option>
<option value="Riyadh,3,https://flagcdn.com/sa.svg">Riyadh</option>
<option value="Rome,1,https://flagcdn.com/it.svg">Rome</option>
<option value="Santiago,-4,https://flagcdn.com/cl.svg">Santiago</option>
<option value="São Paulo,-3,https://flagcdn.com/br.svg">São Paulo</option>
<option value="Seoul,9,https://flagcdn.com/kr.svg">Seoul</option>
<option value="Shanghai,8,https://flagcdn.com/cn.svg">Shanghai</option>
<option value="Singapore,8,https://flagcdn.com/sg.svg">Singapore</option>
<option value="Stockholm,1,https://flagcdn.com/se.svg">Stockholm</option>
<option value="Tehran,3.5,https://flagcdn.com/ir.svg">Tehran</option>
<option value="Toronto,-4,https://flagcdn.com/ca.svg">Toronto</option>
<option value="Warsaw,1,https://flagcdn.com/pl.svg">Warsaw</option>
<option value="Wellington,13,https://flagcdn.com/nz.svg">Wellington</option>
 </select>
 <button class="btn btn-primary" onclick="addManualCity()">Add City</button>
</div>
 </div>


<link rel="stylesheet" href="{{ '/assets/css/world-clock.css' | relative_url }}">
<script src="{{ '/assets/js/world-clock.js' | relative_url }}"></script>
