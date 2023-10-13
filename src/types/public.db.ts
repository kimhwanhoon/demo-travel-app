export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      inquiries: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          message: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: string;
          message: string;
          name: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          message?: string;
          name?: string;
        };
        Relationships: [];
      };
      price_per_pax_adult: {
        Row: {
          '1': number | null;
          '10': number | null;
          '2': number | null;
          '3': number | null;
          '4': number | null;
          '5': number | null;
          '6': number | null;
          '7': number | null;
          '8': number | null;
          '9': number | null;
          id: string;
        };
        Insert: {
          '1'?: number | null;
          '10'?: number | null;
          '2'?: number | null;
          '3'?: number | null;
          '4'?: number | null;
          '5'?: number | null;
          '6'?: number | null;
          '7'?: number | null;
          '8'?: number | null;
          '9'?: number | null;
          id: string;
        };
        Update: {
          '1'?: number | null;
          '10'?: number | null;
          '2'?: number | null;
          '3'?: number | null;
          '4'?: number | null;
          '5'?: number | null;
          '6'?: number | null;
          '7'?: number | null;
          '8'?: number | null;
          '9'?: number | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'price_per_pax_adult_id_fkey';
            columns: ['id'];
            referencedRelation: 'tour_info';
            referencedColumns: ['id'];
          }
        ];
      };
      price_per_pax_child: {
        Row: {
          '1': number | null;
          '10': number | null;
          '2': number | null;
          '3': number | null;
          '4': number | null;
          '5': number | null;
          '6': number | null;
          '7': number | null;
          '8': number | null;
          '9': number | null;
          id: string;
        };
        Insert: {
          '1'?: number | null;
          '10'?: number | null;
          '2'?: number | null;
          '3'?: number | null;
          '4'?: number | null;
          '5'?: number | null;
          '6'?: number | null;
          '7'?: number | null;
          '8'?: number | null;
          '9'?: number | null;
          id: string;
        };
        Update: {
          '1'?: number | null;
          '10'?: number | null;
          '2'?: number | null;
          '3'?: number | null;
          '4'?: number | null;
          '5'?: number | null;
          '6'?: number | null;
          '7'?: number | null;
          '8'?: number | null;
          '9'?: number | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'price_per_pax_child_id_fkey';
            columns: ['id'];
            referencedRelation: 'tour_info';
            referencedColumns: ['id'];
          }
        ];
      };
      recommended_tours: {
        Row: {
          detail: string;
          id: number;
          region: string;
          src: string;
          title: string;
        };
        Insert: {
          detail: string;
          id?: number;
          region: string;
          src: string;
          title: string;
        };
        Update: {
          detail?: string;
          id?: number;
          region?: string;
          src?: string;
          title?: string;
        };
        Relationships: [];
      };
      theme_primary_color: {
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
      top_destination: {
        Row: {
          desc: string;
          id: number;
          keyword: string;
          src: string;
          title: string;
        };
        Insert: {
          desc: string;
          id?: number;
          keyword: string;
          src: string;
          title: string;
        };
        Update: {
          desc?: string;
          id?: number;
          keyword?: string;
          src?: string;
          title?: string;
        };
        Relationships: [];
      };
      tour_info: {
        Row: {
          category1: string | null;
          category2: string | null;
          created_at: string | null;
          desc_long: string | null;
          desc_short: string | null;
          duration: string | null;
          exclusion: string | null;
          id: string;
          inclusion: string | null;
          itinerary: string | null;
          meeting_place: string | null;
          photo_tag: string[];
          photo_url: string[] | null;
          price_main: string | null;
          Specials_references: string | null;
          tags: string | null;
          title: string | null;
          travel_area: string | null;
          type: string | null;
          updated_at: string | null;
        };
        Insert: {
          category1?: string | null;
          category2?: string | null;
          created_at?: string | null;
          desc_long?: string | null;
          desc_short?: string | null;
          duration?: string | null;
          exclusion?: string | null;
          id?: string;
          inclusion?: string | null;
          itinerary?: string | null;
          meeting_place?: string | null;
          photo_tag?: string[];
          photo_url?: string[] | null;
          price_main?: string | null;
          Specials_references?: string | null;
          tags?: string | null;
          title?: string | null;
          travel_area?: string | null;
          type?: string | null;
          updated_at?: string | null;
        };
        Update: {
          category1?: string | null;
          category2?: string | null;
          created_at?: string | null;
          desc_long?: string | null;
          desc_short?: string | null;
          duration?: string | null;
          exclusion?: string | null;
          id?: string;
          inclusion?: string | null;
          itinerary?: string | null;
          meeting_place?: string | null;
          photo_tag?: string[];
          photo_url?: string[] | null;
          price_main?: string | null;
          Specials_references?: string | null;
          tags?: string | null;
          title?: string | null;
          travel_area?: string | null;
          type?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      tour_photo_url: {
        Row: {
          photo_tag: string;
          url: string[] | null;
        };
        Insert: {
          photo_tag: string;
          url?: string[] | null;
        };
        Update: {
          photo_tag?: string;
          url?: string[] | null;
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
