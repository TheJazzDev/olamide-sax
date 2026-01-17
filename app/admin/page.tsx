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
      <div className="mt-8">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-[#1a1a2e] text-white rounded-xl hover:bg-[#16213e] transition-colors mb-4"
        >
          <span className="font-medium">View Live Website</span>
          <ExternalLink className="w-5 h-5" />
        </a>

        {/* Social Media Links */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Social Media</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="https://www.tiktok.com/@lammywondermusic?_r=1&_t=ZS-937JbAE0FA8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="font-medium text-sm">TikTok</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
            <a
              href="https://www.instagram.com/lammy_wonder?igsh=MTVwMHRoNWpmZHBycQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-medium text-sm">Instagram</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
            <a
              href="https://www.facebook.com/share/19kyBuitHZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-medium text-sm">Facebook</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
            <a
              href="https://youtube.com/@olamidesax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="font-medium text-sm">YouTube</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
