import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xwmbmvmfyxfomalwylij.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3bWJtdm1meXhmb21hbHd5bGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzcwNjUsImV4cCI6MjA2MDgxMzA2NX0.aT9OGXXvpwfOyNb_GTIC5RlaioyOJ44Bdm7-mij8XCE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
