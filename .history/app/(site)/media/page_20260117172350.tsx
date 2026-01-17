'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Music, Camera, ChevronRight, ExternalLink, Disc } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  url: string;
  platform: string;
  description?: string;
  category?: string | null;
  featured: boolean;
  displayOrder: number;
}

interface MusicItem {
  id: string;
  title: string;
  platform: string;
  url: string;
  releaseYear: string;
}

interface PhotoItem {
  id: string;
  title: string;
  url: string;
  category: string;
  alt: string;
}

type TabType = 'videos' | 'audio' | 'photos';
type VideoCategory = 'all' | 'SAXOPHONE' | 'VOCAL' | 'KEYBOARD';

export default function MediaPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('videos');
  const [videoCategory, setVideoCategory] = useState<VideoCategory>('all');
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [music, setMusic] = useState<MusicItem[]>([]);
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    // Check for category parameter in URL
    const category = searchParams.get('category');
    if (category && (category === 'SAXOPHONE' || category === 'VOCAL' || category === 'KEYBOARD')) {
      setActiveTab('videos');
      setVideoCategory(category as VideoCategory);
    }
  }, [searchParams]);

  const fetchData = async () => {
    try {
      const [videosRes, musicRes, photosRes] = await Promise.all([
        fetch('/api/videos'),
        fetch('/api/music'),
        fetch('/api/photos'),
      ]);

      const videosData = await videosRes.json();
      const musicData = await musicRes.json();
      const photosData = await photosRes.json();

      setVideos(videosData);
      setMusic(musicData);
      setPhotos(photosData);
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const videoCategories = [
    { id: 'all' as VideoCategory, label: 'All Videos' },
    { id: 'SAXOPHONE' as VideoCategory, label: 'Saxophone' },
    { id: 'VOCAL' as VideoCategory, label: 'Vocal' },
    { id: 'KEYBOARD' as VideoCategory, label: 'Keyboard' },
  ];

  const filteredVideos = videoCategory === 'all'
    ? videos
    : videos.filter(video => video.category === videoCategory);

  const tabs = [
    { id: 'videos' as TabType, label: 'Videos', icon: Play, count: videos.length },
    { id: 'audio' as TabType, label: 'Audio', icon: Music, count: music.length },
    { id: 'photos' as TabType, label: 'Photos', icon: Camera, count: photos.length },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-8 sm:py-10 md:py-14 lg:py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#c9a227]/20 text-[#c9a227] text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
              Gallery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              Media
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Watch performances, listen to music, and explore the visual journey of Olamide Sax
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-10">
        <div className="container-custom">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base whitespace-nowrap transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? 'border-[#c9a227] text-[#c9a227]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {tab.label}
                  {tab.count > 0 && (
                    <span className="ml-1 sm:ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#c9a227]">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            Book for Your Event
          </h2>
          <p className="text-[#1a1a2e]/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience live performances and bring the magic of Olamide Sax to your next event.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#16213e] transition-colors text-sm sm:text-base"
          >
            Book Now
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
