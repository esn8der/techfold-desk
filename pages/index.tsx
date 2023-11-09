import { Inter } from "next/font/google";
import Image from "next/image";
import { FeatureCard } from "@/components/FeatureCard";
import { MdTableRestaurant } from "react-icons/md";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiFoldedPaper, GiBatteryPack } from "react-icons/gi";
import { WaitListDialog } from "@/components/dialogs/WaitListDialog";
import {
  BiSolidSelectMultiple,
  BiLineChart,
  BiSolidPlaneTakeOff,
  BiSolidCheckShield,
} from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col mt-20 px-48 ${inter.className}`}
    >
      <div className="flex flex-row h-[82vh] mt-24 gap-36">
        <div className="flex flex-col basis-2/3 pt-16 gap-5">
          <span className="font-semibold text-emerald-600">La mesa portátil que te acompaña a donde vayas!</span>
          <h1 className="text-6xl tracking-tighter leading-snug font-bold w-fit bg-gradient-to-r from-emerald-600 to-green-700 text-white whitespace-normal line-clamp-3">
          TechFold Desk
          </h1>
          <p className="text-emerald-100/70">
            Imagina una mesa que puedas usar en cualquier lugar, que se adapte a
            tu estilo de vida y que te ofrezca la mejor experiencia de trabajo.
            Esa mesa existe y se llama TechFold. TechFold es una mesa plegable
            portátil que te brinda comodidad, funcionalidad y autonomía.
            TechFold tiene una batería integrada que te permite cargar tu laptop
            o tu teléfono, y un diseño ergonómico que te garantiza el máximo
            confort. ¿Es lo que buscabas? Pide la tuya ya!
          </p>
          <WaitListDialog />
        </div>
        <div className="relative">
          <Image
            src="/img/hero2BG.png"
            alt="Logo"
            width={600}
            height={500}
            className="animated-element place-self-end justify-self-end items-end"
          />
          <span className="absolute w-96 h-20 bg-gradient-to-r from-emerald-600 to-sky-900 rounded-[50%] blur-[80px] top-72 left-16 -z-10"></span>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <span className="text-5xl font-bold">Beneficios y Características</span>
        <div className="flex flex-row flex-wrap gap-16 justify-between mb-14">
          <FeatureCard
            Icon={GiFoldedPaper}
            title="Portabilidad Total"
            description="La TechFold Desk es increíblemente portátil y ligera, lo que te permite llevarla a cualquier lugar con facilidad. 
                        Nunca más te sentirás limitado por tu entorno de trabajo."
          />
          <FeatureCard
            Icon={GiBatteryPack}
            title="Carga de Dispositivos"
            description="La batería integrada te permite cargar tu laptop y tu teléfono mientras trabajas en cualquier lugar, 
                        sin preocuparte por encontrar tomas de corriente."
          />
          <FeatureCard
            Icon={MdTableRestaurant}
            title="Diseño Ergonómico"
            description="La TechFold Desk cuenta con un diseño ergonómico que garantiza que puedas trabajar cómodamente durante horas, 
                        reduciendo la tensión en tu cuello y espalda. Disfruta de la máxima comodidad mientras trabajas o estudias."
          />
          <FeatureCard
            Icon={BiSolidSelectMultiple}
            title="Múltiples Usos"
            description="Ya sea que necesites una estación de trabajo en casa, una mesa de estudio en la biblioteca o un escritorio 
                        improvisado en un café, la TechFold Desk se adapta a tu estilo de vida y a tus necesidades cambiantes."
          />
          <FeatureCard
            Icon={BiLineChart}
            title="Aumenta la Productividad"
            description="Al tener tu propio espacio de trabajo siempre a mano, podrás ser más productivo en cualquier lugar. 
                        Evita las interrupciones y las distracciones y concéntrate en lo que realmente importa."
          />
          <FeatureCard
            Icon={BiSolidPlaneTakeOff}
            title="Solución para Viajeros"
            description="Perfecta para viajeros frecuentes, la TechFold Desk es tu compañera ideal en aeropuertos, 
                        hoteles y lugares de trabajo temporales. Transforma cualquier lugar en tu oficina personal."
          />
          <FeatureCard
            Icon={BiSolidCheckShield}
            title="Materiales de Calidad"
            description="Fabricada con materiales de alta calidad, la TechFold Desk es duradera y resistente, 
                        lo que la convierte en una inversión que durará mucho tiempo."
          />
          <FeatureCard
            Icon={BsFillEmojiSunglassesFill}
            title="Estilo y Versatilidad"
            description="Su diseño elegante y versátil combina con cualquier entorno y estilo de vida. 
                        Es la solución perfecta para aquellos que valoran la estética y la funcionalidad."
          />
        </div>
      </div>
    </main>
  );
}
