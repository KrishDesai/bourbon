'use client';
import { useState, useEffect } from 'react';

// Define the type for a syllabus item
type Syllabus = {
  id: number;
  year: string;
  title: string;
  url: string;
};

const Dashboard = () => {
  const [syllabiData, setSyllabiData] = useState<Syllabus[]>([]); // Explicitly type the state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch syllabi data from the backend
    const fetchSyllabi = async () => {
      try {
        const response = await fetch('https://bourbon-2.onrender.com/syllabi');
        if (!response.ok) {
          throw new Error('Failed to fetch syllabi data');
        }
        const data: Syllabus[] = await response.json(); // Ensure TypeScript knows the response type
        setSyllabiData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabi();
  }, []);

  const filteredSyllabi = syllabiData.filter(
    (syllabus) =>
      syllabus.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedYear === '' || syllabus.year === selectedYear)
  );

  const uniqueYears = [...new Set(syllabiData.map((syllabus) => syllabus.year))].sort().reverse();

  if (loading) {
    return <p className="text-center text-gray-300">Loading syllabi...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Past Syllabi</h1>
      <p className="text-center mb-4">Search through past syllabi from various years</p>

      <div className="flex justify-center mb-8 space-x-4">
        <input
          type="text"
          placeholder="Search for a syllabus (ex. CS 5700)"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className="bg-transparent border border-white text-white placeholder-white rounded-lg px-4 py-2 w-full max-w-md text-lg focus:outline-none focus:ring-2 focus:ring-white"
        />
        <select
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
          }}
          className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          <option value="">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
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
