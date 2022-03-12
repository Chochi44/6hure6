function astro(){
    let day=document.getElementById("day").value
    let month=document.getElementById("month").value
    let zodii=document.getElementById("zodii")
    console.log(day)
    console.log(month)
    day=parseInt(day)

    let astro_sign="";



            if(!day){return}

            if (month == "декември"){

                if (day < 22)
                astro_sign = "Стрелец";
                else
                astro_sign ="Козирог";
            }

            else if (month == "януари"){
                if (day < 20)
                astro_sign = "Козирог";
                else
                astro_sign = "Водолей";
            }

            else if (month == "февруари"){
                if (day < 19)
                astro_sign = "Водолей";
                else
                astro_sign = "Риба";
            }

            else if(month == "март"){
                if (day < 21)
                astro_sign = "Риба";
                else
                astro_sign = "Овен";
            }
            else if (month == "април"){
                if (day < 20)
                astro_sign = "Овен";
                else
                astro_sign = "Телец";
            }

            else if (month == "май"){
                if (day < 21)
                astro_sign = "Телец";
                else
                astro_sign = "Близнаци";
            }

            else if( month == "юни"){
                if (day < 21)
                astro_sign = "Близнаци";
                else
                astro_sign = "Рак";
            }

            else if (month == "юли"){
                if (day < 23)
                astro_sign = "Рак";
                else
                astro_sign = "Лъв";
            }

            else if( month == "август"){
                if (day < 23)
                astro_sign = "Лъв";
                else
                astro_sign = "Дева";
            }

            else if (month == "септември"){
                if (day < 23)
                astro_sign = "Дева";
                else
                astro_sign = "Везна";
            }

            else if (month == "октомври"){
                if (day < 23)
                astro_sign = "Везна";
                else
                astro_sign = "Скорпион";
            }

            else if (month == "ноември"){
                if (day < 22)
                astro_sign = "Скорпион";
                else
                astro_sign = "Стрелец";
            }
            /*let astro_signH1Tag = document.createElement('h1')
            astro_signH1Tag.innerText = `Твоя зодиакален знак е:${astro_sign}`
            astro_signH1Tag.setAttribute('id','zodii')
                
            document.body.appendChild(astro_signH1Tag)*/
            zodii.innerText = `Твоят зодиакален знак е:${astro_sign}`

    }