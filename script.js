const limite = new Date("02-18-2025");
const timer_element = document.getElementById("hours");

console.log(timer_element);

const values = {
    "milis": 1,
    "sec": 1000,
    "min": 1000 * 60,
    "hour": 1000 * 60 * 60,
    "day": 1000 * 60 * 60 * 24
};


function getDiff() {
    var today = new Date();
    var ms = limite - today;
    var diff = {
        "days": ms / values.day,
        "hours": (ms % values.day) / values.hour,
        "mins": (ms % values.hour) / values.min,
        "secs": (ms % values.min) / values.sec,
        "milis": ms % values.sec
    };
    
    for (const [key, value] of Object.entries(diff)) {
        diff[key] = Math.floor(value);
    }

    console.log(diff);
    return diff;
}

function updateCount() {
    var time = getDiff();
    var linha = `faltam ${time.days} dias, ${time.hours} horas, ${time.mins} minutos e ${time.secs} segundos para o fim do mundo`;
    timer_element.textContent = linha;
    setTimeout(updateCount, 1000);
}

updateCount();
