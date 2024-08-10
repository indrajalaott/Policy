// src/app/page.js
"use client";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Policy Indrajala</title>
        <meta name="description" content="Welcome to our website." />
      </Head>
      <Navbar />
      <main>
      <section className="hero">
          <div className="hero-strip">
            <h2>Indrajalaa Legal</h2>
          </div>
          <p>Explore our policies and learn more about our commitment to providing a safe and enjoyable experience.</p>
        </section>
        <section className="policy-links">
          <div className="link-group">
            <a href="/Account-Deletion">
              <div className="link-box">
                <h3>Account Deletion</h3>
              </div>
            </a>
            <a href="/Age-Restrictions">
              <div className="link-box">
                <h3>Age Restrictions</h3>
              </div>
            </a>
            <a href="/Broken-Links">
              <div className="link-box">
                <h3>Broken Links</h3>
              </div>
            </a>
            <a href="/Cancelation-Policy">
              <div className="link-box">
                <h3>Cancellation Policy</h3>
              </div>
            </a>
          </div>
          <div className="link-group">
            <a href="/Child-Protection">
              <div className="link-box">
                <h3>Child Protection</h3>
              </div>
            </a>
            <a href="/Content-Removal">
              <div className="link-box">
                <h3>Content Removal</h3>
              </div>
            </a>
            <a href="/Cookie-Policy">
              <div className="link-box">
                <h3>Cookie Policy</h3>
              </div>
            </a>
            <a href="/Copyright-Policy">
              <div className="link-box">
                <h3>Copyright Policy</h3>
              </div>
            </a>
          </div>
          <div className="link-group">
            <a href="/Data-Policy">
              <div className="link-box">
                <h3>Data & Privacy Policy</h3>
              </div>
            </a>
            <a href="/Refund-Policy">
              <div className="link-box">
                <h3>Refund Policy</h3>
              </div>
            </a>
            <a href="/Suscribtion-Policy">
              <div className="link-box">
                <h3>Subscription Policy</h3>
              </div>
            </a>
            <a href="/Terms-of-Usage">
              <div className="link-box">
                <h3>Terms of Usage</h3>
              </div>
            </a>
          </div>
          <div className="link-group">
            <a href="/User-Conduct-Policy">
              <div className="link-box">
                <h3>User Conduct</h3>
              </div>
            </a>
            <a href="/Policies">
              <div className="link-box">
                <h3>Contacts</h3>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        main {
          padding: 2rem;
        }
        .hero {
          text-align: center;
          margin-bottom: 2rem;
        }
        .policy-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .link-box {
          background-color: #333;
          color: white;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }
        .link-box:hover {
          transform: translateY(-5px);
        }
        .link-box h3 {
          margin: 0;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .link-group {
            flex-basis: 50%;
          }
        }

        /* Desktop responsiveness */
        @media (min-width: 769px) {
          .link-group {
            flex-basis: 25%;
          }
        }
      `}</style>
    </div>
  );
}