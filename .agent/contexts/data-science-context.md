# Data Science Context

## Overview
Data Science projects differ from software engineering: code is often exploratory, and "data" is a dependency equal to "code".

## Core Requirements
1.  **Reproducibility**: Same code + Same data = Same result.
2.  **Environment**: Conda/Virtualenv is mandatory. `requirements.txt` or `environment.yml`.
3.  **Exploration**: Jupyter Notebooks for analysis, converted to scripts for production.

## Architecture Decisions
-   **Compute**: Local GPU vs Cloud (AWS SageMaker / Google Colab).
-   **Data Storage**: S3/Data Lake vs SQL Warehouse.

## Logic Constraints
-   **Data Versioning**: DVC (Data Version Control) to track large datasets in git.
-   **Model Versioning**: MLflow / Weights & Biases.

## Tech Stack Recommendations
-   **Language**: Python (Pandas, Scikit-learn, PyTorch/TensorFlow).
-   **Visualization**: Matplotlib, Seaborn, Streamlit (for apps).

## Common Pitfalls
-   **Spaghetti Notebooks**: Execution order matters. Refactor to functions often.
-   **Data Leakage**: Training on test data.
-   **Pickle Security**: Never unpickle untrusted data.
