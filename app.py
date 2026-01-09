from flask import Flask, render_template, request, jsonify
import joblib
import re
import string

app = Flask(__name__)

model = joblib.load("model/fake_review_model.pkl")
tfidf = joblib.load("model/tfidf_vectorizer.pkl")

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r"http\S+|www\S+", "", text)
    text = re.sub(r"[^a-z\s]", "", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    review = request.json["review"]
    review_clean = clean_text(review)

    vec = tfidf.transform([review_clean])
    prob = model.predict_proba(vec)[0][1]

    if prob >= 0.45:
        result = "Genuine Review"
    else:
        result = "Suspicious / Fake Review "

    return jsonify({
        "result": result,
        "confidence": round(prob, 2)
    })

if __name__ == "__main__":
    app.run(debug=True)
