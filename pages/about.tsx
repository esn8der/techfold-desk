import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main
      className={`flex flex-col min-h-screen my-20 px-4 lg:px-48 ${inter.className}`}
    >
      <div className="flex relative flex-col lg:flex-row">
        <section className="flex flex-col relative pt-16 gap-5 max-w-full lg:max-w-3xl mt-20 px-4 lg:px-16 py-20 bg-emerald-900/70">
          <h1 className="text-6xl font-bold w-fit text-white">
            Sobre Nosotros
          </h1>
          <p className="mx-auto adjust-text">
            En TechFold Desk, somos un equipo apasionado de innovadores que
            creen en la combinación perfecta entre tecnología y comodidad.
            Nuestra historia comenzó con la idea de crear una solución que
            permitiera a las personas trabajar de manera más eficiente y cómoda
            en cualquier lugar. Hoy, nos enorgullece presentar TechFold, la mesa
            plegable portátil que transformará la forma en que trabajas y te
            adapta a tu estilo de vida activo.
          </p>
          <Image
            className="hidden lg:block mx-auto rounded-lg lg:absolute lg:left-[110%] lg:top-[5%]"
            src="/img/hero.jpg"
            width={400}
            height={400}
            alt="TechFold Desk"
          />
        </section>
        <section className="flex flex-col relative lg:absolute pt-16 gap-5 max-w-full lg:max-w-3xl mt-20 px-4 lg:px-16 py-20 bg-emerald-900/70 lg:top-[100%] lg:left-[50%]">
          <h1 className="text-6xl font-bold w-fit text-white">Misión</h1>
          <p className="mx-auto adjust-text">
            Nuestra misión en TechFold Desk es simple pero poderosa: Empoderar a
            las personas para que trabajen y se diviertan de manera óptima, sin
            importar dónde se encuentren. Nos esforzamos por ofrecer productos
            de alta calidad que combinen funcionalidad, comodidad y tecnología
            de vanguardia.
          </p>
          <Image
            className="hidden lg:block mx-auto rounded-lg lg:absolute lg:right-[110%] lg:top-[1%]"
            src="/img/vis.jpeg"
            width={400}
            height={400}
            alt="TechFold Desk"
          />
        </section>
        <section className="flex flex-col relative lg:absolute pt-16 gap-5 max-w-full lg:max-w-3xl mt-20 px-4 lg:px-16 py-20 bg-emerald-900/70 lg:top-[200%] lg:left-[24.7%]">
          <h1 className="text-6xl font-bold w-fit text-white">Visión</h1>
          <p className="mx-auto adjust-text">
            Nuestra visión es liderar la revolución del espacio de trabajo,
            brindando a las personas la libertad de trabajar y estudiar en sus
            propios términos. Queremos que cada usuario de TechFold Desk sienta
            que tiene su propia oficina personal en cualquier lugar del mundo,
            impulsando la productividad y la creatividad.
            <br />
            <br />
            En TechFold Desk, estamos comprometidos con la excelencia en diseño,
            innovación y servicio al cliente. Valoramos la satisfacción de
            nuestros clientes y trabajamos incansablemente para ofrecer
            soluciones que hagan que sus vidas sean más fáciles y más
            productivas.
            <br />
            <br />
            Únete a nosotros en nuestro viaje mientras seguimos redefiniendo la
            forma en que trabajamos y vivimos. Con TechFold Desk, el mundo es tu
            oficina.
          </p>
        </section>
      </div>
    </main>
  );
}
