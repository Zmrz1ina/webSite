import Image from "next/image";
import {
  BadgeCheck,
  CarFront,
  Clock3,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

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
    text: "Шиномонтаж легковых и микроавтобусных шин до 24 дюймов.",
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

const gallery = [
  {
    src: "/images/partner-shin/service-1.jpg",
    alt: "Фасад Партнер шин вечером",
  },
  {
    src: "/images/partner-shin/service-2.jpg",
    alt: "Здание Партнер шин",
  },
  {
    src: "/images/partner-shin/service-3.jpg",
    alt: "Рабочая зона шиномонтажа",
  },
  {
    src: "/images/partner-shin/service-4.jpg",
    alt: "Оборудование шиномонтажа",
  },
  {
    src: "/images/partner-shin/service-5.jpg",
    alt: "Зона обслуживания колес",
  },
  {
    src: "/images/partner-shin/yandex/yandex-01.jpg",
    alt: "Фасад Партнер шин с Яндекс.Карт",
  },
  {
    src: "/images/partner-shin/yandex/yandex-02.jpg",
    alt: "Въезд и вывеска Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-03.jpg",
    alt: "Рабочая зона шиномонтажа Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-04.jpg",
    alt: "Оборудование шиномонтажа Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-05.jpg",
    alt: "Шины и диски в Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-06.jpg",
    alt: "Сервисная зона Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-07.jpg",
    alt: "Помещение Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-08.jpg",
    alt: "Фото сервиса Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-09.jpg",
    alt: "Здание и территория Партнер шин",
  },
  {
    src: "/images/partner-shin/yandex/yandex-10.jpg",
    alt: "Дополнительное фото Партнер шин",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#172033]">
      <section className="relative overflow-hidden bg-[#172033] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/partner-shin/service-1.jpg"
            alt="Партнер шин на улице Барыкина 155"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[#172033]/55" />
        </div>

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-between px-5 py-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-xl">
                <Image
                  src="/images/partner-shin/logo.png"
                  alt="Логотип Партнер шин"
                  width={48}
                  height={48}
                  className="size-full object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  Гомель
                </div>
                <div className="font-semibold">улица Барыкина 155</div>
              </div>
            </div>
            <a
              href="https://vk.com/partner_shin"
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center gap-2 rounded-md border border-white/25 px-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#172033] sm:inline-flex"
            >
              Вконтакте
              <ExternalLink className="size-4" />
            </a>
          </header>

          <div className="max-w-4xl pb-10 pt-24">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <BadgeCheck className="size-4 text-[#65d37e]" />
              Профиль подтвержден на AVSERVICE.BY
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Партнер шин
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Автомагазин, автоэлектрика, кузовной ремонт и шиномонтаж в Гомеле.
              Работают ежедневно с 8:00 до 20:00.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+375291959979"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-[#ff3b24] px-5 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#e92f1c]"
              >
                <Phone className="size-4" />
                Позвонить в магазин
              </a>
              <a
                href="https://yandex.by/maps/?ll=30.964493751525882%2C52.42045537923854&z=16&pt=30.964493751525882%2C52.42045537923854"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-bold text-[#172033] transition hover:bg-[#eef2f8]"
              >
                <MapPin className="size-4" />
                Открыть карту
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="grid gap-5 sm:grid-cols-3">
          <StatCard value="5 / 5" label="рейтинг" />
          <StatCard value="1" label="отзыв на AVSERVICE.BY" />
          <StatCard value="7 дней" label="работают каждую неделю" />
        </div>

        <div className="rounded-lg border border-[#dbe1ea] bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#ff3b24]/10 text-[#ff3b24]">
              <MapPin className="size-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Адрес</h2>
              <p className="mt-1 text-[#5f6d82]">Беларусь, Гомель, улица Барыкина 155, 246000</p>
              <p className="mt-2 text-sm text-[#7a8798]">
                Координаты: 52.42045537923854, 30.964493751525882
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-10 sm:px-8 lg:grid-cols-[320px_1fr] lg:px-10">
        <aside className="space-y-6">
          <InfoPanel title="Контакты">
            <div className="space-y-3">
              {contacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={contact.href}
                  className="flex items-center justify-between rounded-md border border-[#e4e9f0] p-3 transition hover:border-[#ff3b24] hover:bg-[#fff6f4]"
                >
                  <span>
                    <span className="block font-semibold">{contact.phone}</span>
                    <span className="text-sm text-[#6d7889]">{contact.label}</span>
                  </span>
                  <Phone className="size-4 text-[#ff3b24]" />
                </a>
              ))}
            </div>
          </InfoPanel>

          <InfoPanel title="Время работы">
            <div className="space-y-2">
              {schedule.map(([day, time]) => (
                <div key={day} className="flex items-center justify-between text-sm">
                  <span className="font-semibold uppercase text-[#6d7889]">{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </InfoPanel>

          <InfoPanel title="Ссылки">
            <div className="space-y-2">
              <ExternalResource href="http://diskontshina.by/" label="Веб-сайт" />
              <ExternalResource href="https://vk.com/partner_shin" label="Вконтакте" />
              <ExternalResource
                href="https://www.avservice.by/autoservice/partner-shin"
                label="Исходная карточка"
              />
            </div>
          </InfoPanel>
        </aside>

        <div className="space-y-6">
          <section className="rounded-lg border border-[#dbe1ea] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff3b24]">
                  Направления
                </p>
                <h2 className="mt-2 text-3xl font-semibold">Что есть в карточке сервиса</h2>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#5f6d82]">
                <Clock3 className="size-4" />
                8:00 - 20:00 ежедневно
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border border-[#e4e9f0] bg-[#f8fafc] p-4"
                >
                  <service.icon className="size-5 text-[#ff3b24]" />
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f6d82]">{service.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[#dbe1ea] bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff3b24]">
                  Фотографии
                </p>
                <h2 className="mt-2 text-3xl font-semibold">Партнер шин на месте</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6d7889]">
                  Галерея объединяет фото из карточки AVSERVICE.BY и доступные
                  фотографии из галереи Яндекс.Карт.
                </p>
              </div>
              <Sparkles className="hidden size-8 text-[#ff3b24] sm:block" />
            </div>
            <div className="grid auto-rows-[170px] gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {gallery.map((photo, index) => (
                <div
                  key={photo.src}
                  className={
                    index < 2
                      ? "relative overflow-hidden rounded-lg sm:col-span-2 lg:col-span-2"
                      : "relative overflow-hidden rounded-lg"
                  }
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-[#dbe1ea] bg-[#172033] p-5 text-white shadow-sm sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Рейтинг
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-6xl font-semibold leading-none">5</span>
                <span className="pb-2 text-2xl font-semibold text-white/55">/ 5</span>
              </div>
              <div className="mt-4 flex gap-1 text-[#ffcf4a]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Средняя оценка на основании одного опубликованного отзыва.
              </p>
            </div>

            <article className="rounded-lg border border-[#dbe1ea] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[#ff3b24]/10 text-[#ff3b24]">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Отзыв Alexander</h2>
                  <p className="mt-1 text-sm text-[#6d7889]">на Mercedes-Benz Smart</p>
                </div>
              </div>
              <p className="mt-5 leading-7 text-[#465568]">
                Хорошее отношение. Сделали все четко, аккуратно и доступно. Все
                показали, рассказали. Все оборудование перед клиентом. Все видно что
                делали. Спасибо большое.
              </p>
              <div className="relative mt-5 h-44 overflow-hidden rounded-lg">
                <Image
                  src="/images/partner-shin/review-alexander.jpg"
                  alt="Фото из отзыва Alexander"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-[#dbe1ea] bg-white p-5 shadow-sm">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-1 text-sm font-medium text-[#6d7889]">{label}</div>
    </div>
  );
}

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-[#dbe1ea] bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function ExternalResource({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between rounded-md border border-[#e4e9f0] px-3 py-2 text-sm font-semibold transition hover:border-[#ff3b24] hover:bg-[#fff6f4]"
    >
      {label}
      <ExternalLink className="size-4 text-[#ff3b24]" />
    </a>
  );
}
