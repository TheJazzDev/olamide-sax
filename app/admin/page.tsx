'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Video, Image, Music, Newspaper, Plus, ExternalLink } from 'lucide-react';

interface Stats {
  videos: number;
  photos: number;
  music: number;
  press: number;
}

const quickActions = [
  { label: 'Add Video', href: '/admin/videos', icon: Video },
  { label: 'Add Photo', href: '/admin/photos', icon: Image },
  { label: 'Add Music', href: '/admin/music', icon: Music },
  { label: 'Add Press', href: '/admin/press', icon: Newspaper },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ videos: 0, photos: 0, music: 0, press: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [videosRes, photosRes, musicRes, pressRes] = await Promise.all([
        fetch('/api/videos'),
        fetch('/api/photos'),
        fetch('/api/music'),
        fetch('/api/press'),
      ]);

      const videos = await videosRes.json();
      const photos = await photosRes.json();
      const music = await musicRes.json();
      const press = await pressRes.json();

      setStats({
        videos: videos.length,
        photos: photos.length,
        music: music.length,
        press: press.length,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { label: 'Videos', count: stats.videos, icon: Video, href: '/admin/videos', color: 'bg-blue-500' },
    { label: 'Photos', count: stats.photos, icon: Image, href: '/admin/photos', color: 'bg-green-500' },
    { label: 'Music Releases', count: stats.music, icon: Music, href: '/admin/music', color: 'bg-purple-500' },
    { label: 'Press Items', count: stats.press, icon: Newspaper, href: '/admin/press', color: 'bg-orange-500' },
  ];
  return (
    <div className="p-4 sm:p-6 md:p-7 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to the Olamide Sax admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {loading ? (
          <>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-12"></div>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                </div>
              </div>
            ))}
          </>
        ) : (
          statCards.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">{stat.count}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 mb-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#c9a227]/10 transition-colors"
            >
              <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-[#1a1a2e]" />
              </div>
              <span className="font-medium text-gray-700">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">How to Use</h2>
        <div className="prose prose-sm max-w-none text-gray-600">
          <p className="mb-4">
            This admin panel allows you to manage dynamic content on your portfolio website.
            Here&apos;s what you can do:
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Videos:</strong> Add YouTube video links that will appear in the Media page Videos tab
            </li>
            <li>
              <strong>Photos:</strong> Upload and manage photos that appear in the Media page Photos tab
            </li>
            <li>
              <strong>Music:</strong> Add streaming links for your music releases (appears in Media page Audio tab)
            </li>
            <li>
              <strong>Press:</strong> Add newspaper and publication features on the Press page
            </li>
          </ul>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Database connection is required for full functionality.
              Make sure your NeonDB is properly configured and accessible.
            </p>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-[#1a1a2e] text-white rounded-xl hover:bg-[#16213e] transition-colors"
        >
          <span className="font-medium">View Live Website</span>
          <ExternalLink className="w-5 h-5" />
        </a>
        <a
          href="https://youtube.com/@olamidesax"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
        >
          <span className="font-medium">YouTube Channel</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
