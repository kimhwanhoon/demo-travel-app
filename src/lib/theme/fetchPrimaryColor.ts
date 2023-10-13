import 'server-only';
import { cookies } from 'next/headers';

import type { Database } from '@/types/public.db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PrimaryColor } from '@/types/types';

export const fetchPrimaryColor = async () => {
  try {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data, error } = await supabase
      .from('theme_primary_color')
      .select('primary_color')
      .single();
    if (error) return { primaryColor: 'blue' };
    return { primaryColor: data.primary_color };
  } catch (error) {
    return { primaryColor: 'blue' };
  }
};

const getPrimaryColor = async (): Promise<Partial<PrimaryColor>> => {
  const { primaryColor } = await fetchPrimaryColor();
  switch (primaryColor) {
    default: {
      return 'BLUE_GROUP';
    }
    case 'blue': {
      return 'BLUE_GROUP';
    }
    case 'red': {
      return 'RED_GROUP';
    }
    case 'orange': {
      return 'ORANGE_GROUP';
    }
    case 'gray': {
      return 'GRAY_GROUP';
    }
  }
};

export default getPrimaryColor;
