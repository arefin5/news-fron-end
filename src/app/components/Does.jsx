
import Image from 'next/image';
const Does= ({ sub, title, items }) => {
  console.log(items)
  return (
    <div className="max-w-screen-xl mx-auto md:px-10 px-2 my-16">
      <h2 className="md:text-lg text-sm text-center font-semibold text-blue-700 mb-4">
        {sub}
      </h2>
      <h3 className="md:text-4xl text-xl md:max-w-screen-md leading-snug text-gray-700 mx-auto text-center font-bold mb-8">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4">
            


{item.image ?(
  <Image
                width={400}
                height={400}
                src={item.img.url}
                alt="nk"
    loading="lazy"
                className="mb-4 w-full max-h-52"
            />
             ): null}
            <h4 className="text-lg font-bold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.subtitle1}{item.subtitle2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Does;
