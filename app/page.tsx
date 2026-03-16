'use client';

import { motion } from 'motion/react';
import { Gift, Globe, MapPin, Pizza } from 'lucide-react';
import Image from 'next/image';

const MENU_URL =
  'https://www.dbrotherspanpizzacg.com.br/?type=PRODUCTS&cupom=BREADINSTA';
const SITE_URL = 'https://www.dbrotherspanpizzacg.com.br/';
const WHATSAPP_URL = 'https://wa.me/556792737508';
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Afonso+Pena,+4000+Jd.+Estados';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(198,40,40,0.18)_0%,_rgba(0,0,0,0.98)_42%,_#000000_100%)]" />
    <div className="absolute inset-0 opacity-[0.05] text-white">
      <Pizza className="absolute left-[6%] top-[12%] h-20 w-20 -rotate-12" strokeWidth={1} />
      <Pizza className="absolute right-[10%] top-[26%] h-14 w-14 rotate-[20deg]" strokeWidth={1} />
      <Pizza className="absolute bottom-[20%] right-[8%] h-28 w-28 rotate-[34deg]" strokeWidth={1} />
      <Pizza className="absolute bottom-[10%] left-[12%] h-18 w-18 -rotate-[16deg]" strokeWidth={1} />
    </div>
  </div>
);

type ButtonProps = {
  href: string;
  label: string;
  primary?: boolean;
  icon: React.ReactNode;
};

function LinkButton({ href, label, primary = false, icon }: ButtonProps) {
  const baseClasses =
    'group relative flex w-full items-center gap-4 overflow-hidden rounded-[22px] border px-5 py-4 text-white transition-all duration-150';
  const toneClasses = primary
    ? 'border-[#C62828] bg-[#C62828] shadow-[0_10px_30px_rgba(198,40,40,0.28)] hover:shadow-[0_14px_34px_rgba(198,40,40,0.4)]'
    : 'border-[#2A2A2A] bg-black shadow-[0_10px_24px_rgba(0,0,0,0.34)] hover:border-[#3A3A3A] hover:shadow-[0_14px_28px_rgba(0,0,0,0.46)]';
  const iconBoxClasses = primary
    ? 'border border-white/15 bg-black/10'
    : 'border border-[#2F2F2F] bg-[#111111]';

  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.12, ease: 'easeOut' }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${toneClasses}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)] opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
      <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${iconBoxClasses}`}>
        {icon}
      </div>
      <span className="relative z-10 text-[17px] font-semibold tracking-[0.02em] font-[family-name:var(--font-outfit)]">
        {label}
      </span>
      {primary ? (
        <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[0_0_34px_rgba(198,40,40,0.24)]" />
      ) : null}
    </motion.a>
  );
}

export default function LinkInBio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 340,
        damping: 26,
      },
    },
  };

  return (
    <div className="relative flex min-h-screen items-start justify-center overflow-hidden bg-black px-5 pb-12 pt-16 font-sans text-white selection:bg-[#C62828] selection:text-white">
      <BackgroundPattern />

      <motion.div
        className="relative z-10 flex w-full max-w-[430px] flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-10 flex w-full flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-[#C62828] opacity-45 blur-[42px]" />
            <div className="relative z-10 h-[124px] w-[124px] overflow-hidden rounded-full border-[4px] border-[#1A1A1A] bg-black shadow-2xl">
              <Image
                src="https://picsum.photos/seed/pizza-logo/248/248"
                alt="D'Brothers Pan Pizza Logo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <h1 className="mb-2 text-center text-[32px] font-bold tracking-tight text-white font-[family-name:var(--font-outfit)]">
            D&apos;Brothers Pan Pizza
          </h1>

          <p className="mb-8 flex items-center gap-2 text-center text-[15px] font-medium tracking-[0.08em] text-white/74 uppercase">
            <Pizza className="h-[17px] w-[17px] text-[#C62828]" /> Pan Pizza artesanal
          </p>

          <motion.div
            whileHover={{ scale: 1.015, y: -2 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="relative flex w-full max-w-[350px] items-center gap-4 overflow-hidden rounded-[22px] border border-[#2B1010] bg-[#090909] px-6 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(198,40,40,0.75)_50%,transparent_100%)]" />
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#3A1414] bg-[#C62828]">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <span className="text-[15px] tracking-[0.03em] font-[family-name:var(--font-outfit)]">
              Ganhe um Breadstick no 1o pedido
            </span>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-14 flex w-full flex-col gap-4">
          <LinkButton
            href={WHATSAPP_URL}
            label="Falar no WhatsApp"
            primary
            icon={<WhatsAppIcon className="h-6 w-6 text-white" />}
          />
          <LinkButton
            href={MENU_URL}
            label="Cardapio"
            icon={<Pizza className="h-6 w-6 text-white" />}
          />
          <LinkButton
            href={MAPS_URL}
            label="Localizacao da pizzaria"
            icon={<MapPin className="h-6 w-6 text-white" />}
          />
          <LinkButton
            href={SITE_URL}
            label="Nosso site"
            icon={<Globe className="h-6 w-6 text-white" />}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-auto">
          <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/34">
            (c) 2026 D&apos;Brothers Pan Pizza
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
