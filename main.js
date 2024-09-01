function nah(trr) {
    if (trr == 1) {
        var name = document.getElementById("screen").value;
        if (name.length < 4) {
            document.getElementById("screen").value = "4 number";
            setTimeout(function () {
                document.getElementById("screen").value = "";
            }, 1000);
        }

        if (!isNaN(name) && typeof parseInt(name) === "number") {
            document.getElementById("screen").value = "not number";
            setTimeout(function () {
                document.getElementById("screen").value = "";
            }, 1000);
        }
    } else if (trr == 2) {
        var sur = document.getElementById("sure").value;
        if (sur.length < 4) {
            document.getElementById("sur").value = "4 number";
            setTimeout(function () {
                document.getElementById("sur").value = "";
            }, 1000);
        }
        if (!isNaN(sur) && typeof parseInt(sur) === "number") {
            document.getElementById("sur").value = "not number";
            setTimeout(function () {
                document.getElementById("sur").value = "";
            }, 1000);
        }
    }
}
