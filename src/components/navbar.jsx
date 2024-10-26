import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Using lucide icons for better menu toggles

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
                            Portfolio
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            {["Home", "About Me", "Projects", "Socials"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-gray-600" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-600" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isOpen && (
                    <div className="md:hidden absolute top-16 right-4 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        <nav>
                            <ul className="flex flex-col">
                                {["Home", "About Me", "Projects", "Socials"].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors duration-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;