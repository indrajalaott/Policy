// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Child Protection| Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
    name="description" 
    content="Discover Indrajala Movie Makers' Child Protection Policy. Our platform features 18+ content, and we prioritize the safety of minors by ensuring restricted access for users under 18. Learn more about our commitment to child safety." 
/>

      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          CHILD PROTECTION
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        At Indrajala Movie Makers, we prioritize the safety and well-being of our viewers, especially minors. Our platforms, including the Indrajala website and application, feature content that is categorized as 18+ (adult category). We do not promote or endorse access to our services by individuals under the age of 18. It is our responsibility to ensure that our content is appropriate for mature audiences only. We encourage parents and guardians to monitor their children's online activities and to take an active role in determining the suitability of the content they consume. By accessing our platform, users affirm that they are at least 18 years old and agree to comply with our child protection policy.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Regarding Users Below 18</h2>
        <p style={{ textAlign: 'justify' }}>
        At Indrajala, we take the protection of minors very seriously. We define any user under the age of 18 as a minor, and we do not permit access to our platforms for individuals who do not meet this legal age requirement. To ensure a safe viewing environment, we strongly advise users under 18 to refrain from accessing our content, which is specifically designed for mature audiences.        </p>
        <p style={{ textAlign: 'justify' }}>
        In the event that we discover an account belongs to a minor, we will take immediate action to remove that account without exception. This policy is in place to protect the integrity of our platform and the well-being of younger audiences. Users whose accounts are removed due to age restrictions will not be eligible for any refunds or benefits associated with their subscription. We appreciate your understanding and cooperation in helping us maintain a responsible and safe platform for all our users.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Closing Statement</h2>
        <p style={{ textAlign: 'justify' }}>
        n conclusion, Indrajala is dedicated to providing a safe and responsible viewing environment, and we do not permit access to our platforms by users classified as minors, specifically those under the age of 18. Our content is intended for mature audiences only, and we will not entertain any inquiries or requests from individuals who do not meet this age requirement. 
        </p>
        <p style={{ textAlign: 'justify' }}>
        In any circumstance where we determine that a user is not eligible due to being below the specified age group, their account will be deleted without further notice or concern.
        </p>

        <p style={{ textAlign: 'justify' }}>
          Thank you for choosing Indrajala. We look forward to serving you with exceptional fantasy content that captivates and inspires!
        </p>
      </main>
      <Footer />
    </div>
  );
}