import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Juan Carlos Aguilera",
  description: "Privacy policy and data protection information for Juan Carlos Aguilera's portfolio website",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/30 p-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              This privacy policy explains how this website collects, uses, and protects your information 
              when you visit Juan Carlos Aguilera&apos;s portfolio website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Analytics & Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This website uses Google Analytics to understand how visitors interact with the site. 
              Google Analytics collects information anonymously and reports website trends without 
              identifying individual visitors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The information collected includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Pages you visit and time spent on each page</li>
              <li>How you arrived at the site (search engines, direct links, etc.)</li>
              <li>General geographic location (country/city level)</li>
              <li>Device and browser information</li>
              <li>Site performance and loading times</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Rights & Choices</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Decline or accept cookies when you first visit this site</li>
              <li>Opt out of Google Analytics by installing the{' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Analytics opt-out browser add-on
                </a>
              </li>
              <li>Request information about data collected about you</li>
              <li>Request deletion of your data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              This website does not collect personal information unless you explicitly provide it 
              (such as through the contact form). Any information you provide is used solely to 
              respond to your inquiry and is not shared with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this privacy policy or your data, please contact:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700">
                <strong>Juan Carlos Aguilera</strong><br />
                Email: Available through the contact form on this website
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Updates</h2>
            <p className="text-gray-600 leading-relaxed">
              This privacy policy may be updated from time to time. The last update was made on August 8, 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
