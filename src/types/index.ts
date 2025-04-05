
export type FeedbackType = 'positive' | 'neutral' | 'negative' | 'suggestion';

export interface Feedback {
  id: string;
  customerName: string;
  type: FeedbackType;
  description: string;
  date: string;
}
