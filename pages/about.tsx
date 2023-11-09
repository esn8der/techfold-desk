import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main
      className={`flex min-h-screen flex-col my-20 px-48 ${inter.className}`}
    >
      <section className="flex flex-col relative pt-16 gap-5 bg-emerald-900/70 max-w-3xl mt-20 px-16 py-20">
        <h1 className="text-6xl font-bold w-fit text-white">Sobre Nosotros</h1>
        <p>
          En TechFold Desk, somos un equipo apasionado de innovadores que creen
          en la combinación perfecta entre tecnología y comodidad. Nuestra
          historia comenzó con la idea de crear una solución que permitiera a
          las personas trabajar de manera más eficiente y cómoda en cualquier
          lugar. Hoy, nos enorgullece presentar TechFold, la mesa plegable
          portátil que transformará la forma en que trabajas y te adapta a tu
          estilo de vida activo.
        </p>
        <Image
          className="absolute top-20 -right-[450px] rounded-lg"
          src="/img/hero.jpg"
          width={500}
          height={500}
          alt="TechFold Desk"
        />
      </section>
      <section className="flex flex-col relative pt-16 gap-5 bg-emerald-900/70 max-w-3xl mt-20 px-16 py-20 top-44 left-[750px]">
        <h1 className="text-6xl font-bold w-fit text-white">Misión</h1>
        <p>
          Nuestra misión en TechFold Desk es simple pero poderosa: Empoderar a
          las personas para que trabajen y se diviertan de manera óptima, sin
          importar dónde se encuentren. Nos esforzamos por ofrecer productos de
          alta calidad que combinen funcionalidad, comodidad y tecnología de
          vanguardia.
        </p>
        <Image
          className="absolute -left-[750px] -top-28 rounded-lg"
          src="/img/vis.jpeg"
          width={500}
          height={500}
          alt="TechFold Desk"
        />
      </section>
      <section className="flex flex-col relative pt-16 gap-5 bg-emerald-900/70 max-w-3xl mt-20 px-16 py-20 top-44 left-96">
        <h1 className="text-6xl font-bold w-fit text-white">Visión</h1>
        <p>
          Nuestra visión es liderar la revolución del espacio de trabajo,
          brindando a las personas la libertad de trabajar y estudiar en sus
          propios términos. Queremos que cada usuario de TechFold Desk sienta
          que tiene su propia oficina personal en cualquier lugar del mundo,
          impulsando la productividad y la creatividad.
          <br />
          <br />
          En TechFold Desk, estamos comprometidos con la excelencia en diseño,
          innovación y servicio al cliente. Valoramos la satisfacción de
          nuestros clientes y trabajamos incansablemente para ofrecer soluciones
          que hagan que sus vidas sean más fáciles y más productivas.
          <br />
          <br />
          Únete a nosotros en nuestro viaje mientras seguimos redefiniendo la
          forma en que trabajamos y vivimos. Con TechFold Desk, el mundo es tu
          oficina.
        </p>
      </section>
    </main>
  );
}
