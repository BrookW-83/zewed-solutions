import Image from "next/image";
import { ourServicesData } from "../data.json";

type ServiceCardProps = {
  serviceImageURL: string;
  serviceTitle: string;
  serviceDescription: string;
};
const ServiceCard = ({
  serviceImageURL,
  serviceTitle,
  serviceDescription,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 text-[#FFFF]">
      <Image
        src={serviceImageURL}
        alt="Service Image"
        width={200}
        height={100}
      />
      <h1 className="text-xl font-secular font-bold">{serviceTitle}</h1>
      <p className="font-extralight text-md text-center">
        {serviceDescription}
      </p>
    </div>
  );
};

const OurService = () => {
  return (
    <section className="flex flex-col bg-[#000000] bg-[url('/icons/services.png')] bg-cover bg-center w-full items-center mt-4 mx-auto mb-12">
      <h1 className="font-Sans text-4xl text-[#FFFF] font-bold m-24">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mb-24 px-4">
        {ourServicesData.map((service) => (
          <ServiceCard
            key={service.id}
            serviceImageURL={service.serviceImageURL}
            serviceTitle={service.serviceTitle}
            serviceDescription={service.serviceDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default OurService;
