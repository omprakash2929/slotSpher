import Image from "next/image"

export default function TrustedBy() {
  const companies = [
    "google-wordmark.svg",
    "sanity.svg",
    "algolia.svg",
    "stripe.svg",
    "vercel_wordmark.svg",
    "replit-wordmark-light.svg",
    "shopify-wordmark-light.svg",
    "clerk-light.svg"
  ];

  return (
    <section className="py-12 border-y border-slate-200">
      <div className="container px-4 md:px-6 mx-auto">
        <p className="text-center text-slate-600 mb-8">
          Trusted by more than <span className="font-semibold">150,000</span> of the world's leading organizations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="grayscale cursor-pointer opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src={`/trusted/${company}`} // this pulls from /public/companies/
                alt={company.split(".")[0]}
                width={120}
                height={40}
              />
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}
