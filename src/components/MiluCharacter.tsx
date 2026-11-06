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

interface MiluCharacterProps {
  pose?: CharacterPose;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  interactive?: boolean;
}

export const MiluCharacter: React.FC<MiluCharacterProps> = ({
  pose = 'idle',
  className = '',
  size = 'md',
  onClick,
  interactive = true,
}) => {
  // Size mapping
  const sizeClasses = {
    sm: 'w-16 h-20',
    md: 'w-24 h-28',
    lg: 'w-36 h-44',
    xl: 'w-48 h-60',
  }[size];

  return (
    <div
      onClick={onClick}
      className={`relative inline-block select-none ${sizeClasses} ${
        interactive ? 'cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95' : ''
      } ${className}`}
      role="img"
      aria-label={`Cartoon avatar of Milu Jiji in ${pose} pose`}
    >
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Skin and Hair Gradients */}
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C68962" />
            <stop offset="100%" stopColor="#AD714D" />
          </linearGradient>

          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#251C1A" />
            <stop offset="100%" stopColor="#140E0D" />
          </linearGradient>

          <linearGradient id="vestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>

          <linearGradient id="glowCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Plant Leaf Gradient */}
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
              50% { transform: rotate(-22deg); }
            }
            @keyframes propFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-4px) rotate(3deg); }
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
            .animate-blink { animation: charBlink 4s infinite; transform-origin: 100px 92px; }
            .animate-wave-arm { animation: armWave 1s ease-in-out infinite; transform-origin: 145px 145px; }
            .animate-prop { animation: propFloat 2.4s ease-in-out infinite; }
            .animate-type { animation: typingHands 0.4s ease-in-out infinite alternate; }
            .animate-star { animation: starTwinkle 1.8s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Ambient Glow Aura */}
        <ellipse cx="100" cy="225" rx="55" ry="10" fill="#00e5ff" opacity="0.18" />

        {/* Main Character Body Container with Breathing Motion */}
        <g className="animate-breathe">
          {/* Back Ponytail / Bun */}
          <circle cx="100" cy="52" r="28" fill="url(#hairGrad)" />
          <path
            d="M85 65 C85 45, 115 45, 115 65 C115 80, 85 80, 85 65 Z"
            fill="#140E0D"
          />

          {/* Torso / Upper Body */}
          {/* Inner Light Blue Striped Collared Shirt */}
          <path
            d="M75 140 L125 140 L135 220 L65 220 Z"
            fill="url(#shirtGrad)"
          />

          {/* Thin Vertical Stripes on Shirt */}
          <line x1="88" y1="140" x2="84" y2="220" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />
          <line x1="100" y1="140" x2="100" y2="220" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />
          <line x1="112" y1="140" x2="116" y2="220" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />

          {/* Formal Dark Waistcoat / Vest */}
          <path
            d="M75 140 L90 140 L82 220 L65 220 Z"
            fill="url(#vestGrad)"
          />
          <path
            d="M125 140 L110 140 L118 220 L135 220 Z"
            fill="url(#vestGrad)"
          />

          {/* Waistcoat V-Neck Trim */}
          <path
            d="M75 140 L100 175 L125 140 L135 155 L100 200 L65 155 Z"
            fill="url(#vestGrad)"
          />

          {/* Vest Buttons */}
          <circle cx="100" cy="182" r="2" fill="#cbd5e1" />
          <circle cx="100" cy="195" r="2" fill="#cbd5e1" />
          <circle cx="100" cy="208" r="2" fill="#cbd5e1" />

          {/* Azure / Amal Jyothi ID Badge Lanyard ribbon */}
          <path
            d="M93 140 L97 185 L103 185 L107 140"
            stroke="#00e5ff"
            strokeWidth="2.5"
            fill="none"
            opacity="0.85"
          />
          {/* Little Lanyard ID Card */}
          <rect
            x="94"
            y="185"
            width="12"
            height="18"
            rx="2"
            fill="#f8fafc"
            stroke="#00e5ff"
            strokeWidth="1"
          />
          <rect x="96" y="190" width="8" height="3" fill="#0284c7" />
          <rect x="96" y="195" width="8" height="1.5" fill="#94a3b8" />

          {/* Formal Shirt Collar Wings */}
          <path
            d="M86 134 L100 148 L92 148 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="1"
          />
          <path
            d="M114 134 L100 148 L108 148 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="1"
          />

          {/* Neck */}
          <rect x="92" y="120" width="16" height="20" rx="3" fill="url(#skinGrad)" />

          {/* Head & Face */}
          <ellipse cx="100" cy="92" rx="36" ry="38" fill="url(#skinGrad)" />

          {/* Natural Hair Styling - Front and Sides */}
          <path
            d="M64 90 C62 60, 75 50, 100 50 C125 50, 138 60, 136 90 C132 70, 122 62, 100 62 C78 62, 68 70, 64 90 Z"
            fill="url(#hairGrad)"
          />
          {/* Soft Hair Parting & Side Bangs */}
          <path
            d="M72 70 Q95 72 102 85 Q80 78 72 70 Z"
            fill="#231917"
            opacity="0.9"
          />
          <path
            d="M128 70 Q105 72 98 85 Q120 78 128 70 Z"
            fill="#231917"
            opacity="0.9"
          />

          {/* Ears with Gold Studs */}
          <circle cx="64" cy="94" r="6" fill="url(#skinGrad)" />
          <circle cx="63" cy="95" r="1.8" fill="url(#goldGrad)" />
          <circle cx="136" cy="94" r="6" fill="url(#skinGrad)" />
          <circle cx="137" cy="95" r="1.8" fill="url(#goldGrad)" />

          {/* Forehead Bindi */}
          <circle cx="100" cy="80" r="1.8" fill="#1e1b18" />

          {/* Eyebrows (neatly shaped arches) */}
          <path
            d="M80 82 Q88 78 95 82"
            stroke="#1c1412"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M105 82 Q112 78 120 82"
            stroke="#1c1412"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Expressive Warm Dark Almond Eyes */}
          <g className="animate-blink">
            {/* Left Eye */}
            <ellipse cx="87" cy="92" rx="6.5" ry="6.5" fill="#1f1614" />
            <circle cx="85.5" cy="90" r="2.2" fill="#ffffff" />
            <circle cx="89" cy="94" r="1" fill="#ffffff" />
            {/* Eyelash accent */}
            <path d="M80 90 Q87 85 94 90" stroke="#1f1614" strokeWidth="1.8" fill="none" strokeLinecap="round" />

            {/* Right Eye */}
            <ellipse cx="113" cy="92" rx="6.5" ry="6.5" fill="#1f1614" />
            <circle cx="111.5" cy="90" r="2.2" fill="#ffffff" />
            <circle cx="115" cy="94" r="1" fill="#ffffff" />
            {/* Eyelash accent */}
            <path d="M106 90 Q113 85 120 90" stroke="#1f1614" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>

          {/* Soft Nose */}
          <path
            d="M98 97 Q100 102 102 102"
            stroke="#945738"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Warm Confident Smile */}
          {pose === 'celebrating' ? (
            <path
              d="M90 108 Q100 120 110 108 Z"
              fill="#991b1b"
              stroke="#1c1412"
              strokeWidth="1.5"
            />
          ) : (
            <>
              <path
                d="M91 108 Q100 117 109 108"
                stroke="#451a03"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Clean gentle smile teeth flash */}
              <path
                d="M93 109 Q100 114 107 109 Z"
                fill="#ffffff"
                opacity="0.9"
              />
            </>
          )}

          {/* Cheeks - Radiant subtle blush */}
          <ellipse cx="78" cy="99" rx="4.5" ry="2.5" fill="#f43f5e" opacity="0.25" />
          <ellipse cx="122" cy="99" rx="4.5" ry="2.5" fill="#f43f5e" opacity="0.25" />

          {/* POSE-SPECIFIC ARMS AND PROPS */}

          {/* 1. WAVE POSE */}
          {pose === 'wave' && (
            <>
              {/* Left arm resting */}
              <path
                d="M68 150 Q56 180 62 195"
                stroke="#1e293b"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="62" cy="198" r="6" fill="url(#skinGrad)" />

              {/* Right arm waving in air */}
              <g className="animate-wave-arm">
                <path
                  d="M132 150 Q150 135 158 115"
                  stroke="#1e293b"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="160" cy="110" r="7" fill="url(#skinGrad)" />
                {/* Waving fingers */}
                <circle cx="163" cy="106" r="2.5" fill="url(#skinGrad)" />
                <circle cx="167" cy="109" r="2.5" fill="url(#skinGrad)" />

                {/* Friendly wave sparkle */}
                <path
                  d="M172 98 L175 106 L183 108 L175 110 L172 118 L169 110 L161 108 L169 106 Z"
                  fill="#00e5ff"
                  className="animate-star"
                />
              </g>
            </>
          )}

          {/* 2. CODING POSE (with sleek mini laptop & code floaters) */}
          {pose === 'coding' && (
            <g className="animate-prop">
              {/* Left & Right arms reaching forward to type */}
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

              {/* Typing hands */}
              <circle cx="88" cy="185" r="6" fill="url(#skinGrad)" className="animate-type" />
              <circle cx="112" cy="185" r="6" fill="url(#skinGrad)" className="animate-type" />

              {/* Mini Futuristic Laptop */}
              <polygon points="76,192 124,192 130,202 70,202" fill="#334155" stroke="#64748b" strokeWidth="1" />
              {/* Screen Base & Glowing Screen */}
              <rect x="78" y="162" width="44" height="30" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="81" y="165" width="38" height="24" rx="1.5" fill="#020617" />
              {/* Glowing code lines on screen */}
              <line x1="84" y1="170" x2="105" y2="170" stroke="#00e5ff" strokeWidth="1.5" />
              <line x1="86" y1="175" x2="114" y2="175" stroke="#a78bfa" strokeWidth="1.2" />
              <line x1="86" y1="180" x2="98" y2="180" stroke="#38bdf8" strokeWidth="1.2" />

              {/* Floating Glowing Code Particles */}
              <text x="54" y="165" fill="#00e5ff" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.85">
                &lt;/&gt;
              </text>
              <text x="134" y="168" fill="#818cf8" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.85">
                &#123;&#125;
              </text>
            </g>
          )}

          {/* 3. CERTIFICATE POSE (Holding gold honours certificate scroll) */}
          {pose === 'certificate' && (
            <g className="animate-prop">
              {/* Arms holding scroll */}
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

              {/* Golden Diploma / Certificate Parchment */}
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
              {/* Golden Ribbon Seal */}
              <circle cx="100" cy="179" r="6" fill="url(#goldGrad)" />
              <path d="M98 184 L96 193 L100 190 L104 193 L102 184 Z" fill="#b45309" />
              <line x1="80" y1="168" x2="120" y2="168" stroke="#d97706" strokeWidth="1.5" />
              <line x1="84" y1="172" x2="116" y2="172" stroke="#d97706" strokeWidth="1" />

              {/* Sparkles around certificate */}
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

          {/* 4. CARDORA PLANT POSE (Holding cardamom seedling) */}
          {pose === 'cardora-plant' && (
            <g className="animate-prop">
              {/* Hands cupping the plant */}
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

              {/* Tiny Terracotta Pot */}
              <polygon points="94,188 106,188 104,200 96,200" fill="#c2410c" stroke="#9a3412" strokeWidth="1" />

              {/* Cardamom Sprout & Leaves */}
              <path
                d="M100 188 Q100 172 100 164"
                stroke="#15803d"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Left Leaf */}
              <path
                d="M100 174 C90 170, 86 160, 94 156 C98 162, 100 168, 100 174 Z"
                fill="url(#leafGrad)"
              />
              {/* Right Leaf */}
              <path
                d="M100 168 C110 164, 114 154, 106 150 C102 156, 100 162, 100 168 Z"
                fill="url(#leafGrad)"
              />

              {/* Floating Dewdrop Glow */}
              <circle cx="94" cy="158" r="2.2" fill="#38bdf8" opacity="0.9" />
              {/* Agro-climatic telemetry aura */}
              <circle cx="100" cy="164" r="16" stroke="#4ade80" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
            </g>
          )}

          {/* 5. CELEBRATING POSE (Both arms up, star confetti) */}
          {pose === 'celebrating' && (
            <>
              {/* Left arm up */}
              <path
                d="M68 150 Q52 130 50 108"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="50" cy="106" r="6" fill="url(#skinGrad)" />

              {/* Right arm up */}
              <path
                d="M132 150 Q148 130 150 108"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="150" cy="106" r="6" fill="url(#skinGrad)" />

              {/* Celebration Confetti Stars */}
              <path d="M42 90 L45 96 L52 97 L46 101 L48 107 L42 103 L36 107 L38 101 L32 97 L39 96 Z" fill="#fbbf24" className="animate-star" />
              <path d="M158 90 L161 96 L168 97 L162 101 L164 107 L158 103 L152 107 L154 101 L148 97 L155 96 Z" fill="#00e5ff" className="animate-star" />
              <circle cx="100" cy="40" r="3" fill="#ec4899" className="animate-star" />
              <circle cx="75" cy="45" r="2.5" fill="#818cf8" className="animate-star" />
              <circle cx="125" cy="45" r="2.5" fill="#10b981" className="animate-star" />
            </>
          )}

          {/* 6. POINTING POSE */}
          {pose === 'pointing' && (
            <>
              {/* Left arm resting */}
              <path
                d="M68 150 Q58 178 64 195"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="64" cy="198" r="5.5" fill="url(#skinGrad)" />

              {/* Right arm extended pointing right/down */}
              <path
                d="M132 150 Q150 162 170 165"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              {/* Hand with pointing index finger */}
              <circle cx="170" cy="165" r="5.5" fill="url(#skinGrad)" />
              <line x1="170" y1="165" x2="182" y2="167" stroke="url(#skinGrad)" strokeWidth="3.5" strokeLinecap="round" />

              {/* Target pulse circle */}
              <circle cx="188" cy="168" r="4" fill="none" stroke="#00e5ff" strokeWidth="1.5" className="animate-star" />
            </>
          )}

          {/* 7. CURIOUS POSE (Head tilted slightly, magnifying glass) */}
          {pose === 'curious' && (
            <g className="animate-prop">
              {/* Left hand to chin */}
              <path
                d="M68 150 Q80 140 88 122"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="88" cy="120" r="5" fill="url(#skinGrad)" />

              {/* Right hand holding magnifying glass */}
              <path
                d="M132 150 Q145 160 142 175"
                stroke="#1e293b"
                strokeWidth="13"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="142" cy="177" r="5" fill="url(#skinGrad)" />

              {/* Sleek magnifying glass */}
              <line x1="142" y1="177" x2="132" y2="167" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
              <circle cx="127" cy="162" r="9" fill="none" stroke="#00e5ff" strokeWidth="2" />
              <circle cx="127" cy="162" r="7" fill="#00e5ff" opacity="0.2" />
            </g>
          )}

          {/* 8. DEFAULT / IDLE POSE */}
          {(pose === 'idle' || pose === 'jump') && (
            <>
              {/* Natural relaxed arms at sides */}
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
