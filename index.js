const logDiv = document.getElementById("log");
const logState = document.getElementById("state");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("end");

startbtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    startbtn.disabled = true;
    stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    startbtn.disabled = false;
    stopbtn.disabled = true;
    logDiv.textContent = "";
    logState.textContent = "";
});

function handleDown(e) {
    logDiv.textContent = `Key ${e.key} pressed down`;
    logState.textContent = "Key is down";
}

function handleUp(e) {
    logDiv.textContent = `Key ${e.key} pressed up`;
    logState.textContent = "Key is up";
}