
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio con nuestra web rápida y soporte continuo, para que te enfoques en lo que amas." cta1="Comienza Ahora" />
<How step1Title="Contáctanos" step1Desc="Cuéntanos sobre tu negocio actual." step2Title="Creamos tu web" step2Desc="Construimos tu página de ventas en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar tus ventas online." />
<Aboutus headline="WebGo: Digitaliza tus ventas ahora" subheadline="WebGo transforma recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Ventas Aumentadas" beneficio1="Conviértete en líder en digitalización." beneficiotitulo2="Gestión Simplificada" beneficio2="Nos encargamos de todo por ti." />
<Services heading="Transforma Recomendaciones en Ventas Online" description="Nosotros creamos tu tienda online en 24 horas, sin esfuerzo para ti." services={[{"name":"Diseño Web Rápido","icon":"rocket","description":"Web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Efectivo","icon":"search","description":"Aparece en los primeros resultados de búsqueda."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones rápidas y seguras."},{"name":"Analítica Web","icon":"chart-line","description":"Conoce el comportamiento de tus clientes."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualiza tu sitio sin complicaciones."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en realidad con resultados sobresalientes." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio?","respuesta":"WebGo te ayuda a llevar tu negocio al mundo digital creando un sitio web fácil de usar y optimizado para vender. Nos encargamos de todo para que te enfoques en lo que mejor haces: atender a tus clientes."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, obtienes un aumento en tus ventas en línea sin preocuparte por la tecnología. Nuestro equipo se encarga de construir y gestionar tu sitio web, haciendo que tus productos sean visibles para más personas."},{"pregunta":"¿WebGo puede generar ventas online aunque no tenga experiencia en marketing digital?","respuesta":"Sí, con WebGo no necesitas experiencia en marketing digital. Nuestro equipo se encarga de atraer clientes a tu sitio web y convertirlos en compradores, todo sin que tengas que aprender nada nuevo."},{"pregunta":"¿Qué tan rápido puedo ver resultados usando WebGo?","respuesta":"Con WebGo, puedes empezar a ver resultados en pocas semanas. Nuestro enfoque está en crear un sitio web que no solo atrae visitantes, sino que también convierte esas visitas en ventas."},{"pregunta":"¿Necesito tiempo para gestionar mi sitio web con WebGo?","respuesta":"No necesitas invertir tiempo extra. WebGo gestiona todo por ti, desde el diseño hasta las actualizaciones. Tú solo te dedicas a tu negocio mientras nosotros te ayudamos a crecer online."}]} />
<BookAppointment 
                      heading="Transforma tus Recomendaciones en Ventas Online" 
                      description="WebGo te ayuda a digitalizar tu negocio sin complicaciones. Deja que nosotros gestionemos tu sitio web mientras te enfocas en lo que haces mejor."
                      formPostUrl="api/contact-us"
                      projectId="85FbQMxviXeZjJ0BhuBADgZzyEJ2"
                    />
<Footer />
    </main>
  );
}
