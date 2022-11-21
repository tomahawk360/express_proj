var fetch = require("node-fetch");

const auth = {
    "username": "alumnos@alumnos.org",
    "password": "m7a/s99"

}

async function getToken() {
    let tokenFetch = await fetch("http://18.214.103.65:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(auth)
    }).then(res => res.json())
        .then(json => json.token)
        .catch(() => console.log("Conexion con API denegada"))

    return tokenFetch;
    
};

async function getData(token) {
    let dataFetch = await fetch("http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/101d2fe0-454d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=TIMESTAMP,WS,WD,Temp,RH,BP,Depth &startTs=1265046352083&endTs=1665043961492", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": "Bearer " + token
        }
    }).then(res => res.json())

    return dataFetch;
}

async function filterData(data) {
    let str_total = "";

    for(let i = 0; i < 10; i++) {
        let str_timestamp = data.TIMESTAMP[i].value;
        let str_ws = data.WS[i].value;
        let str_wd = data.WD[i].value;
        let str_temp = data.Temp[i].value;
        let str_rh = data.RH[i].value;
        let str_bp = data.BP[i].value;

        str_total += str_timestamp + " " + str_ws + " " + str_wd + " " + str_temp + " " + str_rh + " " + str_bp + "\n";
    }

    return str_total;
}

module.exports = { getToken, getData, filterData };