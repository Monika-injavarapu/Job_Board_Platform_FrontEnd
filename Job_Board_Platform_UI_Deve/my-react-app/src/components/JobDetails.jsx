import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Job Details - {id}</h1>

      {/* Frontend Job Details */}
      {id === "1" && (
        <div>
          <p>
            <strong>Collaborate on UI Development:</strong> Work with the design and backend teams to create responsive, scalable frontend applications.
          </p>
          <p>
            <strong>Learn & Build with React.js:</strong> Assist in developing user interfaces using React.js and gain exposure to tools like Next.js and state management libraries.
          </p>
          <p>
            <strong>API Integration:</strong> Help integrate RESTful APIs and third-party services under guidance.
          </p>
          <p>
            <strong>Debug & Troubleshoot:</strong> Support the team in identifying and fixing issues to enhance application stability.
          </p>
          <p>
            <strong>Adhere to Best Practices:</strong> Follow coding standards and practices to maintain clean, reusable code.
          </p>
          <p>
            <strong>Continuous Learning:</strong> Stay curious and keep up with emerging trends and technologies in frontend development.
          </p>
          <h2 className="text-xl font-semibold mt-4">Required Skills & Qualifications</h2>
          <ul className="list-disc ml-5">
            <li><strong>Educational Background:</strong> Bachelor’s degree in Computer Science or a related field.</li>
            <li><strong>Basic React.js Knowledge:</strong> Familiarity with React.js and ES6+ JavaScript.</li>
            <li><strong>Web Fundamentals:</strong> Understanding of HTML, CSS, and frameworks like Tailwind CSS.</li>
            <li><strong>Interest in State Management:</strong> Willingness to learn Redux and React Hooks.</li>
            <li><strong>API Basics:</strong> Basic understanding of working with RESTful APIs.</li>
            <li><strong>Version Control:</strong> Experience with Git/GitHub.</li>
            <li><strong>Problem-Solving:</strong> Strong analytical skills and attention to detail.</li>
            <li><strong>Team Player:</strong> Eagerness to learn in a collaborative environment.</li>
          </ul>
        </div>
      )}

      {/* Backend Job Details */}
      {id === "2" && (
        <div>
          <h2 className="text-xl font-semibold">Backend Development</h2>
          <ul className="list-disc ml-5">
            <li><strong>Assist in Backend Development:</strong> Help build and maintain backend applications using Node.js and Express.js.</li>
            <li><strong>API Implementation:</strong> Design and implement RESTful APIs for frontend integration.</li>
            <li><strong>Database Management:</strong> Work with MongoDB, PostgreSQL, or MySQL under guidance.</li>
            <li><strong>Performance Optimization:</strong> Learn techniques to optimize backend scalability and responsiveness.</li>
            <li><strong>Authentication & Security:</strong> Support authentication and authorization mechanisms.</li>
            <li><strong>Troubleshooting:</strong> Assist in debugging server-side issues.</li>
            <li><strong>Clean Code Practices:</strong> Write maintainable, well-documented code.</li>
            <li><strong>Team Collaboration:</strong> Work closely with frontend developers and DevOps teams.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Required Skills & Qualifications</h3>
          <ul className="list-disc ml-5">
            <li><strong>Educational Background:</strong> Bachelor’s degree in Computer Science, Engineering, or equivalent experience.</li>
            <li><strong>Basic Node.js Knowledge:</strong> Familiarity with Node.js and backend concepts.</li>
            <li><strong>JavaScript Fundamentals:</strong> Understanding of ES6+ and Express.js.</li>
            <li><strong>Database Basics:</strong> Knowledge of MongoDB, PostgreSQL, or MySQL.</li>
            <li><strong>API Awareness:</strong> Basic understanding of RESTful API principles.</li>
            <li><strong>Version Control:</strong> Experience with Git/GitHub.</li>
            <li><strong>Eagerness to Learn:</strong> Interest in cloud platforms, microservices, and DevOps practices.</li>
            <li><strong>Problem-Solving:</strong> Strong analytical and debugging skills.</li>
            <li><strong>Teamwork:</strong> Good communication and collaboration skills.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
