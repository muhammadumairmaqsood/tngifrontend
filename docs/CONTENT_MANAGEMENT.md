# Content Management Guide

This guide explains how to update website embed links and managed external resources.

## Source of Truth

All website embed links and document link mappings are managed in:

- `src/config/siteContent.ts`

Do not spread these links across page components. Update this file only.

## Data Model Overview

Content is defined in `STATIC_SITE_CONTENT` as an array of entries.

Each entry includes:

- `id` - Unique identifier
- `slug` - Stable key used in lookups and link mapping
- `title` - Human-readable title
- `category` - Content grouping (`forms`, `maps`, `videos`, `publications`, `policies`, `faqs`)
- `embed_url` - URL used for iframe/embed display
- `original_url` - Canonical source URL for direct access
- `description` - Short summary for maintainers
- `icon` - Icon token used by UI
- `is_active` - Controls visibility in lists and pages
- `display_order` - Sort order within a category
- `created_at`, `updated_at` - Metadata timestamps

## Common Updates

### Update an Existing Embed Link

1. Open `src/config/siteContent.ts`.
2. Find the entry by `slug`.
3. Replace `embed_url` and `original_url` as needed.
4. Update `updated_at`.
5. Keep `slug` unchanged unless you are refactoring all consumers.

### Add a New Content Entry

1. Add a new object in `STATIC_SITE_CONTENT`.
2. Set a unique `id` and `slug`.
3. Assign the correct `category`.
4. Set `is_active: true` and a suitable `display_order`.
5. If this entry must be exposed via `DOCUMENT_LINKS`, add its mapping there.

### Reorder Content

Adjust `display_order` values within the same `category`.

### Hide Content Without Deleting

Set `is_active: false`.

## `DOCUMENT_LINKS` Mapping

`DOCUMENT_LINKS` is derived from `STATIC_SITE_CONTENT` using slug-based lookups.

Important rules:

- Keep slugs stable for any item referenced in `DOCUMENT_LINKS`.
- If you rename a slug used in `DOCUMENT_LINKS`, update the mapping keys immediately.
- Missing `embed_url` or `original_url` for a required slug will throw runtime errors.

## Google Drive and Document URL Behavior

`siteContent.ts` includes utility logic to normalize links:

- Extracts file IDs from Google Drive URLs
- Builds consistent embed/view/download links
- Converts document URLs into embeddable viewer URLs where needed

When updating document links, prefer canonical Google Drive file URLs for best compatibility.

## Editing Checklist

After any content-link update:

1. Run `npm run dev`.
2. Open the affected page(s).
3. Confirm embeds render correctly.
4. Confirm "open original" behavior if used by the page.
5. Run `npm run lint`.
6. Run `npm run test`.

## Troubleshooting

- **Embed does not load:** Verify `embed_url` is iframe-compatible.
- **Wrong document opened:** Check slug and `DOCUMENT_LINKS` mapping.
- **Runtime error about missing links:** Ensure both `embed_url` and `original_url` are set for that slug.
- **Drive link issues:** Use a direct Google Drive file URL and let the helper functions normalize it.
