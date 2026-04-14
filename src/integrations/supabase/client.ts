import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://izrfzvhjqgnthfzjgjhw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_PAgHAmElFJsp7jZlznsRhA_uc_eLsAb";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
