"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react"

export default function Contacto() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Ponete en <span className="text-red-500 dark:text-red-500">Contacto</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              ¿Necesitás asistencia con grúas o tenés dudas? Estamos disponibles 24/7 para ayudarte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Información de contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Teléfono</h4>
                      <p className="text-gray-700 dark:text-gray-300">+54 11 1234-5678</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Atención inmediata las 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Correo</h4>
                      <p className="text-gray-700 dark:text-gray-300">info@gruas-torres.com</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Consultas y presupuestos</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Ubicación</h4>
                      <p className="text-gray-700 dark:text-gray-300">Argentina, Misiones</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Base operativa </p>
                    </div>
                  </div>
                </div>

            

                <div className="mt-8">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar ahora
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6 text-red-500" />
                  Enviános un mensaje
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-white">
                        Nombre completo
                      </label>
                      <Input id="name" placeholder="Juan Pérez" className="bg-white dark:bg-gray-700" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-white">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="juan@ejemplo.com"
                        className="bg-white dark:bg-gray-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900 dark:text-white">
                      Teléfono
                    </label>
                    <Input id="phone" placeholder="+54 11 1234-5678" className="bg-white dark:bg-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-900 dark:text-white">
                      Asunto
                    </label>
                    <Input id="subject" placeholder="Consulta por servicio de grúa" className="bg-white dark:bg-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-white">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Dejanos los detalles de tu consulta..."
                      className="min-h-[120px] bg-white dark:bg-gray-700"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white dark:bg-red-600 dark:hover:bg-red-700"
                  >
                    Enviar mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
