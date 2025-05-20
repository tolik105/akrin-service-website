"use client";
import React from "react";

export function IsoCertificationBadge() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-white border-[1px] border-gray-300 overflow-hidden rounded-md" style={{ maxWidth: '280px' }}>
        {/* Left side - certification body logo */}
        <div className="w-[90px] h-[90px] bg-[#004976] flex items-center justify-center p-2 border-r border-gray-300">
          <div className="w-full h-full bg-white rounded-md flex flex-col items-center justify-center">
            <div className="font-bold text-[#004976] text-center text-xs leading-tight">ISMS</div>
            <div className="w-12 h-0.5 bg-[#004976] my-1"></div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-[#004976] text-center text-xs leading-tight">ISO/IEC</div>
              <div className="font-bold text-[#004976] text-center text-xs leading-tight">27001</div>
            </div>
          </div>
        </div>
        
        {/* Right side - certification details */}
        <div className="py-3 px-4">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="flex items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5 text-blue-700">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[13px] font-bold text-gray-800 mr-1">ISO 27001:2022</span>
              </div>
            </div>
            <div className="text-[11px] text-gray-600 leading-tight mt-0.5">
              Information Security Management System
            </div>
            <div className="mt-2">
              <div className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-blue-50 border border-blue-200">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-1"></div>
                <span className="text-[10px] font-medium text-blue-800">IMPLEMENTATION & CERTIFICATION IN PROGRESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
