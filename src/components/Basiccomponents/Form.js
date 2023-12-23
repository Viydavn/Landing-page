const Form = () =>{
    return(
        <form>
            <div className = "form-container">
              <input type = "text" placeholder="Your Name"></input>
                <input type = "text" placeholder="Company/Bussiness Name"></input>
                <input type = "number" placeholder="Phone Number"></input>
                <input type = "email" placeholder="Email Adddress"></input>
                <select>
                    <option> Choose A Services</option>
                    <option> Wesite Designing & Development</option>
                    <option> Online Store/eCommerce Development</option>
                    <option> Digital Marketing</option>
                    <option> Others</option>
                </select>
                <button>Get Started </button>
                
            </div>
        </form>

    )
}

export default Form;