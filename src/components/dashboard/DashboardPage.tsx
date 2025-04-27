import React from 'react';
import { Users, BookOpen, GraduationCap, TrendingUp, Clock } from 'lucide-react';
import StatCard from './StatCard';
import RecentActivity from './RecentActivity';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import CourseTable from '../courses/CourseTable';
import UserTable from '../users/UserTable';

const DashboardPage: React.FC = () => {
  // Mock courses for demo
  const recentCourses = [
    {
      id: '1',
      title: 'Introduction to Mathematics',
      description: 'Fundamentals of mathematics for beginners',
      instructor: 'Dr. Sarah Johnson',
      thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=300',
      status: 'published',
      students: 125,
      createdAt: new Date('2023-09-15'),
      updatedAt: new Date('2023-09-20'),
    },
    {
      id: '2',
      title: 'Advanced Physics',
      description: 'In-depth study of physics principles',
      instructor: 'Prof. Michael Chen',
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300',
      status: 'published',
      students: 87,
      createdAt: new Date('2023-10-05'),
      updatedAt: new Date('2023-10-10'),
    },
    {
      id: '3',
      title: 'English Literature',
      description: 'Exploring classic and modern literature',
      instructor: 'Emily Wilson',
      thumbnail: 'https://images.pexels.com/photos/5834344/pexels-photo-5834344.jpeg?auto=compress&cs=tinysrgb&w=300',
      status: 'draft',
      students: 0,
      createdAt: new Date('2023-11-01'),
      updatedAt: new Date('2023-11-01'),
    },
  ];

  // Mock users for demo
  const recentUsers = [
    {
      id: '1',
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      role: 'student',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: new Date('2023-10-25'),
    },
    {
      id: '2',
      name: 'Emma Johnson',
      email: 'emma.j@example.com',
      role: 'student',
      avatar: 'https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: new Date('2023-10-27'),
    },
    {
      id: '3',
      name: 'Prof. Robert Lee',
      email: 'robert.lee@example.com',
      role: 'teacher',
      avatar: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=100',
      createdAt: new Date('2023-10-29'),
    },
  ];

  // Mock activities
  const activities = [
    {
      id: '1',
      user: 'Dr. Sarah Johnson',
      action: 'published a new course',
      target: 'Introduction to Chemistry',
      time: '2 hours ago',
    },
    {
      id: '2',
      user: 'Admin',
      action: 'approved',
      target: 'Advanced Physics course',
      time: '5 hours ago',
    },
    {
      id: '3',
      user: 'Emily Wilson',
      action: 'created a draft course',
      target: 'English Literature',
      time: '1 day ago',
    },
    {
      id: '4',
      user: 'System',
      action: 'sent enrollment emails to',
      target: '15 new students',
      time: '2 days ago',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your education platform's statistics and recent activity.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value="1,294"
          icon={<Users size={20} />}
          change={{ value: 12, positive: true }}
        />
        <StatCard
          title="Active Courses"
          value="32"
          icon={<BookOpen size={20} />}
          change={{ value: 8, positive: true }}
        />
        <StatCard
          title="Completion Rate"
          value="78%"
          icon={<GraduationCap size={20} />}
          change={{ value: 5, positive: true }}
        />
        <StatCard
          title="Avg. Engagement"
          value="42 min"
          icon={<Clock size={20} />}
          change={{ value: 3, positive: false }}
        />
      </div>

      {/* Charts and tables section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Enrollments chart */}
        <Card>
          <CardHeader>
            <CardTitle>Enrollments Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gray-50 flex items-center justify-center text-gray-400">
              <TrendingUp size={32} />
              <span className="ml-2">Enrollment chart visualization</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity activities={activities} />
          </CardContent>
        </Card>
      </div>

      {/* Recent courses */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <CourseTable courses={recentCourses} />
        </CardContent>
      </Card>

      {/* New users */}
      <Card>
        <CardHeader>
          <CardTitle>New Users</CardTitle>
        </CardHeader>
        <CardContent>
          <UserTable users={recentUsers} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;