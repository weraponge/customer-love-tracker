
import React from 'react';
import { FeedbackType } from '../types';
import { Search, MessageSquare } from 'lucide-react';

interface EmptyStateProps {
  searchTerm?: string;
  typeFilter?: FeedbackType | 'all';
}

const EmptyState: React.FC<EmptyStateProps> = ({ searchTerm, typeFilter }) => {
  let message = 'No feedback found';
  let icon = <MessageSquare className="h-12 w-12 text-gray-300" />;
  
  if (searchTerm && searchTerm.length > 0) {
    message = `No feedback matching "${searchTerm}"`;
    icon = <Search className="h-12 w-12 text-gray-300" />;
  } else if (typeFilter && typeFilter !== 'all') {
    message = `No ${typeFilter} feedback found`;
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {icon}
      <h3 className="mt-4 text-lg font-medium text-gray-900">{message}</h3>
      <p className="mt-1 text-sm text-gray-500">
        Try adjusting your filters or add some new feedback
      </p>
    </div>
  );
};

export default EmptyState;
