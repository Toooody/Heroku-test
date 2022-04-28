/* eslint-disable comma-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */

/* Questionnaire */
const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active");
});

if (currentStep < 0) {
    currentStep = 0;
    formSteps[currentStep].classList.add("active");
    showCurrentStep();
}

multiStepForm.addEventListener("click", e => {
    let incrementor;
    if (e.target.matches("[data-next]")) {
        incrementor = 1;
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1;
    }

    if (incrementor == null) return;

    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every(input => input.reportValidity());
    if (allValid) {
        currentStep += incrementor;
        showCurrentStep();
    }

    showCurrentStep();
});

formSteps.forEach(step => {
    step.addEventListener("animationend", e => {
        formSteps[currentStep].classList.remove("hide");
        e.target.classList.toggle(
            "hide",
            !e.target.classList.contains("active")
        );
    });
});

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}

/* Calculating Xx algorithm */
function x1(q9x, q10y) {
    let delta, x1;

    /* To make sure that we get a postive delta */
    if (q9x > q10y) {
        delta = q9x - q10y;
    } else {
        delta = q10y - q9x;
    }

    switch (delta) {
        case 0:
            x1 = 1;
            break;
        case 1:
            x1 = 0.5;
            break;
        case 2:
            x1 = 0;
            break;
        case 3:
            x1 = -0.5;
            break;
        case 4:
            x1 = -1;
            break;
    }

    return x1;
}

function x2(q9y, q10x) {
    let delta, x2;

    /* To make sure that we get a postive delta */
    if (q9y > q10x) {
        delta = q9y - q10x;
    } else {
        delta = q10x - q9y;
    }

    switch (delta) {
        case 0:
            x2 = 1;
            break;
        case 1:
            x2 = 0.5;
            break;
        case 2:
            x2 = 0;
            break;
        case 3:
            x2 = -0.5;
            break;
        case 4:
            x2 = -1;
            break;
    }

    return x2;
}

function x3(q11x, q11y) {
    let delta, x3;

    /* To make sure that we get a postive delta */
    if (q11x > q11y) {
        delta = q11x - q11y;
    } else {
        delta = q11y - q11x;
    }

    switch (delta) {
        case 0:
            x3 = 1;
            break;
        case 1:
            x3 = 0.5;
            break;
        case 2:
            x3 = 0;
            break;
        case 3:
            x3 = -0.5;
            break;
        case 4:
            x3 = -1;
            break;
    }

    return x3;
}

function x4(q12x, q12y) {
    let delta, x1;

    /* To make sure that we get a postive delta */
    if (q12x > q12y) {
        delta = q12x - q12y;
    } else {
        delta = q12y - q12x;
    }

    switch (delta) {
        case 0:
            x4 = 1;
            break;
        case 1:
            x4 = 0;
            break;
        case 2:
            x4 = -1;
            break;
    }

    return x4;
}

function x5(q13x, q3y) {
    let delta, x5;

    /* To make sure that we get a postive delta */
    if (q13x > q3y) {
        delta = q13x - q3y;
    } else {
        delta = q3y - q13x;
    }

    if (q13x === 3 || delta === 0) {
        x5 = 1;
    } else {
        x5 = -1;
    }

    return x5;
}

function x6(q13y, q3x) {
    let delta, x6;

    /* To make sure that we get a postive delta */
    if (q13y > q3x) {
        delta = q13y - q3x;
    } else {
        delta = q3x - q13y;
    }

    if (q13y === 3 || delta === 0) {
        x6 = 1;
    } else {
        x6 = -1;
    }

    return x6;
}

function x7(q14x, q8x, q8y) {
    let x7;

    if (q14x === "Yes") {
        if (q8x === q8y) {
            x7 = 1;
        } else {
            x7 = 0;
        }
    } else {
        x7 = 0;
    }

    return x7;
}

function x8(q14y, q8y, q8x) {
    let x8;

    if (q14y === "Yes") {
        if (q8y === q8x) {
            x8 = 1;
        } else {
            x8 = 0;
        }
    } else {
        x8 = 0;
    }

    return x8;
}

