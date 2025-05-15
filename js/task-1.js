function slugify(title){
    return title.toLowerCase().split(" ").join("-");
}
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
