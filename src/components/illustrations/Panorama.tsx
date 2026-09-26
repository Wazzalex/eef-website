/**
 * Panorama illustré : la chaîne de Belledonne, le village et l'école.
 * Dessiné en SVG avec les couleurs de la charte (aucune photo, aucun visage).
 */
export default function Panorama({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 460"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DCE9F2" stopOpacity="0" />
          <stop offset="1" stopColor="#DCE9F2" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* ciel */}
      <rect width="1440" height="460" fill="url(#sky)" />

      {/* soleil (placé pour rester visible sur téléphone, où seul le centre du panorama apparaît) */}
      <g transform="translate(980 84)">
        <circle r="38" fill="#F5C451" />
        <g stroke="#F5C451" strokeWidth="6" strokeLinecap="round" opacity="0.9">
          <line x1="0" y1="-66" x2="0" y2="-52" />
          <line x1="0" y1="52" x2="0" y2="66" />
          <line x1="-66" y1="0" x2="-52" y2="0" />
          <line x1="52" y1="0" x2="66" y2="0" />
          <line x1="-47" y1="-47" x2="-37" y2="-37" />
          <line x1="37" y1="37" x2="47" y2="47" />
          <line x1="47" y1="-47" x2="37" y2="-37" />
          <line x1="-37" y1="37" x2="-47" y2="47" />
        </g>
      </g>

      {/* chaîne lointaine */}
      <path
        d="M0 300 L90 236 L160 272 L240 182 L320 246 L400 176 L470 228 L560 150 L640 214 L720 128 L800 206 L880 164 L960 224 L1040 152 L1120 216 L1200 186 L1280 238 L1360 198 L1440 246 L1440 460 L0 460 Z"
        fill="#B9CAD8"
      />
      {/* névés */}
      <g fill="#FFFFFF">
        <path d="M212 210 L240 182 L268 210 L256 204 L247 214 L233 206 Z" />
        <path d="M530 180 L560 150 L590 180 L577 174 L566 186 L551 176 Z" />
        <path d="M688 160 L720 128 L752 160 L738 154 L727 168 L712 156 Z" />
        <path d="M1012 180 L1040 152 L1068 180 L1056 174 L1047 186 L1033 176 Z" />
        <path d="M1336 222 L1360 198 L1384 222 L1373 218 L1365 228 L1353 220 Z" />
      </g>

      {/* chaîne intermédiaire */}
      <path
        d="M0 372 L110 312 L210 350 L330 284 L440 344 L550 296 L670 352 L770 306 L890 364 L1010 314 L1130 366 L1250 322 L1350 372 L1440 334 L1440 460 L0 460 Z"
        fill="#7A9EC0"
      />

      {/* forêt sur la crête (sapins) */}
      <g fill="#2A6496" opacity="0.75">
        <path d="M300 310 L312 288 L324 310 Z" />
        <path d="M318 316 L330 292 L342 316 Z" />
        <path d="M540 322 L552 298 L564 322 Z" />
        <path d="M556 326 L568 304 L580 326 Z" />
        <path d="M990 336 L1002 312 L1014 336 Z" />
        <path d="M1008 340 L1020 318 L1032 340 Z" />
        <path d="M1240 344 L1252 320 L1264 344 Z" />
      </g>

      {/* collines proches */}
      <path
        d="M0 424 C160 386 300 396 440 412 C600 430 720 392 880 404 C1040 416 1200 446 1440 398 L1440 460 L0 460 Z"
        fill="#2A6496"
      />

      {/* village (agrandi de 30 % autour de sa base) */}
      <g transform="translate(-211 -125) scale(1.3)">
        {/* clocher */}
        <rect x="596" y="352" width="26" height="52" fill="#FFF8E7" />
        <path d="M590 356 L609 318 L628 356 Z" fill="#E2643F" />
        <rect x="605" y="384" width="8" height="12" rx="1" fill="#2A6496" />
        {/* maisons */}
        <rect x="520" y="382" width="44" height="30" fill="#FFF8E7" />
        <path d="M514 384 L542 362 L570 384 Z" fill="#1B2733" />
        <rect x="537" y="396" width="10" height="16" fill="#2A6496" />
        <rect x="644" y="384" width="40" height="28" fill="#FFF8E7" />
        <path d="M638 386 L664 366 L690 386 Z" fill="#1B2733" />
        <rect x="652" y="392" width="8" height="8" fill="#2A6496" />
        <rect x="668" y="392" width="8" height="8" fill="#2A6496" />
        {/* école */}
        <rect x="720" y="366" width="118" height="46" rx="2" fill="#FFF8E7" />
        <path d="M712 368 L779 330 L846 368 Z" fill="#E2643F" />
        <rect x="770" y="386" width="18" height="26" rx="1" fill="#2A6496" />
        <rect x="734" y="378" width="16" height="14" rx="1" fill="#2A6496" />
        <rect x="756" y="378" width="10" height="14" rx="1" fill="#2A6496" />
        <rect x="792" y="378" width="10" height="14" rx="1" fill="#2A6496" />
        <rect x="808" y="378" width="16" height="14" rx="1" fill="#2A6496" />
        {/* drapeau sur l'école */}
        <line x1="779" y1="330" x2="779" y2="300" stroke="#1B2733" strokeWidth="3" />
        <path d="M780 300 L806 306 L780 314 Z" fill="#F5C451" />
        {/* sapins autour */}
        <g fill="#1B2733">
          <path d="M470 414 L486 372 L502 414 Z" />
          <path d="M488 416 L500 386 L512 416 Z" />
          <path d="M860 414 L876 374 L892 414 Z" />
          <path d="M880 416 L892 388 L904 416 Z" />
          <path d="M906 416 L922 380 L938 416 Z" />
        </g>
      </g>
    </svg>
  );
}
