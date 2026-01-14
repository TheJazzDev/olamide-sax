'use client';

import Link from 'next/link';
import { Video, Image, Music, Newspaper, Plus, ExternalLink } from 'lucide-react';

const stats = [
  { label: 'Videos', count: 3, icon: Video, href: '/admin/videos', color: 'bg-blue-500' },
  { label: 'Photos', count: 3, icon: Image, href: '/admin/photos', color: 'bg-green-500' },
  { label: 'Music Releases', count: 3, icon: Music, href: '/admin/music', color: 'bg-purple-500' },
  { label: 'Press Items', count: 1, icon: Newspaper, href: '/admin/press', color: 'bg-orange-500' },
];

const quickActions = [
  { label: 'Add Video', href: '/admin/videos', icon: Video },
  { label: 'Add Photo', href: '/admin/photos', icon: Image },
  { label: 'Add Music', href: '/admin/music', icon: Music },
  { label: 'Add Press', href: '/admin/press', icon: Newspaper },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to the Olamide Sax admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.count}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
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
        <h2 className="text-lg font-bold text-gray-900 mb-4">How to Use</h2>
        <div className="prose prose-sm max-w-none text-gray-600">
          <p className="mb-4">
            This admin panel allows you to manage dynamic content on your portfolio website.
            Here&apos;s what you can do:
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Videos:</strong> Add YouTube video links that will appear on the Media page
            </li>
            <li>
              <strong>Photos:</strong> Upload and manage photos for the gallery
            </li>
            <li>
              <strong>Music:</strong> Add streaming links for your music releases
            </li>
            <li>
              <strong>Press:</strong> Add newspaper and publication features
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
