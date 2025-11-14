export interface BriefingFormData {
  companyName: string;
  industry: string;
  targetAudience: string;
  goals: string;
  budget: string;
  timeline: string;
  additionalInfo?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ProjectStatus {
  id: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  progress: number;
  currentStep: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
