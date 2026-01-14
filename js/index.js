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
        <button onclick="cardshow(${lesson.level_no})" class=" btn hover:border-[#422AD5] hover:bg-[#422AD5] hover:text-white">Lesson-${lesson.level_no}</button>
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
    .then((data) => showcardfunction(data.data))

    // console.log(id)
}
 function showcardfunction(cards){        

    cards.forEach(card => {
        // console.log(card)
        const cardSection = document.getElementById("card-section");
        const createcard = document.createElement('div');
        // console.log(createcard.length)
        createcard.classList.add("col-span-3", "flex" )
        createcard.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm py-5 px-3">
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
        // console.log(data)
            document.getElementById("clickBtn").showModal();
        const ClickBtnDetails = document.getElementById("clickBtnDetails");
        const ClickBtnDetailsDiv = document.createElement('div');
        ClickBtnDetailsDiv.innerHTML = 
        
        `
             <h2>${details.word} (${details.pronunciation}) </h2>
         `
        ClickBtnDetails.appendChild(ClickBtnDetailsDiv)
    }


    // console.log(data.id)
        // document.getElementById("clickBtn").showModal();
        // const ClickBtnDetails = document.getElementById("clickBtnDetails");
        // const ClickBtnDetailsDiv = document.createElement('div');
        // ClickBtnDetailsDiv.innerHTML = `
        //     <h2>${data.word} (${data.pronunciation}) </h2>
        // `

        // ClickBtnDetails.appendChild(ClickBtnDetailsDiv)
    
//    }
    

    // console.log("HI guys")


// iconButton()


lessonButton()
// id: 102<button class="btn hover:border-[#422AD5] hover:bg-[#422AD5] hover:text-white">Lesson-1</button>
// lessonName: "Everyday Words"
// level_no: 2

