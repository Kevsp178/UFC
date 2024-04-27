import { createClient } from '@supabase/supabase-js'

const URL = 'https://vvtfbbeuvdrphkeageac.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2dGZiYmV1dmRycGhrZWFnZWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMzA2MDQsImV4cCI6MjAyODcwNjYwNH0.IQaH-nEhef9l25BfDoN7GuASS7vuYnnXvfGPw2NhvFE';

export const supabase = createClient(URL, API_KEY);
