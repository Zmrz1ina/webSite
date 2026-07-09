"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  CarFront,
  ExternalLink,
  Menu,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Wrench,
} from "lucide-react";

const BROKEN_IMAGE = "/images/partner-shin/hero/broken-car.png";
const REPAIRED_IMAGE = "/images/partner-shin/hero/repaired-car.png";
const SPOTLIGHT_R = 260;

const contacts = [
  { label: "Магазин", phone: "+375 (29) 195-99-79", href: "tel:+375291959979" },
  { label: "Шиномонтаж", phone: "+375 (29) 681-16-70", href: "tel:+375296811670" },
];

const services = [
  { icon: Wrench, title: "Шиномонтаж" },
  { icon: ShoppingBag, title: "Автомагазин" },
  { icon: ShieldCheck, title: "Автоэлектрика" },
  { icon: CarFront, title: "Кузовной ремонт" },
];

export function CursorSpotlightHero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <section className="relative h-screen w-full overflow-hidden bg-black" style={{ height: "100dvh" }}>
        <div
          className="hero-zoom absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BROKEN_IMAGE})` }}
        />

        <RevealLayer image={REPAIRED_IMAGE} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        <div className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,transparent_42%,rgba(0,0,0,0.28)_68%,rgba(0,0,0,0.72)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.74),rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.16)_58%,rgba(0,0,0,0.82))]" />

        <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
            </svg>
            <span className="font-playfair text-2xl italic text-white">Партнер шин</span>
          </div>


          <a
            href="tel:+375296811670"
            className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 md:block"
          >
            Записаться
          </a>
          <button className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md md:hidden" aria-label="Открыть меню">
            <Menu className="size-5" />
          </button>
        </nav>

        <div className="pointer-events-none absolute left-0 right-0 top-[clamp(170px,24vh,240px)] z-50 flex flex-col items-center px-5 text-center">
          <h1 className="leading-[0.95] text-white">
            <span
              className="hero-anim hero-reveal font-playfair block text-5xl font-normal italic sm:text-7xl md:text-8xl"
              style={{ letterSpacing: "-0.05em", animationDelay: "0.25s" }}
            >
              Вернем форму
            </span>
            <span
              className="hero-anim hero-reveal -mt-1 block text-5xl font-normal sm:text-7xl md:text-8xl"
              style={{ letterSpacing: "-0.08em", animationDelay: "0.42s" }}
            >
              вашему авто
            </span>
          </h1>
        </div>

        <div
          className="hero-anim hero-fade absolute bottom-14 left-10 z-50 hidden max-w-[280px] sm:block md:left-14"
          style={{ animationDelay: "0.7s" }}
        >
          <CornerPanel>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              <MapPin className="size-4 text-[#e8702a]" />
              Гомель
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Беларусь, Гомель, улица Барыкина 155, 246000. Работаем ежедневно с 8:00 до 20:00.
            </p>
          </CornerPanel>
        </div>

        <div
          className="hero-anim hero-fade absolute bottom-5 left-5 right-5 z-50 flex max-w-full flex-col items-start gap-3 sm:bottom-10 sm:left-auto sm:right-10 sm:max-w-[300px] sm:gap-4 md:right-14"
          style={{ animationDelay: "0.85s" }}
        >
          <CornerPanel className="w-full">
            <div className="mb-3 grid grid-cols-3 gap-2">
              <MiniStat value="5/5" label="рейтинг" />
              <MiniStat value="7" label="дней" />
              <MiniStat value={'24"'} label="шины" />
            </div>
            <p className="text-xs leading-relaxed text-white/78 sm:text-sm">
              Наведите курсор на автомобиль: повреждение сменится восстановленным видом.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="tel:+375296811670"
                className="rounded-full bg-[#e8702a] px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:bg-[#d2611f] hover:shadow-lg hover:shadow-[#e8702a]/30 active:scale-95"
              >
                Записаться
              </a>
              <Link
                href="/dop-info"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Доп инфо
                <ExternalLink className="size-4" />
              </Link>
            </div>
          </CornerPanel>
        </div>

        <div className="hero-anim hero-fade absolute left-5 top-24 z-50 max-w-[210px] sm:left-10 sm:top-28 md:left-14" style={{ animationDelay: "0.62s" }}>
          <CornerPanel>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              <Phone className="size-4 text-[#e8702a]" />
              Контакты
            </div>
            <div className="space-y-1.5 text-sm font-medium text-white/90">
              {contacts.map((contact) => (
                <a key={contact.phone} href={contact.href} className="block transition hover:text-[#ffb088]">
                  {contact.phone}
                  <span className="block text-xs font-normal text-white/50">{contact.label}</span>
                </a>
              ))}
            </div>
          </CornerPanel>
        </div>

        <div className="hero-anim hero-fade absolute left-1/2 top-[76px] z-50 hidden w-[min(560px,calc(100vw-360px))] -translate-x-1/2 md:block" style={{ animationDelay: "0.58s" }}>
          <CornerPanel className="px-4 py-3">
            <div className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              <BadgeCheck className="size-4 text-[#65d37e]" />
              Направления
            </div>
            <div className="grid grid-cols-4 gap-2">
              {services.map((service) => (
                <div key={service.title} className="flex min-h-10 items-center justify-center rounded-full border border-white/12 bg-white/10 px-3 text-center text-xs font-medium leading-tight text-white/84 backdrop-blur-md">
                  {service.title}
                </div>
              ))}
            </div>
          </CornerPanel>
        </div>
      </section>
    </main>
  );
}

function RevealLayer({ image, cursorX, cursorY }: { image: string; cursorX: number; cursorY: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [maskImage, setMaskImage] = useState<string>(`radial-gradient(circle at -999px -999px, transparent 0, transparent 100%)`);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const gradient = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, SPOTLIGHT_R);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();
    setMaskImage(`url(${canvas.toDataURL()})`);
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" style={{ display: "none" }} />
      <div
        className="pointer-events-none absolute inset-0 z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          maskImage,
          WebkitMaskImage: maskImage,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </>
  );
}

function CornerPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[22px] border border-white/18 bg-black/20 p-4 shadow-2xl shadow-black/35 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/10 p-2 text-center backdrop-blur-md">
      <div className="text-lg font-semibold leading-none text-white">{value}</div>
      <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/48">{label}</div>
    </div>
  );
}
