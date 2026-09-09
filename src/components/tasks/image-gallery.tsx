export function ImageGallery() {
  const images = [
    { id: 1, src: 'https://picsum.photos/seed/arch1/400/400', alt: 'Архитектурный узел 1' },
    { id: 2, src: 'https://picsum.photos/seed/arch2/400/400', alt: 'Архитектурный узел 2' },
    { id: 3, src: 'https://picsum.photos/seed/arch3/400/400', alt: 'Архитектурный узел 3' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-md">
      {images.map((img) => (
        <div key={img.id} className="aspect-square rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}
