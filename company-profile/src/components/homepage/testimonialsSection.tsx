// Testimonials: This section should include testimonials from satisfied customers.
// Testimonials can help to build trust and credibility with potential customers.

export default function TestimonialsSection() {
  return (
    <div className="py-20">
      <div className="container mx-aut0">
        <div className="flex flex-col items-center mx-5 lg:mx-10">
          <h1 className="font-semibold text-2xl lg:text-4xl mb-5 text-slate-800">
            What Our Customers Are Saying
          </h1>

          <h2 className="mb-10 lg:mb-16 text-3xl lg:text-5xl text-center font-bold text-color1">
            Together We Grow: Hear From Those Who Thrive with Us
          </h2>

          <div className="lg:flex lg:flex-wrap lg:justify-evenly gap-10 mb-5 lg:mb-10">
            <div className="border max-w-[700px] p-3 rounded-xl shadow-lg text-left lg:w-1/2 mb-5">
              <p className="font-bold text-lg lg:text-xl mb-1">
                Chef Rina, Owner of Rina&apos;s Kitchen:
              </p>
              <blockquote className="lg:text-xl leading-relaxed">
                &quot;FarmLink&apos;s hydroponic lettuce has transformed the way
                we prepare salads at our restaurant. The quality is consistently
                fresh, and the flavor is unbea able. It&apos; great knowing
                we&apos;re serving our customers high-quality, locally grown
                produce.&quot;
              </blockquote>
            </div>

            <div className="border p-3 max-w-[700px] rounded-xl shadow-lg text-left lg:w-1/2">
              <h2 className="font-bold text-lg lg:text-xl mb-1">
                Andi, UMKM (Small Business) Owner:
              </h2>
              <blockquote className="lg:text-lg leading-relaxed">
                &quot;As a small business owner, sourcing fresh and organic
                ingredients can be a challenge. FarmLink Indonesia has been an
                incredible partner in providing fresh vegetables and organic
                brown rice. Their reliable service and quality products make my
                job so much easier.&quot;
              </blockquote>
            </div>
          </div>

          <div className="lg:flex lg:flex-wrap lg:justify-evenly gap-10 mb-5 lg:mb-10">
            <div className="border max-w-[700px] p-3 rounded-xl shadow-lg text-left lg:w-1/2 mb-5">
              <h2 className="font-bold text-lg lg:text-xl mb-1">
                Putri, Head Chef at Indramayu Café:
              </h2>
              <blockquote className="lg:text-xl leading-relaxed">
                &quot;We&apos;ve been using FarmLink&apos;s Gedong Gincu mangoes
                in our desserts, and they are simply the best. The sweetness and
                richness of the fruit have made our menu stand out. We&apos;re
                so glad to have FarmLink as a trusted supplier for our
                kitchen.&quot;
              </blockquote>
            </div>
            <div className="border p-3 max-w-[700px] rounded-xl shadow-lg text-left lg:w-1/2">
              <h2 className="font-bold text-lg lg:text-xl mb-1">
                Denny, Farmer Partner:
              </h2>
              <blockquote className="lg:text-xl leading-relaxed">
                &quot;Partnering with FarmLink has been a rewarding experience.
                Their commitment to sustainable practices and innovation in
                agriculture has not only improved the quality of my crops but
                also helped me expand my reach to more customers.&quot;
              </blockquote>
            </div>
          </div>

          <div className="border p-3 max-w-[700px] rounded-xl shadow-lg text-left lg:w-1/2">
            <h2 className="font-bold text-lg lg:text-xl mb-1">
              Hani, Customer:
            </h2>
            <blockquote className="lg:text-xl leading-relaxed">
              &quot;I&apos;ve been buying organic brown rice from FarmLink for
              months now. It&apos;s always fresh, and I love knowing that
              I&apos;m supporting a company that values sustainability. Highly
              recommend their products!&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
