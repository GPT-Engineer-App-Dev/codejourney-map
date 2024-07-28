import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { navItems } from "@/nav-items";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">NeetCode</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.slice(1).map((item) => (
            <Link key={item.to} to={item.to} className="text-foreground hover:text-primary transition-colors">
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Pro</Button>
          <Button>Sign In</Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2 text-foreground hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="px-4 py-2 space-y-2">
            <Button variant="outline" className="w-full">Pro</Button>
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
