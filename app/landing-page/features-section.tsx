import Feature from './feature';

const features = [
  {
    title: 'Effortless Integration',
    description: 'Integrate smoothly with your tools and services in no time.',
  },
  {
    title: 'Fully Customizable',
    description: 'Tailor Reactform to meet your specific requirements.',
    icon: 'icon-2',
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain insights and track feedback for data-driven decisions.',
  },
  {
    title: 'Top-notch Security',
    description: 'Your data is safe and secure with Reactform.',
  },
  {
    title: 'Highly Scalable',
    description: 'Expand your business effortlessly with Reactform as you grow.',
  },
  {
    title: 'Responsive Support',
    description: 'Get timely assistance from our dedicated support team whenever needed.',
  }
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 my-24 flex items-center flex-col">
      <h2 className="mb-6 text-2xl font-bold">Features</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;