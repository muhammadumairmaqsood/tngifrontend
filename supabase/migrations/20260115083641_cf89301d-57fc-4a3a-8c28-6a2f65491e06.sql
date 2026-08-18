-- Create table for storing site content links (forms, documents, embeds)
CREATE TABLE public.site_content (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    embed_url TEXT,
    original_url TEXT,
    description TEXT,
    icon TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Disable RLS as requested (will add later)
ALTER TABLE public.site_content DISABLE ROW LEVEL SECURITY;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_site_content_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_site_content_updated_at
BEFORE UPDATE ON public.site_content
FOR EACH ROW
EXECUTE FUNCTION public.update_site_content_updated_at();

-- Insert initial data from existing hardcoded links
INSERT INTO public.site_content (slug, title, category, embed_url, original_url, description, icon, display_order) VALUES
-- Forms
('admission-form', 'Admission Inquiry Form', 'forms', 'https://tally.so/embed/w7vK4V?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1', 'https://tally.so/r/w7vK4V', 'Online admission inquiry form for prospective families', 'FileText', 1),

-- Maps
('google-map', 'School Location Map', 'maps', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.9051415557983!2d74.23279600000001!3d31.389179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901d1b3013b8f%3A0xc6ec9f0ecc2409a!2sThink%20and%20Grow%20Knowledge%20Park!5e0!3m2!1sen!2s!4v1768449421035!5m2!1sen!2s', 'https://maps.google.com/?q=Think+and+Grow+Knowledge+Park', 'School location on Google Maps', 'MapPin', 1),

-- Videos
('pyp-intro-video', 'PYP Introduction Video', 'videos', 'https://www.youtube.com/embed/L4bDYhtI1VI', 'https://www.youtube.com/watch?v=L4bDYhtI1VI', 'Primary Years Programme introduction video', 'Video', 1),

-- Publications
('school-prospectus', 'School Prospectus 2023', 'publications', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/10/TNG-Prospectus-2023.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/10/TNG-Prospectus-2023.pdf', 'Complete school prospectus with programs and facilities', 'Book', 1),
('parent-handbook', 'Parent Handbook', 'publications', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/08/IB-PYP-Hand-Book-for-TNG-Parents.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/08/IB-PYP-Hand-Book-for-TNG-Parents.pdf', 'Essential guide for parents about school procedures', 'BookOpen', 2),
('programme-of-inquiry', 'Programme of Inquiry 2025-26', 'publications', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2025/09/TNG-POI-2025-26-1.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2025/09/TNG-POI-2025-26-1.pdf', 'Current year Programme of Inquiry document', 'FileText', 3),
('ib-pyp-brochure', 'IB PYP Brochure', 'publications', 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/pyp-programme-brochure-en.pdf', 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/pyp-programme-brochure-en.pdf', 'Official IB PYP programme brochure', 'GraduationCap', 4),

-- Policies
('policy-admission', 'Admission Policy', 'policies', 'https://drive.google.com/file/d/1rPHHbeeOueCO3tIWDqpwa63GWv2-SvZV/preview', 'https://drive.google.com/file/d/1rPHHbeeOueCO3tIWDqpwa63GWv2-SvZV/view', 'Guidelines and procedures for prospective students and parents', 'UserPlus', 1),
('policy-child-protection', 'Child Protection Policy', 'policies', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/Child-Protection-Policy-TNG.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/Child-Protection-Policy-TNG.pdf', 'Our commitment to ensuring a safe and nurturing environment', 'ShieldCheck', 2),
('policy-assessment', 'Assessment Policy', 'policies', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-Assessment-policy.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-Assessment-policy.pdf', 'How we measure, document, and report student learning', 'Scale', 3),
('policy-language-arts', 'Language Arts Policy', 'policies', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-Language-Arts-Policy.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-Language-Arts-Policy.pdf', 'Our approach to language learning as a tool for inquiry', 'BookOpen', 4),
('policy-academic-integrity', 'Academic Integrity Policy', 'policies', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-Academic-Integrity-Policy.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-Academic-Integrity-Policy.pdf', 'Principles of honesty and responsibility in academics', 'PenTool', 5),

-- FAQs
('faq-pyp', 'PYP FAQs', 'faqs', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-PYP-FAQs.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-PYP-FAQs.pdf', 'FAQs about the Primary Years Programme (Ages 4.5-11)', 'GraduationCap', 1),
('faq-myp', 'MYP FAQs', 'faqs', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-MYP-FAQs.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-MYP-FAQs.pdf', 'FAQs about the Middle Years Programme (Ages 11-16)', 'School', 2),
('faq-dp', 'DP FAQs', 'faqs', 'https://docs.google.com/viewerng/viewer?url=https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-DP-FAQs.pdf', 'https://thinkandgrow.edu.pk/wp-content/uploads/2023/09/TNG-DP-FAQs.pdf', 'FAQs about the Diploma Programme (Ages 16-19)', 'GraduationCap', 3);