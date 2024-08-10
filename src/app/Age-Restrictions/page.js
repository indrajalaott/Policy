// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
      <title>Age Restriction Policy | Indrajala - Your Go-To OTT Platform for Fantasy Content</title>
<meta 
    name="description" 
    content="Explaintion of Age Restriction Policy of Indrajala Movie Makers " 
/>

      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          AGE RESTRICTION  POLICY
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About Our Policy</h2>
        <p style={{ textAlign: 'justify' }}>
        The policy states that the minimum age for accessing the platform is 18 years old. Any individual below this age is not considered an intended user of the platform and its services. The age restriction explicitly defines the legal minimum age as 18, with some cases requiring 21 years. We do not accept or allow any users who are under the specified age limit.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Regarding Age Restricted Contents</h2>
        <p style={{ textAlign: 'justify' }}>
        Indrajala is a platform that features content specifically designed for mature audiences, containing sexually explicit materials. This content is produced by the in-house film production team at Indrajala Movie Makers. Given the explicit nature of the materials, it is strongly advised that individuals under the age of 18 refrain from accessing or viewing the platform, as it is intended for adult audiences only. Users are cautioned to consider the age restrictions in place to ensure a safe and appropriate viewing experience.
        </p>
        

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Regarding Age Restrictions</h2>
        <p style={{ textAlign: 'justify' }}>
        Regarding age restrictions, the platform strictly prohibits access to any users who are under 18 years old. It is imperative that individuals in this age group do not attempt to access the platform, as it contains content that is intended for adult audiences. Indrajala Movie Makers has the right to take action against any user found in violation of this policy, which includes the suspension, termination, or removal of their account to ensure adherence to these age-related regulations. The platform prioritizes the safety and well-being of its user base and explicitly states that it does not intend to collect any personal information or data from users who are younger than 18. This policy is in place to protect minors from inappropriate content and to maintain a responsible viewing environment. Consequently, it is strongly advised that all users confirm they meet the minimum age requirement of 18 before accessing any materials on the platform. This approach is part of Indrajala’s commitment to uphold ethical standards and promote a safe, age-appropriate experience for all users.







        </p>
        


        
       
      </main>
      <Footer />
    </div>
  );
}