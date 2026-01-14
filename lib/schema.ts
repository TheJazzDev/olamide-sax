import { pgTable, text, timestamp, boolean, integer, serial } from 'drizzle-orm/pg-core';

export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const videos = pgTable('videos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  platform: text('platform').notNull(), // youtube, audiomack, instagram
  description: text('description'),
  featured: boolean('featured').default(false),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const audios = pgTable('audios', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  platform: text('platform').notNull(), // audiomack, spotify, etc
  description: text('description'),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const photos = pgTable('photos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  alt: text('alt'),
  category: text('category'), // performance, portrait, event
  featured: boolean('featured').default(false),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const press = pgTable('press', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  source: text('source').notNull(),
  url: text('url'),
  imageUrl: text('image_url'),
  excerpt: text('excerpt'),
  publishedAt: timestamp('published_at'),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const music = pgTable('music', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  platform: text('platform').notNull(), // audiomack, spotify, apple music
  url: text('url').notNull(),
  releaseYear: text('release_year'),
  coverUrl: text('cover_url'),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const siteSettings = pgTable('site_settings', {
  id: serial('id').primaryKey(),
  heroTitle: text('hero_title').default('Olamide Sax'),
  heroSubtitle: text('hero_subtitle').default('Vocalist • Saxophonist • Keyboardist'),
  email: text('email').default('Olaniyanolamidephillip@gmail.com'),
  youtubeUrl: text('youtube_url'),
  instagramUrl: text('instagram_url'),
  facebookUrl: text('facebook_url'),
  twitterUrl: text('twitter_url'),
});

// Type exports
export type Admin = typeof admins.$inferSelect;
export type Video = typeof videos.$inferSelect;
export type Audio = typeof audios.$inferSelect;
export type Photo = typeof photos.$inferSelect;
export type Press = typeof press.$inferSelect;
export type Music = typeof music.$inferSelect;
export type SiteSettings = typeof siteSettings.$inferSelect;
