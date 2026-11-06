import React from 'react';

export type CharacterPose =
  | 'idle'
  | 'wave'
  | 'coding'
  | 'certificate'
  | 'cardora-plant'
  | 'pointing'
  | 'celebrating'
  | 'curious'
  | 'jump';

export type CharacterMode = 'vector' | 'photo' | 'photo-suit';

interface MiluCharacterProps {
  pose?: CharacterPose;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  interactive?: boolean;
  mode?: CharacterMode;
}

export const MiluCharacter: React.FC<MiluCharacterProps> = ({
  pose = 'idle',
  className = '',
  size = 'md',
  onClick,
  interactive = true,
  mode = 'vector',
}) => {
  // Size mapping
  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-24 h-28',
    lg: 'w-36 h-44',
    xl: 'w-48 h-60',
  }[size];

  const photoSizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48',
  }[size];

  // Pose emoji / badge overlay for photo mode
  const poseBadges: Record<CharacterPose, { emoji: string; label: string }> = {
    idle: { emoji: '✨', label: 'Online' },
    wave: { emoji: '👋', label: 'Welcome!' },
    coding: { emoji: '💻', label: 'Building' },
    certificate: { emoji: '📜', label: 'Verified' },
    'cardora-plant': { emoji: '🌱', label: 'Cardora' },
    pointing: { emoji: '👉', label: 'Explore' },
    celebrating: { emoji: '🏆', label: 'Honours' },
    curious: { emoji: '🔍', label: 'Curious' },
    jump: { emoji: '🚀', label: 'Ready' },
  };

  // PHOTO MODE: Uses Milu's real smiling portrait with interactive glowing ring & pose badge
  if (mode === 'photo' || mode === 'photo-suit') {
    const imgSrc =
      mode === 'photo-suit'
        ? '/assets/profile/milu-official-suit.jpg'
        : '/assets/profile/milu-college-portrait.png';
    const badge = poseBadges[pose] || poseBadges.idle;

    return (
      <div
        onClick={onClick}
        className={`relative inline-block select-none ${photoSizeClasses} ${
          interactive
            ? 'cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95'
            : ''
        } ${className}`}
        role="img"
        aria-label={`Milu Jiji portrait in ${pose} state`}
      >
        {/* Ambient Outer Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00e5ff]/30 via-[#3b82f6]/20 to-[#818cf8]/30 blur-md pointer-events-none" />

        {/* Outer Rotating/Pulse Tech Ring */}
        <div className="absolute -inset-1 rounded-full p-[2px] bg-gradient-to-tr from-[#00e5ff] via-transparent to-[#38bdf8] animate-spin-slow opacity-80" />

        {/* Real Photograph Image Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-[#070d18] shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
          <img
            src={imgSrc}
            alt="Milu Jiji real portrait"
            className="w-full h-full object-cover object-top contrast-[1.04]"
          />
          {/* Subtle Glass Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Live Status Indicator Dot */}
        <div className="absolute top-0 right-1 w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#070d18] shadow-sm animate-pulse" />

        {/* Pose / Action Badge Pill */}
        <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-[#070d18]/90 border border-[#00e5ff]/40 shadow-lg flex items-center gap-1 backdrop-blur-md">
          <span className="text-[11px] leading-none">{badge.emoji}</span>
          {size !== 'sm' && (
            <span className="text-[8px] font-mono-code font-bold text-[#00e5ff] uppercase tracking-wider pr-0.5">
              {badge.label}
            </span>
          )}
        </div>
      </div>
    );
  }

  // VECTOR MODE: Faithful, elegant likeness matching Milu's facial features and uniform
  return (
    <div
      onClick={onClick}
      className={`relative inline-block select-none ${sizeClasses} ${
        interactive ? 'cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95' : ''
      } ${className}`}
      role="img"
      aria-label={`Illustrated avatar of Milu Jiji in ${pose} pose`}
    >
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Authentic Warm Golden-Wheatish Skin Tones */}
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F2CFB7" />
            <stop offset="65%" stopColor="#E0B08E" />
            <stop offset="100%" stopColor="#C99068" />
          </linearGradient>

          <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C99068" />
            <stop offset="100%" stopColor="#A86E48" />
          </linearGradient>

          {/* Natural Dark Hair with Subtle Sheen */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#251C1A" />
            <stop offset="45%" stopColor="#1B1413" />
            <stop offset="100%" stopColor="#0E0A09" />
          </linearGradient>

          {/* Amal Jyothi Autonomous Navy Uniform Vest */}
          <linearGradient id="vestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Light Blue Striped Collared Shirt */}
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>

          {/* Cyan Glow & Accents */}
          <linearGradient id="glowCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Animations via SVG Styles */}
          <style>{`
            @keyframes charBreathe {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            @keyframes charBlink {
              0%, 90%, 100% { transform: scaleY(1); }
              95% { transform: scaleY(0.1); }
            }
            @keyframes armWave {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-20deg); }
            }
            @keyframes propFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-4px) rotate(2deg); }
            }
            @keyframes typingHands {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-2px); }
            }
            @keyframes starTwinkle {
              0%, 100% { opacity: 0.3; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
            .animate-breathe { animation: charBreathe 3.5s ease-in-out infinite; transform-origin: bottom center; }
            .animate-blink { animation: charBlink 4.5s infinite; transform-origin: 100px 92px; }
            .animate-wave-arm { animation: armWave 1s ease-in-out infinite; transform-origin: 145px 145px; }
            .animate-prop { animation: propFloat 2.4s ease-in-out infinite; }
            .animate-type { animation: typingHands 0.4s ease-in-out infinite alternate; }
            .animate-star { animation: starTwinkle 1.8s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Ambient Ground Glow Aura */}
        <ellipse cx="100" cy="226" rx="55" ry="9" fill="#00e5ff" opacity="0.16" />

        {/* Main Character Body Container with Breathing Motion */}
        <g className="animate-breathe">
          {/* Back Ponytail (Low behind neck, natural hairstyle) */}
          <path
            d="M88 105 C84 135, 88 165, 96 175 C100 175, 104 175, 104 175 C112 165, 116 135, 112 105 Z"
            fill="url(#hairGrad)"
          />
          {/* Ponytail Hair Tie */}
          <ellipse cx="100" cy="120" rx="9" ry="3" fill="#00e5ff" opacity="0.8" />

          {/* Torso: Light Blue Pinstriped Collared Shirt */}
          <path
            d="M75 140 L125 140 L135 220 L65 220 Z"
            fill="url(#shirtGrad)"
          />

          {/* Subtle Vertical Stripes */}
          <line x1="86" y1="140" x2="82" y2="220" stroke="#93c5fd" strokeWidth="1.2" opacity="0.5" />
          <line x1="100" y1="140" x2="100" y2="220" stroke="#93c5fd" strokeWidth="1.2" opacity="0.5" />
          <line x1="114" y1="140" x2="118" y2="220" stroke="#93c5fd" strokeWidth="1.2" opacity="0.5" />

          {/* Amal Jyothi Navy Uniform Vest */}
          <path
            d="M75 140 L88 140 L80 220 L65 220 Z"
            fill="url(#vestGrad)"
          />
          <path
            d="M125 140 L112 140 L120 220 L135 220 Z"
            fill="url(#vestGrad)"
          />
          {/* V-Neck Vest Cutout */}
          <path
            d="M75 140 L100 174 L125 140 L135 154 L100 198 L65 154 Z"
            fill="url(#vestGrad)"
          />

          {/* Vest Buttons */}
          <circle cx="100" cy="180" r="1.8" fill="#94a3b8" />
          <circle cx="100" cy="193" r="1.8" fill="#94a3b8" />
          <circle cx="100" cy="206" r="1.8" fill="#94a3b8" />

          {/* Azure Lanyard Ribbon */}
          <path
            d="M93 140 L97 184 L103 184 L107 140"
            stroke="#00e5ff"
            strokeWidth="2.2"
            fill="none"
            opacity="0.85"
          />
          {/* Student ID Card Badge */}
          <rect
            x="94"
            y="184"
            width="12"
            height="18"
            rx="2"
            fill="#ffffff"
            stroke="#00e5ff"
            strokeWidth="0.9"
          />
          <rect x="96" y="188" width="8" height="3" fill="#0284c7" />
          <rect x="96" y="193" width="8" height="1.5" fill="#cbd5e1" />

          {/* White Shirt Collar Wings */}
          <path
            d="M86 135 L100 148 L93 148 Z"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="0.9"
          />
          <path
            d="M114 135 L100 148 L107 148 Z"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="0.9"
          />

          {/* Neck */}
          <rect x="92" y="122" width="16" height="18" rx="2" fill="url(#skinGrad)" />
          {/* Subtle Neck Shadow Under Jaw */}
          <ellipse cx="100" cy="123" rx="9" ry="2.5" fill="url(#skinShadow)" opacity="0.4" />

          {/* Head & Natural Oval Face */}
          <ellipse cx="100" cy="92" rx="35" ry="37" fill="url(#skinGrad)" />

          {/* Natural Hair Contour (NO tall bun, natural rounded crown with headband) */}
          <path
            d="M65 92 C65 54, 135 54, 135 92 C132 68, 122 58, 100 58 C78 58, 68 68, 65 92 Z"
            fill="url(#hairGrad)"
          />
          {/* Black Headband across hair */}
          <path
            d="M66 84 C68 59, 132 59, 134 84"
            stroke="#111827"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Soft Hair Parting Wisps */}
          <path
            d="M72 70 Q95 71 100 80 Q82 76 72 70 Z"
            fill="#160f0d"
            opacity="0.95"
          />
          <path
            d="M128 70 Q105 71 100 80 Q118 76 128 70 Z"
            fill="#160f0d"
            opacity="0.95"
          />

          {/* Ears with Elegant Gold Studs */}
          <circle cx="64" cy="94" r="5.5" fill="url(#skinGrad)" />
          <circle cx="63.5" cy="95" r="1.6" fill="url(#goldGrad)" />
          <circle cx="136" cy="94" r="5.5" fill="url(#skinGrad)" />
          <circle cx="136.5" cy="95" r="1.6" fill="url(#goldGrad)" />

          {/* Small Delicate Centered Forehead Bindi */}
          <circle cx="100" cy="79" r="1.3" fill="#181311" />

          {/* Separated, Elegant Natural Eyebrows (NO unibrow!) */}
          <path
            d="M76 81 Q85 76 93 80"
            stroke="#201715"
            strokeWidth="1.9"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M107 80 Q115 76 124 81"
            stroke="#201715"
            strokeWidth="1.9"
            strokeLinecap="round"
            fill="none"
          />

          {/* Natural Warm Almond Eyes */}
          <g className="animate-blink">
            {/* Left Eye */}
            <ellipse cx="85" cy="91" rx="5.8" ry="4.8" fill="#1c120f" />
            <circle cx="83.8" cy="89.5" r="1.6" fill="#ffffff" />
            <circle cx="86.5" cy="92.5" r="0.8" fill="#ffffff" opacity="0.8" />
            <path
              d="M78 89.5 Q85 86 92 89.5"
              stroke="#1b120f"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Right Eye */}
            <ellipse cx="115" cy="91" rx="5.8" ry="4.8" fill="#1c120f" />
            <circle cx="113.8" cy="89.5" r="1.6" fill="#ffffff" />
            <circle cx="116.5" cy="92.5" r="0.8" fill="#ffffff" opacity="0.8" />
            <path
              d="M108 89.5 Q115 86 122 89.5"
              stroke="#1b120f"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Soft Natural Nose */}
          <path
            d="M98 94 Q100 101 102 101"
            stroke="#b87b55"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Milu's Signature Radiant Smile Showing White Teeth */}
          {pose === 'celebrating' ? (
            <g>
              <path
                d="M89 107 Q100 120 111 107 Z"
                fill="#881337"
                stroke="#3f140d"
                strokeWidth="1.3"
              />
              <path
                d="M91 107 Q100 114 109 107 Z"
                fill="#ffffff"
              />
            </g>
          ) : (
            <g>
              {/* Outer Smile Lip Contour */}
              <path
                d="M89 106 Q100 116 111 106"
                stroke="#642416"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Clean White Upper Teeth Flash */}
              <path
                d="M91 106.8 Q100 112.5 109 106.8 Z"
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />
              {/* Lower Lip Subtle Warm Tone */}
              <path
                d="M93 113 Q100 116 107 113"
                stroke="#be5a52"
                strokeWidth="1"
                fill="none"
                opacity="0.7"
              />
            </g>
          )}

          {/* Gentle Natural Cheek Glow */}
          <ellipse cx="77" cy="99" rx="4.5" ry="2.5" fill="#f43f5e" opacity="0.18" />
          <ellipse cx="123" cy="99" rx="4.5" ry="2.5" fill="#f43f5e" opacity="0.18" />

          {/* POSES */}
          {/* 1. WAVE POSE */}
          {pose === 'wave' && (
            <>
              <path
                d="M68 150 Q56 180 62 195"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="62" cy="198" r="5.5" fill="url(#skinGrad)" />

              <g className="animate-wave-arm">
                <path
                  d="M132 150 Q150 135 158 115"
                  stroke="#1e293b"
                  strokeWidth="13"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="160" cy="110" r="6.5" fill="url(#skinGrad)" />
                <circle cx="163" cy="106" r="2.2" fill="url(#skinGrad)" />
                <circle cx="167" cy="109" r="2.2" fill="url(#skinGrad)" />
                {/* Sparkle Wave Accent */}
                <path
                  d="M172 98 L175 106 L183 108 L175 110 L172 118 L169 110 L161 108 L169 106 Z"
                  fill="#00e5ff"
                  className="animate-star"
                />
              </g>
            </>
          )}

          {/* 2. CODING POSE */}
          {pose === 'coding' && (
            <g className="animate-prop">
              <path
                d="M68 150 Q75 178 88 185"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M132 150 Q125 178 112 185"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="88" cy="185" r="5.5" fill="url(#skinGrad)" className="animate-type" />
              <circle cx="112" cy="185" r="5.5" fill="url(#skinGrad)" className="animate-type" />

              {/* Mini Laptop */}
              <polygon points="76,192 124,192 130,202 70,202" fill="#334155" stroke="#64748b" strokeWidth="1" />
              <rect x="78" y="162" width="44" height="30" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="81" y="165" width="38" height="24" rx="1.5" fill="#020617" />
              <line x1="84" y1="170" x2="105" y2="170" stroke="#00e5ff" strokeWidth="1.5" />
              <line x1="86" y1="175" x2="114" y2="175" stroke="#a78bfa" strokeWidth="1.2" />
              <line x1="86" y1="180" x2="98" y2="180" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="54" y="165" fill="#00e5ff" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.85">
                &lt;/&gt;
              </text>
              <text x="134" y="168" fill="#818cf8" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.85">
                &#123;&#125;
              </text>
            </g>
          )}

          {/* 3. CERTIFICATE POSE */}
          {pose === 'certificate' && (
            <g className="animate-prop">
              <path
                d="M68 150 Q75 170 82 178"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M132 150 Q125 170 118 178"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="82" cy="178" r="5" fill="url(#skinGrad)" />
              <circle cx="118" cy="178" r="5" fill="url(#skinGrad)" />
              <rect
                x="74"
                y="160"
                width="52"
                height="38"
                rx="3"
                fill="#fef3c7"
                stroke="#d97706"
                strokeWidth="2"
              />
              <circle cx="100" cy="179" r="6" fill="url(#goldGrad)" />
              <path d="M98 184 L96 193 L100 190 L104 193 L102 184 Z" fill="#b45309" />
              <line x1="80" y1="168" x2="120" y2="168" stroke="#d97706" strokeWidth="1.5" />
              <line x1="84" y1="172" x2="116" y2="172" stroke="#d97706" strokeWidth="1" />
              <path
                d="M65 158 L67 163 L72 165 L67 167 L65 172 L63 167 L58 165 L63 163 Z"
                fill="#fbbf24"
                className="animate-star"
              />
              <path
                d="M132 162 L134 167 L139 169 L134 171 L132 176 L130 171 L125 169 L130 167 Z"
                fill="#fbbf24"
                className="animate-star"
              />
            </g>
          )}

          {/* 4. CARDORA PLANT POSE */}
          {pose === 'cardora-plant' && (
            <g className="animate-prop">
              <path
                d="M68 150 Q80 178 92 182"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M132 150 Q120 178 108 182"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="92" cy="182" r="5" fill="url(#skinGrad)" />
              <circle cx="108" cy="182" r="5" fill="url(#skinGrad)" />
              <polygon points="94,188 106,188 104,200 96,200" fill="#c2410c" stroke="#9a3412" strokeWidth="1" />
              <path
                d="M100 188 Q100 172 100 164"
                stroke="#15803d"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M100 174 C90 170, 86 160, 94 156 C98 162, 100 168, 100 174 Z"
                fill="url(#leafGrad)"
              />
              <path
                d="M100 168 C110 164, 114 154, 106 150 C102 156, 100 162, 100 168 Z"
                fill="url(#leafGrad)"
              />
              <circle cx="94" cy="158" r="2.2" fill="#38bdf8" opacity="0.9" />
              <circle cx="100" cy="164" r="16" stroke="#4ade80" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
            </g>
          )}

          {/* 5. CELEBRATING POSE */}
          {pose === 'celebrating' && (
            <>
              <path
                d="M68 150 Q52 130 50 108"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="50" cy="106" r="5.5" fill="url(#skinGrad)" />
              <path
                d="M132 150 Q148 130 150 108"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="150" cy="106" r="5.5" fill="url(#skinGrad)" />
              <path d="M42 90 L45 96 L52 97 L46 101 L48 107 L42 103 L36 107 L38 101 L32 97 L39 96 Z" fill="#fbbf24" className="animate-star" />
              <path d="M158 90 L161 96 L168 97 L162 101 L164 107 L158 103 L152 107 L154 101 L148 97 L155 96 Z" fill="#00e5ff" className="animate-star" />
            </>
          )}

          {/* 6. POINTING POSE */}
          {pose === 'pointing' && (
            <>
              <path
                d="M68 150 Q58 178 64 195"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="64" cy="198" r="5.5" fill="url(#skinGrad)" />
              <path
                d="M132 150 Q150 162 170 165"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="170" cy="165" r="5.5" fill="url(#skinGrad)" />
              <line x1="170" y1="165" x2="182" y2="167" stroke="url(#skinGrad)" strokeWidth="3.2" strokeLinecap="round" />
              <circle cx="188" cy="168" r="4" fill="none" stroke="#00e5ff" strokeWidth="1.5" className="animate-star" />
            </>
          )}

          {/* 7. CURIOUS POSE */}
          {pose === 'curious' && (
            <g className="animate-prop">
              <path
                d="M68 150 Q80 140 88 122"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="88" cy="120" r="5" fill="url(#skinGrad)" />
              <path
                d="M132 150 Q145 160 142 175"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="142" cy="177" r="5" fill="url(#skinGrad)" />
              <line x1="142" y1="177" x2="132" y2="167" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
              <circle cx="127" cy="162" r="9" fill="none" stroke="#00e5ff" strokeWidth="2" />
              <circle cx="127" cy="162" r="7" fill="#00e5ff" opacity="0.2" />
            </g>
          )}

          {/* 8. IDLE / JUMP POSE */}
          {(pose === 'idle' || pose === 'jump') && (
            <>
              <path
                d="M68 150 Q56 182 62 200"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="62" cy="202" r="5.5" fill="url(#skinGrad)" />

              <path
                d="M132 150 Q144 182 138 200"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="138" cy="202" r="5.5" fill="url(#skinGrad)" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};
