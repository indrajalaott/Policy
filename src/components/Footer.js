// src/components/Footer.js
"use client"; // Mark this component as a Client Component

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div className="link-group">
          <a href="/Account-Deletion">Account Deletion</a>
          <a href="/Age-Restrictions">Age Restrictions</a>
          <a href="/Broken-Links">Broken Links</a>
          <a href="/Cancelation-Policy">Cancellation Policy</a>
        </div>
        <div className="link-group">
          <a href="/Child-Protection">Child Protection</a>
          <a href="/Content-Removal">Content Removal</a>
          <a href="/Cookie-Policy">Cookie Policy</a>
          <a href="/Copyright-Policy">Copyright Policy</a>
        </div>
        <div className="link-group">
          <a href="/Data-Policy">Data & Privacy Policy</a>
          <a href="/Refund-Policy">Refund Policy</a>
          <a href="/Suscribtion-Policy">Subscription Policy</a>
          <a href="/Terms-of-Usage">Terms of Usage</a>
        </div>
        <div className="link-group">
          <a href="/User-Conduct-Policy">User Conduct</a>
          <a href="/Policies">Contacts</a>
        </div>
      </div>
      <div className="footer-info">
        <p>Indrajala Movie Makers LLP. &copy; 2024 Copyrights</p>
        <p>All Rights Reserved</p>
        <p>
          Indrajala Movie Makers LLP takes pride in providing a wide range of
          fantasy content to our users. We are committed to maintaining the
          highest standards of quality and ensuring a safe and enjoyable
          experience for all our viewers.
        </p>
      </div>
      <style jsx>{`
        footer {
          text-align: center;
          padding: 2rem 1rem;
          background: #333;
          color: white;
          margin-top: 2rem;
        }
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-basis: 50%; /* Adjusting to show 2 groups per row on mobile */
        }
        .link-group a {
          color: white;
          text-decoration: none;
          margin: 0.5rem;
        }
        .link-group a:hover {
          text-decoration: underline;
        }
        .footer-info p {
          margin: 0.5rem 0;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .link-group {
            flex-basis: 50%; /* Show 2 link groups per row on mobile */
          }
        }

        /* Desktop responsiveness */
        @media (min-width: 769px) {
          .link-group {
            flex-basis: 25%; /* Show 4 link groups per row on desktop */
          }
        }
      `}</style>
    </footer>
  );
}