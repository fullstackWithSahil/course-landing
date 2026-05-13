import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Policies
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/toc"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/refund-policy"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            Product
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://docs.buisnesstools.in/course/getting-started/"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4">
                            Support
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://docs.buisnesstools.in/course/getting-started/"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    © {new Date().getFullYear()} Buisnesstools. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
