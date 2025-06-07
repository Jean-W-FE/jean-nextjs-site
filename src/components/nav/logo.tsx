import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Logo() {
    return (
        <Link href="/" className="text-2xl font-bold text-gray-800">
        {siteConfig.name}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">.</span>
      </Link>
    )
}