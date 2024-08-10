// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
      <title>Subscription Policy | Indrajala - Your Go-To OTT Platform for Fantasy Content</title>
<meta 
    name="description" 
    content="Explore the Subscription Policy of Indrajala Movie Makers, an OTT platform dedicated to fantasy entertainment. " 
/>

      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          SUSCRIBTION POLICY
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        This policy outlines the Subscription Policy of Indrajala Movie Makers concerning access to the platform.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Rights Reserved on Indrajala Movie Makers LLP</h2>
        <p style={{ textAlign: 'justify' }}>
        Indrajala Movie Makers LLP retains full rights over user subscriptions, including the authority to provide extensions, cancellations, or terminations, which may also lead to account deletion. This authority can be exercised if a user is found to be violating the agreements established between the user and the services provided. For example, if it is determined that a user is a minor accessing the service, Indrajala Movie Makers has the right to promptly delete the account, resulting in the immediate termination of access and subscriptions. Furthermore, the company has the discretion to extend any user's subscription or modify subscription dates as deemed necessary. Such decisions are entirely at the discretion of the Admin team and will be made based on the specific circumstances of each case.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Rights Reserved on User</h2>
        <p style={{ textAlign: 'justify' }}>
        Users hold various rights and privileges concerning their subscriptions on the Indrajala platform. They have the freedom to cancel their subscriptions at any time, and in the event of cancellations or deletions, the standard refund policy will apply, ensuring that users are aware of the financial implications of their decisions. Additionally, users have the option to opt out of automatic subscription renewals, giving them greater control over their billing and service continuity. Moreover, users can pause their subscriptions temporarily, allowing them to take a break without losing access to their accounts, with the option to renew their subscriptions at a later date. This flexibility in managing subscriptions empowers users to tailor their experiences according to their needs and preferences.
        </p>
        


        
       
      </main>
      <Footer />
    </div>
  );
}