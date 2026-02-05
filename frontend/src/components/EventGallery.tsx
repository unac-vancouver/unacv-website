import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface EventGalleryProps {
    images: string[]
    eventTitle: string
}

export default function EventGallery({ images, eventTitle }: EventGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const openLightbox = (index: number) => {
        setSelectedImage(index)
    }

    const closeLightbox = () => {
        setSelectedImage(null)
    }

    const goToPrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
        }
    }

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length)
        }
    }

    if (!images || images.length === 0) return null

    return (
        <>
            {/* Gallery Grid */}
            <div className={`grid gap-4 ${
                images.length === 1 ? 'grid-cols-1' :
                images.length === 2 ? 'grid-cols-2' :
                images.length === 3 ? 'grid-cols-3' :
                'grid-cols-2 md:grid-cols-3'
            }`}>
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <img
                            src={image}
                            alt={`${eventTitle} - Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
                        aria-label="Close gallery"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    goToPrevious()
                                }}
                                className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-10 h-10" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    goToNext()
                                }}
                                className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-10 h-10" />
                            </button>
                        </>
                    )}

                    {/* Image */}
                    <div 
                        className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[selectedImage]}
                            alt={`${eventTitle} - Image ${selectedImage + 1}`}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    )
}
