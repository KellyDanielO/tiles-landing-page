import Carousel from 'react-bootstrap/Carousel';

interface Props {
    images: string[];
    text: string[];
}

const CarouselComponent: React.FC<Props> = ({ images, text }) => {
    return (
        <Carousel className='w-full h-[70vh]'>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index}`}
                    />
                    <Carousel.Caption className='text-foreground absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                        <h5 className='text-primary text-5xl'>{text[index]}</h5> 
                        <p className='text-primary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
