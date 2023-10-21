export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  theme: {
    Tables: {
      primary_color: {
        Row: {
          id: number;
          primary_color: string;
        };
        Insert: {
          id?: number;
          primary_color: string;
        };
        Update: {
          id?: number;
          primary_color?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
