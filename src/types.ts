export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  rest: string;
  emoji: string;
  completed: boolean;
}

export interface WorkoutProgram {
  id: string;
  title: string;
  category: 'Güç' | 'Kardiyo' | 'Esneklik' | 'Core';
  duration: string;
  calories: number;
  difficulty: 'Başlangıç' | 'Orta' | 'İleri';
  exercises: Exercise[];
  emoji: string;
  color: string;
}

export interface UserStats {
  streak: number;
  totalWorkouts: number;
  totalCalories: number;
  waterDrank: number;
  waterGoal: number;
}
