import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://maesqvrsvxkpmxeizuxg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZXNxdnJzdnhrcG14ZWl6dXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMDgwMzYsImV4cCI6MjAzNDU4NDAzNn0.r7uSC3g-jOMr5TqMK6Cf3K-R8Xhw4Oll6KgfkfOghwY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
