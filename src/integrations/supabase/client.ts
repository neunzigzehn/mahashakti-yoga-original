// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hgwvpzuwqpsdmnvpidhx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhnd3ZwenV3cXBzZG1udnBpZGh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODg2ODIsImV4cCI6MjA2MDQ2NDY4Mn0._OK4R7uD2wxuwqITRhBAv2GpqttGK1meebCd1dENsLE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);