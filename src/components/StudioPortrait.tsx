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
    <div className="bg-[#161822] border border-[#2C2F42] rounded-2xl p-5 sm:p-6 space-y-5 shadow-xl">
      {/* Top Studio Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#2C2F42]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7AD992]" />
          <span className="font-mono text-xs text-[#E6D3A7]">
            {PROFILE_CONFIG.fullName} · Solo Studio Operator
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#8B75FF]">
          {PROFILE_CONFIG.photo.roleBadge}
        </span>
      </div>

      {/* Prominent Portrait Frame */}
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-[#2C2F42] bg-gradient-to-b from-[#1E202E] via-[#161822] to-[#0E0F14] flex flex-col justify-between ${
          variant === 'hero' ? 'min-h-[340px] sm:min-h-[380px]' : 'min-h-[360px] sm:min-h-[410px]'
        }`}
      >
        {activePhotoSrc ? (
          <div className="relative w-full h-full flex-1 flex flex-col items-center justify-end pt-4 px-4 bg-gradient-to-b from-[#EAE3D5] via-[#D4CBB8] to-[#161822]">
            <img
              src={activePhotoSrc}
              alt={PROFILE_CONFIG.photo.alt}
              onError={() => {
                if (!customPhotoUrl) {
                  setStaticPhotoError(true);
                }
              }}
              className="w-full max-w-[300px] h-[310px] sm:h-[340px] object-contain object-bottom drop-shadow-xl transition-transform duration-300"
            />
            <div className="w-full bg-[#0E0F14]/90 backdrop-blur-sm border-t border-[#2C2F42] px-4 py-3 -mx-4 flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-[#F4F0E8]">
                  {PROFILE_CONFIG.fullName}
                </p>
                <p className="font-mono text-[11px] text-[#A6A9B8]">
                  {PROFILE_CONFIG.location}
                </p>
              </div>
              <label className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-[#E6D3A7] bg-[#161822] border border-[#2C2F42] hover:border-[#8B75FF] rounded cursor-pointer transition-colors">
                <Camera className="w-3 h-3 text-[#8B75FF]" />
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
          <div className="flex-1 p-6 flex flex-col items-center justify-between text-center space-y-5">
            <div className="w-full flex items-center justify-between text-left border-b border-[#2C2F42]/80 pb-3">
              <span className="font-mono text-[11px] text-[#8B75FF]">
                PORTRAIT SLOT · /public/profile.jpg
              </span>
              <span className="font-mono text-[11px] text-[#E6D3A7]">
                LINKEDIN PROFILE PHOTO.jpeg
              </span>
            </div>

            <div className="my-auto space-y-3 max-w-xs">
              <div className="w-20 h-20 rounded-2xl mx-auto bg-[#0E0F14] border border-[#8B75FF]/50 flex items-center justify-center shadow-inner">
                <span className="font-display text-4xl text-[#E6D3A7]">AS</span>
              </div>
              <p className="font-display text-2xl text-[#F4F0E8]">
                {PROFILE_CONFIG.fullName}
              </p>
              <p className="text-xs text-[#A6A9B8] leading-relaxed">
                Place your uploaded <code className="text-[#E6D3A7]">LINKEDIN PROFILE PHOTO.jpeg</code> at{' '}
                <code className="text-[#8B75FF]">public/profile.jpg</code> in the repository, or select it below to display it immediately across the Home and About pages.
              </p>
              <label className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>Load LINKEDIN PROFILE PHOTO.jpeg</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="sr-only"
                />
              </label>
            </div>

            <div className="w-full pt-3 border-t border-[#2C2F42] flex items-center justify-between text-[11px] font-mono text-[#A6A9B8]">
              <span>BCA · IITM (GGSIPU)</span>
              <span className="text-[#7AD992]">Direct 1-on-1 Builder</span>
            </div>
          </div>
        )}
      </div>

      {/* Availability & Direct Contact Strip */}
      <div className="space-y-3">
        <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg px-3.5 py-2.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7AD992] shrink-0" />
            <span className="text-xs text-[#F4F0E8]">
              {variant === 'hero'
                ? PROFILE_CONFIG.availability.responseWindow
                : PROFILE_CONFIG.availability.statusText}
            </span>
          </div>
        </div>

        {showQuickContacts && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <a
              href={PROFILE_CONFIG.contact.emailPrimary.mailto}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors"
              title={PROFILE_CONFIG.contact.emailPrimary.address}
            >
              <Mail className="w-3.5 h-3.5 text-[#8B75FF] shrink-0" />
              <span>Email</span>
            </a>

            <a
              href={PROFILE_CONFIG.contact.phone.telHref}
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors"
              title={`Call ${PROFILE_CONFIG.contact.phone.displayNumber}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AE5C] shrink-0" />
              <span>Call</span>
            </a>

            <a
              href={PROFILE_CONFIG.contact.phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#7AD992] rounded-lg transition-colors"
              title={`WhatsApp ${PROFILE_CONFIG.contact.phone.displayNumber}`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#7AD992] shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href={PROFILE_CONFIG.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#8B75FF] shrink-0" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
