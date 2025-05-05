import './Section.css'

const Section = ({ children, title }) => (
    <section className="section">
        <div className="container">
            {title && <h2>{title}</h2>}
            {children}
        </div>
    </section>
)

export default Section;