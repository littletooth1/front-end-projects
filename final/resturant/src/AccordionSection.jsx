import {useState} from "react";
import './AccordionSection.css';

function AccordionSection({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion-section">
            <button className="accordion-button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                {title}
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <div className="accordion-content"> {children} </div>}
        </div>
    );
}

export default AccordionSection;