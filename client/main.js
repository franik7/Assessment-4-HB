const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const timeBtn = document.querySelector("#timeButton")
const luckyNumber = document.querySelector("#luckyNum")
const randomVideo = document.querySelector("#randomVideo")
const ageForm = document.querySelector("#ageForm")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            console.log(res)
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getTime = () => {
    axios.get("http://localhost:4000/api/time/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getLuckyNum = () => {
    axios.get("http://localhost:4000/api/luckynum/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getVideo = () => {
    axios.get("http://localhost:4000/api/video/")
        .then(res => {
            const data = res.data;
          

            if(data == "https://www.youtube.com/embed/o-YBDTqX_ZU"){
                alert("Enjoy :)");
            }

            const video = document.querySelector("iframe");
            video.style.display = "block"; 
            video.src = data;

    });
};

const ageFormSubmit = (e) => {
    e.preventDefault();

    const ageValue = document.querySelector("#ageEntered").value;
    console.log(ageValue)

    axios.post("http://localhost:4000/api/age", {age: ageValue} )
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(err => console.log(err))
};


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
timeBtn.addEventListener('click', getTime)
luckyNumber.addEventListener('click', getLuckyNum)
randomVideo.addEventListener('click', getVideo)
ageForm.addEventListener('submit', ageFormSubmit)