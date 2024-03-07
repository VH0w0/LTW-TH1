const questions = [
    {
        question: "Câu hỏi 1: Đây là câu hỏi 1?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 2: Đây là câu hỏi 2?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 3: Đây là câu hỏi 3?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 4: Đây là câu hỏi 4?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 5: Đây là câu hỏi 5?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 6: Đây là câu hỏi 6?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 7: Đây là câu hỏi 7?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 8: Đây là câu hỏi 8?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 9: Đây là câu hỏi 9?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 10: Đây là câu hỏi 10?",
        choices: ["True", "False"],
        type: "true-false",
    },
    {
        question: "Câu hỏi 11: Đây là câu hỏi 11?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 12: Đây là câu hỏi 12?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 13: Đây là câu hỏi 13?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 14: Đây là câu hỏi 14?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 15: Đây là câu hỏi 15?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 16: Đây là câu hỏi 16?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 17: Đây là câu hỏi 17?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 18: Đây là câu hỏi 18?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 19: Đây là câu hỏi 19?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 20: Đây là câu hỏi 20?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-choice",
    },
    {
        question: "Câu hỏi 21: Đây là câu hỏi 21?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 22: Đây là câu hỏi 22?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 23: Đây là câu hỏi 23?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 24: Đây là câu hỏi 24?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 25: Đây là câu hỏi 25?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 26: Đây là câu hỏi 26?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 27: Đây là câu hỏi 27?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 28: Đây là câu hỏi 28?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 29: Đây là câu hỏi 29?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 30: Đây là câu hỏi 30?",
        choices: ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
        type: "mul-answer",
    },
    {
        question: "Câu hỏi 31: Đây là câu hỏi 31?",
        type: "essay",
    },
    {
        question: "Câu hỏi 32: Đây là câu hỏi 32?",
        type: "essay",
    },
    {
        question: "Câu hỏi 33: Đây là câu hỏi 33?",
        type: "essay",
    },
    {
        question: "Câu hỏi 34: Đây là câu hỏi 34?",
        type: "essay",
    },
    {
        question: "Câu hỏi 35: Đây là câu hỏi 35?",
        type: "essay",
    },
    {
        question: "Câu hỏi 36: Đây là câu hỏi 36?",
        type: "essay",
    },
    {
        question: "Câu hỏi 37: Đây là câu hỏi 37?",
        type: "essay",
    },
    {
        question: "Câu hỏi 38: Đây là câu hỏi 38?",
        type: "essay",
    },
    {
        question: "Câu hỏi 39: Đây là câu hỏi 39?",
        type: "essay",
    },
    {
        question: "Câu hỏi 40: Đây là câu hỏi 40?",
        type: "essay",
    }
    // Thêm các câu hỏi khác vào đây
];

function displayQuestions() {
    const questionsContainer = document.getElementById("questions-container");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<h2>${question.question}</h2><ul id="choices-${index}"></ul>`;
        questionsContainer.appendChild(questionDiv);

        if (question.type === "true-false") {
            questionDiv.innerHTML += '<div class="choices">' +
              '<label><input type="radio" name="q' + index + '" value="true"> Đúng</label>' +
              '<label><input type="radio" name="q' + index + '" value="false"> Sai</label>' +
              '</div>';
        } else if (question.type === "mul-choice") {
            question.choices.forEach(function (choice) {
                questionDiv.innerHTML += '<div class="choices">' +
                  '<label><input type="radio" name="q' + index + '" value="' + choice + '"> ' + choice + '</label>' +
                  '</div>';
            });
        } else if (question.type === "mul-answer") {
            question.choices.forEach(function (choice) {
                questionDiv.innerHTML += '<div class="choices">' +
                  '<label><input type="checkbox" name="q' + index + '" value="' + choice + '"> ' + choice + '</label>' +
                  '</div>';
            });
        } else if (question.type === "essay") {
            questionDiv.innerHTML += '<div class="choices">' +
              '<textarea name="q' + index + '" rows="4"></textarea>' +
              '</div>';
        }
    });
}


function submitQuiz() {
    alert("Bài của bạn đã được gửi!");

    // Xử lý logic nộp bài ở đây nếu cần
    window.location.href = "hienthiketqua.html";
}

document.addEventListener("DOMContentLoaded", function () {
    displayQuestions();
});