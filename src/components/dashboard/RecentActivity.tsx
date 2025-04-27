import React from 'react';

interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="flow-root h-80 overflow-auto">
      <ul className="-mb-8">
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {activityIdx !== activities.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center ring-8 ring-white">
                    <span className="text-primary-700 font-medium text-sm">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">
                        {activity.user}
                      </span>{' '}
                      <span className="text-gray-500">
                        {activity.action}
                      </span>{' '}
                      <span className="font-medium text-gray-900">
                        {activity.target}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;