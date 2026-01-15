'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Music, Camera, ChevronRight, ExternalLink, Disc } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  url: string;
  platform: string;
  description?: string;
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

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<TabType>('videos');
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [music, setMusic] = useState<MusicItem[]>([]);
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

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

  const tabs = [
    { id: 'videos' as TabType, label: 'Videos', icon: Play, count: videos.length },
    { id: 'audio' as TabType, label: 'Audio', icon: Music, count: music.length },
    { id: 'photos' as TabType, label: 'Photos', icon: Camera, count: photos.length },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 lg:py-20 bg-[#1a1a2e] text-white">
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

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#c9a227] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading media...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Videos Tab */}
              {activeTab === 'videos' && (
                <div>
                  {videos.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {videos.map((video) => (
                        <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="relative aspect-video bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e]/90">
                              <div className="text-center text-white p-4">
                                <Play className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 text-[#c9a227]" />
                                <p className="text-xs sm:text-sm">Available on {video.platform}</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <span className="text-xs font-medium text-[#c9a227] uppercase tracking-wide">
                              {video.platform}
                            </span>
                            <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm sm:text-base">{video.title}</h3>
                            {video.description && (
                              <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                            )}
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#c9a227] hover:underline"
                            >
                              Watch Now
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white p-12 sm:p-16 rounded-xl text-center">
                      <Play className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">No Videos Yet</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Check back soon for performance videos and recordings.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Audio Tab */}
              {activeTab === 'audio' && (
                <div>
                  {music.length > 0 ? (
                    <div className="space-y-4">
                      {music.map((release) => (
                        <div
                          key={release.id}
                          className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1a1a2e] rounded-lg flex items-center justify-center shrink-0">
                              <Disc className="w-8 h-8 sm:w-10 sm:h-10 text-[#c9a227]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-base sm:text-lg">{release.title}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs sm:text-sm font-medium text-[#c9a227]">{release.platform}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-xs sm:text-sm text-gray-500">{release.releaseYear}</span>
                              </div>
                            </div>
                            <a
                              href={release.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#c9a227] text-[#1a1a2e] text-sm font-semibold rounded-full hover:bg-[#e8d48b] transition-colors shrink-0"
                            >
                              <Play className="w-4 h-4" />
                              Listen
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white p-12 sm:p-16 rounded-xl text-center">
                      <Music className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">No Music Releases Yet</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Check back soon for music releases and streaming links.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Photos Tab */}
              {activeTab === 'photos' && (
                <div>
                  {photos.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                      {photos.map((photo) => (
                        <div key={photo.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                          <div className="relative aspect-square bg-gray-200">
                            <Image
                              src={photo.url}
                              alt={photo.alt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-3 sm:p-4">
                            <span className="text-xs font-medium text-[#c9a227] uppercase tracking-wide">
                              {photo.category}
                            </span>
                            <h3 className="font-semibold text-gray-900 mt-1 text-sm sm:text-base">{photo.title}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white p-12 sm:p-16 rounded-xl text-center">
                      <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">No Photos Yet</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Check back soon for performance and event photos.</p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
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
