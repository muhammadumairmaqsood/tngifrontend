import { useQuery, useMutation } from '@tanstack/react-query';
import { STATIC_SITE_CONTENT } from '@/config/siteContent';

export interface SiteContent {
  id: string;
  slug: string;
  title: string;
  category: string;
  embed_url: string | null;
  original_url: string | null;
  description: string | null;
  icon: string | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

const ALL_CONTENT: SiteContent[] = STATIC_SITE_CONTENT as unknown as SiteContent[];

export const useSiteContent = (category?: string) => {
  return useQuery({
    queryKey: ['site-content', category],
    queryFn: async () => {
      const filtered = ALL_CONTENT.filter(
        (item) => item.is_active && (!category || item.category === category)
      );

      return filtered;
    },
  });
};

export const useSiteContentBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['site-content', 'slug', slug],
    queryFn: async () => {
      const found =
        ALL_CONTENT.find((item) => item.slug === slug && item.is_active) || null;

      return found;
    },
    enabled: !!slug,
  });
};

export const useAllSiteContent = () => {
  return useQuery({
    queryKey: ['site-content', 'all'],
    queryFn: async () => {
      const sorted = [...ALL_CONTENT].sort((a, b) => {
        if (a.category === b.category) {
          return a.display_order - b.display_order;
        }
        return a.category.localeCompare(b.category);
      });

      return sorted;
    },
  });
};

export const useUpdateSiteContent = () => {
  return useMutation({
    mutationFn: async () => {
      throw new Error('Supabase is disabled; content editing is not available.');
    },
  });
};

export const useCreateSiteContent = () => {
  return useMutation({
    mutationFn: async () => {
      throw new Error('Supabase is disabled; content editing is not available.');
    },
  });
};

export const useDeleteSiteContent = () => {
  return useMutation({
    mutationFn: async () => {
      throw new Error('Supabase is disabled; content editing is not available.');
    },
  });
};
