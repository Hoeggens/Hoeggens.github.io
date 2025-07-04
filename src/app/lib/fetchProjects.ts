import { createSupabaseServerClient } from './SupabaseServer';

export async function withdrawProjectData(language: string) {
    const supabase = createSupabaseServerClient();
    const tableName = language === process.env.SWEDISH ? process.env.swedishProjects : process.env.englishProjects;

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

export async function getProject(language: string, slug: string) {
    const supabase = createSupabaseServerClient();
    const tableName = language === process.env.SWEDISH ? process.env.swedishProjects : process.env.englishProjects;

    const { data } = await supabase
        .from(tableName)
        .select('*')
        .eq('slug', slug)
        .single();

    return data;
}