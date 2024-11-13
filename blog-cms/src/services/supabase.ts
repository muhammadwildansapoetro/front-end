
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rsyztdrzvtlipdtyipir.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzeXp0ZHJ6dnRsaXBkdHlpcGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjU2NzcsImV4cCI6MjA0NzA0MTY3N30.FLQF2V5FH2NozPvbNYfAHlMfJT0F6uH5fnc0NriRFVc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase