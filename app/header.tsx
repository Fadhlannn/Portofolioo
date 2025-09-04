'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Gambar */}
        <img
          src="Images/DSC01427.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        {/* Nama + Role */}
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Fadhlan Ahmad Radistyaaaa
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Data Specialist
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
