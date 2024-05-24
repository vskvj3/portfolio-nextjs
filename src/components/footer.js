import Image from 'next/image'
import underConstruction from '../../public/images/under_construction.gif'

export default function Footer({home}) {
  return (
    <footer className="bg-black w-1/2 min-w-[370px] max-w-[700px] mx-auto mb-2 lg:mb-5 mt-5 rounded-md text-center text-white py-2">
    <Image
      className='mx-auto'
      src={underConstruction}
      alt="under construction"
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </footer>
  );
}
