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
        let seconds = now.getSeconds();
        let timeNow = `Current time: ${hours}:${minutes}:${seconds}`;
      
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

    getAge: (req, res) => {
        const videos = ["jda_k6r9R1A", "YWwPR_JqWGE", "o-YBDTqX_ZU"];

        let randomIndex = Math.floor(Math.random() * videos.length);
        let randomVideo = videos[randomIndex];
        let URL = "https://www.youtube.com/embed/"
              
        res.status(200).send(URL + randomVideo);
    },


}