const Contact = () =>{
    return(
        <div className="content" style={{width:"100%"}}>
        <div className="contact-main">
        <h1 className="text4">Contact Me,</h1>
        
        <section className="contact">
        <p>Have questions? I'm here to help! Fill out the form below and i will get back to you as soon as possible.</p>    
        <form>
        <div className="mb-3">
        <input type="text" className="form-control custom-input" id="input1" placeholder="Enter Your Name" />
        </div>
        <div className="mb-3">
        <input type="text" className="form-control custom-input" id="input2" placeholder="Enter Your Email" />
        </div>
        <div className="mb-3">
        <input type="text" className="form-control custom-input" id="input2" placeholder="Enter Your Mobile Number" />
        </div>
        <div className="mb-3">
        <input type="text" className="form-control custom-input" id="input3" placeholder="Enter Your Subject" />
        </div>
        <div className="mb-3">
        <textarea className="form-control custom-textarea" id="textarea" rows="5" placeholder="Enter Your Message"></textarea>
        </div>
        <button type="submit" className="btn custom-submit">Submit</button>
        </form>
        </section>
        </div>


        <div className="contact-main">
        <section className="contact">
        <h1 className="text4">Get in Touch,</h1>    
        <p><span style={{ color: "white" }}>Email ID - </span>imyusufakhtar@gmail.com<br/>
        {/* <span style={{ color: "white" }}>Permanent Address - </span>siwan, bihar, india<br/>
        <span style={{ color: "white" }}>Current Address - </span>chandigarh, india<br/> */}
        <br/>

        <a href="https://github.com/imyusufakhtar" className="btn btn-primary customBut" target="blank">Github</a>
        <a href="https://www.linkedin.com/in/imdyusuf/" className="btn btn-primary customBut" target="blank">Linkedin</a>
        <a href="https://www.instagram.com/imyusufakhtar/" className="btn btn-primary customBut" target="blank">Instagram</a>
        
        </p>
        </section>
        </div>
        </div>
    );
}

export default Contact;