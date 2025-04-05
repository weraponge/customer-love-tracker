
import React, { useState } from 'react';
import { Feedback, FeedbackType } from '../types';
import FeedbackCard from './FeedbackCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThumbsUp, ThumbsDown, MessageSquare, Lightbulb, SlidersHorizontal, Search } from 'lucide-react';
import EmptyState from './EmptyState';

interface FeedbackListProps {
  feedbackItems: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<FeedbackType | 'all'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Filter feedback based on search term and type
  const filteredFeedback = feedbackItems.filter(feedback => {
    const matchesSearch = feedback.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          feedback.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || feedback.type === typeFilter;
    return matchesSearch && matchesType;
  });

  // Sort feedback based on date
  const sortedFeedback = [...filteredFeedback].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // Filter button component
  const FilterButton = ({ type, label, icon }: { type: FeedbackType | 'all', label: string, icon: React.ReactNode }) => (
    <Button
      variant={typeFilter === type ? "default" : "outline"}
      size="sm"
      onClick={() => setTypeFilter(type)}
      className="gap-1"
    >
      {icon}
      {label}
    </Button>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search feedback..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
          className="whitespace-nowrap gap-1.5"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Sort: {sortOrder === 'newest' ? 'Newest first' : 'Oldest first'}
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <FilterButton type="all" label="All" icon={<span className="h-4 w-4" />} />
        <FilterButton type="positive" label="Positive" icon={<ThumbsUp className="h-4 w-4" />} />
        <FilterButton type="negative" label="Negative" icon={<ThumbsDown className="h-4 w-4" />} />
        <FilterButton type="neutral" label="Neutral" icon={<MessageSquare className="h-4 w-4" />} />
        <FilterButton type="suggestion" label="Suggestion" icon={<Lightbulb className="h-4 w-4" />} />
      </div>

      {sortedFeedback.length === 0 ? (
        <EmptyState searchTerm={searchTerm} typeFilter={typeFilter} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedFeedback.map(feedback => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
