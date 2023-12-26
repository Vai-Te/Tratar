const values = {
    "milis": 1,
    "sec": 1000,
    "min": 1000 * 60,
    "hour": 1000 * 60 * 60,
    "day": 1000 * 60 * 60 * 24,
    "month": 1000 * 60 * 60 * 24 * 30,
    "year": 1000 * 60 * 60 * 24 * 30 * 12
};

const e_progress = document.getElementById("progress")
const e_progress_bar = document.getElementById("progress-bar");
const e_value = document.getElementById("progress-value");

const e_hours = document.getElementById("hours");
const e_skull = document.getElementById("caveira");
const e_info = document.getElementById("info");

const date_start = new Date("07-05-2023");
const date_end = new Date("02-18-2025");


function get_days(miliseconds) {
    return miliseconds / values.day;
}

function get_diff() {
    var date_now = new Date();
    var ms = date_end - date_now;
    var diff = {
        "days": ms / values.day,
        "hours": (ms % values.day) / values.hour,
        "mins": (ms % values.hour) / values.min,
        "secs": (ms % values.min) / values.sec,
        "milis": ms % values.sec
    };
    
    for (let [key, value] of Object.entries(diff)) {
        diff[key] = Math.floor(value);
    }

    return diff;
}

function update_progress(value) {
    //Valor sendo a porcentagem, de 1 a 100%
    e_value.textContent = `${Math.floor(value)}%`;
    e_progress_bar.style.width = value + "%";
}

function update_count(time) {
    var time = get_diff();
    var linha = `Faltam ${time.days} dias, ${time.hours} horas, ${time.mins} minutos e ${time.secs} segundos para o fim do mundo`;
    var linha2 = `${time.milis}${time.secs}${time.mins}${time.hours}${time.days}`;

    e_hours.textContent = linha;
    e_skull.textContent = linha2;
}


function main() {
    let date_now = new Date();
    let now = get_days(date_end - date_now);
    let max = get_days(date_end - date_start);
    let since = max - now;
    let percentage = (since/max) * 100;
    
    e_info.textContent = `Contagem iniciada há ${Math.floor(since)} dias, no dia 05/07/2023.`;
    update_count();
    update_progress(percentage);

    setTimeout(main, 50);
}


main();