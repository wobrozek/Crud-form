import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

const languages:any={
    polish:{
        name:'polish',
        main:'Strona główna',
        view:'Podgląd',
        formName:'Imię',
        formAge:'Wiek',
        formBirthday:'Data urodzenia',
        formAbout:'Życiorys',
        formAction:'Akcje',
        send:'Wyślij',
        errorPage:'Error 404: zły adres URL',
        emptyPage:'Dodaj dane do formularza by pojawiły się tutaj',
        formErrors:{
            "type":"Zły typ danych",
            "required":"To pole jest wymagane",
            "ageNegative":"Wiek nie moze być liczbą ujemną",
            "ageLarge":"Podany wiek jest zbyt duży",
            "aboutMax":"maksymalna ilosc znakow to 250",
            "dateFuture":"rok urodzenia musi być datą z przeszłości",
            "dateToOld":"podana data urodzenia jest zbyt odległa",
        },
        deleteButton:"Usuń",
        deleteChecked:"Usuń zaznaczone",
        editButton:"Edytuj",

        languages:{'polish':['Polski',0],'english':['Angielski',1]}
    },
    english:{
        name:'english',
        main:'MainPage',
        view:'View Page',
        formName:'Name',
        formAge:'Age',
        formBirthday:'birth Date',
        formAbout:'About you',
        formAction:'Action',
        send:'Send',
        errorPage:'Error 404: wrong URL',
        emptyPage:'Submit form to fill this page',
        formErrors:{
            "type":"Wrong data type",
            "required":"This field is required",
            "ageNegative":"Age must be positive number",
            "ageLarge":"Your age is above allowed max age ",
            "aboutMax":"Max limit of characters is 250",
            "dateFuture":"Birthday can't be a date in the future",
            "dateToOld":"Your birthday is above allowed max age",
        },
        deleteButton:"Delete",
        deleteChecked:"Delete checked",
        editButton:"Edit",
        
        languages:{'polish':['Polish',0],'english':['English',1]}
    }
}

const initialState = {
    text: languages.polish,
  }


const languagesSlice = createSlice({
    name:"language",
    initialState:initialState,
    reducers:{
        change: (state,langue:PayloadAction<string>)=>{
                try{
                    state.text=languages[langue.payload] 
                }
                catch{
                    throw new Error("langue doesn't exist");
                }
            },
        },
});

export const {change}= languagesSlice.actions

export default languagesSlice.reducer