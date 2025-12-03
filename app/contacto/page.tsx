import Link from "next/link"
import { ShoppingBag, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md relative z-40 sticky top-0">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-3xl font-bold tracking-tighter">
            LUMIÈRE
          </Link>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Colección
            </Link>
            <Link href="/nosotros" className="hover:text-foreground transition-colors">
              Nosotros
            </Link>
            <span className="text-foreground font-medium cursor-default">Contacto</span>
          </nav>
          <Link href="/" className="p-2 hover:bg-accent/20 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </div>
      </header>

      <main>
        {/* Title Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <span className="text-muted-foreground uppercase tracking-widest text-sm font-semibold block mb-2">
              ¿Tienes dudas?
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Estamos para Asesorarte</h1>
            <div className="w-24 h-1 bg-black mx-auto" />
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* WhatsApp Block */}
              <div className="p-8 border border-border bg-background hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">Atención rápida y personalizada</p>
                <a
                  href="https://wa.me/59162979284"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline decoration-1 underline-offset-4 hover:text-black/70"
                >
                  +591 62979284
                </a>
              </div>

              {/* Email Block */}
              <div className="p-8 border border-border bg-background hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-4">Consultas corporativas</p>
                <a
                  href="mailto:info@tutienda.com"
                  className="text-sm font-medium underline decoration-1 underline-offset-4 hover:text-black/70"
                >
                  infolemer@lemer.site
                </a>
              </div>

              {/* Location Block */}
              <div className="p-8 border border-border bg-background hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Ubicación</h3>
                <p className="text-sm text-muted-foreground">
                  Barrio Equipetrol
                  <br />
                  AV. SAN MARTÍN/9oeste
                  <br />
                  Santa Cruz de la Sierra
                </p>
              </div>

              {/* Hours Block */}
              <div className="p-8 border border-border bg-background hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">Horarios</h3>
                <p className="text-sm text-muted-foreground">
                  Lun - Vie: 9:00 - 19:00
                  <br />
                  Sáb: 10:00 - 16:00
                  <br />
                  Dom: Cerrado
                </p>
              </div>
            </div>

            {/* Social & Map Column */}
            <div className="space-y-8 flex flex-col">
              {/* Social Media */}
              <div className="bg-black text-white p-8 text-center">
                <h3 className="font-serif text-xl font-bold mb-6">Síguenos en Redes</h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="flex-grow bg-muted relative min-h-[300px] w-full overflow-hidden">
                {/* <!-- ESPACIO PARA TU MAPA DE GOOGLE (IFRAME) --> */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200">
                  <div className="text-center p-4">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="text-sm uppercase tracking-widest font-medium">Mapa de Ubicación</span>
                    <p className="text-xs mt-2 opacity-70">(Inserta tu iframe de Google Maps aquí)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
              <ShoppingBag className="w-4 h-4" />
              Volver a la Tienda
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tighter mb-6">LUMIÈRE</h2>
          <div className="flex justify-center gap-6 mb-8 text-sm text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              TikTok
            </a>
          </div>
          <p className="text-gray-600 text-xs">© 2025 LUMIÈRE. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
