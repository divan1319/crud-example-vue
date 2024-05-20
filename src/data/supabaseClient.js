import {createClient} from "@supabase/supabase-js"

const supabaseUrl = 'https://eejxinkrcyrtbmoxjymx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlanhpbmtyY3lydGJtb3hqeW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMzI3OTQsImV4cCI6MjAzMTgwODc5NH0.mx-OBJiVVyctiTLbYAT96PD4gjfADUlasYzORiX6-qI';


export const supabase = createClient(supabaseUrl,supabaseKey)