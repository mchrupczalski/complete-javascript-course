"use strict";

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const promptMessage = () => {
            return `${this.question}\n${this.options.join("\n")}\n(Write option number)`;
        };

        let validAnswer = false;
        let selectedOptionNum = null;

        do {
            const selectedOption = prompt(promptMessage());
            console.log(selectedOption);

            // user clicked cancel
            if (!selectedOption) return;

            selectedOptionNum = Number(selectedOption);
            if (isNaN(selectedOptionNum)) {
                alert("Please input a number!");
                continue;
            }

            validAnswer = selectedOption >= 0 && selectedOption <= 3;
            if (!validAnswer) {
                alert(`Please input number between 0 and ${this.options.length - 1}`);

            }

        } while (!validAnswer);

        if (selectedOptionNum !== null)
            this.answers[selectedOptionNum]++;

        this.displayResults();
    },
    displayResults(type = "array") {
        const displayAsString = () => console.log(`Poll results are ${this.answers.join(", ")}`);
        const displayAsArray = () => console.log(this.answers);

        type === "string" ? displayAsString() : displayAsArray();
    }
};

document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]});