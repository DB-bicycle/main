'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&autoload=false`
    document.head.appendChild(kakaoMapScript)
  
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map')
        var options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        }
  
        var map = new window.kakao.maps.Map(container, options)
      })
    }
  
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, [])

  return (
    <div ref={mapRef} className="w-full h-full" />
  );
}