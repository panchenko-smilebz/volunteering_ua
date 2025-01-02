'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Повертаємо іконку назад через 2 секунди
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Помилка при копіюванні:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center p-2 rounded-lg transition-colors hover:bg-gray-100 active:bg-gray-200"
      aria-label={copied ? 'Скопійовано' : 'Копіювати'}
    >
      {copied ? (
        <Check className="w-2xl h-2xl text-system-successGreenDark" />
      ) : (
        <Copy className="w-2xl h-2xl text-neutral-neutral" />
      )}
    </button>
  );
};

export default CopyButton;
