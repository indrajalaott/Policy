// src/app/user-conduct-policy/page.js
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function UserConductPolicy() {
  return (
    <div>
      <Head>
        <title>User Conduct Policy | Indrajala - OTT Platform for Your Fantasy</title>
        <meta 
          name="description" 
          content="Detailed User Conduct Policy of Indrajala Movie Makers LLP" 
        />
      </Head>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: 'calc(15px + 2vw)', // Responsive font size
        }}>
         USER CONDUCT POLICY
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <p style={{ margin: 0 }}>Time to Read: 5 Minutes Estimated</p>
          <p style={{ margin: 0 }}>Last Modified: 09th Aug 2024</p>
        </div>
        <section>
          <h2 style={{ fontWeight: 'bold' }}>Introduction</h2>
          <p style={{ textAlign: 'justify' }}>
            At Indrajala Movie Makers LLP, we are committed to providing a safe, enjoyable, and respectful environment for all users on our OTT platform. To maintain the integrity of our content and protect the rights of our creators and users, we have established this comprehensive User Conduct Policy. By accessing and using our services, you agree to adhere to these guidelines and contribute to a positive community atmosphere.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Our policy aims to ensure fair usage of our platform while safeguarding the interests of all stakeholders, including content creators, intellectual property owners, and users. We believe in fostering an environment where everyone can freely enjoy our fantasy content without fear of misuse or unauthorized distribution.
          </p>
        </section>

        <section>
          <h2 style={{ fontWeight: 'bold' }}>Prohibited Activities</h2>
          <p style={{ textAlign: 'justify' }}>
            To protect our content, systems, and community, users are strictly prohibited from engaging in the following activities:
          </p>

          <h3 style={{ fontWeight: 'bold' }}>Recording Content</h3>
          <p style={{ textAlign: 'justify' }}>
            Users are not allowed to record any content available on the Indrajala platform, including making video recordings, audio recordings, or any form of capturing content for personal or public use. Recording our content without permission violates our copyright and intellectual property rights and may lead to legal action.
          </p>
          <p style={{ textAlign: 'justify' }}>
            We understand the desire to share memorable moments from our fantasy series, but recording the content infringes on the rights of our creators and compromises the exclusivity of our offerings. Our platform is designed to provide a seamless viewing experience, and recording would disrupt this intent.
          </p>

          <h3 style={{ fontWeight: 'bold' }}>Taking Screenshots and Sharing</h3>
          <p style={{ textAlign: 'justify' }}>
            Taking screenshots of any content on our platform and sharing them on the internet or through any other means is strictly prohibited. Sharing screenshots can lead to unauthorized distribution of our materials and compromises the integrity of our offerings. Users must respect our intellectual property rights and refrain from disseminating any part of our content.
          </p>
          <p style={{ textAlign: 'justify' }}>
            While we encourage users to engage with our content and share their excitement with others, sharing screenshots or clips on social media or other platforms without permission is not allowed. This protects the exclusivity of our content and ensures that our creators receive the recognition and compensation they deserve for their work.
          </p>

          <h3 style={{ fontWeight: 'bold' }}>Testing or Unauthorized Activities</h3>
          <p style={{ textAlign: 'justify' }}>
            Users are not permitted to conduct any testing, hacking, or unauthorized activities that could disrupt, damage, or interfere with our systems and services. This includes attempting to bypass security measures, access restricted areas, or manipulate any features of the platform. Engaging in such activities is considered a violation of our terms of service and will result in immediate action against the user.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Our platform is designed with robust security measures to protect user data and ensure a seamless viewing experience. Attempting to bypass these safeguards or engage in unauthorized activities can compromise the stability and reliability of our services. We take such violations seriously and will take appropriate action to maintain the integrity of our platform.
          </p>
        </section>

        <section>
          <h2 style={{ fontWeight: 'bold' }}>Responsible Usage</h2>
          <p style={{ textAlign: 'justify' }}>
            We request all users to engage with our content in a responsible manner. Enjoying the material on our platform is encouraged, but it should be done within the boundaries of the User Conduct Policy. Users are expected to:
          </p>
          <ul>
            <li>Watch content without attempting to manipulate or damage our systems.</li>
            <li>Report any suspicious activities or violations of this policy to our support team for prompt action.</li>
            <li>Be respectful to fellow users and uphold a positive community atmosphere while using our services.</li>
          </ul>
          <p style={{ textAlign: 'justify' }}>
            By adhering to these guidelines, users contribute to a safe and enjoyable experience for everyone on our platform. We believe in fostering a community of responsible users who respect the rights of creators and fellow viewers.
          </p>
        </section>

        <section>
          <h2 style={{ fontWeight: 'bold' }}>Consequences of Violating the Policy</h2>
          <p style={{ textAlign: 'justify' }}>
            Violations of this User Conduct Policy may result in immediate action, including but not limited to:
          </p>
          <ul>
            <li>Suspension or termination of the user's account.</li>
            <li>Legal action for any infringements of copyright or intellectual property rights.</li>
            <li>Reporting to appropriate authorities if necessary.</li>
          </ul>
          <p style={{ textAlign: 'justify' }}>
            We take violations of our policy seriously and will not hesitate to take necessary steps to protect our content, systems, and community. Users found engaging in prohibited activities may face consequences ranging from account suspension to legal action, depending on the severity of the violation.
          </p>
        </section>

        <section>
          <h2 style={{ fontWeight: 'bold' }}>Conclusion</h2>
          <p style={{ textAlign: 'justify' }}>
            Indrajala Movie Makers LLP values the integrity of its content and the safety of its users. By following this User Conduct Policy, you contribute to a respectful and enjoyable experience for everyone. We appreciate your cooperation and understanding in adhering to these guidelines.
          </p>
          <p style={{ textAlign: 'justify' }}>
            If you have any questions or concerns about this policy or encounter any issues while using our platform, please contact our dedicated support team at <a href="mailto:support@indrajala.in">support@indrajala.in</a>. We are committed to addressing your concerns promptly and ensuring a positive experience for all users.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Thank you for being a responsible user of Indrajala, the OTT platform for your fantasy. Together, let's create a vibrant community that respects the rights of creators and fosters a safe environment for everyone to enjoy our exceptional fantasy content.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}