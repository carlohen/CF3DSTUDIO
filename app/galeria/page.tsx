import Image from "next/image";

const imagens = [
    "/galeria/image.jpg",
    "/galeria/image2.jpg",
    "/galeria/image3.jpg",
    "/galeria/image4.jpg",
    "/galeria/image5.jpg",
    "/galeria/image6.jpg",
    "/galeria/image7.jpg",
    "/galeria/image8.jpg",
    "/galeria/image9.jpg",
    "/galeria/image10.jpg",
    "/galeria/image11.jpg",
    "/galeria/image12.jpg",
    "/galeria/image13.jpg",
    "/galeria/image14.jpg",
    "/galeria/image15.jpg",
    "/galeria/image16.jpg",
    "/galeria/image17.jpg",
    "/galeria/image18.jpg",
    "/galeria/image19.jpg",


];

export default function Galeria() {
    return (
        <section className="min-h-screen px-6 py-32">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
                    Galeria
                </h1>

                <p className="text-muted-foreground text-center mb-16">
                    Conheça algumas de nossas impressões 3D e projetos desenvolvidos.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {imagens.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border hover:scale-105 transition"
                        >
                            <Image
                                src={img}
                                alt="Projeto CF3D"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
