// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
      <title>Account Deletion Policy | Indrajala - Your Go-To OTT Platform for Fantasy Content</title>
<meta 
    name="description" 
    content="Account Deletion Policy - Indrajala Movie Makers LLP. " 
/>

      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          ACOUNT DELETION POLICY
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        The Account Deletion Policy of Indrajala Movie Makers LLP outlines the procedures and regulations governing the deletion of user accounts and associated data on the platform. It provides clear guidelines for users wishing to delete their accounts, detailing the steps required to initiate the process, including any necessary confirmations. The policy emphasizes user consent and awareness regarding the permanent removal of personal data, such as account settings, preferences, and content linked to the user’s profile. Additionally, it addresses the potential limitations on account recovery once deletion is finalized, highlighting the irreversible nature of this action. By clearly communicating these aspects, the policy empowers users to make informed decisions about their accounts while ensuring compliance with data protection regulations.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Data Deletion - A User Right</h2>
        <p style={{ textAlign: 'justify' }}>
        At Indrajala Movie Makers LLP, we firmly believe that data deletion is a fundamental right of our users, ensuring that they have complete control over their personal information and account status. This principle reflects our commitment to user autonomy and privacy. Users are granted the full authority to delete their profiles and withdraw from the platform whenever they choose. To facilitate this process, we have implemented a dedicated section within the application specifically for users to request data deletion. This ensures that the procedure is not only accessible but also straightforward, allowing users to easily navigate their options.
        </p>

        <p style={{ textAlign: 'justify' }}>
         
          <br></br>
          When a user initiates a data deletion request, it triggers a comprehensive removal of all information associated with their profile from our systems. This includes personal details such as name, email address, contact information, and any preferences or settings that were previously established. Additionally, any content or data linked to the user's activity on the platform, such as viewing history, likes, or saved items, will also be permanently deleted. It is essential for users to understand that once they proceed with the deletion of their profile, access to the platform will be entirely revoked. This means that they will no longer be able to log in, retrieve any information previously associated with their account, or access any content available on the platform.
          
        </p>


        <p style={{ textAlign: 'justify' }}>
         
        <br></br>
          Moreover, if the user has an active subscription at the time they choose to delete their account, that subscription will also be terminated as part of the deletion process. Users will not incur any additional charges for any remaining time on their subscription, ensuring that they are not financially penalized for exercising their right to delete their account. In the event that a user wishes to return to Indrajala in the future, they will have the opportunity to re-register for a new account. However, it is crucial to emphasize that upon deletion, all previous account details and associated data will be permanently lost, and the user will start afresh if they decide to return.
          
        </p>


        <p style={{ textAlign: 'justify' }}>
        <br></br>
          This policy is designed to empower users by providing them with comprehensive control over their data while ensuring compliance with data protection standards and regulations. We strive to foster a transparent environment where users can make informed decisions about their information and account status. By clearly outlining the implications of data deletion and the steps involved, we aim to enhance user trust and satisfaction with our services.
          
          
        </p>
        



        
       
      </main>
      <Footer />
    </div>
  );
}