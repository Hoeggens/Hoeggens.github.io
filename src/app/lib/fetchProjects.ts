import { createSupabaseServerClient } from './SupabaseServer';

export async function withdrawProjectData(language: string) {
    const supabase = createSupabaseServerClient();
    const tableName = language === process.env.NEXT_PUBLIC_SWEDISH ? process.env.swedishProjects : process.env.englishProjects;

    const { data, error } = await supabase
        .from(tableName)
        .select('*');

    if (error) {
        console.error('Supabase fetch error:', error);
        throw error;
    }

    if (!data || data.length === 0) {
        console.warn('No data returned from Supabase tab:', tableName);
        return null;
    }

    return data;
}
