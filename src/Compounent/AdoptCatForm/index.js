export default function AdoptCatForm(){

    function fullNameInputValue() {
        alert("I clicked the button !")
    }


    return(
        <section>
            <h3 id="buy_a_cat_title">Buy a Cat !</h3>
            <form action="https://www.google.com/" method="post">
                <label htmlFor="cat_owner_name">Your full name : </label>
                <input id="cat_owner_name" name="cat_owner_name" type="text" placeholder="Type your  name here"/>
                <br/>
                    <label htmlFor="cat_owner_email">Your Email : </label>
                    <input id="cat_owner_email" name="cat_owner_email" type="email"
                           placeholder="Type your email  here"/>
                    <br/>
                        <label htmlFor="cat_owner_phone_number">Your Phone nummber : </label>
                        <input id="cat_owner_phone_number" name="cat_owner_phone_number" type="tel"
                               placeholder="Type your phone number  here"/>
                        <br/>
                            <label htmlFor="select_breed">Cat Breed</label>
                            <select name="select_breed" id="select_breed">
                                <option value="WebTrack">Siamese</option>
                                <option value="WebTrack">Sphynx</option>
                                <option value="AITrack">Persian</option>
                                <option value="GameTrack">Maine Coon</option>
                                <option value="DataScienceTrack">Ragdoll</option>
                            </select>
                            <br/>
                            <label htmlFor="cat_name">Give your cat a Name : </label>
                            <input id="cat_name" name="cat_name" type="text" placeholder="Type your cat name here"/>
                            <br/>
                                <label htmlFor="why_buy_cat">Tell us why you would buy a cat !</label>
                                <textarea id="why_buy_cat" name="why_buy_cat" cols="30" rows="3"/>
                                <br/>
                                    <label className="prices" htmlFor="pick_date">Pick a date to get your cat
                                        : </label>
                                    <input id="pick_date" name="cat_name" type="date"
                                           placeholder="Type your cat name here"/>
                                    <br/>
                                <p style={{backgroundColor: "greenyellow"}}>Ah sorry ! I forget to teel you to
                                    specify the Cat gender you want :</p>
                                <input type="radio" id="male" name="cat_gender" value="Male"/>
                                    <label htmlFor="male">Male</label><br/>
                                    <input type="radio" id="female" name="cat_gender" value="female"/>
                                        <label htmlFor="female">Female</label><br/>
                                        <hr/>
                                        <input type="checkbox" id="agree_terms"/> <label
                                            htmlFor="agree_terms">I agree to the terms and
                                            conditions</label>
                                            <br/>
                                        <button type="submit">Submit</button>
            </form>
            <button onClick={fullNameInputValue}>Tell me what is the content of Full Name input</button>
        </section>
    )
}
