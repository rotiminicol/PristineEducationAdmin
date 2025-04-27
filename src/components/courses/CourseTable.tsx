import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import { Course } from '../../types';

interface CourseTableProps {
  courses: Course[];
}

const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge variant="success">Published</Badge>;
      case 'draft':
        return <Badge variant="warning">Draft</Badge>;
      case 'archived':
        return <Badge variant="default">Archived</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Course
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Instructor
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Students
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {courses.map((course) => (
            <tr key={course.id} className="transition-colors hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden">
                    <img
                      className="h-10 w-10 object-cover"
                      src={course.thumbnail}
                      alt={course.title}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{course.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{course.instructor}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getStatusBadge(course.status)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {course.students}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(course.createdAt)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="text-blue-500 hover:text-blue-700 transition-colors">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;