module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will be hired by Walmart in California!", "You will be hired by Walmart in Texas!", "You will be hired by Walmart in New Jersey!", "You will be hired by Walmart as a Software Enginner!", "You will be hired by Walmart as a Cybersecurity Professional!"];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getTime: (req, res) => {

        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let timeNow = `Current time: ${hours}:${minutes}`;
      
        res.status(200).send(timeNow);
    },
    getLuckyNum: (req, res) => {

        let randomNum = Math.floor(Math.random() * 1000);
        let message = `Your lucky number is: ${randomNum}`;
      
        res.status(200).send(message);
    },

    getVideo: (req, res) => {
        const videos = ["jda_k6r9R1A", "YWwPR_JqWGE", "o-YBDTqX_ZU"];

        let randomIndex = Math.floor(Math.random() * videos.length);
        let randomVideo = videos[randomIndex];
        let URL = "https://www.youtube.com/embed/"
              
        res.status(200).send(URL + randomVideo);
    },

    postAge: (req, res) => {
        const { age } = req.body;
        console.log(req.body)
        console.log(age)

        if(age < 18){
            res.status(200).send("Try again later...");
        } else  if(age >= 18 && age < 21) {
            res.status(200).send("Unlikely but possible");
        } else  if(age >= 21 && age < 25) {
            res.status(200).send("You can but $$$");
        } else if(age >= 25 && age < 70) {
            res.status(200).send("Give us your money!");
        } else if (age > 70 && age <= 130) {
            res.status(200).send("Mmm, idk");
        } else if (age > 130) {
            res.status(200).send("Hello, alien");
        }
    },

    getWine: (req, res) => {
    const { meat } = req.query;
       console.log(meat)

       if(meat === "chicken"){
        res.status(200).send("White wine");
       } else {
        res.status(200).send("Red wine");
       }
    }
}