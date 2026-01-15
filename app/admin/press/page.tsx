'use client';

import { useState, useEffect } from 'react';
import { Newspaper, Plus, Trash2, ExternalLink, Save } from 'lucide-react';

interface PressItem {
  id: string;
  title: string;
  source: string;
  url: string;
  excerpt: string;
  date: string;
}

export default function AdminPressPage() {
  const [press, setPress] = useState<PressItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    source: '',
    url: '',
    excerpt: '',
    date: new Date().getFullYear().toString(),
  });

  useEffect(() => {
    fetchPress();
  }, []);

  const fetchPress = async () => {
    try {
      const response = await fetch('/api/press');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setPress(data);
    } catch (error) {
      console.error('Error fetching press:', error);
      alert('Failed to load press items');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        const response = await fetch(`/api/press/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to update');
        alert('Press item updated successfully!');
      } else {
        const response = await fetch('/api/press', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to create');
        alert('Press item created successfully!');
      }
      fetchPress();
      resetForm();
    } catch (error) {
      console.error('Error saving press:', error);
      alert('Failed to save press item');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item: PressItem) => {
    setFormData({
      title: item.title,
      source: item.source,
      url: item.url,
      excerpt: item.excerpt,
      date: item.date,
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this press item?')) return;

    try {
      const response = await fetch(`/api/press/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete');
      alert('Press item deleted successfully!');
      fetchPress();
    } catch (error) {
      console.error('Error deleting press:', error);
      alert('Failed to delete press item');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      source: '',
      url: '',
      excerpt: '',
      date: new Date().getFullYear().toString(),
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#c9a227] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading press...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-7 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Press</h1>
          <p className="text-gray-600 mt-1">Manage press coverage and publications</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8d48b] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Press
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              {editingId ? 'Edit Press Item' : 'Add New Press Item'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Headline / Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="Article headline"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publication / Source</label>
                <input
                  type="text"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="e.g., Local Newspaper, BBC, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Article URL (optional)</label>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt / Summary</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none resize-none text-gray-900 placeholder:text-gray-400"
                  placeholder="Brief summary of the article"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publication Date / Year</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="2024"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8d48b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-5 h-5" />
                  {saving ? 'Saving...' : (editingId ? 'Update' : 'Add Press')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Press List */}
      <div className="space-y-4">
        {press.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-[#c9a227]">{item.source}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                {item.excerpt && (
                  <p className="text-gray-600 text-sm mb-3">{item.excerpt}</p>
                )}
                {item.url && item.url !== '#' && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#c9a227] hover:underline"
                  >
                    Read Full Article
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {press.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center">
          <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">No Press Items Yet</h3>
          <p className="text-gray-600 text-sm mb-4">
            Add your first press coverage or publication feature.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8d48b] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Press Item
          </button>
        </div>
      )}
    </div>
  );
}
