import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-rotate.css';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgVideo from 'lightgallery/plugins/video';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';


export function Gallery() {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image 8.jpg',
        'image9.jpg',
        'image10.jpg',
        'image11.jpg',
    ];

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="App">
            <h1 className = "text-white text-6xl m-5 text-center font-serif font-bold  md:text-3xl sm:text-xl">Image Gallery</h1>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgShare, lgVideo, lgRotate]}
            >
                {images.map((image, index) => (
                    <a key={index} href={`Images/${image}`}>
                        <img alt={`Image${index + 1}`} src={`Images/${image}`} />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}

