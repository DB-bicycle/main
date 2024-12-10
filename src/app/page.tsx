'use client';

import { Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import KakaoMap from '../components/KakaoMap';

export default function Home() {
  return (
    <div className="max-w-md mx-auto h-screen bg-gray-50 relative overflow-hidden">
      {/* 로고 영역 */}
      <div className="bg-white px-4 py-3">
        <div className="h-8 flex items-center">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-green-500"></div>
            <div className="w-8 h-8 rounded-full bg-gray-700 -ml-4"></div>
            <span className="ml-2 font-semibold text-gray-800">따릉이</span>
          </div>
        </div>
      </div>

      {/* 검색창 */}
      <div className="px-4 py-3 bg-white shadow-sm">
        <div className="relative w-full max-w-[90%] mx-auto">
          <input
            type="search"
            placeholder="대여소 이름으로 검색"
            className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* 지도 영역 */}
      <div className="h-[55vh]">
        <KakaoMap />
      </div>

      {/* 대여소 정보 패널 */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg">
        <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mt-3" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">영도초등학교</h2>
          <p className="text-sm text-gray-600 mt-1">서울 강남구</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Card className="bg-gray-50 p-4">
              <span className="text-sm text-gray-600">주차된 자전거</span>
              <p className="text-xl font-bold mt-1">30</p>
            </Card>
            <Card className="bg-gray-50 p-4">
              <span className="text-sm text-gray-600">남은 공간</span>
              <p className="text-xl font-bold mt-1">30</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}