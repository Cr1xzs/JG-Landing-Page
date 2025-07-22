import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Impartial Content Trout</title>
        <meta property="og:title" content="Impartial Content Trout" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#inicio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#acerca-de</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#invertir</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contacto</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Inicio</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Acerca de</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Invertir</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contacto</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Bienvenido a Judith Guarniz Bienes Raíces, tu socio confiable en
              bienes raíces en Chancay, Perú.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Descubre quiénes somos y por qué somos la mejor opción para tus
              inversiones inmobiliarias.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Aprovecha esta oportunidad única de inversión en terrenos en
              Chancay, con la construcción del Megapuerto como catalizador de
              crecimiento.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              ¿Listo para dar el primer paso hacia tu inversión inmobiliaria?
              Contáctanos hoy mismo.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Contacta Ahora</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Más Información</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Descubre la oportunidad de inversión en terrenos en Chancay, Peru,
              con la construcción del Megapuerto. ¡No pierdas esta oportunidad
              única para invertir en un proyecto de gran envergadura!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Invierte en Chancay, Peru</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">
              Terrenos disponibles en Chancay
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">
              Acceso a infraestructura moderna
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Inversión segura</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Amplia variedad de terrenos para elegir
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Ubicación estratégica cerca del Megapuerto
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Oportunidad de inversión en crecimiento
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">
              Contáctanos para más información
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Descubre por qué este es el mejor momento para invertir en
              terrenos en Chancay y aprovechar la construcción del Megapuerto.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">¡Invierte en tu futuro hoy!</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Ubicación privilegiada</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Plusvalía garantizada</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Facilidades de pago</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Los terrenos en Chancay se encuentran en una ubicación
              estratégica, cerca del Megapuerto, lo que los convierte en una
              inversión con gran potencial de crecimiento.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              La construcción del Megapuerto en Chancay garantiza un aumento en
              la plusvalía de los terrenos, lo que representa una oportunidad
              única para inversionistas.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Ofrecemos diversas opciones de financiamiento para la adquisición
              de terrenos en Chancay, facilitando el proceso de inversión.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">Plan de Inversión Básico</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">Plan de Inversión Avanzado</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">Plan de Inversión Premium</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">¡Invierte ahora!</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$50,000</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">Pago único</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">¡Aprovecha esta oportunidad!</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$100,000</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">Pago anual</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">¡Haz crecer tu patrimonio!</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$200,000</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">Pago trimestral</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">
              ¡Contáctanos para más información!
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">¡Reserva tu cita ahora!</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">$10,000</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">
              ¡Contáctanos para una consulta personalizada!
            </span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">$60,000</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">
              Terrenos disponibles en ubicaciones privilegiadas en Chancay
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">
              Excelente potencial de valorización con la construcción del
              Megapuerto
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">
              Asesoramiento personalizado para maximizar tu inversión
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">
              Diversidad de terrenos con diferentes metrajes disponibles
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">
              Acceso a información exclusiva sobre el desarrollo del Megapuerto
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">
              Posibilidad de financiamiento a largo plazo
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">
              Asesoramiento legal y financiero especializado
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">
              Terrenos exclusivos con vista al mar en Chancay
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">
              Beneficios fiscales y de inversión para extranjeros
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">
              Acompañamiento integral en todo el proceso de compra
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">
              Acceso a eventos VIP y networking con otros inversionistas
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">
              Rentabilidad garantizada a corto y largo plazo
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Descubra la ubicación ideal</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Invierta en el futuro</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Asesórese con expertos</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Reserve su terreno hoy</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Explore la conveniente ubicación de los terrenos en Chancay, Perú,
              cerca del Megapuerto, lo que los convierte en una inversión
              estratégica.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Aproveche la oportunidad de invertir en un área en crecimiento con
              la construcción del Megapuerto, lo que aumentará el valor de su
              inversión a largo plazo.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Nuestro equipo de Judith Guarniz Bienes Raíces está listo para
              brindarle asesoramiento profesional y personalizado en cada paso
              del proceso de inversión.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              No pierda la oportunidad de asegurar su terreno en Chancay y ser
              parte de este emocionante proyecto. ¡Contáctenos para reservar su
              espacio ahora!
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Excelente servicio, atención personalizada y gran conocimiento del
              mercado inmobiliario. Sin duda, volveré a confiar en ellos para
              futuras inversiones.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Judith Guarniz Bienes Raíces me ayudó a encontrar el lugar
              perfecto para mi próximo proyecto arquitectónico. Su
              profesionalismo y dedicación son incomparables.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Gracias a la recomendación de Judith Guarniz Bienes Raíces, pude
              realizar una inversión segura y rentable. ¡No dudaría en volver a
              trabajar con ellos!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Profesionales de primera, siempre dispuestos a brindar la mejor
              asesoría. Mi experiencia como cliente ha sido excelente en todo
              momento.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Estoy muy contenta con la asesoría de Judith Guarniz Bienes
              Raíces. Gracias a su recomendación, invertí en un terreno en
              Chancay y ya estoy viendo los beneficios. ¡Totalmente recomendado!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonios de Clientes</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">María Pérez</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Juan Rodríguez</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Luisa Gómez</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Carlos Vargas</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">Inversionista</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Empresario</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Arquitecta</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Inversionista</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Estamos aquí para ayudarte en tu inversión. ¡Déjanos tus datos y
              nos pondremos en contacto contigo lo antes posible!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">¡Contáctanos!</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Dirección:</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Teléfono:</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Av. Principal 123, Chancay, Perú
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">+51 123 456 789</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Inicio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Propiedades en Venta</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Sobre Nosotros</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Contacto</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Términos y Condiciones</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Política de Cookies</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Política de Privacidad</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
