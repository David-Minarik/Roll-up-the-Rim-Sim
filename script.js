function onSubmit() {
    let province = document.getElementById("province").value;
    let iterations = document.getElementById("iterations").value;
    let prizeElement = document.getElementById("prize");
    let simulationCount = document.getElementById("simulationCount");

    if (iterations === "Until Grand Prize Won") {
        let grandPrizeWon = false;
        let simCount = 0;
        while (!grandPrizeWon) {
            simCount++;
            simulationCount.innerHTML = simCount
            let probability = Math.floor(Math.random() * 100 + 1);
            let prize = getPrize(probability, province);
            if (prize === "Grand prize") {
                grandPrize = true;
                prizeElement.innerHTML = prize
            }

        }
    } else if (iterations === "Until 500 donuts") {
        let donutsWon = 0;
        let simCount = 0;
        while (donutsWon < 500) {
            simCount++;
            simulationCount.innerHTML = simCount
            let probability = Math.floor(Math.floor() * 100 + 1);
            let prize = getPrize(probability, province);
            if (prize === "Free donut") {
                donutsWon++;
                prizeElement.innerHTML = "Won 500 donuts!";
            }
        }

    } else {
        iterations = pareInt(iterations, 10);
        for (let i = 0; i < iterations; i++) {
            simulationCount.innerHTML = iterations
            let probability = Math.floor(Math.random() * 100) + 1;
            let prize = getPrize(probability, province);
            prizeElement.innerHTML = prize;
        }
    }

    function getPrize(probability, province) {
        if (province === "BRITISH COLUMBIA") {
            if (probability >= 1 && probability <= 70) {
                return "Please play again";
            } else if (probability >= 71 && probability <= 80) {
                return "Free coffee";
            } else if (probability >= 81 && probability <= 90) {
                return "Free donut"
            } else if (probability >= 91 && probability <= 100) {
                return "Grand prize"
            }



        } else if (province === "ALBERTA") {
            if (probability >= 1 && probability <= 15) {
                return "Please play again";
            } else if (probability >= 16 && probability <= 55) {
                return "Free coffee";
            } else if (probability >= 56 && probability <= 95) {
                return "Free donut";
            } else if (probability >= 96 && probability <= 100)
                return "Grand prize";
            }


        } else if (province === "SASKATCHEWAN") {
           if (probability >= 1 && proababilty <= 70) {          
            return "Please play again"; 
        } else if (probability === 71) {
            return "Free coffee";
        } else if (probability === 72) {
            return "Free donut";
        } else if (probability >= 73 && probability <= 100) {
            return "Grand prize"; 
        }


    
