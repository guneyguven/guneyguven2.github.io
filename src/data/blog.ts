export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  body: string;
};

const files = import.meta.glob('../content/blog/*.txt', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function slugFromPath(path: string) {
  return path.split('/').pop()!.replace(/\.txt$/i, '');
}

function parseDocument(raw: string, path: string): BlogPost {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const meta: Record<string, string> = {};
  let index = 0;

  // Metadata is deliberately plain TXT so a new post can be created without Markdown knowledge.
  while (index < lines.length) {
    const line = lines[index].trim();
    if (line === '---') {
      index += 1;
      break;
    }
    const match = line.match(/^([A-Z][A-Z0-9_-]*)\s*:\s*(.*)$/);
    if (match) meta[match[1].toLowerCase()] = match[2].trim();
    index += 1;
  }

  const body = lines.slice(index).join('\n').trim();
  const slug = slugFromPath(path);
  const title = meta.title || slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const date = meta.date || '1970-01-01';
  const category = meta.category || 'Notes';
  const excerpt = meta.excerpt || body.replace(/\s+/g, ' ').slice(0, 180);

  return { slug, title, date, category, excerpt, image: meta.image, body };
}

export const posts = Object.entries(files)
  .map(([path, raw]) => parseDocument(raw, path))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find(post => post.slug === slug);
}

export function bodyToBlocks(body: string) {
  return body
    .split(/\n\s*\n/)
    .map(block => block.trim())
    .filter(Boolean)
    .map(block => {
      if (/^###\s+/.test(block)) return { type: 'h3', text: block.replace(/^###\s+/, '') };
      if (/^##\s+/.test(block)) return { type: 'h2', text: block.replace(/^##\s+/, '') };
      if (/^#\s+/.test(block)) return { type: 'h2', text: block.replace(/^#\s+/, '') };
      if (/^-\s+/m.test(block)) return { type: 'list', items: block.split('\n').filter(line => /^-\s+/.test(line)).map(line => line.replace(/^-\s+/, '')) };
      return { type: 'p', text: block.replace(/\n/g, ' ') };
    });
}
