import Link from "next/link"
import { ShoppingBag, ShieldCheck, Truck, Clock } from "lucide-react"
import Image from "next/image"

export default function NosotrosPage() {
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
            <span className="text-foreground font-medium cursor-default">Nosotros</span>
            <Link href="/contacto" className="hover:text-foreground transition-colors">
              Contacto
            </Link>
          </nav>
          <Link href="/" className="p-2 hover:bg-accent/20 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-muted overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1550614000160-6ebcfceb0d08?q=80&w=1920&auto=format&fit=crop"
              alt="Background Pattern"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">Nuestra Historia</h1>
            <div className="w-24 h-1 bg-black mx-auto mb-8" />
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Nacida en el corazón de <span className="text-foreground font-medium">Santa Cruz de la Sierra</span>,
              LUMIÈRE es más que una boutique; es un homenaje a la mujer moderna que busca elegancia sin esfuerzo.
              Inspiradas en la belleza atemporal, seleccionamos cada pieza pensando en ti.
            </p>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
                alt="Quality Detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Compromiso de Calidad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Entendemos que comprar en línea requiere confianza. Por eso, nuestro equipo revisa meticulosamente
                  cada prenda antes de ser empaquetada, asegurando que recibas exactamente lo que viste y amaste.
                  Cumplimos con los más altos estándares de confección y acabado.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold">Logística Segura</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No importa dónde estés, llegamos a ti. Realizamos{" "}
                  <span className="text-foreground font-medium">despachos diarios vía courier o flota</span> según tu
                  preferencia, cubriendo los 9 departamentos de Bolivia con total seguridad y seguimiento.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-block bg-black text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all duration-300"
                >
                  Volver a la Tienda
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
              <div className="w-16 h-0.5 bg-black mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-background border border-border hover:border-black transition-colors duration-300">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Pago Seguro QR</h3>
                <p className="text-muted-foreground text-sm">
                  Transacciones rápidas y verificadas directamente a través de banca móvil.
                </p>
              </div>

              <div className="p-8 bg-background border border-border hover:border-black transition-colors duration-300">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Rapidez y Eficiencia</h3>
                <p className="text-muted-foreground text-sm">
                  Procesamos tu pedido el mismo día para que estrenes tu look cuanto antes.
                </p>
              </div>

              <div className="p-8 bg-background border border-border hover:border-black transition-colors duration-300">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Envíos Nacionales</h3>
                <p className="text-muted-foreground text-sm">
                  Cobertura total en La Paz, Cochabamba, Santa Cruz y el resto del país.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold tracking-tighter mb-6">LUMIÈRE</h2>
          <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">Elegancia que trasciende</p>
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
