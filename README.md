# SMART GOAL PLANNER

The **SMART Goal Planner** is a personal goal-tracking tool that helps users manage multiple goals by making them **Specific**, **Measurable**, **Achievable**, **Relevant**, and **Time-bound**. It boosts productivity, maintains focus, and encourages consistency.

The app includes full **Create, Read, Update, and Delete (CRUD)** functionality using a simulated backend via `json-server` and a local `db.json` file.

---

##  What Problem Does It Solve?

| Problem                          | SMART Solution                                             |
|----------------------------------|-------------------------------------------------------------|
| Vague goals like "be productive" | Adds specificity—who, what, when, why, and how              |
| No progress tracking             | Makes progress measurable (e.g., "read 2 books")            |
| Unrealistic expectations         | Focuses on achievable steps                                 |
| Misaligned priorities            | Encourages relevant goals                                   |
| No deadlines                     | Enforces time-bound goals                                   |
| Overwhelm from large tasks       | Breaks goals into manageable steps                          |
| Lack of accountability           | Adds check-ins, reminders, and trackers                     |
| Failure to follow through        | Supports reflection and habit formation                     |

---

##  Quick Setup & Usage

### 1. Download or Clone the Project

```bash
git clone https://github.com/Angellucy460/smart-goal-planner.git
cd smart-goal-planner
Or download the .zip and extract it.

2. Install Dependencies
Using npm:

bash
Copy
Edit
npm install
Or using Yarn:

bash
Copy
Edit
yarn install
3. Start the Development Server
bash
Copy
Edit
npm start
Or:

bash
Copy
Edit
yarn start
This compiles the React app and opens it in your browser at:

👉 http://localhost:3000

⚠️ Note: After submitting the goal form, please refresh the page to view your newly added goal. This is due to json-server not auto-refreshing state.

📁 Project Structure
pgsql
Copy
Edit
smart-goal-planner/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GoalForm.jsx
│   │   └── GoalList.jsx
│   ├── App.js
│   └── index.js
├── screenshots/
│   ├── goal-form.png
│   ├── dashboard.gif
│   └── demo-video.webm
├── package.json
└── README.md
✨ Key Features
✅ SMART Input Form with S, M, A, R, T fields

✅ Goal Dashboard with real-time updates

✅ Progress Tracker (sliders, checklists, etc.)

✅ Persistent data using json-server or localStorage

✅ Deadline pickers, filters, and reminders

✅ Easy-to-use UI with clean layout

🎥 Demo Video
▶️ Watch the SMART Goal Planner in action:

Watch Demo Video

Open the link in a browser that supports .webm playback (e.g., Chrome, Firefox).

📸 Screenshots / GIFs
📝 SMART Goal Form


📊 Dashboard View


🤝 Contribution Guide
Fork & Clone

bash
Copy
Edit
git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner
Install Dependencies

bash
Copy
Edit
npm install
Create a Feature Branch

bash
Copy
Edit
git checkout -b feature/your-feature-name
Make Changes & Test

bash
Copy
Edit
npm start
Commit & Push

bash
Copy
Edit
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name
Open a Pull Request

🎯 Target Users
User Group	Key Use Case	Value Provided
Students	Track academic tasks and goals	Clear plans, deadlines, and priorities
Professionals	Achieve career and personal growth goals	Progress tracking, structure
Managers / Team Leads	Set project goals for teams	Accountability and measurable outcomes
Entrepreneurs / Freelancers	Manage projects and milestones	Focus and consistent execution
Life Coaches / Self-Trackers	Improve routines and life outcomes	Structured goal tracking and motivation
HR / Training Facilitators	Align goals with training or performance	Standardized goal setting and assessment
Productivity Enthusiasts	Form and track new habits	Motivation through measurable progress

🧑‍💻 Author
Angel Lucy

📧 Email: angelliona38@gmail.com

📱 Phone: +254 790781575

🔗 GitHub: Angellucy460

⚖️ License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute with attribution.