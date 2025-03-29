import { Link } from 'react-router-dom';

const jobs = [
  { id: 1, title: "Frontend Developer", company: "TechCorp" },
  { id: 2, title: "Backend Developer", company: "CodeWorks" }
];

function JobListings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <ul className="space-y-2">
        {jobs.map((job) => (
          <li key={job.id}>
            <Link
              to={`/job/${job.id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {job.title} - {job.company}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobListings;
