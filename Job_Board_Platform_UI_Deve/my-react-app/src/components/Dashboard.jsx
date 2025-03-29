import { useState } from "react";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  // State for storing job listings
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", description: "Build UI using React.js and Tailwind CSS" },
    { id: 2, title: "Backend Developer", description: "Work with Node.js and Express.js" },
  ]);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setJobTitle("");
    setJobDescription("");
  };

  // Function to add a job to the array
  const handleAddJob = () => {
    if (jobTitle.trim() && jobDescription.trim()) {
      const newJob = {
        id: jobs.length + 1, // Generate unique ID
        title: jobTitle,
        description: jobDescription,
      };

      setJobs([...jobs, newJob]); // Push the new job into the array
      closeModal(); // Close the modal
    }
  };

  return (
    <div className="p-4">
      {/* Header with "Add Job" button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Company Dashboard</h1>
        <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          + Add Job
        </button>
      </div>

      {/* Job Listings Display */}
      <div>
        {jobs.length === 0 ? (
          <p>No job listings available.</p>
        ) : (
          <ul className="space-y-3">
            {jobs.map((job) => (
              <li key={job.id} className="p-3 border rounded-md shadow-sm bg-gray-100">
                <h2 className="font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-600">{job.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal (Shown when isModalOpen is true) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Job</h2>

            {/* Job Title Input */}
            <label className="block mb-2">Job Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter job title"
            />

            {/* Job Description Input */}
            <label className="block mb-2">Job Description</label>
            <textarea
              className="w-full p-2 border rounded mb-3"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Enter job description"
            ></textarea>

            {/* Modal Actions */}
            <div className="flex justify-end space-x-2">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button onClick={handleAddJob} className="px-4 py-2 bg-green-500 text-white rounded">
                Add Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
