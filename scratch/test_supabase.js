import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pqrnyketwfxtoachukkv.supabase.co';
const supabaseKey = 'sb_publishable_xBUUmODpo_ompZFh7_VNCw_irP8y70W';

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('Testing barbers table...');
  const { data: barbers, error: errBarbers } = await supabase.from('barbers').select('*');
  console.log('barbers error:', errBarbers);

  console.log('Testing services table...');
  const { data: services, error: errServices } = await supabase.from('services').select('*');
  console.log('services error:', errServices);

  console.log('Testing appointments table...');
  const { data: appointments, error: errApts } = await supabase.from('appointments').select('*');
  console.log('appointments error:', errApts);
}

test();
