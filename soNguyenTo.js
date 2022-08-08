function timSoNguyenTo(songuyento) {
    // let a = parseInt(document.getElementById("number").value);
    let count = 0;
    for (let i = 2; i <= Math.sqrt(songuyento); i++) {
        if (songuyento % i == 0) {
            count += 1;
        }
    }
    if (count == 0) return songuyento;
    else return "";
}

function printSoNguyenTo() {
    let number = parseInt(document.getElementById("number").value);
    let count = 0;
    for (let i = 2; i <= 1000; i++) {
        document.getElementById("screen").innerHTML += timSoNguyenTo(i) + " ";
        if (timSoNguyenTo(i) !="") count += 1;
        if (count >= number) break;
    }
}

function screen(){
    document.getElementById("screen").innerHTML ="";
}
