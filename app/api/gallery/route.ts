import { NextResponse } from 'next/server';
import gallery from '../../../lib/gallery.json';

export async function GET() {
  return NextResponse.json(gallery);
}
