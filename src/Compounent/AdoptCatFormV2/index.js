import {useEffect, useRef, useState} from "react";
import {observe} from "web-vitals/dist/modules/lib/observe";
import {eventWrapper} from "@testing-library/user-event/dist/utils";


export default function AdoptCatFormV2(message){

    const [ adoptCatForm , setAdoptCatForm]=useState({})

    function onChangeAdoptCatFormInput(event){
        console.log("Event name =", event.target.name)
        console.log("Event value =", event.target.value)

        let oldValuesAdoptCatForm={...adoptCatForm}

        oldValuesAdoptCatForm[event.target.name]= event.target.value

        setAdoptCatForm(oldValuesAdoptCatForm)

        // setAdoptCatForm(function(oldState){
        //     return {...oldState , [event.target.name] : event.target.value}
        // })

    }







    function  sendTheDataToTheBackend (){




    }



    return(
        <section>
            <h3 id="buy_a_cat_title">Buy a Cat !</h3>
            <form action="https://www.google.com/" method="post">
                <label htmlFor="cat_owner_name">Your full name : </label>
                <input onChange={onChangeAdoptCatFormInput} id="cat_owner_name" name="cat_owner_name" type="text" placeholder="Type your  name here"/>
                <br/>
                    <label htmlFor="cat_owner_email">Your Email : </label>
                    <input onChange={onChangeAdoptCatFormInput}   id="cat_owner_email" name="cat_owner_email" type="email"
                           placeholder="Type your email  here"/>
                    <br/>
                        <label htmlFor="cat_owner_phone_number">Your Phone nummber : </label>
                        <input  onChange={onChangeAdoptCatFormInput}   id="cat_owner_phone_number" name="cat_owner_phone_number" type="tel"
                               placeholder="Type your phone number  here"/>
                        <br/>

                         {/*{phoneNumber.length != 10 ? <div style={{color : "red"}} > the phone number must be exactly 10 numbers !</div> : null }*/}

                            <br/>
                            <label htmlFor="select_breed">Cat Breed</label>
                            <select onChange={onChangeAdoptCatFormInput}  name="select_breed" id="select_breed">
                                <option value="Siamese">Siamese</option>
                                <option value="Sphynx">Sphynx</option>
                                <option value="Persian">Persian</option>
                                <option value="Maine Coon">Maine Coon</option>
                                <option value="Ragdoll">Ragdoll</option>
                            </select>
                            <br/>
                            <label htmlFor="cat_name">Give your cat a Name : </label>
                            <input onChange={onChangeAdoptCatFormInput}  id="cat_name" name="cat_name" type="text" placeholder="Type your cat name here"/>
                            <br/>
                                <label htmlFor="why_buy_cat">Tell us why you would buy a cat !</label>
                                <textarea onChange={onChangeAdoptCatFormInput}  id="why_buy_cat" name="why_buy_cat" cols="30" rows="3"/>
                                <br/>
                                    <label className="prices" htmlFor="pick_date">Pick a date to get your cat
                                        : </label>
                                    <input id="pick_date" name="cat_name" type="date"
                                           placeholder="Type your cat name here"/>
                                    <br/>
                                <p style={{backgroundColor: "greenyellow"}}>Ah sorry ! I forget to teel you to
                                    specify the Cat gender you want :</p>
                                <input onChange={onChangeAdoptCatFormInput}  type="radio" id="male" name="cat_gender" value="Male"/>
                                    <label htmlFor="male">Male</label><br/>
                                    <input onChange={onChangeAdoptCatFormInput}  type="radio" id="female" name="cat_gender" value="female"/>
                                        <label htmlFor="female">Female</label><br/>
                                        <hr/>
                                        <input onChange={onChangeAdoptCatFormInput}  type="checkbox" id="agree_terms"/> <label
                                            htmlFor="agree_terms">I agree to the terms and
                                            conditions</label>
                                            <br/>
            </form>

            <button onClick={sendTheDataToTheBackend}>Send the data to the backend</button>
        </section>
    )
}
