
import React from 'react';
import { Feedback } from '../types';
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  HelpCircle, 
  Lightbulb 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeedbackCardProps {
  feedback: Feedback;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  const getTypeIcon = () => {
    switch (feedback.type) {
      case 'positive':
        return <ThumbsUp className="h-5 w-5 text-emerald-500" />;
      case 'negative':
        return <ThumbsDown className="h-5 w-5 text-rose-500" />;
      case 'neutral':
        return <MessageSquare className="h-5 w-5 text-amber-500" />;
      case 'suggestion':
        return <Lightbulb className="h-5 w-5 text-blue-500" />;
      default:
        return <HelpCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeColor = () => {
    switch (feedback.type) {
      case 'positive':
        return 'bg-emerald-50 border-emerald-200';
      case 'negative':
        return 'bg-rose-50 border-rose-200';
      case 'neutral':
        return 'bg-amber-50 border-amber-200';
      case 'suggestion':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <Card className={cn("border shadow-sm transition-all hover:shadow-md", getTypeColor())}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{feedback.customerName}</h3>
          <span className="flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize">
            {getTypeIcon()}
            {feedback.type}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{feedback.description}</p>
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        {new Date(feedback.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
