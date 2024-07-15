import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { Database, Tables, Enums } from '../../supabase';

export async function getDPD() {

    const supabase = createClient<Database>(
        process.env.EXPO_PUBLIC_SUPABASE_URL!,//process.env.SUPABASE_URL!,
        process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,//process.env.SUPABASE_ANON_KEY!
    );

    let drug_products, active_ingredient, route_admin;

    await axios.get('https://health-products.canada.ca/api/drug/drugproduct/?lang=en&type=json&status=1')
        .then(function (res) {
            drug_products = res.data;
        }).catch(function (error) {
            console.log(error);
        });

    console.log("made it after drug products");

    await axios.get('https://health-products.canada.ca/api/drug/activeingredient/?lang=en&type=json')
        .then(function (res) {
            active_ingredient = res.data;
        }).catch(function (error) {
            console.log(error);
        });

    console.log("made it after active ingredients");

    await axios.get('https://health-products.canada.ca/api/drug/route/?lang=en&type=json')
        .then(function (res) {
            route_admin = res.data;
        }).catch(function (error) {
            console.log(error);
        });

    console.log("made it after route admin");

    const populateCanadaDPD = async (drugs: any, route_admin: any, active_ingredient: any,) => {
        const { error } = await supabase
            .from('CanadaDPD')
            .insert({
                drug_product: drugs,
                route_admin: route_admin,
                active_ingredient: active_ingredient
            })

        console.error(error);
        //.from('drug_product')
        //.insert({id: 2049, class_name: "Human", din: '00326925', brand_name: "SINEQUAN", descriptor: "", number_of_ais: 1, ai_group_no: '0107703005', company_name: "AA PHARMA INC", last_update_date: "2024-02-06"})
        //.select();
    }

    populateCanadaDPD(drug_products, route_admin, active_ingredient);
}