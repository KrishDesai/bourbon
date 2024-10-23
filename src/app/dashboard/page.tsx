'use client';
import { useState } from 'react';


const syllabiData = [
  { id: 1, year: 2024, title: 'CS 1710: Intro to Cognitive Science', url: '/syllabus/cs1710_fa24.pdf' },
  { id: 2, year: 2024, title: 'CS 2800: Mathematical Foundations of Computing', url: '/syllabus/cs2800_fa24.pdf' },
  { id: 3, year: 2024, title: 'CS 3780: Introduction to Machine Learning', url: '/syllabus/cs3780_fa24.pdf' },
  { id: 4, year: 2024, title: 'CS 4750: Foundations of Robotics', url: '/syllabus/cs4750_fa24.pdf' },
  { id: 5, year: 2024, title: 'CS 4820: Introduction to Analysis of Algorithms ', url: '/syllabus/cs4820_fa24.pdf' },
  { id: 6, year: 2024, title: 'CS 5420: Advanced Computer Architecture', url: '/syllabus/cs5420_fa24.pdf' },
  { id: 7, year: 2024, title: 'CS 5650: Virtual and Augmented Reality', url: '/syllabus/cs5650_fa24.pdf' },
  { id: 8, year: 2024, title: 'CS 5682: HCI and Design', url: '/syllabus/cs5682_fa24.pdf' },
  { id: 9, year: 2024, title: 'CS 5700: Foundations of AI & Decision Making', url: '/syllabus/cs5700_fa24.pdf' },
  { id: 10, year: 2024, title: 'CS 5727: Optimization Methods', url: '/syllabus/cs5727_fa24.pdf' },
  { id: 11, year: 2024, title: 'CS 5780: Introduction to Machine Learning', url: '/syllabus/cs5780_fa24.pdf' },
  { id: 12, year: 2024, title: 'CS 5781: Machine Learning Engineering', url: '/syllabus/cs5781_fa24.pdf' },
  { id: 13, year: 2024, title: 'CS 5785: Applied Machine Learning', url: '/syllabus/ece4750_fa23.pdf' },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSyllabi = syllabiData.filter((syllabus) =>
    syllabus.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Past Syllabi</h1>
      <p className="text-center mb-4">Search through past syllabi from various years</p>
      
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a syllabus (ex. CS 5700)"
          value={searchQuery}
          onChange={(e) => {setSearchQuery(e.target.value)}}
          className="bg-transparent border border-white text-white placeholder-white rounded-lg px-4 py-2 w-full max-w-md text-lg focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSyllabi.length > 0 ? (
          filteredSyllabi.map((syllabus) => (
            <div
              key={syllabus.id}
              className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{syllabus.title}</h2>
              <p className="text-gray-300 mb-4">Year: {syllabus.year}</p>
              <a
                href={syllabus.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline"
              >
                View Syllabus
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-300">No syllabi found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
