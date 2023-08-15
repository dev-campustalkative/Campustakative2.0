const ComingSoonBanner: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-b from-rose-400 to-pink-500 text-white text-center py-2 z-50 transform transition-transform animate-ping">
      <p className="text-sm font-medium">{children}</p>
    </div>
  );
};

export default ComingSoonBanner;
