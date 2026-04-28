const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Transactions Fraud Detection",
    description: "End-to-end fraud detection analysis using machine learning on financial transaction data. Includes Jupyter notebooks for EDA, feature engineering, and model building alongside Tableau visualizations and structured documentation with DVA-focused portfolio materials.",
    image: `${base}Fraud_detection.png`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/Rana-NST-RU/E_G14_TransactionsFraudDetection",
    live: "https://public.tableau.com/views/FraudDetectionAnalysis_17772917071070/FraudDetectionActionableInsights?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "Hotel Booking Analytics",
    description: "Interactive analytics dashboard built to examine hotel booking demand, cancellation behavior, customer segments, seasonal trends, and revenue performance. Features booking patterns, lead time analysis, market segment insights, guest behavior tracking, and occupancy-focused decision support.",
    image: `${base}Hotel_booking.png`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/Rana-NST-RU/E_G6_HotelBookingDemandAnalysis",
    live: "https://public.tableau.com/views/HotelBookingDemand_17773051307830/DASHBOARD1EXECUTIVEOVERVIEW?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "AI Study Coach",
    description: "End-to-end student performance prediction system using machine learning. Includes Jupyter notebooks for data preprocessing, exploratory analysis, feature engineering, and model training with multiple algorithms (Logistic Regression, Decision Tree, Random Forest, XGBoost). Features a Streamlit-based interactive UI for real-time predictions, model comparison, and performance evaluation with metrics, visualizations, and actionable insights.",
    image: `${base}student_dashboard.png`,
    tags: ["Python", "GenAI", "FastAPI", "LLaMA", "Streamlit", "Scikit-learn"],
    github: "https://github.com/Rana-NST-RU/deploy-student_pass-fail_predicting_ml_model",
    live: "https://student-pass-fail-predicting-ml-model.streamlit.app/"
  },
  {
    name: "NST Buddy Tech",
    description: "Interactive student-focused digital platform built to streamline academic collaboration, resource sharing, and campus communication. Features structured content management, user-friendly navigation, real-time updates, and scalable data handling to improve student engagement and accessibility.",
    image: `${base}nst_buddy_tech.png`,
    tags: ["React", "Node.js", "PostgreSQL", "Excel", "Python", "Jupyter"],
    github: "https://github.com/Rana-NST-RU/NST-Buddy-Tech",
    live: "https://nstbuddy.in/"
  }
]

export default projects
