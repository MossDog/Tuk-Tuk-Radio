import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery');

export async function GET() {
  let files: string[] = [];
  try {
    files = fs.readdirSync(GALLERY_DIR);
  } catch (e) {
    return NextResponse.json({ error: 'Could not read gallery directory.' }, { status: 500 });
  }

  const items = files.filter((file) => /\.(jpg|jpeg|png|gif|mp4|webm)$/i.test(file)).map((file) => {
    const ext = path.extname(file).toLowerCase();
    const type = ['.mp4', '.webm'].includes(ext) ? 'video' : 'image';
    let thumbnail = undefined;
    if (type === 'video') {
      const thumbName = file.replace(ext, '.png');
      const thumbPath = path.join(GALLERY_DIR, 'thumbnails', thumbName);
      if (fs.existsSync(thumbPath)) {
        thumbnail = `/gallery/thumbnails/${thumbName}`;
      }
    }
    return {
      type,
      src: `/gallery/${file}`,
      title: path.basename(file, ext),
      ...(thumbnail ? { thumbnail } : {}),
    };
  });

  return NextResponse.json(items);
}
