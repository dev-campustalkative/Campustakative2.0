"use client";

import Container from '@/components/container';

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 mmd:grid-cols-2 gap-12 pt-36 pb-10">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy:</h1>
          <p className="mb-6">
            At Campustalkative, we are committed to protecting the privacy and
            personal information of our users. This Privacy Policy outlines how we
            collect, use, disclose, and protect your information when you use our
            platform. By accessing and using Campustalkative, you agree to the
            terms and conditions outlined in this policy. Information Collection:
            We collect information from you when you create an account, update
            your profile, participate in discussions or events, or interact with
            our platform in any way. The information we collect may include your
            name, email address, educational background, employment history, and
            other relevant details.
          </p>

          <h1 className="text-4xl font-bold mb-8 mt-12 text-primary">Use of Information:</h1>
          <p className="mb-6">
            We use the information we collect to provide and improve our services,
            personalize your experience, communicate with you, facilitate
            networking opportunities, and administer our platform. We may also use
            your information for research and analytics purposes to enhance the
            effectiveness of our offerings.
          </p>

          <h1 className="text-4xl font-bold mb-8 mt-12 text-primary">Information Sharing:</h1>
          <p className="mb-6">
            We may share your information with employers and industry
            professionals for networking and career development purposes. However,
            we will never sell or rent your personal information to third parties
            without your consent unless required by law.
          </p>

          <h1 className="text-4xl font-bold mb-8 mt-12 text-primary">Data Security:</h1>
          <p className="mb-6">
            We employ industry-standard security measures to protect your
            information from unauthorized access, loss, misuse, or alteration.
            However, no method of transmission or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h1 className="text-4xl font-bold mb-8 mt-12 text-primary">Cookies and Tracking Technologies:</h1>
          <p className="mb-6">
            We use cookies and similar tracking technologies to enhance your user
            experience, analyze trends, and gather demographic information. You
            can manage your preferences regarding cookies through your browser
            settings.
          </p>

          <h1 className="text-4xl font-bold mb-8 mt-12 text-primary">Third-Party Links:</h1>
          <p className="mb-6">
            Our platform may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third parties. We encourage you to review their privacy policies
            before providing any personal information.
          </p>

          <h1 className="text-4xl font-bold mb-8 mt-12 text-primary">Children's Privacy:</h1>
          <p className="mb-6">
            Campustalkative is not intended for use by individuals under the age
            of 13. We do not knowingly collect personal information from
            children. If you believe we have inadvertently collected information
            from a child, please contact us to have it removed.
          </p>

          <h1 className="text-4xl font-bold mb-8 mt-12 text-primary">Updates to the Privacy Policy:</h1>
          <p>
            We may update this Privacy Policy from time to time to reflect changes
            in our practices or legal requirements. We will notify you of any
            material updates by posting a prominent notice on our platform or
            sending you a direct notification. If you have any questions or
            concerns about our Privacy Policy, please contact us at [email
            address].
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-md shadow-md sticky h-max">
          <h2 className="text-xl font-semibold mb-4">Contact Information:</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy
            or the practices of our platform, you can contact us at:
          </p>
          <p className="mt-4">
            Campustalkative Inc.
            <br />
            1234 Example Street,
            <br />
            City, Country, Zip Code
            <br />
            Email: contact@campustalkative.com
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
