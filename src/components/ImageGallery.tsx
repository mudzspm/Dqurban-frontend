import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageGalleryProps {
  images: { original: string; thumbnail: string }[];
}

function Gallery({ images }: ImageGalleryProps) {
  return (
    <div className='bg-white p-4 rounded-[10px] shadow-lg border-[1px] border-[#B3B3B3]'>
      <ImageGallery
        showPlayButton={false}
        // showFullscreenButton={false}
        thumbnailPosition='right'
        showBullets
        items={images}
      />
    </div>
  );
}

export default Gallery;
