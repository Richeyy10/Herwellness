'use client';
import React from "react";
import Navbar from "@/src/components/dashboard/navbar";
import Sidebar from "@/src/components/dashboard/sidebar";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        {children}
      </div>
    </div>
    )
}