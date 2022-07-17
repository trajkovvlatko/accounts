import {createClient} from '@supabase/supabase-js';
import {ENV} from '../shared/types';
import config from './config';

const supabaseUrl = config.SUPABASE_URL;
const supabaseAnonKey = config.SUPABASE_ANON_KEY;

const supabaseClient = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const tableExt = config.ENV === ENV.dev ? '_dev' : '';

export const tables = {
  accounts: `accounts${tableExt}`,
  transactions: `transactions${tableExt}`,
  users: `users${tableExt}`,
};

export default supabaseClient;
