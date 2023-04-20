import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqxxiptpiciogfztgctn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxeHhpcHRwaWNpb2dmenRnY3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4NjEyOTQsImV4cCI6MTk5NjQzNzI5NH0.ADGrplEjCP9Y2LPiOFfkZukZOJX-SIMR0Ddp0XWiPFw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase