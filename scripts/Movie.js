class Movie{

    constructor(name, genre, releaseDate, director){
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.director = director;
        this.rating = 0;
    }

    printInfo(){
        console.log("Movie name: " + this.name +
        ", Genre: " + this.genre +
        ", Release date: " + this.releaseDate + 
        ", Director: " + this.director + 
        ", Rating: " + this.rating);
    }

    getInfo(){
        return("Movie name: " + this.name +
        ", Genre: " + this.genre +
        ", Release date: " + this.releaseDate + 
        ", Director: " + this.director +
        ", Rating: " + this.rating);
    }

    setRating(rating) {
        this.rating = rating;
      }
    }



