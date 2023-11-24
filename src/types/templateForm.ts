export type FormValues = {
  templateTitle: string;
  templateSubscription?: string;
  questions?: {
    type: string;
    title: string;
    description?: string;
    option?: boolean;
    details?: string[];
    isRequired: boolean;
  }[];
};

export interface QuestionValues {
  id: string;
  order: number;
  type: string;
  name: string;
  title: string;
  description?: string;
  option?: boolean;
  details?: string[];
  isRequired: boolean;
}
