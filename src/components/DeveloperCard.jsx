import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaStar, FaCodeBranch } from 'react-icons/fa';

const DeveloperCard = ({ developer }) => {
  const { name, role, bio, skills, rating, projects, hourlyRate, social, image } = developer;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src={image}
            alt={name}
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600">{bio}</p>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Skills</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <FaStar className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
          <div className="flex items-center">
            <FaCodeBranch className="h-5 w-5 text-gray-400" />
            <span className="ml-1 text-sm text-gray-600">{projects} projects</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">{hourlyRate}/hr</span>
          <div className="flex space-x-3">
            <a href={social.github} className="text-gray-400 hover:text-gray-500">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={social.linkedin} className="text-gray-400 hover:text-gray-500">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={social.twitter} className="text-gray-400 hover:text-gray-500">
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <button className="mt-4 w-full bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
          Contact Developer
        </button>
      </div>
    </div>
  );
};

export default DeveloperCard; 