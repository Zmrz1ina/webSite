import Link from "next/link";
import {
  BadgeCheck,
  CarFront,
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { ScrollWheelVideo } from "@/components/scroll-wheel-video";

const contacts = [
  {
    label: "Магазин",
    phone: "+375 (29) 195-99-79",
    href: "tel:+375291959979",
  },
  {
    label: "Шиномонтаж",
    phone: "+375 (29) 681-16-70",
    href: "tel:+375296811670",
  },
];

const schedule = [
  ["Пн", "8:00 - 20:00"],
  ["Вт", "8:00 - 20:00"],
  ["Ср", "8:00 - 20:00"],
  ["Чт", "8:00 - 20:00"],
  ["Пт", "8:00 - 20:00"],
  ["Сб", "8:00 - 20:00"],
  ["Вс", "8:00 - 20:00"],
];

const services = [
  {
    icon: Wrench,
    title: "Шиномонтаж",
    text: "Легковые и микроавтобусные шины до 24 дюймов.",
  },
  {
    icon: ShoppingBag,
    title: "Автомагазин",
    text: "Шины, диски и автозапчасти по адресу сервиса.",
  },
  {
    icon: ShieldCheck,
    title: "Автоэлектрика",
    text: "Профильное направление карточки сервиса на AVSERVICE.BY.",
  },
  {
    icon: CarFront,
    title: "Кузовной ремонт",
    text: "Одно из указанных направлений работы «Партнер шин».",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <ScrollWheelVideo />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.52),rgba(0,0,0,0.18)_44%,rgba(0,0,0,0.66))]" />

      <section className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-4 py-4 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-3 rounded-md border border-white/14 bg-white/[0.08] px-3 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-4">
          <div className="min-w-0">
            <div className="text-lg font-semibold leading-none sm:text-xl">Партнер шин</div>
            <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-white/70 sm:text-sm">
              <MapPin className="size-3.5 shrink-0 text-[#ff5945]" />
              <span className="truncate">Гомель, улица Барыкина 155</span>
            </div>
          </div>
          <Link
            href="/dop-info"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-white/15 bg-white/[0.09] px-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/18"
          >
            Доп инфо
            <ExternalLink className="size-4" />
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-5 py-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-normal sm:text-6xl lg:text-7xl">
              Партнер шин
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
              Шиномонтаж, автомагазин, автоэлектрика и кузовной ремонт в Гомеле.
              Вся основная информация видна сразу, поверх живого фона.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+375291959979"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-[#ff3b24] px-5 text-sm font-bold text-white shadow-lg shadow-black/25 transition hover:bg-[#e92f1c]"
              >
                <Phone className="size-4" />
                Магазин
              </a>
              <a
                href="tel:+375296811670"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/16 bg-white/[0.11] px-5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                <Phone className="size-4" />
                Шиномонтаж
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <GlassPanel className="sm:col-span-2">
              <div className="grid gap-3 sm:grid-cols-3">
                <Highlight value="5 / 5" label="рейтинг" />
                <Highlight value="7 дней" label="работают каждую неделю" />
                <Highlight value="8:00 - 20:00" label="время работы" />
              </div>
            </GlassPanel>

            <GlassPanel className="sm:col-span-2">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#ff3b24]/22 text-[#ff7a68] ring-1 ring-white/18">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Адрес</h2>
                  <p className="mt-1 text-sm leading-6 text-white/72">
                    Беларусь, Гомель, улица Барыкина 155, 246000
                  </p>
                  <a
                    href="https://yandex.by/maps/?ll=30.964493751525882%2C52.42045537923854&z=16&pt=30.964493751525882%2C52.42045537923854"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#ff8a78]"
                  >
                    Открыть карту
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel>
              <h2 className="mb-3 text-lg font-semibold">Контакты</h2>
              <div className="space-y-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.phone}
                    href={contact.href}
                    className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.07] px-3 py-2.5 text-sm transition hover:bg-white/14"
                  >
                    <span>
                      <span className="block font-semibold">{contact.phone}</span>
                      <span className="text-xs text-white/58">{contact.label}</span>
                    </span>
                    <Phone className="size-4 text-[#ff7a68]" />
                  </a>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel>
              <h2 className="mb-3 text-lg font-semibold">Время</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                {schedule.map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-white/58">{day}</span>
                    <span className="text-white/86">{time}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-8 lg:px-10">
        <GlassPanel className="p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Направления</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                Основные услуги из карточки сервиса, без тяжелых белых блоков поверх фона.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/70">
              <BadgeCheck className="size-4 text-[#65d37e]" />
              Профиль AVSERVICE.BY
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-md border border-white/10 bg-white/[0.06] p-4 shadow-lg shadow-black/10 backdrop-blur-xl"
              >
                <service.icon className="size-5 text-[#ff7a68]" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/64">{service.text}</p>
              </article>
            ))}
          </div>
        </GlassPanel>
      </section>
    </main>
  );
}

function GlassPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`rounded-md border border-white/14 bg-white/[0.09] p-4 text-white shadow-2xl shadow-black/20 backdrop-blur-2xl ${className}`}
    >
      {children}
    </section>
  );
}

function Highlight({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl">
      <div className="text-2xl font-semibold leading-none text-white sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/50">{label}</div>
    </div>
  );
}
