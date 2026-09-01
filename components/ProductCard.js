'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return <>
        <article className="product-card">
            <button type="button" className="product-image-button" onClick={() => setIsOpen(true)} aria-label={`Open full image for ${product.name}`}>
                <div className="product-image">
                    <Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 100vw, 33vw" />
                </div>
            </button>
            <div className="product-details">
                <span className="overline">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.material}</p>
                <Link className="text-link" href={`/contact?subject=${encodeURIComponent(product.name)}`}>Enquire now <b>→</b></Link>
            </div>
        </article>

        {isOpen && <div className="product-lightbox" onClick={() => setIsOpen(false)} role="dialog" aria-modal="true" aria-label={`${product.name} full view`}>
            <div className="product-lightbox__inner" onClick={(event) => event.stopPropagation()}>
                <button type="button" className="product-lightbox__close" onClick={() => setIsOpen(false)} aria-label="Close image view">×</button>
                <div className="product-lightbox__frame">
                    <Image src={product.image} alt={product.name} fill sizes="90vw" style={{ objectFit: 'contain' }} />
                </div>
                <div className="product-lightbox__caption">
                    <span>{product.category}</span>
                    <strong>{product.name}</strong>
                </div>
            </div>
        </div>}
    </>;
}
