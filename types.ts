export interface Note {
  id: string;
  content: string;
  createdAt: string;
  favorite: boolean;
  category: string;
  reminder?: string; // ISO string for reminder time
  todos: TodoItem[];
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface Habit {
  id: string;
  name: string;
  completedDates: string[]; // e.g., ['2025-07-26']
}

export interface MoodEntry {
  date: string; // YYYY-MM-DD
  mood: string;
  note?: string;
}