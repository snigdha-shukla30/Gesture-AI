import React, { useEffect, useRef } from 'react';
import { GraduationCap, Building2, Briefcase, Users, Heart } from 'lucide-react';

export default function UseCase() {
  const useCaseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = '1';
                const initialTransform = el.style.transform;
                if (initialTransform.includes('translateY')) {
                  el.style.transform = initialTransform.replace(/translateY\([^)]+\)/, 'translateY(0)');
                } else if (initialTransform.includes('translateX')) {
                  el.style.transform = initialTransform.replace(/translateX\([^)]+\)/, 'translateX(0)');
                } else {
                  el.style.transform = 'translateY(0)';
                }
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = useCaseRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const UseCaseCard = ({ icon: Icon, title, description, animate, delay }) => (
    <div
      data-animate
      className="flex flex-col items-center text-center"
      style={{
        opacity: 0,
        transform: animate,
        transition: `opacity 0.8s ease-in-out ${delay}s, transform 0.8s ease-in-out ${delay}s`,
      }}
    >
      <div
        className="rounded-full flex items-center justify-center mb-4"
        style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #9A5ACB 0%, #7B3FA3 100%)',
          boxShadow: '0 8px 24px rgba(154, 90, 203, 0.3)',
        }}
      >
        <Icon size={40} color="#ffffff" strokeWidth={2} />
      </div>
      <h3
        className="text-white mb-3"
        style={{
          fontFamily: "'Baloo Bhai 2', sans-serif",
          fontWeight: 800,
          fontSize: '20px',
          lineHeight: '1.4em',
          maxWidth: '280px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: '1.8em',
          color: '#9CA3AF',
          maxWidth: '300px',
        }}
      >
        {description}
      </p>
    </div>
  );

  return (
    <div
      ref={useCaseRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6"
      style={{
        background: '#1F1E23',
      }}
    >
      {/* Main Title */}
      <h2
        data-animate
        className="text-white text-center mb-6"
        style={{
          fontFamily: "'Baloo Bhai 2', sans-serif",
          fontWeight: 800,
          fontSize: '42px',
          lineHeight: '1.3em',
          maxWidth: '800px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
        }}
      >
        The best site to understand mute people.
      </h2>

      {/* Description */}
      <p
        data-animate
        className="text-center mb-16"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.8em',
          color: '#9CA3AF',
          maxWidth: '650px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.8s ease-in-out 0.2s, transform 0.8s ease-in-out 0.2s',
        }}
      >
        Gesture AI is built to bridge the communication gap between non-verbal individuals and the rest of the world. Through real-time AI translation, it transforms sign language into words, making conversations effortless, inclusive, and full of understanding — because connection should never be limited by silence.
      </p>

      {/* Use Cases Grid */}
      <div className="w-full max-w-6xl mb-16">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <UseCaseCard
            icon={GraduationCap}
            title="Schools for special education"
            description="Gesture AI helps teachers and students communicate seamlessly, making lessons more interactive. It ensures every student, regardless of ability, can participate fully and confidently."
            animate="translateY(20px)"
            delay={0.4}
          />
          <UseCaseCard
            icon={Building2}
            title="Hospitals and reception desks"
            description="Patients can express themselves clearly without struggling to speak. Staff can understand needs instantly, improving care and reducing stress for everyone."
            animate="translateY(20px)"
            delay={0.5}
          />
          <UseCaseCard
            icon={Briefcase}
            title="Public service offices"
            description="From government counters to local offices, communication becomes effortless. Non-verbal individuals can access services quickly, accurately, and independently."
            animate="translateY(20px)"
            delay={0.6}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <UseCaseCard
            icon={Users}
            title="Businesses improving accessibility"
            description="Companies can make workplaces and customer interactions more inclusive. Gesture AI helps staff and clients communicate smoothly, enhancing service quality."
            animate="translateY(20px)"
            delay={0.8}
          />
          <UseCaseCard
            icon={Heart}
            title="Families communicating"
            description="Make home conversations more natural and connected. Gesture AI helps loved ones understand each other, turning gestures into meaningful words."
            animate="translateY(20px)"
            delay={1.0}
          />
        </div>
      </div>

      {/* CTA Button */}
      <div
        data-animate
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.8s ease-in-out 1.2s, transform 0.8s ease-in-out 1.2s',
        }}
      >
        <div
          className="rounded-lg"
          style={{
            padding: '2px',
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(131, 131, 131, 0.6) 100%)',
            borderRadius: '10px',
          }}
        >
          <button
            className="flex items-center justify-center gap-2.5 text-white rounded-lg hover:scale-105 transition-transform duration-300"
            style={{
              background: 'linear-gradient(90deg, #345DB7 0%, #26255A 100%)',
              border: 'none',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(52, 93, 183, 0.3), inset 0px 2px 4px rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              padding: '14px 32px',
            }}
          >
            See Gesture AI in Action
          </button>
        </div>
      </div>
    </div>
  );
}
