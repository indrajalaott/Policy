// src/app/Cookie-Policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CookiePolicy() {
  return (
    <div>
      <Head>
        <title>Cookie Policy | Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
          name="description" 
          content="Cookie Policy of Indrajala Movie Makers LLP" 
        />
      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          COOKIE POLICY
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 5 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Policy</h2>
        <p style={{ textAlign: 'justify' }}>
          Indrajala Movie Makers LLP ("Indrajala", "we", "our", or "us") is committed to safeguarding your privacy and providing a transparent explanation of how we use cookies on our website and mobile applications. This Cookie Policy outlines what cookies are, how we use them, the types of cookies we employ, and how you can manage your cookie preferences. By using our platform, you consent to our use of cookies in accordance with this policy.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>What Are Cookies?</h2>
        <p style={{ textAlign: 'justify' }}>
          Cookies are small text files that are placed on your device (such as a computer, smartphone, or tablet) by websites and applications you visit. They are widely used to make websites work efficiently, enhance user experience, and provide functionality. Cookies help websites remember your actions and preferences over time, such as login details, language preferences, and display settings, so you don't have to re-enter them each time you visit.
        </p>
        <p style={{ textAlign: 'justify' }}>
          There are different types of cookies, including:
        </p>
        <ul>
          <li>Session Cookies: These are temporary cookies that expire once you close your browser. They are used to remember your actions during a single browsing session.</li>
          <li>Persistent Cookies: These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and settings across multiple sessions.</li>
          <li>First-Party Cookies: Set by the website you are visiting, these cookies can be used to remember your preferences and improve your experience on that site.</li>
          <li>Third-Party Cookies: Set by domains other than the one you are visiting, these cookies are often used for tracking and advertising purposes.</li>
        </ul>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>How We Use Cookies</h2>
        <p style={{ textAlign: 'justify' }}>
          Indrajala uses cookies for several purposes to enhance your experience on our platform:
        </p>
        <ul>
          <li>Essential Cookies: These cookies are necessary for the website to function correctly. They enable basic features such as security, login, and navigation. Without these cookies, certain functionalities of our platform would not be available.</li>
          <li>Performance Cookies: These cookies help us understand how visitors interact with our website by collecting data on their browsing behavior. They allow us to analyze usage patterns and improve the performance and functionality of our platform.</li>
          <li>Functionality Cookies: These cookies remember your preferences and settings to provide a more personalized experience. For example, they can store your language preferences or login details so you don't have to re-enter them each time you visit.</li>
          <li>Targeting and Advertising Cookies: These cookies track your browsing habits and may be used to display targeted advertisements based on your interests. They help us measure the effectiveness of our marketing campaigns and serve ads that are more relevant to you.</li>
          <li>Analytics Cookies: We use analytics cookies to gather information about how visitors use our website, such as which pages are most frequently visited and any error messages encountered. This data helps us improve our website's performance and user experience.</li>
        </ul>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Managing Your Cookie Preferences</h2>
        <p style={{ textAlign: 'justify' }}>
          You have the right to manage your cookie preferences and control how cookies are used on your device. Here are some ways to manage your cookie settings:
        </p>
        <ul>
          <li>Browser Settings: Most web browsers allow you to control cookie settings through their privacy and security options. You can choose to block or delete cookies, or adjust settings to notify you when a cookie is being placed on your device. For more information, consult your browser's help documentation.</li>
          <li>Cookie Consent Tools: Many websites provide cookie consent tools that allow you to accept or reject specific types of cookies. You can use these tools to customize your cookie preferences according to your needs.</li>
          <li>Opt-Out Links: For certain types of cookies, such as those used for targeted advertising, you may have the option to opt-out through industry-specific opt-out tools or websites.</li>
        </ul>
        <p style={{ textAlign: 'justify' }}>
          Please note that disabling cookies may affect the functionality of our platform and limit your ability to access certain features.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Changes to Our Cookie Policy</h2>
        <p style={{ textAlign: 'justify' }}>
          Indrajala reserves the right to update or modify this Cookie Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we use cookies and manage your preferences.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Contact Us</h2>
        <p style={{ textAlign: 'justify' }}>
          If you have any questions or concerns about our Cookie Policy or how we use cookies, please contact us at:
        </p>
        <p style={{ textAlign: 'justify' }}>
          Indrajala Movie Makers LLP<br />
          Email: <a href="mailto:support@indrajala.in">support@indrajala.in</a>
        </p>

        <p style={{ textAlign: 'justify' }}>
          Thank you for choosing Indrajala. We look forward to serving you with exceptional fantasy content that captivates and inspires!
        </p>
      </main>
      <Footer />
    </div>
  );
}