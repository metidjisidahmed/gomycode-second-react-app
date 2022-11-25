import {useEffect, useRef, useState} from "react";
import {observe} from "web-vitals/dist/modules/lib/observe";
import {eventWrapper} from "@testing-library/user-event/dist/utils";


export default function AdoptCatForm(message){

    const fullNameRef= useRef()
    const emailRef = useRef()
    const agreeTermsRef = useRef()
    const [ phoneNumber , setPhoneNumber]=useState("")
    const [ selectCatBreed , setSelectCatBreed ]=useState("Ragdoll")

    useEffect(function (){
        console.log("The new value of slected cat is ", selectCatBreed )

    },[selectCatBreed] )

    function fullNameInputValue() {
        // alert("I clicked the button !")
        console.log(fullNameRef)
        fullNameRef.current.style.backgroundColor = "red"

        // alert(`The current value of the fullName input is ${tellMeRef.current.value}`)
        alert("The current value of the fullName input is " + fullNameRef.current.value)
    }
    function onPhoneNumberChange(event){
        console.log("on Change is executed !")
        setPhoneNumber(event.target.value)
        console.log("the current value of the phine number input is ", event.target.value)
        if(event.target.value=="666"){
            alert("You enter the Devil number :o !")
        }

    }

    function onChangeCatBreed(event){
        console.log("I have selected ", event.target.value)
        setSelectCatBreed(event.target.value )

    }

    function  sendTheDataToTheBackend (){

        let objectToStoreInTheDataBase= {
            fullName : fullNameRef.current.value ,
            email : emailRef.current.value,
            // phoneNumber : phoneNumberRef.current.value,
            agreeTerms : agreeTermsRef.current.checked
        }


        console.log("I will send to the data base",objectToStoreInTheDataBase )

    }

    return(
        <section>
            <h3 id="buy_a_cat_title">Buy a Cat !</h3>
            <form action="https://www.google.com/" method="post">
                <label htmlFor="cat_owner_name">Your full name : </label>
                <input ref={fullNameRef} id="cat_owner_name" name="cat_owner_name" type="text" placeholder="Type your  name here"/>
                <br/>
                    <label htmlFor="cat_owner_email">Your Email : </label>
                    <input ref={emailRef}  id="cat_owner_email" name="cat_owner_email" type="email"
                           placeholder="Type your email  here"/>
                    <br/>
                        <label htmlFor="cat_owner_phone_number">Your Phone nummber : </label>
                        <input value={phoneNumber} onChange={onPhoneNumberChange}  id="cat_owner_phone_number" name="cat_owner_phone_number" type="tel"
                               placeholder="Type your phone number  here"/>
                        <br/>

                         {phoneNumber.length != 10 ? <div style={{color : "red"}} > the phone number must be exactly 10 numbers !</div> : null }

                            <br/>
                            <label htmlFor="select_breed">Cat Breed</label>
                            <select value={selectCatBreed}  onChange={onChangeCatBreed} name="select_breed" id="select_breed">
                                <option value="Siamese">Siamese</option>
                                <option value="Sphynx">Sphynx</option>
                                <option value="Persian">Persian</option>
                                <option value="Maine Coon">Maine Coon</option>
                                <option value="Ragdoll">Ragdoll</option>
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
                                        <input ref={agreeTermsRef} type="checkbox" id="agree_terms"/> <label
                                            htmlFor="agree_terms">I agree to the terms and
                                            conditions</label>
                                            <br/>
                                        <button type="submit">Submit</button>
            </form>
            <button onClick={fullNameInputValue}>Tell me what is the content of Full Name input</button>

            <button onClick={sendTheDataToTheBackend}>Send the data to the backend</button>
        </section>
    )
}
