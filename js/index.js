function startBtn(){
    const inputBtn = document.getElementById("inputBtn").value;
    console.log("Fack you")
   
    if(Number(inputBtn) === 12345){
        const headerHidden = document.getElementsByClassName("headerHidden").value[0];
        headerHidden.classList.remove("hidden")
        inputBtn.value= ""
    }
    else{
        alert("Try again")
                inputBtn.value = ""

    }
}



function removebutton() {
    const activeBtns = document.getElementsByClassName("active");

    while (activeBtns.length > 0) {
        activeBtns[0].classList.remove("active");
    }
}


// 1st API
// id: 101
// lessonName : "Basic Vocabulary"
// level_no: 1



function lessonButton (){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => LessonDefined(data.data))
}

function LessonDefined (data){
    // console.log(data)
    data.forEach(lesson => {

        const LessonBtnId = document.getElementById('Lesson-btn-id');
        // console.log(lesson)
        const createButton = document.createElement('div');
        // console.log(lesson)
        createButton.innerHTML= `
        <button id="Lesson-${lesson.level_no}" onclick="cardshow(${lesson.level_no})" class=" btn hover:border-[#422AD5] hover:bg-[#422AD5] hover:text-white">Lesson-${lesson.level_no}</button>
        `
        LessonBtnId.appendChild(createButton);


    });
}



// 2 nd API
// id: 4
// level: 5
// meaning: "পরিশ্রমী"
// pronunciation: "ডিলিজেন্ট"
// word: "Diligent"


function cardshow(id){
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res) => (res.json()))
    .then((data) =>{
        removebutton ()
        const activeBtn = document.getElementById(`Lesson-${id}`);
        activeBtn.classList.add("active");

        
        showcardfunction(data.data)
})
    }
        
        

    // console.log(id)
 function showcardfunction(cards){        
    const cardSection = document.getElementById("card-section");
    cardSection.innerHTML= "";

    if(cards.length === 0){
        cardSection.innerHTML = `
        <div id="showalart" class="col-span-12 w-full mx-auto py-20 mb-10">
                    <img class="w-[120px] mx-auto" src="image/alert-error.png" alt="" srcset="">
                    <p>আপনি এখনো কোন Lesson Select করেন নি</p>
                    <h1 class="text-4xl font-medium">একটি Lesson Select করুন।</h1>
             
            </div>
        `
    }

    cards.forEach(card => {


              const createcard = document.createElement('div');
        // console.log(createcard.length)
        createcard.classList.add("col-span-3", "flex" )
        createcard.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm gap-5 justify-between text-center  py-10 px-3 bg-gray-50 ">
                <div class = "space-y-3">
                    <h1 class= "font-bold text-2xl">${card.word}</h1>
                    <p class = "text-xl">meaning/pronunciation</p>
                    <p class = "text-xl">${card.meaning}/${card.pronunciation} </p>

                     <div class ="flex justify-between">

                     <button class="btn btn-sm">
                          
                        <i class="fa-solid fa-circle-info" onclick = " iconButton(${card.id}) " ></i>
                     </button>
                     <button class="btn btn-sm">
                        <i class="fa-solid fa-volume-high text-black"></i>
                     </button>
                    
                  
                </div>

                </div>
               
                
                    
            </div>
        `
        cardSection.appendChild(createcard)
        })
    }




// data: 
// id: 5
// level: 1
// meaning: "আগ্রহী"
// partsOfSpeech: "adjective"
// points: 1
// pronunciation: "ইগার"
// sentence: "The kids were eager to open their gifts."
// synonyms: 
// Array(3)
// 0: "enthusiastic"

// 1: "excited"

// 2: "keen"

// length: 3
// [[Prototype]]: 
// Array(0)
// word: "Eager"
// [[Prototype]]: 
// Object
// message: "successfully fetched a word details"


function iconButton(id){
    const url = 
            `
               https://openapi.programming-hero.com/api/word/${id}    
            `
        fetch(url)
        .then(res => res.json())
        .then (data => showIconDetails(data.data))
}

function showIconDetails(details){
    // console.log(details)
        console.log(details.synonyms)
            document.getElementById("clickBtn").showModal();
        const ClickBtnDetails = document.getElementById("clickBtnDetails");
        ClickBtnDetails.innerHTML = "";
        const ClickBtnDetailsDiv = document.createElement('div');

         let synonymButtons = "";
        details.synonyms.forEach(word => {
        synonymButtons += `<button class="btn btn-sm m-1">${word}</button>`;
        });



        ClickBtnDetailsDiv.innerHTML = 
        
        `<div class = "text-start space-y-5">
             <h2 class = "font-bold text-2xl">${details.word} (${details.pronunciation}) </h2>
             <div class = "space-y-2">
                    <p class = "font-bold">meaning</p>
                    <p class = "font-semibold">${details.meaning}</p>
             </div>
             
             <div class = "space-y-2">
                <h2 class = "font-bold">Example</h2>
                <p>${details.sentence}
             </div>
             <div class = "space-y-2">
                <h3 class = "font-bold"> সমার্থক শব্দ গুলো</h3>
                <div>${synonymButtons} </div>
             </div>
         </div>
         `
        ClickBtnDetails.appendChild(ClickBtnDetailsDiv)
    }


lessonButton()
// id: 102<button class="btn hover:border-[#422AD5] hover:bg-[#422AD5] hover:text-white">Lesson-1</button>
// lessonName: "Everyday Words"
// level_no: 2

