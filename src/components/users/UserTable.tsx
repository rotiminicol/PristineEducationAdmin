import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import { User } from '../../types';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge variant="primary">Admin</Badge>;
      case 'teacher':
        return <Badge variant="secondary">Teacher</Badge>;
      case 'student':
        return <Badge variant="default">Student</Badge>;
      default:
        return <Badge>{role}</Badge>;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Joined
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="transition-colors hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Avatar src={user.avatar} name={user.name} size="sm" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getRoleBadge(user.role)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {formatDate(user.createdAt)}
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

export default UserTable;