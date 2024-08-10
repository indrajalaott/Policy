// src/app/refund-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Various Policies  | Indrajala - Your Go-To OTT Platform for Fantasy Content</title>
        <meta 
          name="description" 
          content="Various Policies - Indrajala Movie Makers LLP. " 
        />
      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
          BRIEF ON POLICIES
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 3 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        
        <h2 style={{ fontWeight: 'bold' }}>About </h2>
        <p style={{ textAlign: 'justify' }}>
          This page serves as an introduction to the various policies integral to the Indrajala Portal, outlining the rules and guidelines that govern the use of the Indrajala Product. These policies aim to protect user rights, ensure legal compliance, and provide operational clarity. They include the Terms of Use, which detail user conduct and account security; the Privacy Policy, explaining the handling of personal information; content guidelines specifying standards for available materials; and copyright policies emphasizing respect for intellectual property rights. Each policy is accompanied by detailed explanations to enhance understanding, fostering accountability and trust among users and empowering them to navigate the platform confidently.
        </p>
        
        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>What the Policies Mean</h2>
        <p style={{ textAlign: 'justify' }}>
          The policies established by Indrajala LLP are designed to provide users with a clear and transparent understanding of the rules and governance that govern their interactions with our services. They serve as a comprehensive guide, detailing the rights and responsibilities of users, ensuring that everyone is informed about how their data is handled and protected.

          One key aspect of these policies is the commitment to data protection. Indrajala LLP takes the privacy of its users seriously and has implemented robust measures to safeguard personal information. The policies outline how user data is collected, used, and shared, emphasizing our dedication to maintaining confidentiality and security. This transparency helps users understand the processes involved in data publication and the steps taken to protect their information from unauthorized access.
        </p>

        <p style={{ textAlign: 'justify' }}>
          In addition to data protection, the policies address important operational aspects such as refunds and cancellations. Users are provided with clear guidelines on the conditions and procedures for requesting refunds or canceling services, ensuring that they have access to fair and straightforward processes.

          Furthermore, the policies include provisions for child protection, reflecting our responsibility to safeguard minors who may use our services. We define our approach to ensuring that content is appropriate for all age groups, reinforcing our commitment to creating a safe environment for young users.
        </p>

        <p style={{ textAlign: 'justify' }}>
          By articulating these essential components, Indrajala LLP aims to foster trust and confidence among its users. Our policies not only clarify the expectations and obligations of both the company and its users but also demonstrate our commitment to ethical practices and responsible governance in all aspects of our operations. This comprehensive approach ensures that users can engage with our services confidently, knowing that their rights are protected and their interests are prioritized.
        </p>

        <h2 style={{ fontWeight: 'bold', marginTop: '2rem' }}>Point of Contacts</h2>
        <p style={{ textAlign: 'justify' }}>
          The table outlining the various points of contact in the policies serves to guide users on whom to reach out to for specific actions or inquiries, ensuring effective communication and efficient resolution of issues with Indrajala LLP's services. Each contact is designated for particular purposes, allowing users to quickly identify the appropriate person or department for their concerns, such as customer support, technical assistance, data protection inquiries, and policy-related questions. By specifying the actions users should take when contacting each point of contact, the table enhances the user experience and promotes transparency and accountability within the organization. This clear delineation of roles not only improves communication efficiency but also assures users that their concerns will be directed to the right personnel for quicker resolutions, ultimately demonstrating Indrajala LLP's commitment to customer service and user satisfaction.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Sl. No.</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Point of Contact</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email Address</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Accounts</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>accounts@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This contact is dedicated to resolving all account-related issues. Users can reach out for assistance with access problems, account deletion, subscription cancellations, and any other inquiries related to their accounts. Prompt support in this area ensures that users have seamless access to the platform's services.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>itsupport@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This secondary email provides additional support for account-related issues, reinforcing the availability of help for users experiencing difficulties.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Data Officer</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>cisoteam@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>The Data Officer handles all inquiries related to data protection. This includes age restrictions, child protection measures, and requests for the removal of content. This role highlights Indrajala LLP’s commitment to safeguarding user data and complying with relevant regulations.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Privacy</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>ciso@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This contact focuses on privacy inquiries. Users can reach out regarding any concerns related to the handling of their personal information, ensuring transparency and trust in data management practices.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>privacy@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This additional email allows for more direct communication regarding privacy concerns, reinforcing the importance of user confidentiality.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>4</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Broken Links</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>broken-links@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Users can report any broken links or malfunctioning features on the platform. This contact is crucial for maintaining a smooth user experience and ensuring that the platform remains functional and user-friendly.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>5</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Vulnerability Reporting (VRP)</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>vrp@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This email is designated for reporting security issues and vulnerabilities within the system. Users can alert Indrajala LLP about potential threats, enabling the organization to address security concerns proactively.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>itsupport@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This email also serves as a point of contact for reporting vulnerabilities, ensuring that users have multiple avenues to communicate security-related issues.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>cisoteam@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This contact can be used for additional support regarding security concerns, underscoring the importance of data protection.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>ciso@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This email reinforces the ability to report security issues directly to the privacy officer, enhancing accountability and response efficiency.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>6</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>General Aspects</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>info@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This contact is intended for general inquiries about Indrajala LLP’s services, policies, and other non-specific concerns. It provides a straightforward way for users to get answers to their questions.</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>7</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Payments</strong></td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>payments@indrajala.in</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>This email addresses all issues related to payments and banking transactions. Users can contact this point of support for assistance with billing inquiries, payment issues, and related financial matters. Prompt assistance in this area is essential for ensuring user satisfaction with transactions on the platform.</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}