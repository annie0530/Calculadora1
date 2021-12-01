import axios from "axios";
const URL  ="http://localhost:5000";

export function searchCalculadora(callback) {
    axios.get(URL+"/get-calculadora")
        .then((res) => {
            callback(res);
        })
        .catch((err) => {
            callback(err);
        })
}