import React from 'react';
import Testimonial1 from "../assets/testimonial-1.jpg"
import Testimonial2 from "../assets/testimonial-2.jpg"
import Testimonial from './ui/Testimonial';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <div className="row testimonials__row">
                    <h3 className="testimonials__subtitle">Reviewed by People</h3>
                    <h2 className="testimonials__title">Client's Testimonials</h2>
                    <p className="testimonials__para">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                    <div className="testimonials__list">
                    <Testimonial image={Testimonial1} name="Parry Hotter" location="New York" review="We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "/>
                    <Testimonial image={Testimonial2} name="Ron Rizzly" location="London" review="We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "/>
                        

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
