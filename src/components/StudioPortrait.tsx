import { useState, useEffect, type ChangeEvent } from 'react';
import { Camera, ExternalLink, Mail, MessageSquare, Phone, Upload } from 'lucide-react';
import { PROFILE_CONFIG } from '../data/studioData';

const STORAGE_KEY = 'akshit_studio_portrait_data_url_v1';

interface StudioPortraitProps {
  variant?: 'hero' | 'about';
  showQuickContacts?: boolean;
}

export function StudioPortrait({
  variant = 'hero',
  showQuickContacts = true,
}: StudioPortraitProps) {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [staticPhotoError, setStaticPhotoError] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCustomPhotoUrl(saved);
      }
    } catch {
      // Ignore storage access errors in restricted iframes
    }
  }, []);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomPhotoUrl(reader.result);
        try {
          window.localStorage.setItem(STORAGE_KEY, reader.result);
        } catch {
          // Ignore quota errors
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const activePhotoSrc = customPhotoUrl || (!staticPhotoError ? PROFILE_CONFIG.photo.src : null);

  return (
    <div className="bento-card p-5 sm:p-6 space-y-5">
      {/* Top Studio Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b theme-border">
        <span className="font-mono text-xs theme-text font-semibold">
          {PROFILE_CONFIG.fullName} · Solo Studio Operator
        </span>
        <span className="font-hand text-base theme-accent">
          {PROFILE_CONFIG.photo.roleBadge}
        </span>
      </div>

      {/* Prominent Portrait Frame */}
      <div
        className={`relative w-full overflow-hidden rounded-[22px] border theme-border bg-gradient-to-b from-[#E8E0D4] via-[#D8CEC1] to-[#211D1E] flex flex-col justify-between ${
          variant === 'hero' ? 'min-h-[320px] sm:min-h-[360px]' : 'min-h-[350px] sm:min-h-[390px]'
        }`}
      >
        {activePhotoSrc ? (
          <div className="relative w-full h-full flex-1 flex flex-col items-center justify-end pt-4 px-4">
            <img
              src={activePhotoSrc}
              alt={PROFILE_CONFIG.photo.alt}
              onError={() => {
                if (!customPhotoUrl) {
                  setStaticPhotoError(true);
                }
              }}
              className="w-full max-w-[290px] h-[300px] sm:h-[330px] object-contain object-bottom drop-shadow-xl transition-transform duration-300"
            />
            <div className="w-full bg-[#171516]/90 backdrop-blur-sm border-t border-[#433839] px-4 py-3 -mx-4 flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-[#F4EDE3]">
                  {PROFILE_CONFIG.fullName}
                </p>
                <p className="font-mono text-[11px] text-[#B8AAA0]">
                  {PROFILE_CONFIG.location}
                </p>
              </div>
              <label className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono text-[#F4EDE3] bg-[#211D1E] border border-[#433839] hover:border-[#D17C88] rounded-full cursor-pointer transition-colors">
                <Camera className="w-3 h-3 text-[#D9B873]" />
                <span>Update Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="sr-only"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="flex-1 p-6 flex flex-col items-center justify-between text-center space-y-5 theme-surface-raised">
            <div className="w-full flex items-center justify-between text-left border-b theme-border pb-3">
              <span className="font-mono text-[11px] theme-accent">
                PORTRAIT · {PROFILE_CONFIG.fullName}
              </span>
              <span className="font-mono text-[11px] theme-accent-secondary">
                New Delhi, India
              </span>
            </div>

            <div className="my-auto space-y-3 max-w-xs">
              <div className="w-20 h-20 rounded-full mx-auto bg-[#6B2635] text-[#F7F0E4] flex items-center justify-center shadow-md">
                <span className="font-display text-3xl">AS</span>
              </div>
              <p className="font-display text-2xl theme-text">
                {PROFILE_CONFIG.fullName}
              </p>
              <p className="text-xs theme-text-muted leading-relaxed">
                Independent digital content &amp; product studio operator combining research,
                storytelling, custom websites, and rule-backed AI workflows.
              </p>
              <label className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Custom Portrait</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="sr-only"
                />
              </label>
            </div>

            <div className="w-full pt-3 border-t theme-border flex items-center justify-between text-[11px] font-mono theme-text-muted">
              <span>BCA · IITM (9.10 CGPA)</span>
              <span className="theme-accent font-semibold">Direct 1-on-1 Builder</span>
            </div>
          </div>
        )}
      </div>

      {/* Availability & Direct Contact Strip */}
      <div className="space-y-3">
        <div className="bento-card-raised px-4 py-2.5 flex items-center justify-between gap-2">
          <span className="text-xs theme-text font-medium">
            {variant === 'hero'
              ? PROFILE_CONFIG.availability.responseWindow
              : PROFILE_CONFIG.availability.statusText}
          </span>
        </div>

        {showQuickContacts && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <a
              href={PROFILE_CONFIG.contact.emailPrimary.mailto}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono theme-text bento-card-raised hover:border-[var(--accent)] rounded-full transition-colors"
              title={PROFILE_CONFIG.contact.emailPrimary.address}
            >
              <Mail className="w-3.5 h-3.5 theme-accent shrink-0" />
              <span>Email</span>
            </a>

            <a
              href={PROFILE_CONFIG.contact.phone.telHref}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono theme-text bento-card-raised hover:border-[var(--accent)] rounded-full transition-colors"
              title={`Call ${PROFILE_CONFIG.contact.phone.displayNumber}`}
            >
              <Phone className="w-3.5 h-3.5 theme-accent-secondary shrink-0" />
              <span>Call</span>
            </a>

            <a
              href={PROFILE_CONFIG.contact.phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono theme-text bento-card-raised hover:border-[var(--accent)] rounded-full transition-colors"
              title={`WhatsApp ${PROFILE_CONFIG.contact.phone.displayNumber}`}
            >
              <MessageSquare className="w-3.5 h-3.5 theme-accent shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href={PROFILE_CONFIG.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono theme-text bento-card-raised hover:border-[var(--accent)] rounded-full transition-colors"
              title="LinkedIn Profile"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 theme-accent shrink-0" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
