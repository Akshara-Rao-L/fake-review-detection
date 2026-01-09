const textarea = document.getElementById("review");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

textarea.addEventListener("input", () => {
    charCount.innerText = textarea.value.length;
    wordCount.innerText = textarea.value.trim()
        ? textarea.value.trim().split(/\s+/).length
        : 0;
});

function analyzeReview() {
    fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review: textarea.value })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText =
            `${data.result} (Confidence: ${data.confidence})`;
    });
}

function fillSuspicious() {
    textarea.value =
        "This product is amazing best ever buy now highly recommend five stars";
    textarea.dispatchEvent(new Event("input"));
}

function fillGenuine() {
    textarea.value =
        "I have been using this product for two weeks. It works as expected and quality is decent for the price.";
    textarea.dispatchEvent(new Event("input"));
}
