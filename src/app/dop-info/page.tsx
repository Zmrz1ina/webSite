import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MessageCircle, Sparkles, Star } from "lucide-react";
import { ScrollWheelVideo } from "@/components/scroll-wheel-video";

const gallery = [
  { src: "/images/partner-shin/service-1.jpg", alt: "Фасад Партнер шин вечером" },
  { src: "/images/partner-shin/service-2.jpg", alt: "Здание Партнер шин" },
  { src: "/images/partner-shin/service-3.jpg", alt: "Рабочая зона шиномонтажа" },
  { src: "/images/partner-shin/service-4.jpg", alt: "Оборудование шиномонтажа" },
  { src: "/images/partner-shin/service-5.jpg", alt: "Зона обслуживания колес" },
  { src: "/images/partner-shin/yandex/yandex-01.jpg", alt: "Фасад Партнер шин с Яндекс.Карт" },
  { src: "/images/partner-shin/yandex/yandex-02.jpg", alt: "Въезд и вывеска Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-03.jpg", alt: "Рабочая зона шиномонтажа Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-04.jpg", alt: "Оборудование шиномонтажа Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-05.jpg", alt: "Шины и диски в Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-06.jpg", alt: "Сервисная зона Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-07.jpg", alt: "Помещение Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-08.jpg", alt: "Фото сервиса Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-09.jpg", alt: "Здание и территория Партнер шин" },
  { src: "/images/partner-shin/yandex/yandex-10.jpg", alt: "Дополнительное фото Партнер шин" },
];

const links = [
  { href: "http://diskontshina.by/", label: "Веб-сайт" },
  { href: "https://vk.com/partner_shin", label: "Вконтакте" },
  { href: "https://www.avservice.by/autoservice/partner-shin", label: "Исходная карточка" },
];

export default function ExtraInfoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <ScrollWheelVideo />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.28)_38%,rgba(0,0,0,0.78))]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 py-4 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-3 rounded-md border border-white/14 bg-white/[0.08] px-3 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-4">
          <Link
            href="/"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/[0.09] px-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/18"
          >
            <ArrowLeft className="size-4" />
            Главная
          </Link>
          <div className="text-right">
            <div className="text-lg font-semibold leading-none">Доп инфо</div>
            <div className="mt-1 text-xs text-white/60">Фото, ссылки и отзыв</div>
          </div>
        </header>

        <div className="grid gap-4 py-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-md border border-white/14 bg-white/[0.09] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-5">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-semibold sm:text-4xl">Фотографии</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/64">
                  Галерея объединяет фото из карточки AVSERVICE.BY и доступные фотографии из Яндекс.Карт.
                </p>
              </div>
              <Sparkles className="hidden size-8 text-[#ff7a68] sm:block" />
            </div>
            <div className="grid auto-rows-[165px] gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {gallery.map((photo, index) => (
                <div
                  key={photo.src}
                  className={
                    index < 2
                      ? "relative overflow-hidden rounded-md border border-white/12 bg-white/[0.08] shadow-lg shadow-black/20 sm:col-span-2"
                      : "relative overflow-hidden rounded-md border border-white/12 bg-white/[0.08] shadow-lg shadow-black/20"
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

          <aside className="space-y-4">
            <section className="rounded-md border border-white/14 bg-white/[0.09] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-5">
              <h2 className="text-xl font-semibold">Ссылки</h2>
              <div className="mt-4 space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.07] px-3 py-2.5 text-sm font-semibold transition hover:bg-white/15"
                  >
                    {link.label}
                    <ExternalLink className="size-4 text-[#ff7a68]" />
                  </a>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-white/14 bg-white/[0.09] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[#ff3b24]/22 text-[#ff7a68] ring-1 ring-white/18">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Отзыв Alexander</h2>
                  <p className="mt-1 text-sm text-white/55">на Mercedes-Benz Smart</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 text-[#ffcf4a]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Хорошее отношение. Сделали все четко, аккуратно и доступно. Все показали,
                рассказали. Все оборудование перед клиентом. Все видно что делали. Спасибо большое.
              </p>
              <div className="relative mt-4 h-44 overflow-hidden rounded-md border border-white/12 bg-white/[0.08]">
                <Image
                  src="/images/partner-shin/review-alexander.jpg"
                  alt="Фото из отзыва Alexander"
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
