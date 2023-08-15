const ComingSoonBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-b from-rose-400 to-pink-500 text-white py-4 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2">
            🚀 Exciting News: Our Website Is Coming Soon!
          </h2>
          <p className="text-lg mb-4">
            Stay tuned for updates as we prepare to launch our new and improved
            website. We're excited to share a range of exciting features and
            products with you!
          </p>
          <p className="text-sm">
            Follow us on social media to stay up-to-date with our progress and
            announcements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonBanner;
