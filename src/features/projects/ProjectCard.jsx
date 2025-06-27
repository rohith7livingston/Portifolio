import { useState } from "react";

/* eslint-disable react/prop-types */
function ProjectCard({ img, title, desc, tags, srcCode, demo }) {
  const [showAllTags, setShowAllTags] = useState(false);

  return (
    <div className="relative flex flex-col bg-[#1E1E2E] text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-xl">
      {/* Image */}
      <img src={img} className="h-[180px] w-full object-cover" alt={title} />

      {/* Content */}
      <div className="p-5 flex flex-col gap-y-4">
        {/* Title */}
        <h2 className="text-lg font-semibold tracking-wide">{title}</h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(showAllTags ? tags : tags.slice(0, 3)).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-md transition-transform hover:scale-105"
            >
              {tag}
            </span>
          ))}

          {/* "Show More" Button */}
          {tags.length > 3 && !showAllTags && (
            <button
              onClick={() => setShowAllTags(true)}
              className="px-3 py-1 text-xs font-medium bg-gray-600 text-gray-400 rounded-md hover:bg-gray-500 transition-transform hover:scale-105"
            >
              + {tags.length - 3} more
            </button>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          <a
            href={srcCode}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md transition-transform hover:bg-gray-600 hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            href={demo}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md transition-transform hover:bg-blue-500 hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
