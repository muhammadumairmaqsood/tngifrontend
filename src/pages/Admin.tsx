import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  MapPin, 
  Video, 
  Book, 
  Shield, 
  HelpCircle, 
  Plus, 
  Pencil, 
  Trash2, 
  Save, 
  X, 
  ExternalLink,
  Eye,
  EyeOff,
  GripVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  useAllSiteContent, 
  useUpdateSiteContent, 
  useCreateSiteContent, 
  useDeleteSiteContent,
  SiteContent 
} from '@/hooks/useSiteContent';

const categories = [
  { value: 'forms', label: 'Forms', icon: FileText },
  { value: 'maps', label: 'Maps', icon: MapPin },
  { value: 'videos', label: 'Videos', icon: Video },
  { value: 'publications', label: 'Publications', icon: Book },
  { value: 'policies', label: 'Policies', icon: Shield },
  { value: 'faqs', label: 'FAQs', icon: HelpCircle },
];

const iconOptions = [
  'FileText', 'MapPin', 'Video', 'Book', 'BookOpen', 'Shield', 'ShieldCheck',
  'HelpCircle', 'GraduationCap', 'School', 'UserPlus', 'Scale', 'PenTool'
];

const getCategoryIcon = (category: string) => {
  const cat = categories.find(c => c.value === category);
  return cat?.icon || FileText;
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    forms: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    maps: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    videos: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    publications: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    policies: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
    faqs: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
  };
  return colors[category] || 'bg-muted text-muted-foreground';
};

interface EditFormData {
  slug: string;
  title: string;
  category: string;
  embed_url: string;
  original_url: string;
  description: string;
  icon: string;
  is_active: boolean;
  display_order: number;
}

const emptyFormData: EditFormData = {
  slug: '',
  title: '',
  category: 'publications',
  embed_url: '',
  original_url: '',
  description: '',
  icon: 'FileText',
  is_active: true,
  display_order: 0,
};

