import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, price, description } = await request.json();

    if (!name || !price || !description) {
      return NextResponse.json({ message: 'すべてのフィールドを入力してください。' }, { status: 400 });
    }

    // 実際のデータベース処理はここで行います
    // 例: await db.collection('products').insertOne({ name, price, description });
    console.log('新しい商品が追加されました:', { name, price, description });

    return NextResponse.json({ message: '商品が正常に追加されました。' }, { status: 201 });
  } catch (error) {
    console.error('APIエラー:', error);
    return NextResponse.json({ message: 'サーバーエラーが発生しました。' }, { status: 500 });
  }
}