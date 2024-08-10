// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Copyright Policy | Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
          name="description" 
          content="Learn about Indrajala's Copyright policy for our OTT platform.!" 
        />
      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          COPY RIGHT  POLICY
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 5 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Copyright  Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        The copyright policy of Indrajala Movie Makers provides a comprehensive overview of the measures in place to protect the content available on the Indrajala OTT platform and its associated mobile applications. This policy emphasizes the importance of intellectual property rights, stating that Indrajala holds exclusive rights to all content created and distributed through its platforms, including films, shows, and promotional materials. Unauthorized use, reproduction, or distribution of this copyrighted material is strictly prohibited and may result in legal action. The policy also encourages users to report any suspected copyright infringements, reinforcing Indrajala's commitment to safeguarding the rights of creators and ensuring responsible use of content. By establishing clear guidelines, the copyright policy not only informs users of their responsibilities when interacting with the platform but also underscores Indrajala Movie Makers' dedication to protecting its intellectual property and fostering a respectful creative environment in the digital landscape.
        </p>
      

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}> Ownerships and Copyrights</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        Indrajala Movie Makers LLP is the exclusive owner of all content available on the Indrajala LLP platform, which encompasses a wide range of materials, including films, shows, and other multimedia offerings. This ownership grants Indrajala the sole authority to share, reproduce, and distribute the content on the platform. It is crucial to note that Indrajala LLP does not grant access or rights to any external parties, including individuals or entities outside of the Indrajala Admin team, to share, hold, distribute, or otherwise utilize the content in any capacity.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        The policy clearly stipulates that only authorized personnel within the Indrajala Admin team have the rights to manage and disseminate the platform's content. Any attempts by individuals who are not part of this authorized team to share, distribute, or telecast any part or the entirety of the content are strictly prohibited. This restriction also extends to activities such as recording, reproducing, or any form of content manipulation, ensuring that the integrity and ownership of the material are maintained.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        By establishing these clear ownership and distribution rights, Indrajala Movie Makers LLP aims to protect its intellectual property from unauthorized use and exploitation. This policy safeguards the company’s creative assets, reinforces its position as the sole authority over its content, and promotes a responsible and ethical approach to content management and distribution within the digital landscape. Ultimately, this commitment to protecting its content serves to uphold the standards of quality and integrity that Indrajala Movie Makers strives to maintain across its platform.
        </p>

        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Protection Against Unauthorized Usages</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        Indrajala Movie Makers LLP produces content that is classified as explicit, and any unauthorized use of this material—whether through recording, distribution, telecasting, or displaying on external platforms such as X (formerly Twitter), YouTube, Telegram, or any other streaming service—is strictly prohibited. Engaging in such activities will result in significant legal consequences for the individuals involved. Those found misusing the content will be held accountable for the damages incurred as a result of their actions, which may include financial restitution to Indrajala for any losses suffered due to the unauthorized use.The company is committed to vigorously protecting its intellectual property rights, and as such, unauthorized access or usage will not be tolerated under any circumstances. Legal actions will be taken swiftly and decisively, adhering to the rules and regulations of the land to ensure compliance with copyright laws. This includes the possibility of civil or criminal charges against those who infringe upon Indrajala's content rights.
        </p>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        Indrajala strongly advises individuals to avoid involvement in any illegal activities concerning the misuse of its content. The company’s stringent stance on copyright infringement serves to uphold the integrity of its creative works and maintain a fair and ethical environment within the industry. By clearly outlining these policies, Indrajala Movie Makers LLP aims to deter unauthorized use of its content and to protect the rights and interests of its creators and stakeholders.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Closing Statement</h2>
        <p style={{ textAlign: 'justify' }}>
        <br></br>
        In summary, Indrajala Movie Makers LLP takes a firm stance on protecting its copyright and ownership rights regarding the content available on the Indrajala OTT platform and associated mobile applications. The copyright policy serves as a crucial framework that not only safeguards the intellectual property created by Indrajala but also informs users of their responsibilities when engaging with the platform. By asserting exclusive rights over its films, shows, and promotional materials, Indrajala ensures that any unauthorized use, reproduction, or distribution is strictly prohibited and subject to legal action. This policy empowers users to report any suspected copyright infringements, reinforcing the company’s commitment to fostering a responsible and respectful creative environment in the digital landscape.</p>

        <p style={{ textAlign: 'justify' }}>
        <br></br>
        Furthermore, the ownership and copyright policy clearly delineates that only authorized personnel within the Indrajala Admin team have the rights to manage and disseminate the platform's content. Any attempts by unauthorized individuals to share, record, or manipulate this content will be met with strict legal repercussions. Indrajala is dedicated to vigorously enforcing its intellectual property rights and emphasizes the importance of compliance with copyright laws to deter any misuse of its content. By outlining these stringent measures, Indrajala Movie Makers LLP aims to uphold the quality and integrity of its creative works while protecting the rights and interests of its creators and stakeholders. Ultimately, the company’s unwavering commitment to safeguarding its content ensures that it remains a leading force in the industry, providing users with a secure and enjoyable viewing experience.






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