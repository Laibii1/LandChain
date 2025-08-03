import '../font.css';
import quotationIcon from '../../assets/quotation.png';

export const QuoteSection = () => {
 
  return (
    <section className="text-black body-font border-t border-gray-200">
        <div className="container px-5 py-20 mx-auto font-ReemKufi">
          <div className="xl:w-1/2 lg:w-5/6 w-full mx-auto text-center">
            <img
              alt="Quotation Mark"
              className="inline-block object-cover object-center h-15 w-15"
              src={quotationIcon}
              />
            <p className="leading-relaxed text-lg mt-5">
              Whereas most technologies tend to automate workers on the
              periphery doing menial tasks, blockchains automate away the
              center. Instead of putting the taxi driver out of a job,
              blockchain puts Uber out of a job and lets the taxi drivers work
              with the customer directly
            </p>
            <span className="inline-block h-[3px] w-40 rounded bg-[#D0482E] mt-8 mb-6"></span>
            <h2 className="text-black  tracking-wider font-bold font-ReekKufi text-md">
              Vitalik Buterin
            </h2>
            <p className="text-black font-ReemKufi">
              Co-founder Ethereum and Bitcoin Magazine
            </p>
          </div>
        </div>
      </section>
  
)}