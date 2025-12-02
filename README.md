⚡ Sorting Visualizer with Voice Assistant

🚀 About The Project

This is an interactive web application designed to visualize how various sorting algorithms work in real-time. Unlike standard visualizers, this project includes a Voice Assistant that narrates the sorting process, explaining comparisons and swaps as they happen.

The application features a modern, dark-themed UI with neon accents, customizable array inputs, and real-time complexity analysis.

🌟 Key Features

8 Sorting Algorithms: Bubble, Selection, Insertion, Merge, Quick, Heap, Counting, and Tim Sort.

🗣️ Voice Assistant: Built-in Text-to-Speech engine that narrates step-by-step operations (Comparisons, Swaps, Merges).

Customizable Controls: Adjust array size and sorting speed dynamically.

Custom Input: Users can input their own comma-separated values to visualize specific cases.

Real-Time Complexity: Displays Time (Best, Average, Worst) and Space complexity for the selected algorithm.

Modern UI: Responsive dark mode design with glowing neon controls.

🛠️ Tech Stack

Frontend: HTML5, CSS3 (Flexbox/Grid, Animations)

Logic: Vanilla JavaScript (ES6+)

No External Libraries: Built entirely from scratch to demonstrate core DOM manipulation and algorithm logic.

⚙️ How to Run Locally

This project requires no installation or build steps.

Clone the repository

git clone [https://github.com/your-username/sorting-visualizer.git](https://github.com/your-username/sorting-visualizer.git)


Navigate to the directory

cd sorting-visualizer


Open index.html

Simply double-click index.html to open it in your default browser.

Recommended: Use the "Live Server" extension in VS Code for the best experience.

🎮 Usage Guide

Generate Array: Click "Random Array" or enter your own numbers in the input box.

Adjust Speed: - Speed 1 (Slowest): Voice Assistant provides detailed comparison narration (e.g., "Checking 5 vs 10").

Speed 2-5 (Fast): Voice Assistant only announces start and completion to prevent lag.

Select Algorithm: Click on any algorithm button (e.g., Quick Sort).

Toggle Voice: Click the 🔊 Voice: OFF button to enable audio narration.

Note on Voice Assistant: To prevent browser lag, detailed narration is strictly throttled. Set the speed slider to the far left (Speed 1) to hear full step-by-step commentary.

📊 Supported Algorithms

Algorithm

Time (Average)

Time (Best)

Space Complexity

Bubble Sort

Θ(N^2)

Ω(N)

O(1)

Selection Sort

Θ(N^2)

Ω(N^2)

O(1)

Insertion Sort

Θ(N^2)

Ω(N)

O(1)

Merge Sort

Θ(N log N)

Ω(N log N)

O(N)

Quick Sort

Θ(N log N)

Ω(N log N)

O(log N)

Heap Sort

Θ(N log N)

Ω(N log N)

O(1)

Counting Sort

Θ(N + K)

Ω(N + K)

O(K)

Tim Sort

Θ(N log N)

Ω(N)

O(N)

📂 Project Structure

sorting-visualizer/
├── css/
│   └── style.css          # Styling (Dark theme, Animations)
├── scripts/
│   ├── main.js            # Entry point, Event listeners, Voice Logic
│   ├── visualizations.js  # DOM manipulation for bars
│   └── [algorithms].js    # Individual sorting logic files
└── index.html             # Main interface
