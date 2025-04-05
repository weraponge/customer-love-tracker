
import React, { useState } from 'react';
import { Feedback, FeedbackType } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface FeedbackFormProps {
  onAddFeedback: (feedback: Feedback) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onAddFeedback }) => {
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState('');
  const [type, setType] = useState<FeedbackType>('positive');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !description.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const newFeedback: Feedback = {
      id: uuidv4(),
      customerName: customerName.trim(),
      type,
      description: description.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    onAddFeedback(newFeedback);
    
    // Reset form
    setCustomerName('');
    setType('positive');
    setDescription('');
    
    toast({
      title: "Feedback added",
      description: "The feedback has been successfully recorded",
    });
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Add New Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="customerName">Customer Name</Label>
            <Input
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="type">Feedback Type</Label>
            <Select value={type} onValueChange={(value) => setType(value as FeedbackType)}>
              <SelectTrigger>
                <SelectValue placeholder="Select feedback type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="suggestion">Suggestion</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter feedback details"
              rows={4}
            />
          </div>
          
          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
