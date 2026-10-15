import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://whmpsprquheokrffswav.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobXBzcHJxdWhlb2tyZmZzd2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxMDAxMTcsImV4cCI6MjEwNzY3NjExN30.qS1glaY1Hn_p5xsEbEk_-FsHsJxdxGWNyal0oUtANzs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);