import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const syllabiData = [
  { id: 1, year: 'F2024', title: 'CS 1710: Intro to Cognitive Science', url: '/syllabus/cs1710_fa24.pdf' },
  { id: 2, year: 'F2024', title: 'CS 2800: Mathematical Foundations of Computing', url: '/syllabus/cs2800_fa24.pdf' },
  { id: 3, year: 'F2024', title: 'CS 3780: Introduction to Machine Learning', url: '/syllabus/cs3780_fa24.pdf' },
  { id: 4, year: 'F2024', title: 'CS 4750: Foundations of Robotics', url: '/syllabus/cs4750_fa24.pdf' },
  { id: 5, year: 'F2024', title: 'CS 4820: Introduction to Analysis of Algorithms', url: '/syllabus/cs4820_fa24.pdf' },
  { id: 6, year: 'F2024', title: 'CS 5420: Advanced Computer Architecture', url: '/syllabus/cs5420_fa24.pdf' },
  { id: 7, year: 'F2024', title: 'CS 5650: Virtual and Augmented Reality', url: '/syllabus/cs5650_fa24.pdf' },
  { id: 8, year: 'F2024', title: 'CS 5682: HCI and Design', url: '/syllabus/cs5682_fa24.pdf' },
  { id: 9, year: 'F2024', title: 'CS 5700: Foundations of AI & Decision Making', url: '/syllabus/cs5700_fa24.pdf' },
  { id: 10, year: 'F2024', title: 'CS 5727: Optimization Methods', url: '/syllabus/cs5727_fa24.pdf' },
  { id: 11, year: 'F2024', title: 'CS 5780: Introduction to Machine Learning', url: '/syllabus/cs5780_fa24.pdf' },
  { id: 12, year: 'F2024', title: 'CS 5781: Machine Learning Engineering', url: '/syllabus/cs5781_fa24.pdf' },
  { id: 13, year: 'F2024', title: 'CS 5785: Applied Machine Learning', url: '/syllabus/ece4750_fa23.pdf' },
  { id: 14, year: 'S2024', title: 'CS 1112: Introduction to Computing', url: '/syllabus/Syllabus-SP24-CS1112-LEC001-CURRENT.pdf' },
  { id: 15, year: 'S2024', title: 'CS 1132: Short Course in MATLAB', url: '/syllabus/Syllabus-SP24-CS1132-LEC001-CURRENT.pdf' },
  { id: 16, year: 'S2024', title: 'CS 2770: Excursions in Computational Sustainability', url: '/syllabus/Syllabus-SP24-CS2770-LEC001-CURRENT.pdf' },
  { id: 17, year: 'S2024', title: 'CS 2800: Discrete Structures', url: '/syllabus/Syllabus-SP24-CS2800-LEC001-CURRENT.pdf' },
  { id: 18, year: 'S2024', title: 'CS 3420: Embedded Systems', url: '/syllabus/Syllabus-SP24-CS3420-LEC001-DRAFT.pdf' },
  { id: 19, year: 'S2024', title: 'CS 4852: Networks II: Market Design', url: '/syllabus/Syllabus-SP24-CS4852-LEC001-CURRENT.pdf' },
  { id: 20, year: 'S2024', title: 'CS 5220: Applied High-Performance Computing', url: '/syllabus/Syllabus-SP24-CS5220-LEC001-DRAFT.pdf' },
  { id: 21, year: 'S2024', title: 'CS 5356: Building Startup Systems', url: '/syllabus/Syllabus-SP24-CS5356-LEC030-CURRENT.pdf' },
  { id: 22, year: 'S2024', title: 'CS 5382: Designing Fair Algorithms', url: '/syllabus/Syllabus-SP24-CS5382-LEC030-CURRENT.pdf' },
  { id: 23, year: 'S2024', title: 'CS 5433: Blockchains, Cryptocurrencies, and Smart Contracts', url: '/syllabus/Syllabus-SP24-CS5433-LEC030-CURRENT.pdf' },
  { id: 24, year: 'S2024', title: 'CS 5450: Networked and Distributed Systems', url: '/syllabus/Syllabus-SP24-CS5450-LEC030-CURRENT.pdf' },
  { id: 25, year: 'S2024', title: 'CS 5670: Introduction to Computer Vision', url: '/syllabus/Syllabus-SP24-CS5670-LEC030-DRAFT.pdf' },
  { id: 26, year: 'S2024', title: 'CS 5678: 3D User Interfaces', url: '/syllabus/Syllabus-SP24-CS5678-LEC030-DRAFT.pdf' },
  { id: 27, year: 'F2023', title: 'CS 1112: Introduction to Computing', url: '/syllabus/Syllabus-FA23-CS1112-LEC001-DRAFT.pdf' },
  { id: 28, year: 'F2023', title: 'CS 1132: Short Course in MATLAB', url: '/syllabus/Syllabus-FA23-CS1132-LEC001-DRAFT.pdf' },
  { id: 29, year: 'F2023', title: 'CS 1710: Introduction to Cognitive Science', url: '/syllabus/Syllabus-FA23-CS1710-LEC001-DRAFT.pdf' },
  { id: 30, year: 'F2023', title: 'CS 2110: Object-Oriented Programming and Data Structures', url: '/syllabus/Syllabus-FA23-CS2110-LEC001-CURRENT.pdf' },
  { id: 31, year: 'F2023', title: 'CS 2850: Networks', url: '/syllabus/Syllabus-FA23-CS2850-LEC001-CURRENT.pdf' },
  { id: 32, year: 'F2023', title: 'CS 4420: Computer Architecture', url: '/syllabus/Syllabus-FA23-CS4420-LEC001-CURRENT.pdf' },
  { id: 33, year: 'F2023', title: 'CS 4740: Natural Language Processing', url: '/syllabus/Syllabus-FA23-CS4740-LEC001-DRAFT.pdf' },
  { id: 34, year: 'F2023', title: 'CS 4775: Computational Genetics and Genomics', url: '/syllabus/Syllabus-FA23-CS4775-LEC001-CURRENT.pdf' },
  { id: 35, year: 'F2023', title: 'CS 4820: Introduction to Analysis of Algorithms', url: '/syllabus/Syllabus-FA23-CS4820-LEC001-DRAFT.pdf' },
  { id: 36, year: 'F2023', title: 'CS 5740: Advanced NLP', url: '/syllabus/Syllabus-FA23-CS5740-LEC001-DRAFT.pdf' },
  { id: 37, year: 'S2023', title: 'CS 1112: Introduction to Computing', url: '/syllabus/Syllabus-SP23-CS1112-LEC001-PRIOR-TERM.pdf' },
  { id: 38, year: 'S2023', title: 'CS 1132: Short Course in MATLAB', url: '/syllabus/Syllabus-SP23-CS1132-LEC001-PRIOR-TERM.pdf' },
  { id: 39, year: 'S2023', title: 'CS 1710: Introduction to Cognitive Science', url: '/syllabus/Syllabus-SP23-CS1710-LEC001-DRAFT.pdf' },
  { id: 40, year: 'S2023', title: 'CS 2110: Object-Oriented Programming and Data Structures', url: '/syllabus/Syllabus-SP23-CS2110-LEC001-DRAFT.pdf' },
  { id: 41, year: 'S2023', title: 'CS 2300: Intermediate Design and Programming for the Web', url: '/syllabus/Syllabus-SP23-CS2300-LEC001-DRAFT.pdf' },
  { id: 42, year: 'S2023', title: 'CS 2770: Excursions in Computational Sustainability', url: '/syllabus/Syllabus-SP23-CS2770-LEC001-CURRENT.pdf' },
  { id: 43, year: 'S2023', title: 'CS 2800: Discrete Structures', url: '/syllabus/Syllabus-SP23-CS2800-LEC001-DRAFT.pdf' },
  { id: 44, year: 'S2023', title: 'CS 4414: Systems Programming', url: '/syllabus/Syllabus-SP23-CS4414-LEC001-PRIOR-TERM.pdf' },
  { id: 45, year: 'S2023', title: 'CS 4756: Robot Learning', url: '/syllabus/Syllabus-SP23-CS4756-LEC001-CURRENT.pdf' },
  { id: 46, year: 'S2023', title: 'CS 4758: Autonomous Mobile Robots', url: '/syllabus/Syllabus-SP23-CS4758-LEC001-PRIOR-TERM.pdf' },
  { id: 47, year: 'F2022', title: 'CS 1110: Introduction to Computing Using Python', url: '/syllabus/Syllabus-FA22-CS1110-LEC001-CURRENT.pdf' },
  { id: 48, year: 'F2022', title: 'CS 2112: Object-Oriented Design and Data Structures', url: '/syllabus/Syllabus-FA22-CS2112-LEC001-CURRENT.pdf' },
  { id: 49, year: 'F2022', title: 'CS 2850: Networks', url: '/syllabus/Syllabus-FA22-CS2850-LEC001-DRAFT.pdf' },
  { id: 50, year: 'F2022', title: 'CS 3300: Data-Driven Web Applications', url: '/syllabus/Syllabus-FA22-CS3300-LEC001-DRAFT.pdf' },
  { id: 51, year: 'F2022', title: 'CS 4740: Natural Language Processing', url: '/syllabus/Syllabus-FA22-CS4740-LEC001-DRAFT.pdf' },
  { id: 52, year: 'F2022', title: 'CS 4750: Foundations of Robotics', url: '/syllabus/Syllabus-FA22-CS4750-LEC001-CURRENT.pdf' },
  { id: 53, year: 'F2022', title: 'CS 4820: Introduction to Analysis of Algorithms', url: '/syllabus/Syllabus-FA22-CS4820-LEC001-CURRENT.pdf' }
];

// Root route to handle "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Syllabi API! Navigate to /syllabi to see the available data.');
});

// Route to serve syllabi data
app.get('/syllabi', (req, res) => {
  res.json(syllabiData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});