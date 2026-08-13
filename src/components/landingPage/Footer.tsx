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
                                <a
                                    href="/contact-us"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/policy/privacy-policy"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/policy/terms-of-service"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/policy/refund-policy"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Refund Policy
                                </a>
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
                                    href="/pricing"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/resources"
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
                                <a
                                    href="/contact-us"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://trywhiteowl.com/docs/course/getting-started/"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact-us"
                                    className="hover:text-white focus:text-white focus:outline-none"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    © {new Date().getFullYear()} WhiteOwl. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
