export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
  avatar?: string;
  createdAt: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  status: 'draft' | 'published' | 'archived';
  students: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalUsers: number;
  totalCourses: number;
  activeStudents: number;
  completionRate: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}