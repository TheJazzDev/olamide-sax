'use client';

import { useState } from 'react';
import { Newspaper, Plus, Trash2, ExternalLink, Save } from 'lucide-react';

interface PressItem {
  id: string;
  title: string;
  source: string;
  url: string;
  excerpt: string;
  date: string;
}

const initialPress: PressItem[] = [
  {
    id: '1',
    title: 'Nigerian Saxophonist Olamide Sax Performs at BME United Doncaster',
    source: 'Community Publication',
    url: '#',
    excerpt: 'Olamide Sax delivered a memorable performance at the BME United Doncaster event, showcasing the rich blend of African contemporary and gospel music.',
    date: '2024',
  },
];

export default function AdminPressPage() {
  const [press, setPress] = useState<PressItem[]>(initialPress);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    source: '',
    url: '',
    excerpt: '',
    date: new Date().getFullYear().toString(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setPress(press.map(p =>
        p.id === editingId ? { ...p, ...formData } : p
      ));
    } else {
      setPress([...press, { ...formData, id: Date.now().toString() }]);
    }
    resetForm();
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

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this press item?')) {
      setPress(press.filter(p => p.id !== id));
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

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Press</h1>
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
            <h2 className="text-xl font-bold text-gray-900 mb-6">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none"
                  placeholder="e.g., Local Newspaper, BBC, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Article URL (optional)</label>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt / Summary</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none resize-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none"
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
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8d48b] transition-colors"
                >
                  <Save className="w-5 h-5" />
                  {editingId ? 'Update' : 'Add Press'}
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
