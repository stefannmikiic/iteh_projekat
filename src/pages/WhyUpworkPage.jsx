import React from 'react';
import ValueProp from '../components/common/ValueProp/ValueProp.jsx';
import TestimonialCard from '../components/Feed/TestimonialCard/TestimonialCard.jsx';
import CTABanner from '../components/common/CTABanner/CTABanner.jsx';
// Uvezite CSS za Layout, ako je potrebno, inače se oslonite na individualne fajlove

const WhyUpworkPage = () => {
    // Podaci za sekciju isticanja vrednosti
    const valuePropsData = [
        { 
            icon: "✅", 
            title: "Verifikovani Talenti", 
            description: "Pristupite globalnoj mreži proverenih profesionalaca. Kvalitet je zagarantovan." 
        },
        { 
            icon: "⏱️", 
            title: "Brzo Zaposlenje", 
            description: "Od objavljivanja posla do angažovanja prvog frilensera za manje od 24 sata." 
        },
        { 
            icon: "🔒", 
            title: "Sigurna Plaćanja", 
            description: "Koristite naš sistem escrow plaćanja. Plaćate tek kada ste zadovoljni radom." 
        },
        { 
            icon: "💰", 
            title: "Fleksibilni Budžet", 
            description: "Izaberite između fiksnih cena i satnice, prilagođavajući se potrebama projekta." 
        }
    ];

    // Podaci za sekciju svedočanstava
    const testimonialsData = [
        {
            quote: "Upwork je naš ključni izvor za skaliranje tima za AI i mašinsko učenje. Ne bismo mogli bez njih.",
            author: "A. Kovačević",
            title: "CTO, FutureAI",
            rating: 5,
        },
        {
            quote: "Pronašao sam svoj prvi veliki klijentski projekat ovde. Platforma je intuitivna i podrška je odlična.",
            author: "I. Milić",
            title: "Senior Full Stack Developer",
            rating: 4.5,
        }
    ];

    return (
        <div className="why-upwork-page">
            
            {/* 1. HERO SEKCIJA - Fokus na Vrednosti */}
            <section className="page-hero-section">
                <h1 className="page-main-title">Zašto Milioni Ljudi Vole Upwork</h1>
                <p className="page-intro-text">
                    Platforma koja spaja najbolje talente sa najboljim kompanijama. Vaš uspeh je naša misija.
                </p>
            </section>
            
            {/* 2. SEKCIJA ISTICANJA VREDNOSTI */}
            <section className="section-value-props">
                <h2 className="section-title">Ključne Prednosti Platforme</h2>
                <div className="prop-grid-container">
                    {valuePropsData.map((prop, index) => (
                        <ValueProp key={index} {...prop} />
                    ))}
                </div>
            </section>

            {/* 3. SEKCIJA SPREMNOSTI ZA RAD */}
            <section className="section-ready-to-work">
                <h2 className="section-title">Kako Funkcioniše?</h2>
                <p className="section-subtitle">
                    Postavite projekat, dobijte ponude, zaposlite, i platite tek kada je posao završen. Jednostavno.
                </p>
                {/* Ovde bi se dodala komponenta sa koracima (Step 1, Step 2, Step 3) */}
            </section>

            {/* 4. SEKCIJA SVEDOČANSTAVA */}
            <section className="section-testimonials" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
                <h2 className="section-title">Šta Kažu Naši Korisnici</h2>
                <div className="testimonial-slider-container">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </section>

            {/* 5. POZIV NA AKCIJU (CTA) */}
            <CTABanner 
                title="Vreme je da Vaš Projekat Oživi"
                subtitle="Pridružite se milionima koji koriste Upwork da pronađu ili ponude posao."
                btnText="Start Hiring Now"
                link="/signup"
            />

        </div>
    );
};

export default WhyUpworkPage;