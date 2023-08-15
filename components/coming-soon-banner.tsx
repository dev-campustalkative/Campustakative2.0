const ComingSoonBanner: React.FC = ({ text }: { text: string }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-b from-rose-400 to-pink-500 text-white text-center py-2 z-50">
      <p className="text-sm font-medium">
        🚀 Exciting News: Our Website Is Coming Soon! Stay tuned for updates. 🚀
      </p>
    </div>
  );
};

export default ComingSoonBanner;
