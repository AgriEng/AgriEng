export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      club_applications: {
        Row: {
          created_at: string
          event_idea: string | null
          id: string
          interested_in_specific_event: string | null
          joining_reason: string | null
          previous_experience: string | null
          self_introduction: string | null
          skills: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          event_idea?: string | null
          id?: string
          interested_in_specific_event?: string | null
          joining_reason?: string | null
          previous_experience?: string | null
          self_introduction?: string | null
          skills?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          event_idea?: string | null
          id?: string
          interested_in_specific_event?: string | null
          joining_reason?: string | null
          previous_experience?: string | null
          self_introduction?: string | null
          skills?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "club_applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: number
          is_read: boolean | null
          message_body: string
          phone: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: number
          is_read?: boolean | null
          message_body: string
          phone?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: number
          is_read?: boolean | null
          message_body?: string
          phone?: string | null
          title?: string | null
        }
        Relationships: []
      }
      event_registrations: {
        Row: {
          event_id: number | null
          id: number
          role: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          event_id?: number | null
          id?: number
          role?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          event_id?: number | null
          id?: number
          role?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_registrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_reports: {
        Row: {
          created_at: string
          event_id: number
          id: string
          notes: string | null
          uploaded_by: string
        }
        Insert: {
          created_at?: string
          event_id: number
          id?: string
          notes?: string | null
          uploaded_by: string
        }
        Update: {
          created_at?: string
          event_id?: number
          id?: string
          notes?: string | null
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_reports_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_reports_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          check_in_code: string | null
          created_at: string
          description: string | null
          end_time: string | null
          id: number
          image_url: string | null
          location: string | null
          start_time: string | null
          team_id: string | null
          title: string
        }
        Insert: {
          check_in_code?: string | null
          created_at?: string
          description?: string | null
          end_time?: string | null
          id?: number
          image_url?: string | null
          location?: string | null
          start_time?: string | null
          team_id?: string | null
          title: string
        }
        Update: {
          check_in_code?: string | null
          created_at?: string
          description?: string | null
          end_time?: string | null
          id?: number
          image_url?: string | null
          location?: string | null
          start_time?: string | null
          team_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      extra_hours_requests: {
        Row: {
          activity_title: string
          awarded_hours: number | null
          created_at: string | null
          id: string
          image_url: string | null
          notes: string | null
          reviewed_by: string | null
          status: string | null
          task_description: string
          task_type: string | null
          user_id: string
        }
        Insert: {
          activity_title: string
          awarded_hours?: number | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          notes?: string | null
          reviewed_by?: string | null
          status?: string | null
          task_description: string
          task_type?: string | null
          user_id: string
        }
        Update: {
          activity_title?: string
          awarded_hours?: number | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          notes?: string | null
          reviewed_by?: string | null
          status?: string | null
          task_description?: string
          task_type?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "extra_hours_requests_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "extra_hours_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery_images: {
        Row: {
          alt_text: string | null
          category: string | null
          created_at: string
          id: number
          image_url: string | null
        }
        Insert: {
          alt_text?: string | null
          category?: string | null
          created_at?: string
          id?: number
          image_url?: string | null
        }
        Update: {
          alt_text?: string | null
          category?: string | null
          created_at?: string
          id?: number
          image_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          club_role: Database["public"]["Enums"]["club_role"]
          college: string | null
          full_name: string | null
          id: string
          major: string | null
          phone_number: string | null
          student_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          club_role?: Database["public"]["Enums"]["club_role"]
          college?: string | null
          full_name?: string | null
          id: string
          major?: string | null
          phone_number?: string | null
          student_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          club_role?: Database["public"]["Enums"]["club_role"]
          college?: string | null
          full_name?: string | null
          id?: string
          major?: string | null
          phone_number?: string | null
          student_id?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          role: Database["public"]["Enums"]["team_role"]
          team_id: string
          user_id: string
        }
        Insert: {
          role?: Database["public"]["Enums"]["team_role"]
          team_id: string
          user_id: string
        }
        Update: {
          role?: Database["public"]["Enums"]["team_role"]
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_user_total_hours: {
        Args: { user_id_input: string }
        Returns: number
      }
      get_event_participants: {
        Args: { event_id_input: number }
        Returns: {
          role: string
          status: string
          profiles: Json
        }[]
      }
      get_event_registrations_count: {
        Args: { event_ids: number[] }
        Returns: {
          event_id: number
          count: number
        }[]
      }
      get_events_with_attendee_count: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          title: string
          description: string
          location: string
          start_time: string
          end_time: string
          image_url: string
          check_in_code: string
          team_id: string
          registered_attendees: number
        }[]
      }
      get_my_club_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_profiles_for_users: {
        Args: { user_ids: string[] }
        Returns: {
          id: string
          full_name: string
          avatar_url: string
        }[]
      }
      get_team_leader_dashboard: {
        Args: { leader_user_id: string }
        Returns: Json
      }
      get_user_profile_data: {
        Args: { p_user_id: string }
        Returns: Json
      }
      get_user_total_extra_hours: {
        Args: { user_id_input: string }
        Returns: number
      }
      is_leader_of_team: {
        Args: { p_team_id: string }
        Returns: boolean
      }
      is_my_team_member: {
        Args: { p_user_id: string }
        Returns: boolean
      }
      is_storage_object_owner: {
        Args: { object_owner_uuid: string }
        Returns: boolean
      }
    }
    Enums: {
      club_role: "club_leader" | "club_deputy" | "club_supervisor" | "member"
      team_role: "leader" | "member"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      club_role: ["club_leader", "club_deputy", "club_supervisor", "member"],
      team_role: ["leader", "member"],
    },
  },
} as const
