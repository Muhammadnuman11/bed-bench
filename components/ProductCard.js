import Image from 'next/image'; import Link from 'next/link';
export default function ProductCard({ product }) {
    return <article className="product-card">
        <div className="product-image">
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 100vw, 33vw" />
        </div>
        <div className="product-details">
            <span className="overline">{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.material}</p>
            <Link className="text-link" href={`/contact?subject=${encodeURIComponent(product.name)}`}>Enquire now <b>→</b></Link>
        </div>
    </article>;
}
