let timerDisplay = document.getElementById('timer');
        let timeRecords = document.getElementById('timeRecords');
        let startTime;
        let timer;
        let elapsedTime = 0;
        let recordCount = 0;
        const maxRecords = 50;

        function updateTimer() {
            let now = Date.now() - startTime + elapsedTime;
            let minutes = Math.floor(now / 60000);
            let seconds = Math.floor((now % 60000) / 1000);
            let milliseconds = now % 1000;
            
            timerDisplay.textContent = 
                String(minutes).padStart(2, '0') + ":" +
                String(seconds).padStart(2, '0') + ":" +
                String(milliseconds).padStart(3, '0');
        }

        function startTimer() {
            if (timer) return;
            startTime = Date.now();
            timer = setInterval(updateTimer, 10);
        }

        function stopTimer() {
            if (timer) {
                clearInterval(timer);
                timer = null;
                elapsedTime += Date.now() - startTime;
                addRecord(timerDisplay.textContent);
            }
        }

        function resetTimer() {
            clearInterval(timer);
            timer = null;
            elapsedTime = 0;
            timerDisplay.textContent = "00:00:000";
            timeRecords.innerHTML = ""; // Clear table data
            recordCount = 0;
        }

        function addRecord(time) {
            if (recordCount >= maxRecords) {
                timeRecords.deleteRow(0);
            } else {
                recordCount++;
            }
            let newRow = timeRecords.insertRow();
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            cell1.textContent = recordCount;
            cell2.textContent = time;
        }