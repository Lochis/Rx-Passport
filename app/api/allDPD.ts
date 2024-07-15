import { createClient } from '@supabase/supabase-js';
import { Database, Tables, Enums, Json } from '../../supabase';

export async function allDPD(){
    const supabase = createClient<Database>(
        process.env.EXPO_PUBLIC_SUPABASE_URL!,//process.env.SUPABASE_URL!,
        process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,//process.env.SUPABASE_ANON_KEY!
    );

    interface DrugItem {
        active_ingredient: Json;
        created_at: string;
        drug_product: Json;
        id: number;
        route_admin: Json;
      }

    let drug_products, active_ingredient, route_admin;

    const { data, error } = await supabase
            .from('CanadaDPD')
            .select();

    const drug_items: DrugItem[] = data[0];
    
    return drug_items;

}