const Admin = () => {
  const { data: content, isLoading, error } = useAllSiteContent();
  const updateMutation = useUpdateSiteContent();
  const createMutation = useCreateSiteContent();
  const deleteMutation = useDeleteSiteContent();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<SiteContent | null>(null);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [formData, setFormData] = useState<EditFormData>(emptyFormData);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const filteredContent = selectedCategory 
    ? content?.filter(item => item.category === selectedCategory)
    : content;

  const handleEdit = (item: SiteContent) => {
    setEditingItem(item);
    setIsCreateMode(false);
    setFormData({
      slug: item.slug,
      title: item.title,
      category: item.category,
      embed_url: item.embed_url || '',
      original_url: item.original_url || '',
      description: item.description || '',
      icon: item.icon || 'FileText',
      is_active: item.is_active,
      display_order: item.display_order,
    });
  };

  const handleCreate = () => {
    setEditingItem(null);
    setIsCreateMode(true);
    setFormData({
      ...emptyFormData,
      display_order: (content?.length || 0) + 1,
    });
  };

  const handleSave = async () => {
    try {
      if (isCreateMode) {
        await createMutation.mutateAsync({
          slug: formData.slug,
          title: formData.title,
          category: formData.category,
          embed_url: formData.embed_url || null,
          original_url: formData.original_url || null,
          description: formData.description || null,
          icon: formData.icon || null,
          is_active: formData.is_active,
          display_order: formData.display_order,
        });
        toast.success('Content created successfully');
      } else if (editingItem) {
        await updateMutation.mutateAsync({
          id: editingItem.id,
          updates: {
            slug: formData.slug,
            title: formData.title,
            category: formData.category,
            embed_url: formData.embed_url || null,
            original_url: formData.original_url || null,
            description: formData.description || null,
            icon: formData.icon || null,
            is_active: formData.is_active,
            display_order: formData.display_order,
          },
        });
        toast.success('Content updated successfully');
      }
      setEditingItem(null);
      setIsCreateMode(false);
    } catch (err) {
      toast.error('Failed to save content');
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Content deleted successfully');
      setDeleteConfirmId(null);
    } catch (err) {
      toast.error('Failed to delete content');
      console.error(err);
    }
  };

  const handleToggleActive = async (item: SiteContent) => {
    try {
      await updateMutation.mutateAsync({
        id: item.id,
        updates: { is_active: !item.is_active },
      });
      toast.success(`Content ${item.is_active ? 'disabled' : 'enabled'}`);
    } catch (err) {
      toast.error('Failed to update status');
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-destructive">Error loading content</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Content Manager</h1>
              <p className="text-muted-foreground">
                Manage embedded forms, documents, and links
              </p>
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                Supabase is currently disabled. Content is loaded from a static configuration and
                changes made here will not be saved permanently.
              </p>
            </div>
            <Button onClick={handleCreate} className="gap-2" disabled>
              <Plus className="w-4 h-4" />
              Add Content
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All ({content?.length || 0})
          </Button>
          {categories.map(cat => {
            const Icon = cat.icon;
            const count = content?.filter(item => item.category === cat.value).length || 0;
            return (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.value)}
                className="gap-2"
              >
                <Icon className="w-4 h-4" />
                {cat.label} ({count})
              </Button>
            );
          })}
        </div>

        {/* Content Table */}
        <div className="border rounded-lg overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-32">Category</TableHead>
                <TableHead className="w-24">Status</TableHead>
                <TableHead className="w-40">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {filteredContent?.map((item, index) => {
                  const CategoryIcon = getCategoryIcon(item.category);
                  return (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group"
                    >
                      <TableCell className="text-muted-foreground">
                        <GripVertical className="w-4 h-4 opacity-50" />
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-sm text-muted-foreground">{item.slug}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getCategoryColor(item.category)}>
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {item.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={item.is_active ? 'default' : 'secondary'}>
                          {item.is_active ? 'Active' : 'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setPreviewUrl(item.embed_url)}
                            disabled={!item.embed_url}
                            title="Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleToggleActive(item)}
                            title={item.is_active ? 'Disable' : 'Enable'}
                          >
                            {item.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(item)}
                            title="Edit"
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDeleteConfirmId(item.id)}
                            className="text-destructive hover:text-destructive"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          {item.original_url && (
                            <Button
                              variant="ghost"
                              size="icon"
                              asChild
                              title="Open original"
                            >
                              <a href={item.original_url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      </main>

      {/* Edit/Create Dialog */}
      <Dialog open={editingItem !== null || isCreateMode} onOpenChange={() => { setEditingItem(null); setIsCreateMode(false); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{isCreateMode ? 'Add New Content' : 'Edit Content'}</DialogTitle>
            <DialogDescription>
              {isCreateMode ? 'Add a new embedded form, document, or link.' : 'Update the content details.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Slug (unique identifier)</label>
                <Input
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="e.g., school-prospectus"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Display title"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Embed URL</label>
              <Input
                value={formData.embed_url}
                onChange={(e) => setFormData({ ...formData, embed_url: e.target.value })}
                placeholder="https://..."
              />
              <p className="text-xs text-muted-foreground">URL for iframe embedding (Google Docs viewer, Tally form, etc.)</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Original URL</label>
              <Input
                value={formData.original_url}
                onChange={(e) => setFormData({ ...formData, original_url: e.target.value })}
                placeholder="https://..."
              />
              <p className="text-xs text-muted-foreground">Direct link to the original document/resource</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Icon</label>
                <Select
                  value={formData.icon}
                  onValueChange={(value) => setFormData({ ...formData, icon: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {iconOptions.map(icon => (
                      <SelectItem key={icon} value={icon}>
                        {icon}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Display Order</label>
                <Input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select
                  value={formData.is_active ? 'active' : 'inactive'}
                  onValueChange={(value) => setFormData({ ...formData, is_active: value === 'active' })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => { setEditingItem(null); setIsCreateMode(false); }}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={updateMutation.isPending || createMutation.isPending}>
              <Save className="w-4 h-4 mr-2" />
              {isCreateMode ? 'Create' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmId !== null} onOpenChange={() => setDeleteConfirmId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Content</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this content? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
              disabled={deleteMutation.isPending}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={previewUrl !== null} onOpenChange={() => setPreviewUrl(null)}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>
          <div className="flex-1 h-full">
            {previewUrl && (
              <iframe
                src={previewUrl}
                className="w-full h-[calc(80vh-100px)] border-none rounded"
                title="Content Preview"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
