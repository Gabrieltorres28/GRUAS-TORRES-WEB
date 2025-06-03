"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutUs() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Nuestra<span className="text-red-500 dark:text-red-500">Historia</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Desde grúas hasta autos de carreras, nuestro viaje ha sido impulsado por la pasión y el compromiso con la excelencia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/MB11HISTORIA.png?height=800&width=600"
                  alt="Old family tow truck"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                <p className="font-bold">MB 11 14</p>
                <p>Primera etapa de Gruas Torres</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">De humildes comienzos</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              Gruas Torres comenzó como una pequeña empresa familiar con una sola grúa. Fue escalando y reinvirtiendo todo en lo que más le apasiona, Armando Torres fundó la empresa con una misión sencilla: brindar asistencia confiable a quienes la necesitan.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              A lo largo de los años, nuestro compromiso con el servicio de calidad y los tiempos de respuesta rápidos nos ha permitido convertirnos en uno de los servicios de remolque más confiables de la región.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-red-500"></div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Más de 35 años de experiencia</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:order-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Corriendo en la sangre</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              La pasión por las máquinas que impulsó nuestro negocio de grúas y extendió naturalmente al automovilismo. Armando Torres llevó esta pasión al siguiente nivel compitiendo en el TC Cuatromil, aportando la misma dedicación y experiencia técnica de nuestra asistencia en carretera al circuito.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hoy, nuestro equipo de carreras representa la velocidad, la precisión y la confiabilidad que definen nuestros valores comerciales.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-red-500"></div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Competidores del TC Cuatromil</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative md:order-3">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/fondogruastorres.PNG?height=800&width=600"
                  alt="Modern racing car"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-red-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Present Day</p>
                <p>Racing Excellence</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
