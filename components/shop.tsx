"use client"

import type React from "react"
import { useState } from "react"
import { ShoppingBag, X, MapPin, Smartphone, User, MessageCircle } from "lucide-react"
import Image from "next/image"

// --- CONFIGURATION ---
// Reemplaza estos valores con tus credenciales de Telegram
const TELEGRAM_BOT_TOKEN = "TU_TOKEN_AQUI"
const TELEGRAM_CHAT_ID = "TU_CHAT_ID_AQUI"
const WHATSAPP_NUMERO = "59162979284" // Reemplaza con tu número

// --- DATA ---
const DEPARTMENTS = ["La Paz", "Santa Cruz", "Cochabamba", "Oruro", "Potosí", "Tarija", "Chuquisaca", "Beni", "Pando"]

const PRODUCTS = [
  {
    id: 1,
    name: "Vestido Gala Noir",
    price: 160,
    colorVariants: [
      {
        color: "Negro",
        image: "https://static.dafiti.com.co/p/mp-1475-7806362-1-product.jpg",
        stock: 3,
      },
      {
        color: "Rojo Vino",
        image: "http://boutiquemariaregna.com/cdn/shop/products/CC1618_7_RED.jpg?v=1649691735",
        stock: 2,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 2,
    name: "Vestido Elegancia Blanca",
    price: 210,
    colorVariants: [
      {
        color: "Blanco",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop",
        stock: 3,
      },
      {
        color: "Crema",
        image: "https://sharetribe.imgix.net/5fc75098-d907-4a37-95a5-770989517a9c/662f2a2c-913b-4cd6-818d-398ff0a5e180?auto=format&crop=edges&fit=crop&h=240&w=240&s=3c251f766121776dc5fbe54e05d437fa",
        stock: 2,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 3,
    name: "Vestido Sofisticación",
    price: 295,
    colorVariants: [
      {
        color: "Azul Marino",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=700&fit=crop",
        stock: 2,
      },
      {
        color: "Negro Profundo",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=700&fit=crop",
        stock: 3,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 4,
    name: "Vestido Luminoso",
    price: 320,
    colorVariants: [
      {
        color: "Dorado",
        image: "http://www.the-are.com/cdn/shop/files/vestido-largo-abertura-pierna-escote-pico-tirantes-elegante-invitada-eci-img-1.jpg?v=1739967270",
        stock: 2,
      },
      {
        color: "Plateado",
        image: "https://images.unsplash.com/photo-1595959483652-ea0efca1a318?w=500&h=700&fit=crop",
        stock: 3,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 5,
    name: "Vestido Serenidad",
    price: 375,
    colorVariants: [
      {
        color: "Verde Esmeralda",
        image: "https://i.pinimg.com/736x/82/65/9b/82659b4877585e64d4f2a355d0132223.jpg",
        stock: 3,
      },
      {
        color: "Verde Menta",
        image: "https://images.unsplash.com/photo-1566227073188-1d3f1f0a8cbf?w=500&h=700&fit=crop",
        stock: 2,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 6,
    name: "Vestido Pasión",
    price: 290,
    colorVariants: [
      {
        color: "Rojo Intenso",
        image: "https://www.dhresource.com/webp/m/0x0/f2/albu/g15/M01/80/BD/rBVa3mIq21iAMOcxAAYWazJybBw337.jpg",
        stock: 2,
      },
      {
        color: "Burdeos",
        image: "https://images.unsplash.com/photo-1585487000714-d66d969c6d7b?w=500&h=700&fit=crop",
        stock: 3,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 7,
    name: "Vestido Misterio",
    price: 305,
    colorVariants: [
      {
        color: "Púrpura Oscuro",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
        stock: 3,
      },
      {
        color: "Negro Profundo",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
        stock: 2,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 8,
    name: "Vestido Celestial",
    price: 300,
    colorVariants: [
      {
        color: "Azul Cielo",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop",
        stock: 2,
      },
      {
        color: "Azul Perla",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop",
        stock: 3,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 9,
    name: "Vestido Atardecer",
    price: 315,
    colorVariants: [
      {
        color: "Naranja Coral",
        image: "https://acdn-us.mitiendanube.com/stores/005/413/161/products/vestido-festa-longo-arles-marsala-2-fbcc59b31594686a3d17364255870443-480-0.jpg",
        stock: 3,
      },
      {
        color: "Melocotón",
        image: "https://images.unsplash.com/photo-1611161617213-7d7a39e9b1d7?w=500&h=700&fit=crop",
        stock: 2,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 10,
    name: "Vestido Eternidad",
    price: 330,
    colorVariants: [
      {
        color: "Plata Brillante",
        image: "https://acdn-us.mitiendanube.com/stores/002/249/564/products/89c2f070-ef3b-437b-895e-5f13cb12804b-7460487028c4047c6116589731859596-480-0.jpeg",
        stock: 2,
      },
      {
        color: "Gris Perla",
        image: "https://images.unsplash.com/photo-1595959483652-ea0efca1a318?w=500&h=700&fit=crop",
        stock: 3,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 11,
    name: "Vestido Seducción",
    price: 340,
    colorVariants: [
      {
        color: "Negro Satinado",
        image: "https://cdn.palbincdn.com/users/1279/images/vestido-corto-que-combina-seduccion-y-glamour-03-1711244194.jpg",
        stock: 3,
      },
      {
        color: "Gris Carbón",
        image: "https://images.unsplash.com/photo-1595777707802-11b67efbf4d8?w=500&h=700&fit=crop",
        stock: 2,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    id: 12,
    name: "Vestido Sublime",
    price: 350,
    colorVariants: [
      {
        color: "Oro Rose",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
        stock: 2,
      },
      {
        color: "Dorado Champagne",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
        stock: 3,
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
  },
]

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof PRODUCTS)[0] | null>(null)
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    departamento: "La Paz",
    direccion: "",
  })

  const openModal = (product: (typeof PRODUCTS)[0]) => {
    setSelectedProduct(product)
    setSelectedColor(product.colorVariants[0].color)
    setSelectedSize(product.sizes[2])
    setStep(1)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setStep(1)
    setFormData({ nombre: "", telefono: "", departamento: "La Paz", direccion: "" })
    setSelectedColor("")
    setSelectedSize("")
  }

  // CORRECCIÓN 1: Se agregó HTMLTextAreaElement para soportar el campo de dirección
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendToTelegram = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProduct) return

    setLoading(true)

    // Se eliminó la variable unused 'selectedVariant'
    const message = `
🛍️ *NUEVO PEDIDO LUMIÈRE*
━━━━━━━━━━━━━━━━━━
👗 *Vestido:* ${selectedProduct.name}
💎 *Color:* ${selectedColor}
📏 *Talla:* ${selectedSize}
💵 *Precio:* ${selectedProduct.price} Bs.
━━━━━━━━━━━━━━━━━━
👤 *Nombre:* ${formData.nombre}
📱 *Teléfono:* ${formData.telefono}
📍 *Departamento:* ${formData.departamento}
🏠 *Dirección:* ${formData.direccion}
━━━━━━━━━━━━━━━━━━
    `

    try {
      if (TELEGRAM_BOT_TOKEN !== "TU_TOKEN_AQUI") {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        })
      } else {
        console.log("Simulando envío a Telegram:", message)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
      setStep(2)
    } catch (error) {
      console.error("Error enviando pedido:", error)
      alert("Hubo un error al procesar el pedido. Por favor intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppClick = () => {
    // CORRECCIÓN 2: Verificación de seguridad para evitar error de posible 'null'
    if (!selectedProduct) return

    const message = encodeURIComponent(
      `Hola, ya hice el pago por el ${selectedProduct.name} en ${selectedColor} - Talla ${selectedSize}. ${selectedProduct.price} Bs. Aquí está mi comprobante.`,
    )
    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Banner */}
      <div className="bg-foreground text-background py-3 px-4 text-center text-xs md:text-sm tracking-widest uppercase font-medium sticky top-0 z-50">
        <span className="inline-flex items-center gap-2">
          🇧🇴 Envíos seguros a toda Bolivia - La Paz, SCZ, CBBA y más
        </span>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md relative z-40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <h1 className="font-serif text-3xl font-bold tracking-tighter">LUMIÈRE</h1>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#" className="text-foreground font-medium cursor-default">
              Colección
            </a>
            <a href="/nosotros" className="hover:text-foreground transition-colors">
              Nosotros
            </a>
            <a href="/contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>
          <button className="p-2 hover:bg-accent/20 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center bg-muted overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1920&auto=format&fit=crop"
          alt="Hero Banner"
          fill
          className="object-cover opacity-90 grayscale-[20%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight">Nueva Colección</h2>
          <p className="text-lg md:text-xl tracking-widest uppercase opacity-90 mb-8">Elegancia Atemporal</p>
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all duration-300"
          >
            Ver Diseños
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">Catálogo Exclusivo</span>
          <h2 className="font-serif text-4xl font-bold mt-2 mb-4">Vestidos de Temporada</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-4 bg-muted overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.colorVariants[0].image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button
                  onClick={() => openModal(product)}
                  className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 translate-y-0 opacity-100 hover:bg-zinc-800 transition-all duration-300 uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" /> Comprar Ahora
                </button>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-muted-foreground font-medium">{product.price} Bs.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div
            className="bg-background w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200 relative my-auto"
            style={{ borderRadius: "0" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-muted transition-colors z-10 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-foreground text-background p-4 sm:p-6 text-center relative">
              <h3 className="font-serif text-lg sm:text-2xl italic tracking-wide">
                {step === 1 ? "Finalizar Compra" : "¡Casi listo! Escanea para pagar"}
              </h3>
            </div>

            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-180px)]">
              {step === 1 ? (
                <form onSubmit={sendToTelegram} className="space-y-4 sm:space-y-5">
                  <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-muted/30 border border-border">
                    <div className="relative w-14 h-18 sm:w-16 sm:h-20 shrink-0">
                      <Image
                        src={
                          selectedProduct.colorVariants.find((v) => v.color === selectedColor)?.image ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={selectedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-serif text-base sm:text-lg line-clamp-2">{selectedProduct.name}</p>
                      <p className="text-muted-foreground font-medium text-sm">{selectedProduct.price} Bs.</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Color Selection */}
                    <div>
                      <label className="text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2 block">
                        Color
                      </label>
                      <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="w-full bg-transparent border-b border-input px-0 py-2 sm:py-3 focus:border-black outline-none transition-colors text-sm sm:text-base"
                      >
                        {selectedProduct.colorVariants.map((variant) => (
                          <option key={variant.color} value={variant.color} className="text-foreground">
                            {variant.color}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Size Selection */}
                    <div>
                      <label className="text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2 block">
                        Talla
                      </label>
                      <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-full bg-transparent border-b border-input px-0 py-2 sm:py-3 focus:border-black outline-none transition-colors text-sm sm:text-base"
                      >
                        {selectedProduct.sizes.map((size) => (
                          <option key={size} value={size} className="text-foreground">
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name Input */}
                    <div className="relative">
                      <User className="absolute left-0 top-2.5 sm:top-3.5 w-4 h-4 text-muted-foreground" />
                      <input
                        required
                        name="nombre"
                        placeholder="Nombre Completo"
                        className="w-full bg-transparent border-b border-input pl-6 pr-0 py-2 sm:py-3 focus:border-black outline-none transition-colors placeholder:text-muted-foreground/70 text-sm sm:text-base"
                        value={formData.nombre}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <Smartphone className="absolute left-0 top-2.5 sm:top-3.5 w-4 h-4 text-muted-foreground" />
                      <input
                        required
                        type="tel"
                        name="telefono"
                        placeholder="Celular"
                        className="w-full bg-transparent border-b border-input pl-6 pr-0 py-2 sm:py-3 focus:border-black outline-none transition-colors placeholder:text-muted-foreground/70 text-sm sm:text-base"
                        value={formData.telefono}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Department Selection */}
                    <div className="relative">
                      <MapPin className="absolute left-0 top-2.5 sm:top-3.5 w-4 h-4 text-muted-foreground" />
                      <select
                        required
                        name="departamento"
                        className="w-full bg-transparent border-b border-input pl-6 pr-0 py-2 sm:py-3 focus:border-black outline-none transition-colors appearance-none text-sm sm:text-base"
                        value={formData.departamento}
                        onChange={handleInputChange}
                      >
                        {DEPARTMENTS.map((dep) => (
                          <option key={dep} value={dep} className="text-foreground">
                            {dep}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Address Input */}
                    <div>
                      <textarea
                        required
                        name="direccion"
                        placeholder="Ciudad / Dirección exacta"
                        rows={2}
                        className="w-full bg-transparent border-b border-input px-0 py-2 sm:py-3 focus:border-black outline-none transition-colors placeholder:text-muted-foreground/70 text-sm sm:text-base resize-none"
                        value={formData.direccion}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 sm:mt-6 bg-black text-white py-3 sm:py-4 uppercase tracking-widest text-xs sm:text-sm font-bold hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {loading ? "Procesando..." : "Confirmar y Pagar"}
                  </button>
                </form>
              ) : (
                /* Step 2 - Payment */
                <div className="space-y-4 sm:space-y-6 text-center py-4 sm:py-6">
                  <div className="bg-muted/30 p-6 sm:p-8 flex items-center justify-center">
                    <Image src="/qr-pago.jpg" alt="QR Pago" width={200} height={200} className="max-w-full h-auto" />
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base mb-2">Total a Pagar:</p>
                    <p className="font-serif text-2xl sm:text-3xl font-bold">{selectedProduct.price} Bs.</p>
                  </div>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 text-white py-3 sm:py-4 uppercase tracking-widest text-xs sm:text-sm font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Enviar Comprobante por WhatsApp
                  </button>

                  <button
                    onClick={closeModal}
                    className="w-full bg-muted text-foreground py-3 sm:py-4 uppercase tracking-widest text-xs sm:text-sm font-bold hover:bg-muted/80 transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}