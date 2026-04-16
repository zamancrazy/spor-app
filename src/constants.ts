import { WorkoutProgram } from './types';

export const WORKOUT_PROGRAMS: WorkoutProgram[] = [
  {
    id: '1',
    title: 'Üst Vücut Güç',
    category: 'Güç',
    duration: '45 dk',
    calories: 450,
    difficulty: 'Orta',
    emoji: '💪',
    color: 'from-red-900/20 to-black',
    exercises: [
      { id: 'e1', name: 'Bench Press', sets: 4, reps: '10', rest: '60s', emoji: '🏋️', completed: false },
      { id: 'e2', name: 'Dumbbell Curl', sets: 3, reps: '12', rest: '45s', emoji: '💪', completed: false },
      { id: 'e3', name: 'Shoulder Press', sets: 4, reps: '8', rest: '60s', emoji: '🔝', completed: false },
    ]
  },
  {
    id: '2',
    title: 'Bacak & Kalça',
    category: 'Güç',
    duration: '50 dk',
    calories: 550,
    difficulty: 'İleri',
    emoji: '🦵',
    color: 'from-green-900/20 to-black',
    exercises: [
      { id: 'e4', name: 'Squat', sets: 4, reps: '12', rest: '90s', emoji: '🏋️', completed: false },
      { id: 'e5', name: 'Leg Press', sets: 3, reps: '15', rest: '60s', emoji: '🦵', completed: false },
    ]
  },
  {
    id: '3',
    title: 'HIIT Kardiyo',
    category: 'Kardiyo',
    duration: '25 dk',
    calories: 300,
    difficulty: 'Başlangıç',
    emoji: '🏃',
    color: 'from-blue-900/20 to-black',
    exercises: [
      { id: 'e6', name: 'Burpees', sets: 3, reps: '15', rest: '30s', emoji: '💥', completed: false },
      { id: 'e7', name: 'Mountain Climbers', sets: 3, reps: '30s', rest: '30s', emoji: '🏔️', completed: false },
    ]
  }
];
