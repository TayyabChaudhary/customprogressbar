let CircularProgress = document.querySelector(".circular_progress"),
     Percentage = document.querySelector(".percentage");

let ProgressStart = 0,
    ProgressEnd = 90, // 90%
    ProgressSpeed = 100;

let Progress = setInterval(() => {
    
    ProgressStart++;
    
    Percentage.textContent = `${ProgressStart}%`;

    CircularProgress.style.background = `
    conic-gradient(#833ab4, ${ProgressStart * 3.6}deg, #f5f5f5 0deg)
    `;
    
    if(ProgressStart == ProgressEnd) {
        clearInterval(Progress);
    }


    }, ProgressSpeed);