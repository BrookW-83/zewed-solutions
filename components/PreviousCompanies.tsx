import Image from "next/image";
import { PreviousCompaniesData } from "../data.json";

const PreviousCompanies = () => {
  return (
    <section className="flex flex-col items-center bg-[url('/images/companies/company_cover.png')] bg-cover bg-center bg-no-repeat h-[70vh] 2xl:h-[60vh]">
      <h1 className="text-[#FFFFFF] font-secular text-xl md:text-2xl text-center mt-4 mb-4 md:m-16 mx-auto md:max-w-80">
        Our consultants have worked on products for
      </h1>
      <div className="flex flex-col p-4 md:px-4 md:py-2 md:flex-row items-center justify-center gap-8 mx-auto">
        {/* List of previous company */}
        {PreviousCompaniesData.map((company) => (
          <div key={company.id}>
            <Image
              src={company.companyImageURL}
              alt="Company Logo"
              width={180}
              height={62}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousCompanies;
