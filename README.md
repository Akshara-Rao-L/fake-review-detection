# Fake Review Detection System

A **Machine Learning–powered web application** that analyzes product reviews and detects whether they are **genuine** or **potentially fake / suspicious** using Natural Language Processing (NLP).

This project demonstrates an **end-to-end ML pipeline**, from data preprocessing and model training to deployment with a modern, user-friendly web interface.

---

## What Problem Does This Solve?

Online platforms are flooded with **fake and misleading reviews** that manipulate user decisions.

This system helps:

* Identify **suspicious reviews**
* Improve **trust in online feedback**
* Assist users and platforms in making **informed decisions**

---

## Project Architecture

```
fake-review-detection/
│
├── data/
│   └── fake_reviews_dataset.csv
│
├── notebook/
│   └── fake_review_training.ipynb
│
├── model/
│   ├── fake_review_model.pkl
│   └── tfidf_vectorizer.pkl
│
├── app.py
├── requirements.txt
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
└── README.md
```

---

## Machine Learning Pipeline

### 1. Data Preprocessing

* Lowercasing
* URL removal
* Punctuation removal
* Whitespace normalization

### 2. Feature Engineering

* **TF‑IDF Vectorization**
* Uni‑grams and bi‑grams
* Stop‑word removal

### 3. Model

* **Logistic Regression**
* `class_weight="balanced"` to handle class imbalance
* Probability‑based decision threshold

### 4. Output

* **Genuine Review** 
* **Suspicious / Fake Review** 
* Confidence score

---

## Web Application

### Frontend

* HTML5
* CSS3 (custom color palette)
* JavaScript (Fetch API)

### Backend

* Python
* Flask REST API

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Akshara-Rao-L/fake-review-detection.git
cd fake-review-detection
```

### 2. Create Virtual Environment

```bash
python -m venv fake_review_env
source fake_review_env/bin/activate   # macOS/Linux
fake_review_env\Scripts\activate      # Windows
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Train the Model

Launch Jupyter Notebook:

```bash
jupyter notebook
```

Open:

```
notebook/fake_review_training.ipynb
```

Run all cells to train and save the model.

---

## Run the Application

```bash
python app.py
```

Open your browser:

```
http://127.0.0.1:5000
```

---


## Example Review Screenshots

<img width="1192" height="717" alt="Fake review" src="https://github.com/user-attachments/assets/adf36a52-23a6-4756-b9f8-584832a7d65c" />

<img width="1192" height="717" alt="Genuine review" src="https://github.com/user-attachments/assets/9a8b2388-7567-419e-b684-152013897ff0" />


---

## Future Improvements

*  Add review rating as feature
*  Confidence bar visualization
*  Explainability (SHAP)
*  Transformer models (BERT)
*  Cloud deployment (Render / AWS)

---

## Technologies Used

* Python
* Scikit‑learn
* Flask
* Pandas
* HTML / CSS / JavaScript


---

## Author

Developed by **[Akshara Rao]**

---

## License

This project is open‑source and available under the **MIT License**.
