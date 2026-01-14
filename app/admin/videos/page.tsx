'use client';

import { useState } from 'react';
import { Video, Plus, Trash2, ExternalLink, Save, Youtube } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  url: string;
  platform: string;
  description: string;
}

const initialVideos: VideoItem[] = [
  {
    id: '1',
    title: 'Vibes Grooves Mixtape Vol. 1',
    url: 'https://youtube.com/@olamidesax',
    platform: 'youtube',
    description: 'A collection of soulful saxophone and vocal performances.',
  },
  {
    id: '2',
    title: 'Gbedu Vibes',
    url: 'https://youtube.com/@olamidesax',
    platform: 'youtube',
    description: 'African contemporary music performance.',
  },
  {
    id: '3',
    title: 'Live Performance - BME United Doncaster',
    url: 'https://youtube.com/@olamidesax',
    platform: 'youtube',
    description: 'Cultural celebration performance.',
  },
];

export default function AdminVideosPage() {
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    platform: 'youtube',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setVideos(videos.map(v =>
        v.id === editingId ? { ...v, ...formData } : v
      ));
    } else {
      setVideos([...videos, { ...formData, id: Date.now().toString() }]);
    }
    resetForm();
  };

  const handleEdit = (video: VideoItem) => {
    setFormData({
      title: video.title,
      url: video.url,
      platform: video.platform,
      description: video.description,
    });
    setEditingId(video.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({ title: '', url: '', platform: 'youtube', description: '' });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Videos</h1>
          <p className="text-gray-600 mt-1">Manage video content for the Media page</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8d48b] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Video
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {editingId ? 'Edit Video' : 'Add New Video'}
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
                  placeholder="Video title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none"
                  placeholder="https://youtube.com/watch?v=..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none bg-white"
                >
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                  <option value="audiomack">Audiomack</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none resize-none"
                  placeholder="Brief description of the video"
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
                  {editingId ? 'Update' : 'Add Video'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Videos List */}
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">{videos.length} Videos</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {videos.map((video) => (
            <div key={video.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{video.description}</p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#c9a227] hover:underline mt-2"
                  >
                    {video.url}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(video)}
                    className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
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

      {/* Info */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-sm">
          <strong>Tip:</strong> For YouTube videos, use the full URL format: https://youtube.com/watch?v=VIDEO_ID
        </p>
      </div>
    </div>
  );
}
