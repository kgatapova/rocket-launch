/*
1. initial position: password and okay enabled
2. ok button pressed: check password
3. disable password field and ok button, enable check buttons and levers
4. check button or lever event: check if levers set to maximum, check buttons checked
5. if 4 enable launch button else disable
6. launch button pressed: flight() (disable launch button + animation)
 */

setUp();
const launch = document.querySelector("input[value='launch']");
launch.addEventListener("click", flight);

function setUp() {
    let passwd;
    document.querySelectorAll("input").forEach(element => {
        if (element.value === "ok" || element.type === "password") {
            if (element.type === "password")
                passwd = element;
            if (element.value === "ok") {
                element.addEventListener("click", function () {
                    if (passwd.value === "TrustNo1") {
                        switchCondition();
                    }
                })
            }
        } else {
            element.disabled = true;
        }
    });
}

function switchCondition() {
    document.querySelectorAll("input").forEach(element => {
        element.disabled = element.value === "ok" || element.type === "password" || element.value === "launch";
    });
}

function checkManipulator() {
    let flag = true;
    document.querySelectorAll("input").forEach(element => {
        if (element.type === "checkbox") {
            flag = element.checked && flag;
        }
        if (element.type === "range") {
            flag = flag && (Number(element.value) === 100);
        }
    });
    launch.disabled = !flag;
}

const rocket = document.querySelector(".rocket");

function flight() {
    launch.disabled = true;
    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        if (timePassed >= 2000) {
            clearInterval(timer);
            return;
        }
        draw(timePassed);

    }, 20);
}

function draw(timePassed) {
    rocket.style.left = 20 + timePassed / 65 + 'vw';
    rocket.style.bottom = 25 + timePassed / 27 + 'vh';
}