// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://frmneqnlobtpqpbfwgqm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZybW5lcW5sb2J0cHFwYmZ3Z3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4ODY0NTEsImV4cCI6MjA1OTQ2MjQ1MX0.RqyZuyHfdLGCLJORSzL0gEVB6lGxMWPL7Lh2x4MWSEc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);