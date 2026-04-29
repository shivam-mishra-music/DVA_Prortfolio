const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Fraud Monitoring Dashboard",
    description: "End-to-end fraud detection analysis using machine learning on financial transaction data. Includes Jupyter notebooks for EDA, feature engineering, and model building alongside Tableau visualizations and structured documentation with DVA-focused portfolio materials.",
    image: `${base}Fraud_detection.png`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/shivam-mishra-music",
    live: "https://public.tableau.com/app/profile/shivam.mishra3999/viz/FraudDetectionAnalysis_17774567880970/FraudMonitoringDashboard"
  },
  {
    name: "Hotel Booking Demand",
    description: "Interactive analytics dashboard built to examine hotel booking demand, cancellation behavior, customer segments, seasonal trends, and revenue performance. Features booking patterns, lead time analysis, market segment insights, guest behavior tracking, and occupancy-focused decision support.",
    image: `${base}Hotel_booking.png`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/shivam-mishra-music",
    live: "https://public.tableau.com/app/profile/shivam.mishra3999/viz/HotelBookingDemand_17774562564540/DASHBOARD1EXECUTIVEOVERVIEW"
  },
  {
    name: "FIFA Dashboard",
    description: "Interactive Tableau dashboard exploring FIFA player and team statistics. Visualizes player performance metrics, team comparisons, regional distributions, and key insights across tournaments to support data-driven football analytics.",
    image: `${base}Fraud_detection.png`,
    tags: ["Tableau", "Data Visualization", "Sports Analytics"],
    github: "https://github.com/shivam-mishra-music",
    live: "https://public.tableau.com/app/profile/shivam.mishra3999/viz/dva-tableau/Dashboard1"
  }
]

export default projects