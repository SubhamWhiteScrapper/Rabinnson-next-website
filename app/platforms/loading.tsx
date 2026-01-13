function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-3 bg-[#0a2540] border border-white 
                before:content-[''] before:absolute before:left-0 before:right-0 before:-top-1.5 
                before:border-l-[12px] before:border-r-[12px] before:border-l-transparent before:border-r-transparent 
                before:border-b-[6px] before:border-b-[#0a2540]
                after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 
                after:border-l-[12px] after:border-r-[12px] after:border-l-transparent after:border-r-transparent 
                after:border-t-[6px] after:border-t-[#0a2540]"
              style={{
                left: `calc(50% + ${["-28px", "-14px", "14px", "28px", "14px", "-14px", "0px"][i]})`,
                top: `calc(50% + ${["0px", "22px", "22px", "0px", "-22px", "-22px", "0px"][i]})`,
                transform: 'translate(-50%, -50%)',
                animation: 'honeycombPulse 1.4s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes honeycombPulse {
          0%, 100% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;