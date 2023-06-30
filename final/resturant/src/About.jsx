import './About.css';
import AccordionSection from "./AccordionSection";
import pic from './images/cloris-ying-LuNsl-Slwec-unsplash.jpg';

function About() {
    return (
        <div className="about">
            <h2 className="main-title">About Us</h2>
            <img className="about-pic" src={pic} alt="A nice Chinese Styled restaurant with cozy environment"/>
            <div className="about-text">
                <p className="about-paragraph">
                    Yang's Kitchen is a Chinese restaurant that has been serving delicious and authentic Chinese cuisine
                    to
                    our customers for over a decade. Our restaurant is located in the heart of downtown and is known for
                    its
                    warm and welcoming atmosphere. We take pride in using only the freshest ingredients and traditional
                    recipes to create dishes that are not only tasty but also healthy.
                </p>
                <p className="about-paragraph">
                    At Yang's Kitchen, we believe that food brings people together, and we strive to create an
                    unforgettable
                    dining experience for our customers. Our restaurant is perfect for families and friends who want to
                    share a meal and create memories together. Our friendly staff is always happy to assist you with
                    your
                    order and make recommendations based on your preferences. Whether you're in the mood for a quick
                    lunch
                    or a leisurely dinner, Yang's Kitchen is the perfect place to satisfy your cravings for authentic
                    Chinese cuisine. Come visit us and discover why we are one of the best Chinese restaurants in town!
                </p>
            </div>
            <div className="accordions">
                <AccordionSection title="Open and Close">
                    <div>9:00 am - 9:00 pm</div>
                </AccordionSection>
                <AccordionSection title="Location">
                    <div>225 Terry Ave N, Seattle 98109</div>
                </AccordionSection>
                <AccordionSection title="Transportation">
                    <div>Free Parking: One block south.</div>
                    <div>Metered street parking available: Nearby.</div>
                </AccordionSection>
                <AccordionSection title="Dine In">
                    <div>We seat on a first come first serve basis with a virtual wait-list. You can join while you are en-route here.</div>
                </AccordionSection>
            </div>
        </div>
    );
}

export default About;