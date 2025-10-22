"use client";

import { useState, useEffect } from 'react';
import { getUrl } from 'aws-amplify/storage';

type ProductImageProps = {
  imageKey: string | null | undefined;
};

export default function ProductImage({ imageKey }: ProductImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageKey) {
      setIsLoading(true);
      const fetchImageUrl = async () => {
        try {
          // getUrl関数でS3上の画像のURLを安全に取得
          const urlResult = await getUrl({ path: imageKey });
          setImageUrl(urlResult.url.toString());
        } catch (error) {
          console.error('画像URLの取得エラー:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchImageUrl();
    } else {
      setIsLoading(false);
      setImageUrl(null);
    }
  }, [imageKey]);

  if (isLoading) {
    return (
      <div style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        読込中...
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        画像なし
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt="商品画像" 
      style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '4px 4px 0 0' }} 
    />
  );
}