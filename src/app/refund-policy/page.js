// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Refund Policy | Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
          name="description" 
          content="Learn about Indrajala's refund policy for our OTT platform. Find out how to request a refund, eligibility criteria, and contact details for support. Your satisfaction matters to us!" 
        />
      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          REFUND POLICY
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 5 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Refund Policy</h2>
        <p style={{ textAlign: 'justify' }}>
          Welcome to Indrajala, your ultimate OTT platform dedicated to bringing you an enchanting array of fantasy content, proudly presented by Indrajala Movie Makers. We are committed to providing our users with a seamless and enjoyable viewing experience. To uphold this commitment, we have established a comprehensive refund policy that addresses potential concerns and ensures transparency.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          For a detailed explanation of our refund policy, including specific circumstances under which refunds may be granted, please read the paragraph below. This section outlines our approach to handling refund requests, including situations involving technical issues, subscription cancellations, and dissatisfaction with content. We believe in maintaining a high standard of customer satisfaction, and our policy reflects our dedication to addressing your needs effectively and promptly.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          If you require assistance or have questions regarding our refund policy, our customer support team is here to help. You can contact us via email at <a href="mailto:payment@indrajala.com">payment@indrajala.com</a>. We appreciate your trust in Indrajala and look forward to providing you with exceptional fantasy content that keeps you coming back for more!
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Refunds for Content and Dissatisfaction</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          Indrajala LLP is committed to providing high-quality content and ensuring customer satisfaction. However, it is important to clarify our stance on refunds related to content dissatisfaction. While we strive to meet and exceed your expectations, we do not offer refunds if the content provided does not align with what you anticipated.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          Our team at Indrajala Movie Makers works diligently to curate a diverse range of engaging and entertaining content. We believe in transparency and want our users to have realistic expectations. As a result, we encourage you to explore our offerings thoroughly before making a purchase or subscribing.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          If you find that our content does not meet your needs, you retain the right to cancel your subscription or choose not to renew it at the end of your billing cycle. However, please note that cancellations will not result in any refund or compensation. Your satisfaction is important to us, and we appreciate your understanding of our policy.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Refunds for Technical Issues</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          As an OTT platform operating on information technology, Indrajala LLP acknowledges that technical issues may occasionally arise. These outages can be either planned maintenance or unforeseen disruptions, which may lead to various technical difficulties for our users. In the event of such technical issues caused by our platform, users will be eligible for an extension of their current account deadlines.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          Please note that while users may receive an extension, the final decision regarding the length of the extension and the specific number of days will be determined by the Indrajala Movie Makers LLP team. However, we would like to clarify that there will be no financial refunds issued for these technical issues. Our goal is to ensure that you continue to enjoy our content without interruption, and we appreciate your understanding in this matter.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Refunds Regarding Subscription Cancellations</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          Users have the freedom to cancel their subscriptions at any time and are not obligated to renew them. However, please be aware that if an active user chooses to cancel their subscription or delete their account for any reason, they will not be eligible for a refund.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          We strongly recommend that users review the Account Deletion Page before proceeding with the deletion of their profile. This page contains important information regarding the implications of account deletion and the cancellation process. Thank you for your understanding.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Closing Statement</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
          At Indrajala, we strive to create an enjoyable and fulfilling experience for all our users. We believe that clear communication about our refund policy is essential to building trust and ensuring customer satisfaction. We appreciate your understanding of our policies regarding refunds for content dissatisfaction, technical issues, and subscription cancellations. Your satisfaction is our priority, and we are committed to providing the best possible service.
        </p>

        <p style={{ textAlign: 'justify' }}>
        <br></br>
          Additionally, please note that Indrajala LLP is not responsible for any payment failures that may occur due to issues from the bank or the user’s side. In some cases, there may be errors with payment gateways or other related systems. In such scenarios, any funds will be processed back through the banking system, which falls outside our control. However, if you require assistance with reference numbers or any other inquiries related to payment issues, we are more than happy to help. Please reach out to us at <a href="mailto:payments@indrajala.in">payments@indrajala.in</a>.
        </p>

        <p style={{ textAlign: 'justify' }}>
        <br></br>
          Thank you for choosing Indrajala. We look forward to serving you with exceptional fantasy content that captivates and inspires!
        </p>
      </main>
      <Footer />
    </div>
  );
}