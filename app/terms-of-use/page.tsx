'use client';

import Container from '@/components/container';
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <Container>
      <div className="pt-36 pb-10">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Terms and Conditions
          </h1>
          <p className="mb-6">
            Please refer to the full Terms and Conditions document for detailed
            information on your rights and obligations when using
            Campustalkative. The document covers topics such as user
            responsibilities, intellectual property rights, limitations of
            liability, dispute resolution, and governing law. By accessing and
            using Campustalkative, you agree to abide by these Terms and
            Conditions. If you do not agree with any part of these terms, you
            should not use our platform. For the complete and detailed Terms and
            Conditions, please visit [URL] or contact us at [email address] if
            you have any questions.
          </p>

          <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
            Terms and Conditions
          </h2>
          <p className="mb-6">
            These Terms and Conditions ("Agreement") govern your use of the
            Campustalkative platform ("Platform") provided by Campustalkative
            ("Company," "we," or "us"). By accessing or using the Platform, you
            agree to be bound by these Terms and Conditions. If you do not agree
            with any part of this Agreement, you should not use the Platform.
          </p>

          <h2 className="text-2xl font-bold mb-8 mt-12 text-primary">
            User Responsibilities
          </h2>
          <ul>
            <li>
              1.1 You are solely responsible for the accuracy, completeness, and
              legality of the information you provide on the Platform.
            </li>
            <li>
              1.2 You agree not to engage in any unlawful, harmful, or abusive
              behavior while using the Platform, including but not limited to
              harassment, discrimination, or unauthorized access to others'
              accounts.
            </li>
            <li>
              1.3 You are responsible for maintaining the confidentiality of
              your account credentials and agree not to share them with third
              parties.
            </li>
            <li>
              1.4 You acknowledge that the content and materials on the Platform
              are for informational purposes only, and you should independently
              verify any information before relying on it.
            </li>
          </ul>

          {/* Include the other sections here following the same structure as Privacy Policy */}
        </div>
        <div className="bg-ct-primary-300 p-8 rounded-md shadow-md sticky h-max my-10">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and
            Conditions or the practices of our platform, you can contact us at:
          </p>
          <p className="mt-4 text-ct-yellow-1000">
            Campustalkative Inc.
            <br />
            1234 Example Street,
            <br />
            Abuja, Nigeria, 100678
            <br />
            <Link href="mailto:contact@campustalkative.com">
              contact@campustalkative.com
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TermsAndConditions;