function x9(q15x, q5y) {
    let delta, x9;

    /* To make sure that we get a postive delta */
    if (q15x > q5y) {
        delta = q15x - q5y;
    } else {
        delta = q5y - q15x;
    }

    if (q15x === 4 || delta === 0) {
        x9 = 1;
    } else if (delta === 1) {
        x9 = 0;
    } else {
        x9 = -1;
    }

    return x9;
}

function x10(q15y, q5x) {
    let delta, x10;

    /* To make sure that we get a postive delta */
    if (q15y > q5x) {
        delta = q15y - q5x;
    } else {
        delta = q5x - q15y;
    }

    if (q15y === 4 || delta === 0) {
        x10 = 1;
    } else if (delta === 1) {
        x10 = 0;
    } else {
        x10 = -1;
    }

    return x10;
}

function x11(q16x, q16y) {
    let delta, x11;

    /* To make sure that we get a postive delta */
    if (q16x > q16y) {
        delta = q16x - q16y;
    } else {
        delta = q16y - q16x;
    }

    switch (delta) {
        case 0:
            x11 = 1;
            break;
        case 1:
            x11 = -1;
            break;
    }

    return x11;
}

function x12(q17x, q6x, q6y) {
    let x12;

    if (q17x === "Yes") {
        if (q6x === q6y) {
            x12 = 1;
        } else {
            x12 = 0;
        }
    } else {
        x12 = 0;
    }

    return x12;
}

function x13(q17y, q6y, q6x) {
    let x13;

    if (q17y === "Yes") {
        if (q6y === q6x) {
            x13 = 1;
        } else {
            x13 = 0;
        }
    } else {
        x13 = 0;
    }

    return x13;
}

function x14(q18x, q7x, q7y) {
    let x14;

    if (q18x === "Yes") {
        if (q7x === q7y) {
            x14 = 1;
        } else {
            x14 = 0;
        }
    } else {
        x14 = 0;
    }

    return x14;
}

function x15(q18y, q7y, q7x) {
    let x15;

    if (q18y === "Yes") {
        if (q7y === q7x) {
            x15 = 1;
        } else {
            x15 = 0;
        }
    } else {
        x15 = 0;
    }

    return x15;
}

let weightings = [
    0.1, 0.0285, 0.1, 0.1, 0.1, 0.1, 0.0285, 0.1, 0.1, 0.0285, 0.1, 0.0285,
    0.0285, 0.0285, 0.0285,
];
let fitness = [{}];

function compatability() {
    for (let i = 0; i < DB.length; i++) {
        let array = [];
        let sum = 0;

        array[0] = x1(applicant[x].q9x, resident[i].q10y);
        array[1] = x2(resident[i].q9y, applicant[x].q10x);
        array[2] = x3(applicant[x].q11x, resident[i].q11y);
        array[3] = x4(applicant[x].q12x, resident[i].q12y);
        array[4] = x5(applicant[x].q13x, resident[i].q3y);
        array[5] = x6(resident[i].q13y, applicant[x].q3x);
        array[6] = x7(applicant[x].q14x, applicant[x].q8x, resident[i].q8y);
        array[7] = x8(resident[i].q14y, resident[i].q8y, applicant[x].q8x);
        array[8] = x9(applicant[x].q15x, resident[i].q5y);
        array[9] = x10(resident[i].q15y, applicant[x].q5x);
        array[10] = x11(applicant[x].q16x, resident[i].q16y);
        array[11] = x12(applicant[x].q17x, applicant[x].q6x, resident[i].q6y);
        array[12] = x13(resident[i].q17y, resident[i].q6y, applicant[x].q6x);
        array[13] = x14(applicant[x].q18x, applicant[x].q7x, resident[i].q7y);
        array[14] = x15(resident[i].q18y, resident[i].q7y, applicant[x].q7x);

        for (let j = 0; j < 15; j++) {
            sum += array[j] * weightings[j];
        }
        let fit = {
            fitness: sum,
            email: results[i].email,
        };
        fitness.push(fit);
    }
}
/* Whatever else(Ændre til hvad javascripten herunder er til) */
