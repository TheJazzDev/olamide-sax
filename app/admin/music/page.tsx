'use client';

import { useState } from 'react';
import { Music, Plus, Trash2, ExternalLink, Save, Disc } from 'lucide-react';

interface MusicItem {
  id: string;
  title: string;
  platform: string;
  url: string;
  releaseYear: string;
}

const initialMusic: MusicItem[] = [
  {
    id: '1',
    title: 'Gospel Medley',
    platform: 'Audiomack',
    url: '#',
    releaseYear: '2026',
  },
  {
    id: '2',
    title: 'Vibes Groove Mixtape Vol. 1',
    platform: 'Audiomack',
    url: '#',
    releaseYear: '2024',
  },
  {
    id: '3',
    title: 'Gbedu Vibes',
    platform: 'YouTube',
    url: 'https://youtube.com/@olamidesax',
    releaseYear: '2025',
  },
];

export default function AdminMusicPage() {
  const [music, setMusic] = useState<MusicItem[]>(initialMusic);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    platform: 'Audiomack',
    url: '',
    releaseYear: new Date().getFullYear().toString(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setMusic(music.map(m =>
        m.id === editingId ? { ...m, ...formData } : m
      ));
    } else {
      setMusic([...music, { ...formData, id: Date.now().toString() }]);
    }
    resetForm();
  };

  const handleEdit = (item: MusicItem) => {
    setFormData({
      title: item.title,
      platform: item.platform,
      url: item.url,
      releaseYear: item.releaseYear,
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this music release?')) {
      setMusic(music.filter(m => m.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      platform: 'Audiomack',
      url: '',
      releaseYear: new Date().getFullYear().toString(),
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Music</h1>
          <p className="text-gray-600 mt-1">Manage music releases and streaming links</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8d48b] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Release
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {editingId ? 'Edit Release' : 'Add New Release'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none"
                  placeholder="Release title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none bg-white"
                >
                  <option value="Audiomack">Audiomack</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Spotify">Spotify</option>
                  <option value="Apple Music">Apple Music</option>
                  <option value="SoundCloud">SoundCloud</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Streaming URL</label>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Release Year</label>
                <input
                  type="text"
                  value={formData.releaseYear}
                  onChange={(e) => setFormData({ ...formData, releaseYear: e.target.value })}
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
                  {editingId ? 'Update' : 'Add Release'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Music List */}
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">{music.length} Releases</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {music.map((item) => (
            <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#1a1a2e] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Disc className="w-8 h-8 text-[#c9a227]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-[#c9a227] font-medium">{item.platform}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{item.releaseYear}</span>
                  </div>
                  {item.url && item.url !== '#' && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#c9a227] mt-1"
                    >
                      {item.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
}
