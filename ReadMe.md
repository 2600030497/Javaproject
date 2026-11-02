ExamSphere: Adaptive Quiz & Exam Engine 🧠
⚡Problem Solving Through Programming [Java] — Project #3An intelligent, real-time assessment architecture engineered with Java Object-Oriented Programming (OOP) paradigms and modern web frontends.
📌 OverviewExamSphere is an adaptive testing and examination engine designed to evaluate students dynamically. Rather than delivering a fixed questionnaire, ExamSphere modulates difficulty in real-time based on live candidate performance:Baseline Start: Every exam begins at Medium difficulty (4 marks).Ascent: Answering correctly escalates the engine to Hard tier (6 marks) with deeper problem-solving questions.Recovery: Making an error automatically de-escalates difficulty to Easy tier (2 marks) or Medium tier for foundational concept reinforcement.The project matches academic course requirements, featuring dedicated unit-wise assessments across 6 core syllabus units, an all-inclusive 24-question Grand Comprehensive Exam with a 25-minute countdown timer, student verification, live telemetry, and past quiz audit tracking.
🚀 Key FeaturesEntrance Hero & Student Authentication (Module 1 & 6)Minimalist entrance screen with glowing animations and immediate direct portal access.Candidate verification gateway validating:Candidate Name / Username (String studentName)Official Email Address (ValidateService.validateEmail())Student ID (int studentId >= 1000)Academic Year (1st, 2nd, 3rd, 4th Year)Branch / Department (CSE, IT, ECE, EEE, ME, AI & DS)Real-Time Adaptive AI Engine (Module 4)Evaluates answers immediately upon submission.Adjusts difficulty along the dynamic ladder: $\text{Easy (2 pts)} \longleftrightarrow \text{Medium (4 pts)} \longleftrightarrow \text{Hard (6 pts)}$.Live telemetry feed displaying current difficulty level, consecutive streaks, error drift, and algorithm pseudocode.Unit-Wise Quizzes & Grand Comprehensive Exam (Module 3)Unit Practice Quizzes (4 Questions each):Quiz (Unit-1): OOP Core & FundamentalsQuiz (Unit-2): Java Collections FrameworkQuiz (Unit-3): Exception HandlingQuiz (Unit-4): File Handling & I/O StreamsQuiz (Unit-5): Lambda Expressions & Functional ProgrammingQuiz (Unit-6): Java Stream APIFull All-Units Adaptive Quiz:24 cross-cutting questions dynamically selected from all 6 syllabus units.25-Minute countdown timer (1500 seconds).Syllabus & Course Concepts ExplorerClean unit-wise concept breakdown displaying topics, interfaces, and core Java concepts without clutter.AnalysisService & Analytics (Module 9)Aggregated metrics powered by stream pipelines: average student scores, top performers, department percentile distributions, and difficulty-wise accuracy latency.Previous Quizzes History & Reports (Modules 5 & 8)Filtered attempt log strictly tracking the currently authenticated candidate's completed tests.Generates score cards, percentage accuracy, assigned letter grades (A+, A, B, C), question path trace, concept explanations, and print-ready summary sheets.🧠 Adaptive Algorithm LogicThe calibration flow follows the rule set defined in the project specification:public void evaluatePerformance(boolean isCorrect) {
    if (isCorrect) {
        correctAnswers++;
        consecutiveErrors = 0;
        if (currentDifficulty.equals("Easy")) {
            currentDifficulty = "Medium"; // Promote
        } else if (currentDifficulty.equals("Medium")) {
            currentDifficulty = "Hard";   // Escalate to peak
        }
    } else {
        incorrectAnswers++;
        consecutiveCorrect = 0;
        if (currentDifficulty.equals("Hard")) {
            currentDifficulty = "Medium"; // Stabilize
        } else if (currentDifficulty.equals("Medium")) {
            currentDifficulty = "Easy";   // Recovery tier
        }
    }
}
🏗️ Architecture & 10 Java OOP ModulesComplies directly with the Project #3 specification manual:#Module NameClass NameKey Responsibility1Student ModuleStudentEncapsulates student identification, name, branch, and contact data.2Question Bank ModuleQuestionBankOrganizes questions by subject code, difficulty tiers, and marks.3Quiz & Exam ModuleQuizExamControls exam sessions, durations, active timers, and submissions.4Adaptive Engine ModuleAdaptiveEngineControls dynamic difficulty transitions based on candidate answers.5Result ModuleResultCalculates final scores, assigns grades, and produces diagnostic remarks.6ValidateService ModuleValidateServiceValidates student IDs, emails, mark thresholds, and difficulty levels.7SearchService ModuleSearchServiceQueries in-memory student records, question lists, and attempt logs.8ReportGenerationService ModuleReportGenerationServicePrepares formatted student performance transcripts and progress reports.9AnalysisService ModuleAnalysisServiceComputes class averages, top performers, and department statistics via Stream API.10Main ModuleMainCentral entry point and coordinator orchestrating all system services.
📂 Project StructureExamSphere/
├── index.html        # Unified single-file web application (Landing, Portal, Exam Engine)
├── style.css         # Custom animations, ambient glow styling, scrollbars, and print rules
├── script.js         # Core application logic, question database, adaptive engine, and state
└── README.md         # Comprehensive project documentation
💻 Getting Started & ExecutionOption 1: Standalone Browser Launch (Recommended)Clone or download the repository files into a single directory.Open index.html in any modern web browser (Google Chrome, Firefox, Safari, Edge).Click "Enter Portal" on the landing page.Input candidate credentials (Name, Email, Student ID, Year, Branch).Choose any Unit-Wise Quiz or launch the Full All-Units Adaptive Quiz.Option 2: Local HTTP Server (VS Code / Python / Node)# Using Python 3:
python -m http.server 8080

# Using Node http-server:
npx http-server -p 8080
Open http://localhost:8080 in your web browser.🛠️ Technologies UsedHTML5 & CSS3: Semantic structure with custom responsive layout.Tailwind CSS (CDN): Modern utility styling, dark aesthetic, and responsive breakpoints.JavaScript (ES6+): In-memory state store, timer intervals, reactive difficulty selection algorithms, and filter operations.Font Awesome 6: Vector iconography for modules, metrics, and navigation.👥 Contributors & Academic ReferenceCourse: Problem Solving Through Programming [Java]Project Topic: Project #3 • ExamSphere: Adaptive Quiz & Exam Engine
