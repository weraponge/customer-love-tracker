
import { Feedback } from '../types';

export const initialFeedback: Feedback[] = [
  {
    id: '1',
    customerName: 'John Smith',
    type: 'positive',
    description: 'The customer service was excellent. I was helped immediately and my problem was solved in minutes.',
    date: '2025-04-01'
  },
  {
    id: '2',
    customerName: 'Sarah Johnson',
    type: 'negative',
    description: 'The product was delivered late and the packaging was damaged. Very disappointed with the service.',
    date: '2025-04-02'
  },
  {
    id: '3',
    customerName: 'Michael Chen',
    type: 'suggestion',
    description: 'It would be great if you could add a dark mode option to your app. I prefer using dark mode at night.',
    date: '2025-04-03'
  },
  {
    id: '4',
    customerName: 'Emily Wilson',
    type: 'neutral',
    description: 'The product works as expected, but I think the user interface could be more intuitive.',
    date: '2025-04-04'
  },
  {
    id: '5',
    customerName: 'David Garcia',
    type: 'positive',
    description: 'The new feature you added saved me hours of work! This is exactly what I was looking for.',
    date: '2025-04-05'
  }
];
