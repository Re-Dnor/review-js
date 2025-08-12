import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iuhfyopwccdweyszmjgq.supabase.co"; // твой URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1aGZ5b3B3Y2Nkd2V5c3ptamdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5ODMyNzIsImV4cCI6MjA3MDU1OTI3Mn0.nSApBTH1gWsXgSLQPTf5rtvne8HW_gult_BtR0Ytnqg"; // возьми из Legacy API Keys → anon public
export const supabase = createClient(supabaseUrl, supabaseKey);
