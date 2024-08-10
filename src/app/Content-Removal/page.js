// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Content Removal| Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
    name="description" 
    content="Content Removal  - Indrajala Movie Makers LLP" 
/>

      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          CONTENT REMOVAL
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Content Removal Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        This page outlines the Content Removal Policy for Indrajala Movie Makers LLP. The policy is applicable to all content across the entire website, as well as any applications that function on behalf of Indrajala (indrajala.in). Below, you will find a comprehensive explanation of the policy, including the procedures and guidelines for content removal, the circumstances under which content may be removed, and the rights of users and the company regarding this matter.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Regarding Content on Indrajala Platforms</h2>
        <p style={{ textAlign: 'justify' }}>
        All content available on the Indrajala platforms is exclusively developed by the team at Indrajala Movie Makers, a recognized production house. Indrajala Movie Makers LLP retains all rights related to the copyright and distribution of the content published on its platforms. Importantly, we do not promote or publish any third-party content that has not been created or authorized by our team, nor do we engage in outsourcing for content creation. This policy underscores our commitment to originality and authenticity, as it ensures that we only publish content that we own and have complete rights to. Furthermore, we strictly prohibit any individuals or entities who are not part of the Indrajala team from publishing content on our behalf. This approach guarantees that all material associated with Indrajala meets our standards of quality and aligns with our brand identity.</p>
       
        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Regarding Content Removal on Indrajala Platforms</h2>
        <p style={{ textAlign: 'justify' }}>

        All content published on the Indrajala platforms undergoes a thorough assessment process to ensure it meets our quality standards and aligns with our values before being made available to users. However, we recognize that there may be instances where users—both from within the Indrajala community and external individuals—may come across content that they believe should be removed for various reasons. In such cases, users have the right to formally request the removal of specific content from the platform. To initiate this process, users must provide a clear and detailed explanation of their request, specifying the exact reasons for the removal. This includes identifying which particular elements of the content are deemed inappropriate or unsatisfactory, whether it’s a specific scene, statement, or visual element. Users are encouraged to include supporting evidence, such as screenshots that illustrate the issue, along with a comprehensive description of the problem. All removal requests should be sent via email to content@indrajala.in.

        </p>

        <p style={{ textAlign: 'justify' }}>
          <br></br>
        Once the request is received, the Content Team will promptly review the submitted information to determine whether the concerns raised are valid and if the content in question warrants removal. If the Content Team concludes that the content does indeed fail to meet our standards or poses a legitimate issue, they will initiate the removal process as quickly as possible to maintain the integrity of our platform. It is crucial to understand that the final authority regarding content removal rests solely with the Content Team and the Admin Team of Indrajala Movie Makers. These teams are responsible for evaluating all submitted requests and deciding whether to approve or deny them based on a careful assessment of the content and the validity of the user’s concerns.
          </p>






        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Closing Statement</h2>
        
        <p style={{ textAlign: 'justify' }}>
        In conclusion, the Content Removal Policy of Indrajala Movie Makers LLP reflects our commitment to maintaining high standards of quality, integrity, and originality across all our platforms. We value the feedback and concerns of our users and encourage them to participate in the content oversight process by submitting removal requests when necessary. By clearly outlining the procedures for content assessment and removal, we aim to foster a responsible and respectful environment for all users. We appreciate your understanding and cooperation as we work to ensure that the content on our platforms aligns with our values and meets the expectations of our audience. Should you have any questions or require further information about our policies, please feel free to reach out to us at content@indrajala.in.
        </p>
        <br></br>
        <p style={{ textAlign: 'justify' }}>
          Thank you for choosing Indrajala. We look forward to serving you with exceptional fantasy content that captivates and inspires!
        </p>
      </main>
      <Footer />
    </div>
  );
}