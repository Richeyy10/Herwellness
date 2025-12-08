import Link from 'next/link';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="bg-black text-white">
            <div className="py-12">
                <div className="ml-[11%] grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-xl font-bold mb-2">HerWellness Care Foundation</h3>
                        <p className="text-sm w-[70%] text-gray-400">Empowering girls. Supporting women. Strengthening communities.</p>
                    </div>

                    <div>
                        <h4 className="text-white text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition">About</Link>
                            </li>
                            <li>
                                <Link href="/programs" className="hover:text-white transition">Programs</Link>
                            </li>
                            <li>
                                <Link href="/events" className="hover:text-white transition">Events</Link>
                            </li>
                            <li>
                                <Link href="/get-involved" className="hover:text-white transition">Get Involved</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xl font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-semibold mb-4">Follow Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t w-[80%] mx-auto border-gray-700 pt-8">
                    <p className="text-center text-sm text-gray-400">
                        © {year} HerWellness Foundation. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}