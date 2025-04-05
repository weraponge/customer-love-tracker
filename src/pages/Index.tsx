
import React, { useState } from 'react';
import { Feedback } from '../types';
import { initialFeedback } from '../data/feedbackData';
import FeedbackList from '../components/FeedbackList';
import FeedbackForm from '../components/FeedbackForm';
import Header from '../components/Header';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const [feedbackItems, setFeedbackItems] = useState<Feedback[]>(initialFeedback);

  const handleAddFeedback = (newFeedback: Feedback) => {
    setFeedbackItems([newFeedback, ...feedbackItems]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster />
      <Header />
      
      <main className="container mx-auto py-6 px-4 md:px-6 flex-1">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Customer Feedback</h2>
            <FeedbackList feedbackItems={feedbackItems} />
          </div>
          
          <div className="md:sticky md:top-6 self-start">
            <FeedbackForm onAddFeedback={handleAddFeedback} />
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6 px-4 md:px-6">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Customer Love Tracker | Powered by Lovable
        </div>
      </footer>
    </div>
  );
};

export default Index;
