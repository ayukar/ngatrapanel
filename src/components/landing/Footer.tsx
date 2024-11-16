import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SocPanel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
