'use client';

import { useState } from 'react';

interface PreviewPanelProps {
  content?: string;
  title?: string;
}

export default function PreviewPanel({ 
  content = 'No preview available yet.',
  title = 'Website Preview'
}: PreviewPanelProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getPreviewWidth = () => {
    switch (viewMode) {
      case 'mobile':
        return 'max-w-sm';
      case 'tablet':
        return 'max-w-2xl';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              viewMode === 'desktop'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setViewMode('tablet')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              viewMode === 'tablet'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tablet
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              viewMode === 'mobile'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 min-h-[500px] flex items-center justify-center">
        <div className={`${getPreviewWidth()} mx-auto transition-all duration-300`}>
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="prose max-w-none">
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <div className="text-center text-gray-400 py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="mt-2">No preview available yet.</p>
                  <p className="text-sm mt-1">Submit the briefing form to generate a preview.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
