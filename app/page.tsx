'use client';

import { motion } from 'motion/react';
import { Gift, Globe, MapPin, Pizza } from 'lucide-react';
import Image from 'next/image';

const SITE_URL =
  'https://www.dbrotherspanpizzacg.com.br/?type=PRODUCTS&cupom=BREADINSTA';
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
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_#1f0907_0%,_#090909_55%,_#000000_100%)]" />
    <div className="absolute inset-0 opacity-[0.05] text-white">
      <Pizza className="absolute top-[10%] left-[5%] h-24 w-24 -rotate-12" strokeWidth={1} />
      <Pizza className="absolute top-[30%] right-[14%] h-16 w-16 rotate-[22deg]" strokeWidth={1} />
      <Pizza className="absolute bottom-[18%] right-[6%] h-32 w-32 rotate-45" strokeWidth={1} />
      <Pizza className="absolute bottom-[10%] left-[10%] h-20 w-20 -rotate-[18deg]" strokeWidth={1} />
    </div>
  </div>
);

export default function LinkInBio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
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
        className="relative z-10 flex w-full max-w-[420px] flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-10 flex w-full flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-[#C62828] opacity-45 blur-[40px]" />
            <div className="relative z-10 h-[120px] w-[120px] overflow-hidden rounded-full border-[4px] border-zinc-900 bg-zinc-900 shadow-2xl">
              <Image
                src="https://picsum.photos/seed/pizza-logo/240/240"
                alt="D'Brothers Pan Pizza Logo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <h1 className="mb-2 text-center text-[32px] font-bold tracking-tight text-white font-[family-name:var(--font-outfit)] drop-shadow-lg">
            D&apos;Brothers Pan Pizza
          </h1>

          <div className="mb-8 flex flex-col items-center gap-2.5">
            <p className="flex items-center gap-2 text-center text-[16px] font-medium tracking-wide text-zinc-300">
              <Pizza className="h-[18px] w-[18px] text-[#E53935]" /> Pan Pizza artesanal
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="relative flex w-full max-w-[340px] items-center gap-4 overflow-hidden rounded-2xl border border-[#C62828]/30 bg-gradient-to-br from-[#C62828]/20 to-[#4a0e0e]/40 px-6 py-4 text-[14px] font-medium text-zinc-100 shadow-[0_0_20px_rgba(198,40,40,0.15)]"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-150 hover:opacity-100" />
            <div className="rounded-full border border-[#ff5252]/20 bg-gradient-to-br from-[#E53935] to-[#9b1c1c] p-2.5 shadow-lg">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <span className="text-[15px] tracking-wide font-[family-name:var(--font-outfit)]">
              Ganhe um Breadstick no 1o pedido
            </span>
          </motion.div>
        </motion.div>

        <motion.div className="mb-14 flex w-full flex-col gap-4">
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center overflow-hidden rounded-[24px] border border-[#ff5252]/30 bg-gradient-to-b from-[#E53935] to-[#C62828] p-4 font-semibold text-white shadow-[0_10px_30px_rgba(198,40,40,0.3)] transition-all duration-150 hover:shadow-[0_15px_40px_rgba(198,40,40,0.5)]"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
            <div className="relative z-10 mr-4 rounded-2xl bg-white/20 p-3 shadow-inner backdrop-blur-md">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            <span className="relative z-10 text-[17px] tracking-wide font-[family-name:var(--font-outfit)] drop-shadow-md">
              Falar no WhatsApp
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center overflow-hidden rounded-[24px] border border-zinc-700/50 bg-gradient-to-b from-zinc-800 to-zinc-900 p-4 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-150 hover:border-zinc-500/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
          >
            <div className="relative z-10 mr-4 rounded-2xl border border-zinc-700 bg-zinc-800/80 p-3 shadow-inner transition-colors duration-150 group-hover:bg-zinc-700">
              <MapPin className="h-6 w-6 text-zinc-300 transition-colors duration-150 group-hover:text-white" />
            </div>
            <span className="relative z-10 text-[17px] tracking-wide font-[family-name:var(--font-outfit)]">
              Localizacao da pizzaria
            </span>
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center overflow-hidden rounded-[24px] bg-gradient-to-b from-zinc-100 to-zinc-300 p-4 font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-150 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]"
          >
            <div className="relative z-10 mr-4 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition-colors duration-150 group-hover:bg-zinc-50">
              <Globe className="h-6 w-6 text-zinc-800" />
            </div>
            <span className="relative z-10 text-[17px] tracking-wide font-[family-name:var(--font-outfit)]">
              Nosso site
            </span>
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-auto">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-zinc-600">
            (c) 2026 D&apos;Brothers Pan Pizza
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
