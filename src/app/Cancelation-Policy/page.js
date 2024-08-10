// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Cancelation Policy | Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
          name="description" 
          content="Learn about Indrajala's Cancelation policy for our OTT platform.!" 
        />
      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          CANCELLATION  POLICY
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 5 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Cancellation  Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        This paragraph outlines the cancellation policy of Indrajala Movie Makers. It provides important information regarding the rights of users to exercise cancellation options, as well as details related to refunds and other relevant matters. Users can find comprehensive information about the cancellation process, including any conditions or procedures that must be followed, on the designated page dedicated to this policy. This ensures that users are well-informed about their options and the terms associated with cancellations and refunds.
        </p>
      

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>User Right For Cancelations</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        Users have the complete right to cancel their accounts, discontinue any payments, and opt out of automatic renewals associated with Indrajala LLP and its services. It is emphasized that the use of Indrajala’s services is entirely voluntary, meaning that no user or individual is obligated to maintain their account or continue utilizing the platform. The cancellation process is designed to be straightforward, allowing users to easily navigate the necessary steps within their profiles. Should users encounter any difficulties while attempting to navigate the cancellation process, they are encouraged to reach out for assistance by emailing itsupport@indrajala.in. This support channel is available to provide guidance and resolve any issues users may face, ensuring a seamless experience when exercising their rights regarding account cancellation and payment discontinuation. Indrajala is committed to providing clear and accessible options for users to manage their accounts according to their preferences.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        While cancellations are entirely at the discretion of the user, and Indrajala fully supports their choice, it is important to note that the company does not provide refunds upon cancellation of a profile. Users will not be eligible for any refunds from Indrajala in connection with account cancellations. Furthermore, the company will not entertain any requests for refunds related to the cancellation of user profiles. This policy ensures clarity regarding the financial implications of canceling an account, allowing users to make informed decisions while understanding that any fees paid prior to cancellation are non-refundable. Indrajala is committed to maintaining transparency about its cancellation and refund policies to prevent any misunderstandings.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        It is crucial to recognize that the cancellation process is non-revisable; once a user cancels their account, they cannot request reinstatement, and access to the platform will only be possible through renewal of their profile under a new subscription plan. Therefore, users are strongly encouraged to rethink their decision before proceeding with the cancellation, as it entails the permanent loss of access to the content associated with their account. Additionally, accounts will automatically be canceled upon the expiration of the selected subscription plan if the user fails to renew it. In such scenarios, users must renew to a valid plan to regain access to the platform and its offerings. This policy highlights the importance of being aware of the account's status and subscription timelines, ensuring users have the necessary information to make informed decisions about their subscriptions and prevent any unintended disruptions to their viewing experience. Indrajala is committed to providing clear communication about these policies to help users navigate their account management effectively.
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
        In conclusion, Indrajala Movie Makers is dedicated to providing users with clear and comprehensive information regarding its cancellation policy. Users hold the complete right to cancel their accounts, discontinue payments, and opt out of automatic renewals, with the understanding that the cancellation process is voluntary and straightforward. However, it is essential for users to recognize that once an account is canceled, it cannot be reinstated, and access to the platform will only be possible through the renewal of a new subscription plan. Users are encouraged to carefully consider their decision to cancel, as doing so results in the permanent loss of access to their account’s content. Moreover, Indrajala does not offer refunds for any fees paid prior to cancellation, ensuring that users are fully informed about the financial implications of their choices.        </p>

        <p style={{ textAlign: 'justify' }}>
        <br></br>
        To facilitate a smooth cancellation experience, users are urged to review the detailed information provided on the Account Deletion Page before proceeding. This page outlines the necessary steps and consequences associated with account cancellation and deletion. Should users encounter any challenges during the cancellation process, Indrajala encourages them to reach out to its support team at itsupport@indrajala.in for assistance. By maintaining transparent communication regarding its cancellation and refund policies, Indrajala aims to empower users to make informed decisions about their accounts, ultimately fostering a positive and user-friendly experience on the platform. Thank you for your understanding.






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