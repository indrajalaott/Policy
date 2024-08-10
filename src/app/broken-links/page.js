// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Broken Links| Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
          name="description" 
          content="Broken Link Policy on Indrajala | The OTT For Your Fantasies" 
        />
      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          BROKEN LINKS
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>Introduction</h2>
        <p style={{ textAlign: 'justify' }}>
        Welcome to our Broken Links Policy page. At Indrajala, we are committed to providing our users with a seamless and enjoyable experience on our platform. We understand that encountering broken links can be frustrating, and we strive to maintain the integrity of our website by ensuring that all links are functional. This policy outlines our approach to handling broken links and our commitment to addressing any issues that may arise.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Description of Broken Links</h2>
        <p style={{ textAlign: 'justify' }}>
        A broken link, also known as a dead link, refers to a hyperlink that no longer leads to its intended destination. This can occur for various reasons, including the removal of content, changes to the URL structure, or technical errors. Broken links can hinder user navigation and detract from the overall experience on our site. Therefore, we actively monitor our website for broken links and work diligently to rectify any issues promptly.
        </p>
        


        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Broken Links Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        At Indrajala, we take broken links seriously and have established a clear policy to address them. We regularly review our website to identify and fix any broken links to ensure a smooth user experience. If you encounter a broken link while using our platform, we encourage you to report it to our support team at broken-links@indrajala.com. Your feedback is invaluable in helping us maintain the quality and reliability of our content. Thank you for your understanding and support as we work to provide you with the best possible experience!
        </p>
        

        
        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Closing Statement</h2>
        <p style={{ textAlign: 'justify' }}>
        Thank you for taking the time to read our Broken Links Policy. At Indrajala, we prioritize your experience and are dedicated to maintaining the quality and functionality of our platform. We understand that encountering broken links can disrupt your navigation and affect your overall satisfaction. That’s why we have implemented a proactive approach to identifying and resolving broken links promptly.
        </p>
        <p style={{ textAlign: 'justify' }}>
        We appreciate your support and patience as we work to ensure that our website remains a reliable resource for all users. Your feedback is crucial in helping us improve our services. If you come across any broken links or have suggestions on how we can enhance your experience, please don’t hesitate to reach out to our customer support team at broken-links@indrajala.com.
        </p>

        <p style={{ textAlign: 'justify' }}>
        Together, we can ensure that Indrajala remains a seamless and enjoyable platform for exploring fantastic content. Thank you for being a valued member of our community!
        </p>
      </main>
      <Footer />
    </div>
  );
}