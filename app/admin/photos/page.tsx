'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Image as ImageIcon, Plus, Trash2, Save, Upload } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  url: string;
  category: string;
  alt: string;
}

export default function AdminPhotosPage() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    category: 'Performance',
    alt: '',
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/photos');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
      alert('Failed to load photos');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        const response = await fetch(`/api/photos/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to update');
        alert('Photo updated successfully!');
      } else {
        const response = await fetch('/api/photos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to create');
        alert('Photo created successfully!');
      }
      fetchPhotos();
      resetForm();
    } catch (error) {
      console.error('Error saving photo:', error);
      alert('Failed to save photo');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (photo: PhotoItem) => {
    setFormData({
      title: photo.title,
      url: photo.url,
      category: photo.category,
      alt: photo.alt,
    });
    setEditingId(photo.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this photo?')) return;

    try {
      const response = await fetch(`/api/photos/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete');
      alert('Photo deleted successfully!');
      fetchPhotos();
    } catch (error) {
      console.error('Error deleting photo:', error);
      alert('Failed to delete photo');
    }
  };

  const resetForm = () => {
    setFormData({ title: '', url: '', category: 'Performance', alt: '' });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#c9a227] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading photos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-7 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Photos</h1>
          <p className="text-gray-600 mt-1">Manage photos for the Media gallery</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#e8d48b] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Photo
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              {editingId ? 'Edit Photo' : 'Add New Photo'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="Photo title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="/images/photo-name.jpg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload images to /public/images/ folder and use path like /images/filename.jpg
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none bg-white text-gray-900"
                >
                  <option value="Performance">Performance</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Event">Event</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
                <input
                  type="text"
                  value={formData.alt}
                  onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="Description for accessibility"
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
                  {saving ? 'Saving...' : (editingId ? 'Update' : 'Add Photo')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Photos Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
              {/* Uncomment when images are available */}
              {/* <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="p-4">
              <span className="text-xs font-medium text-[#c9a227] uppercase tracking-wide">
                {photo.category}
              </span>
              <h3 className="font-semibold text-gray-900 mt-1">{photo.title}</h3>
              <p className="text-sm text-gray-500 mt-1 truncate">{photo.url}</p>
              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => handleEdit(photo)}
                  className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Instructions */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <div className="text-center">
          <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-900 mb-2">Upload Images</h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            To add new images, upload them to the <code className="bg-gray-100 px-1 py-0.5 rounded">/public/images/</code> folder
            in your project, then add them here using the path format: <code className="bg-gray-100 px-1 py-0.5 rounded">/images/filename.jpg</code>
          </p>
        </div>
      </div>
    </div>
  );
}
